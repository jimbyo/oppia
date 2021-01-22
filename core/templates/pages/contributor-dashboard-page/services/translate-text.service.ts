// Copyright 2019 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview A service for handling contribution opportunities in different
 * fields.
 */

export class TranslateTextContainer {
  stateName: string;
  contentID: string;
  contentText: any;
  constructor(stateName: string, contentID: string, contentText: any) {
    this.stateName = stateName;
    this.contentID = contentID;
    this.contentText = contentText;
  }
}

angular.module('oppia').factory('TranslateTextService', [
  '$http', function($http) {
    var stateWiseContents = null;
    var stateWiseContentIds = {};
    var translateTextContainers = [];
    var stateNamesList = [];
    var activeExpId = null;
    var activeExpVersion = null;
    var activeIndex = 0;

    const getNextText = function() {
      const contentText = translateTextContainers[activeIndex].contentText;
      return contentText;
    };

    const isMoreTextAvailableForTranslation = function() {
      if (translateTextContainers.length === 0) {
        return false;
      }
      return (activeIndex + 1 < translateTextContainers.length);
    };

    return {
      init: function(expId, languageCode, successCallback) {
        stateWiseContents = null;
        stateWiseContentIds = {};
        stateNamesList = [];
        activeExpId = expId;
        activeExpVersion = null;

        $http.get('/gettranslatabletexthandler', {
          params: {
            exp_id: expId,
            language_code: languageCode
          }
        }).then(function(response) {
          stateWiseContents = response.data.state_names_to_content_id_mapping;
          activeExpVersion = response.data.version;
          for (const stateName in stateWiseContents) {
            let stateHasText = false;
            const contentIds = [];
            for (const [contentId, text] of Object.entries(
              stateWiseContents[stateName])) {
              if (text !== '') {
                contentIds.push(contentId);
                translateTextContainers.push(
                  new TranslateTextContainer(stateName, contentId, text));
                stateHasText = true;
              }
            }
            // If none of the state's texts are non-empty, then don't consider
            // the state for processing.
            if (stateHasText) {
              stateNamesList.push(stateName);
              stateWiseContentIds[stateName] = contentIds;
            }
          }
          successCallback();
        });
      },
      getTextToTranslate: function() {
        return {
          text: getNextText(),
          more: isMoreTextAvailableForTranslation()
        };
      },
      suggestTranslatedText: function(
          translationHtml, languageCode, imagesData, successCallback) {
        const url = '/suggestionhandler/';
        const postData = {
          suggestion_type: 'translate_content',
          target_type: 'exploration',
          description: 'Adds translation',
          target_id: activeExpId,
          target_version_at_submission: activeExpVersion,
          change: {
            cmd: 'add_translation',
            content_id: translateTextContainers[activeIndex].contentID,
            state_name: translateTextContainers[activeIndex].stateName,
            language_code: languageCode,
            content_html: translateTextContainers[activeIndex].contentText,
            translation_html: translationHtml
          }
        };
        activeIndex += 1;
        let body = new FormData();
        body.append('payload', JSON.stringify(postData));
        let filenames = imagesData.map(obj => obj.filename);
        let imageBlobs = imagesData.map(obj => obj.imageBlob);
        for (let idx in imageBlobs) {
          body.append(filenames[idx], imageBlobs[idx]);
        }
        $http.post(url, body, {
          // The actual header to be added is 'multipart/form-data', But
          // adding it manually won't work because we will miss the boundary
          // parameter. When we keep 'Content-Type' as undefined the browser
          // automatically fills the boundary parameter according to the form
          // data. Refer https://stackoverflow.com/questions/37039852/. and
          // https://stackoverflow.com/questions/34983071/.
          // Note: This should be removed and a convetion similar to
          // SkillCreationBackendApiService should be followed once this service
          // is migrated to Angular 8.
          headers: {
            'Content-Type': undefined
          }
        }).then(successCallback);
      }
    };
  }]);
