// Copyright 2020 The Oppia Authors. All Rights Reserved.
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
 * @fileoverview Unit tests for the keyboard shortcut service.
 */
import 'mousetrap';

import { KeyboardShortcutService } from 'services/keyboard-shortcut.service';
import { WindowRef } from 'services/contextual/window-ref.service';

describe('Keyboard Shortcuts', () => {
  var skipButton = document.createElement('button');
  var nextButton = document.createElement('button');
  var continueButton = document.createElement('button');
  var backButton = document.createElement('button');
  var searchBar = document.createElement('input');
  var categoryBar = document.createElement('select');

  const windowRef = new WindowRef();
  const keyboardShortcutService = new KeyboardShortcutService(windowRef);

  beforeAll(() => {
    skipButton.setAttribute('id', 'skipToMainContentId');
    backButton.setAttribute('id', 'backButtonId');
    nextButton.setAttribute('class', 'oppia-next-button');
    continueButton.setAttribute('class', 'oppia-learner-confirm-button');
    searchBar.setAttribute('class', 'oppia-search-bar-text-input');
    categoryBar.setAttribute('class', 'oppia-category-bar-dropdown-toggle');
    document.body.append(skipButton);
    document.body.append(continueButton);
    document.body.append(backButton);
    document.body.append(searchBar);
    document.body.append(categoryBar);

    spyOnProperty(windowRef, 'nativeWindow').and.returnValue({
      location: {
        href: ''
      }
    });
  });


  it('should navigate to the corresponding page' +
    ' when the navigation key is pressed', () => {
    keyboardShortcutService.bindNavigationShortcuts();
    Mousetrap.trigger('ctrl+0');
    Mousetrap.trigger('ctrl+1');
    Mousetrap.trigger('ctrl+2');
    Mousetrap.trigger('ctrl+3');
    Mousetrap.trigger('ctrl+4');
    Mousetrap.trigger('ctrl+5');
    Mousetrap.trigger('ctrl+6');
  });

  it('should move the focus to the corresponding element' +
    ' when the action key is pressed', () => {
    keyboardShortcutService.bindLibraryPageShortcuts();

    Mousetrap.trigger('s');
    expect(skipButton.isEqualNode(document.activeElement));

    Mousetrap.trigger('/');
    expect(searchBar.isEqualNode(document.activeElement));

    Mousetrap.trigger('c');
    expect(categoryBar.isEqualNode(document.activeElement));

    keyboardShortcutService.bindExplorationPlayerShortcuts();

    Mousetrap.trigger('s');
    expect(skipButton.isEqualNode(document.activeElement));

    Mousetrap.trigger('k');
    expect(backButton.isEqualNode(document.activeElement));

    Mousetrap.trigger('j');
    expect(continueButton.isEqualNode(document.activeElement));

    document.body.append(nextButton);
    Mousetrap.trigger('j');
    expect(nextButton.isEqualNode(document.activeElement));
  });
});
