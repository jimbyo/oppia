// Copyright 2020 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS-IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Config for lighthouse-ci
 */

 // To run Lighthouse Checks type lhci autorun
module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      // // To runn lighthouse on 
      // // startServerCommand: 'python -m scripts.start',
      // // Compy Server
      // startServerCommand: 'python -m scripts.lighthouse_checks',
      url: [
        'http://127.0.0.1:8181/splash',
        // 'http://127.0.0.1:8181/library', Has an error show up
        'http://127.0.0.1:8181/donate'
      ],
      settings: {
        chromeFlags: ['--proxy-server=http://127.0.0.1:9999", "--allow-insecure-localhost'],
      }
    },
    assert: {
      assertMatrix: [
        {
          matchingUrlPattern: 'http://[^/]+/splash',
          assertions: {
            // Performance Audits
            'first-contentful-paint': ['warn', {minScore: 1}],
            'first-meaningful-paint': ['warn', {minScore: 1}],
            'first-cpu-idle': ['warn', {minScore: 1}],
            'speed-index': ['warn', {minScore: 1}],
            interactive: ['warn', {minScore: 1}],
            // Performance Opportunities
            'render-blocking-resources': ['warn', {minScore: 1}],
            'uses-responsive-images': ['warn', {minScore: 1}],
            'offscreen-images': ['warn', {minScore: 1}],
            'unminified-css': ['warn', {minScore: 1}],
            'unminified-javascript': ['warn', {minScore: 1}],
            'unused-css-rules': ['warn', {minScore: 1}],
            'uses-optimized-images': ['warn', {minScore: 1}],
            'uses-webp-images': ['warn', {minScore: 1}],
            'uses-text-compression': ['warn', {minScore: 1}],
            'uses-rel-preconnect': ['warn', {minScore: 1}],
            'time-to-first-byte': ['warn', {minScore: 1}],
            redirects: ['warn', {minScore: 1}],
            'uses-rel-preload': ['warn', {minScore: 1}],
            'efficient-animated-content': ['warn', {minScore: 1}],
            // Best Practice Audits
            'appcache-manifest': ['warn', {minScore: 1}],
            'is-on-https': ['warn', {minScore: 1}],
            'uses-http2': ['warn', {minScore: 1}],
            'uses-passive-event-listeners': ['warn', {minScore: 1}],
            'no-document-write': ['warn', {minScore: 1}],
            'external-anchors-use-rel-noopener': ['warn', {minScore: 1}],
            'geolocation-on-start': ['warn', {minScore: 1}],
            doctype: ['warn', {minScore: 1}],
            'no-vulnerable-libraries': ['warn', {minScore: 1}],
            'js-libraries': ['warn', {minScore: 1}],
            'notification-on-start': ['warn', {minScore: 1}],
            deprecations: ['warn', {minScore: 1}],
            'password-inputs-can-be-pasted-into': ['warn', {minScore: 1}],
            'errors-in-console': ['warn', {minScore: 1}],
            'image-aspect-ratio': ['warn', {minScore: 1}]
          }
        },
        {
          matchingUrlPattern: 'http://[^/]+/library',
          assertions: {
            // Performance Audits
            'first-contentful-paint': ['warn', {minScore: 1}],
            'first-meaningful-paint': ['warn', {minScore: 1}],
            'first-cpu-idle': ['warn', {minScore: 1}],
            'speed-index': ['warn', {minScore: 1}],
            interactive: ['warn', {minScore: 1}],
            // Performance Opportunities
            'render-blocking-resources': ['warn', {minScore: 1}],
            'uses-responsive-images': ['warn', {minScore: 1}],
            'offscreen-images': ['warn', {minScore: 1}],
            'unminified-css': ['warn', {minScore: 1}],
            'unminified-javascript': ['warn', {minScore: 1}],
            'unused-css-rules': ['warn', {minScore: 1}],
            'uses-optimized-images': ['warn', {minScore: 1}],
            'uses-webp-images': ['warn', {minScore: 1}],
            'uses-text-compression': ['warn', {minScore: 1}],
            'uses-rel-preconnect': ['warn', {minScore: 1}],
            'time-to-first-byte': ['warn', {minScore: 1}],
            redirects: ['warn', {minScore: 1}],
            'uses-rel-preload': ['warn', {minScore: 1}],
            'efficient-animated-content': ['warn', {minScore: 1}],
            // Best Practice Audits
            'appcache-manifest': ['warn', {minScore: 1}],
            'is-on-https': ['warn', {minScore: 1}],
            'uses-http2': ['warn', {minScore: 1}],
            'uses-passive-event-listeners': ['warn', {minScore: 1}],
            'no-document-write': ['warn', {minScore: 1}],
            'external-anchors-use-rel-noopener': ['warn', {minScore: 1}],
            'geolocation-on-start': ['warn', {minScore: 1}],
            doctype: ['warn', {minScore: 1}],
            'no-vulnerable-libraries': ['warn', {minScore: 1}],
            'js-libraries': ['warn', {minScore: 1}],
            'notification-on-start': ['warn', {minScore: 1}],
            deprecations: ['warn', {minScore: 1}],
            'password-inputs-can-be-pasted-into': ['warn', {minScore: 1}],
            'errors-in-console': ['warn', {minScore: 1}],
            'image-aspect-ratio': ['warn', {minScore: 1}]
          }
        },
        {
          matchingUrlPattern: 'http://[^/]+/donate',
          assertions: {
            // Performance Audits
            'first-contentful-paint': ['warn', {minScore: 1}],
            'first-meaningful-paint': ['warn', {minScore: 1}],
            'first-cpu-idle': ['warn', {minScore: 1}],
            'speed-index': ['warn', {minScore: 1}],
            interactive: ['warn', {minScore: 1}],
            // Performance Opportunities
            'render-blocking-resources': ['warn', {minScore: 1}],
            'uses-responsive-images': ['warn', {minScore: 1}],
            'offscreen-images': ['warn', {minScore: 1}],
            'unminified-css': ['warn', {minScore: 1}],
            'unminified-javascript': ['warn', {minScore: 1}],
            'unused-css-rules': ['warn', {minScore: 1}],
            'uses-optimized-images': ['warn', {minScore: 1}],
            'uses-webp-images': ['warn', {minScore: 1}],
            'uses-text-compression': ['warn', {minScore: 1}],
            'uses-rel-preconnect': ['warn', {minScore: 1}],
            'time-to-first-byte': ['warn', {minScore: 1}],
            redirects: ['warn', {minScore: 1}],
            'uses-rel-preload': ['warn', {minScore: 1}],
            'efficient-animated-content': ['warn', {minScore: 1}],
            // Best Practice Audits
            'appcache-manifest': ['warn', {minScore: 1}],
            'is-on-https': ['warn', {minScore: 1}],
            'uses-http2': ['warn', {minScore: 1}],
            'uses-passive-event-listeners': ['warn', {minScore: 1}],
            'no-document-write': ['warn', {minScore: 1}],
            'external-anchors-use-rel-noopener': ['warn', {minScore: 1}],
            'geolocation-on-start': ['warn', {minScore: 1}],
            doctype: ['warn', {minScore: 1}],
            'no-vulnerable-libraries': ['warn', {minScore: 1}],
            'js-libraries': ['warn', {minScore: 1}],
            'notification-on-start': ['warn', {minScore: 1}],
            deprecations: ['warn', {minScore: 1}],
            'password-inputs-can-be-pasted-into': ['warn', {minScore: 1}],
            'errors-in-console': ['warn', {minScore: 1}],
            'image-aspect-ratio': ['warn', {minScore: 1}]
          }
        },
      ]
    },
    upload: {
      target: 'temporary-public-storage'
    },
    server: {
      // server options here
    },
    wizard: {
      // wizard options here
    },
  },
};
