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
 * @fileoverview Puppeteer script to collects dynamic urls for lighthouse tests.
 */

const process = require('process');
const puppeteer = require('puppeteer');

const ADMIN_URL = 'http://127.0.0.1:8181/admin';
const CREATOR_DASHBOARD_URL = 'http://127.0.0.1:8181/creator-dashboard';
const TOPIC_AND_SKILLS_DASHBOARD_URL = 'http://127.0.0.1:8181/topics-and-skills-dashboard';
// Read more about networkidle0
// https://github.com/puppeteer/puppeteer/blob/main/docs/api.md#pagegotourl-options
const networkIdle = 'networkidle0';

var explorationEditorUrl = 'Exploration editor not loaded';
var collectionEditorUrl = 'Collection editor not loaded';
var topicEditorUrl = 'Topic editor not loaded';
var skillEditorUrl = 'Skill editor not loaded';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var unusedStoryEditorURL = 'Story editor not loaded';

var usernameInput = '.protractor-test-username-input';
var agreeToTermsCheckBox = '.protractor-test-agree-to-terms-checkbox';
var registerUser = '.protractor-test-register-user';
var navbarToggle = '.oppia-navbar-dropdown-toggle';

var createButtonSelector = '.protractor-test-create-activity';
var dismissCreateModalSelector = '.protractor-test-dismiss-welcome-modal';

var createCollectionButtonSelector = '.protractor-test-create-collection';
var addExplorationInput = '.protractor-test-add-exploration-input';

var createTopicButtonSelector = '.protractor-test-create-topic-button';
var topicNameField = '.protractor-test-new-topic-name-field';
var topicUrlFragmentField = '.protractor-test-new-topic-url-fragment-field';
var topicDescriptionField = '.protractor-test-new-topic-description-field';
var topicThumbnailButton = '.protractor-test-photo-button';
var topicUploadButton = '.protractor-test-photo-upload-input';
var topicPhotoSubmit = '.protractor-test-photo-upload-submit';
var thumbnailContainer = '.protractor-test-thumbnail-container';
var confirmTopicCreationButton =
  '.protractor-test-confirm-topic-creation-button';
var createdTopicLink = '.protractor-test-topic-name';

var createStoryButtonSelector = '.protractor-test-create-story-button';
var storyNameField = '.protractor-test-new-story-title-field';
var storyUrlFragmentField = '.protractor-test-new-story-url-fragment-field';
var storyDescriptionField = '.protractor-test-new-story-description-field';
var storyThumbnailButton = '.protractor-test-photo-button';
var storyUploadButton = '.protractor-test-photo-upload-input';
var storyPhotoSubmit = '.protractor-test-photo-upload-submit';
var thumbnailContainer = '.protractor-test-thumbnail-container';
var confirmStoryCreationButton =
  '.protractor-test-confirm-story-creation-button';

var createSkillButtonSelector = '.puppeteer-test-add-skill-button';
var skillDescriptionField = '.protractor-test-new-skill-description-field';
var skillOpenConceptCard = '.protractor-test-open-concept-card';
var confirmSkillCreationButton =
  '.protractor-test-confirm-skill-creation-button';
var skillReviewMaterialInput = '.oppia-rte';

var updateFormName = '.protractor-update-form-name';
var updateFormSubmit = '.protractor-update-form-submit';
var roleSelect = '.protractor-update-form-role-select';
var statusMessage = '.protractor-test-status-message';

const login = async function(browser, page) {
  try {
    // eslint-disable-next-line dot-notation
    await page.goto(
      ADMIN_URL, { waitUntil: networkIdle});
    await page.waitForSelector('#admin', {visible: true});
    await page.click('#admin');
    await page.click('#submit-login');
    // Checks if the user's account was already made.
    try {
      await page.waitForSelector(usernameInput, {visible: true});
      await page.type(usernameInput, 'username1');
      await page.click(agreeToTermsCheckBox);
      await page.waitForSelector(registerUser);
      await page.click(registerUser);
      await page.waitForSelector(navbarToggle);
    } catch (error) {
      // Already Signed in.
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('Login Failed');
    // eslint-disable-next-line no-console
    console.log(e);
  }
};

const setRole = async function(browser, page, role) {
  try {
    // eslint-disable-next-line dot-notation
    await page.goto(
      'http://127.0.0.1:8181/admin#/roles', { waitUntil: networkIdle });
    await page.waitForSelector(updateFormName);
    await page.type(updateFormName, 'username1');
    await page.select(roleSelect, role);
    await page.waitForSelector(updateFormSubmit);
    await page.click(updateFormSubmit);
    await page.waitForSelector(statusMessage);
    await page.waitForFunction(
      'document.querySelector(' +
        '".protractor-test-status-message").innerText.includes(' +
        '"successfully updated to")'
    );
    // eslint-disable-next-line dot-notation
    await page.goto(CREATOR_DASHBOARD_URL, { waitUntil: networkIdle});
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('Changing role to admin failed');
    // eslint-disable-next-line no-console
    console.log(e);
  }
};

const getExplorationEditorUrl = async function(browser, page) {
  try {
    // eslint-disable-next-line dot-notation
    await page.goto(
      CREATOR_DASHBOARD_URL, { waitUntil: networkIdle });

    await page.waitForSelector(createButtonSelector, {visible: true});
    await page.click(createButtonSelector);
    await page.waitForSelector(
      dismissCreateModalSelector, {visible: true});
    explorationEditorUrl = await page.url();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
};


const getCollectionEditorUrl = async function(browser, page) {
  try {
    await setRole(browser, page, 'string:COLLECTION_EDITOR');
    // Load in Collection
    // eslint-disable-next-line dot-notation
    await page.goto(
      CREATOR_DASHBOARD_URL, { waitUntil: networkIdle });
    await page.waitForSelector(createButtonSelector, {visible: true});
    await page.click(createButtonSelector);
    await page.waitForSelector(
      createCollectionButtonSelector, {visible: true});
    await page.click(createCollectionButtonSelector);
    await page.waitForSelector(
      addExplorationInput, {visible: true});
    collectionEditorUrl = await page.url();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('Creating Collections Failed');
    // eslint-disable-next-line no-console
    console.log(e);
  }
};

const getTopicEditorUrl = async function(browser, page) {
  try {
    await setRole(browser, page, 'string:ADMIN');
    // eslint-disable-next-line dot-notation
    await page.goto(
      TOPIC_AND_SKILLS_DASHBOARD_URL, { waitUntil: networkIdle });
    await page.waitForSelector(createTopicButtonSelector, {visible: true});
    await page.click(createTopicButtonSelector);

    await page.waitForSelector(topicNameField, {visible: true});
    await page.type(topicNameField, 'Topic1 TASD');
    await page.type(topicUrlFragmentField, 'topic-tasd-one');
    await page.type(topicDescriptionField, 'Topic 1 description');
    await page.click(topicThumbnailButton);
    await page.waitForSelector(topicUploadButton, {visible: true});

    const elementHandle = await page.$(topicUploadButton);
    await elementHandle.uploadFile('core/tests/data/test_svg.svg');

    await page.waitForSelector(thumbnailContainer, {visible: true});
    await page.click(topicPhotoSubmit);

    await page.waitForSelector(confirmTopicCreationButton, {visible: true});
    await page.waitFor(5000);
    await page.click(confirmTopicCreationButton);
    // Doing waitFor(10000) to handle new tab being opened.
    await page.waitFor(10000);
    await browser.pages();

    // Refresh page and click on topic link.
    // eslint-disable-next-line dot-notation
    await page.goto(
      TOPIC_AND_SKILLS_DASHBOARD_URL, { waitUntil: networkIdle });
    await page.waitForSelector(createdTopicLink, {visible: true});
    await page.click(createdTopicLink);
    await page.waitForSelector(createStoryButtonSelector);

    topicEditorUrl = await page.url();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const unusedGetStoryEditorUrl = async function(browser, page) {
  try {
    // eslint-disable-next-line dot-notation
    await page.goto(topicEditorUrl, { waitUntil: networkIdle });
    await page.waitForSelector(createStoryButtonSelector, {visible: true});
    await page.click(createStoryButtonSelector);

    await page.waitForSelector(storyNameField, {visible: true});
    await page.type(storyNameField, 'Story TASD');
    await page.type(storyUrlFragmentField, 'story-url-one');
    await page.type(storyDescriptionField, 'Story 1 description');
    await page.click(storyThumbnailButton);
    await page.waitForSelector(storyUploadButton, {visible: true});

    const elementHandle = await page.$(storyUploadButton);
    await elementHandle.uploadFile('core/tests/data/test_svg.svg');

    await page.waitForSelector(thumbnailContainer, {visible: true});
    await page.click(storyPhotoSubmit);

    await page.waitForSelector(confirmStoryCreationButton, {visible: true});
    await page.waitFor(5000);
    await page.click(confirmStoryCreationButton);
    await page.waitFor(15000);
    unusedStoryEditorURL = await page.url();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
};

const getSkillEditorUrl = async function(browser, page) {
  try {
    // eslint-disable-next-line dot-notation
    await page.goto(topicEditorUrl, { waitUntil: networkIdle });
    await page.waitForSelector(createSkillButtonSelector, {visible: true});
    await page.click(createSkillButtonSelector);

    await page.waitForSelector(skillDescriptionField, {visible: true});
    await page.type(skillDescriptionField, 'Skill Description here');
    await page.click(skillOpenConceptCard);
    await page.waitForSelector(skillReviewMaterialInput, {visible: true});
    await page.waitFor(5000);
    await page.keyboard.type('Skill Overview here');

    await page.waitForSelector(confirmSkillCreationButton, {visible: true});
    await page.waitFor(5000);
    await page.click(confirmSkillCreationButton);
    // Doing waitFor(15000) to handle new tab being opened.
    await page.waitFor(15000);
    let pages = await browser.pages();
    skillEditorUrl = await pages[2].url();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
};

const main = async function() {
  // Change headless to false to see the puppeteer actions.
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  await page.setViewport({
    width: 1920,
    height: 1080
  });
  await login(browser, page);
  await getExplorationEditorUrl(browser, page);
  await getCollectionEditorUrl(browser, page);
  await getTopicEditorUrl(browser, page);
  await getSkillEditorUrl(browser, page);
  await process.stdout.write(
    [
      new URL(explorationEditorUrl),
      new URL(collectionEditorUrl),
      new URL(topicEditorUrl),
      new URL(skillEditorUrl),
    ].join('\n')
  );
  await page.close();
  process.exit();
};

main();
