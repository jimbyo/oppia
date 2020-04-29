module.exports = {
    ci: {
      collect: {
        'numberOfRuns': 1,
        'url': [
          'http://localhost:8181/splash',
          'http://localhost:8181/library',
          'http://localhost:8181/donate',
        ]
      },
      assert: {
        // "assertions": {
        //   //Performance Audits
        //   'first-contentful-paint': ["warn", {"minScore": 1}],
        //   'first-meaningful-paint': ["warn", {"minScore": 1}],
        //   'first-cpu-idle': ["warn", {"minScore": 1}],
        //   'speed-index': ["warn", {"minScore": 1}],
        //   'interactive': ["warn", {"minScore": 1}],
        //   //Performance Opportunities
        //   'deprecations': ["warn", {"minScore": 1}],
        //   'deprecations': ["warn", {"minScore": 1}],
        //   'deprecations': ["warn", {"minScore": 1}],
        //   'deprecations': ["warn", {"minScore": 1}],
        //   'deprecations': ["warn", {"minScore": 1}],
        //   'deprecations': ["warn", {"minScore": 1}],
        //   'deprecations': ["warn", {"minScore": 1}],
        //   'deprecations': ["warn", {"minScore": 1}],
        //   'deprecations': ["warn", {"minScore": 1}],
        //   //Best Practice Audits
        //   'appcache-manifest': ["warn", {"minScore": 1}],
        //   'is-on-https': ["warn", {"minScore": 1}],
        //   'uses-http2': ["warn", {"minScore": 1}],
        //   'uses-passive-event-listeners': ["warn", {"minScore": 1}],
        //   'no-document-write': ["warn", {"minScore": 1}],
        //   'external-anchors-use-rel-noopener': ["warn", {"minScore": 1}],
        //   'geolocation-on-start': ["warn", {"minScore": 1}],
        //   'doctype': ["warn", {"minScore": 1}],
        //   'no-vulnerable-libraries': ["warn", {"minScore": 1}],
        //   'js-libraries': ["warn", {"minScore": 1}],
        //   'notification-on-start': ["warn", {"minScore": 1}],
        //   'deprecations': ["warn", {"minScore": 1}],
        //   'password-inputs-can-be-pasted-into': ["warn", {"minScore": 1}],
        //   'errors-in-console': ["warn", {"minScore": 1}],
        //   'image-aspect-ratio': ["warn", {"minScore": 1}]
        // }
        "assertMatrix": [
          {
            "matchingUrlPattern": "http://[^/]+/splash",
            "assertions": {
              //Performance Audits
              'first-contentful-paint': ["warn", {"minScore": 1}],
              'first-meaningful-paint': ["warn", {"minScore": 1}],
              'first-cpu-idle': ["warn", {"minScore": 1}],
              'speed-index': ["warn", {"minScore": 1}],
              'interactive': ["warn", {"minScore": 1}],
              //Performance Opportunities
              'render-blocking-resources': ["warn", {"minScore": 1}],
              'uses-responsive-images': ["warn", {"minScore": 1}],
              'offscreen-images': ["warn", {"minScore": 1}],
              'unminified-css': ["warn", {"minScore": 1}],
              'unminified-javascript': ["warn", {"minScore": 1}],
              'unused-css-rules': ["warn", {"minScore": 1}],
              'uses-optimized-images': ["warn", {"minScore": 1}],
              'uses-webp-images': ["warn", {"minScore": 1}],
              'uses-text-compression': ["warn", {"minScore": 1}],
              'uses-rel-preconnect': ["warn", {"minScore": 1}],
              'time-to-first-byte': ["warn", {"minScore": 1}],
              'redirects': ["warn", {"minScore": 1}],
              'uses-rel-preload': ["warn", {"minScore": 1}],
              'efficient-animated-content': ["warn", {"minScore": 1}],
              //Best Practice Audits
              'appcache-manifest': ["warn", {"minScore": 1}],
              'is-on-https': ["warn", {"minScore": 1}],
              'uses-http2': ["warn", {"minScore": 1}],
              'uses-passive-event-listeners': ["warn", {"minScore": 1}],
              'no-document-write': ["warn", {"minScore": 1}],
              'external-anchors-use-rel-noopener': ["warn", {"minScore": 1}],
              'geolocation-on-start': ["warn", {"minScore": 1}],
              'doctype': ["warn", {"minScore": 1}],
              'no-vulnerable-libraries': ["warn", {"minScore": 1}],
              'js-libraries': ["warn", {"minScore": 1}],
              'notification-on-start': ["warn", {"minScore": 1}],
              'deprecations': ["warn", {"minScore": 1}],
              'password-inputs-can-be-pasted-into': ["warn", {"minScore": 1}],
              'errors-in-console': ["warn", {"minScore": 1}],
              'image-aspect-ratio': ["warn", {"minScore": 1}]
            }
          },
          {
            "matchingUrlPattern": "http://[^/]+/library",
            "assertions": {
              //Performance Audits
              'first-contentful-paint': ["warn", {"minScore": 1}],
              'first-meaningful-paint': ["warn", {"minScore": 1}],
              'first-cpu-idle': ["warn", {"minScore": 1}],
              'speed-index': ["warn", {"minScore": 1}],
              'interactive': ["warn", {"minScore": 1}],
              //Performance Opportunities
              'render-blocking-resources': ["warn", {"minScore": 1}],
              'uses-responsive-images': ["warn", {"minScore": 1}],
              'offscreen-images': ["warn", {"minScore": 1}],
              'unminified-css': ["warn", {"minScore": 1}],
              'unminified-javascript': ["warn", {"minScore": 1}],
              'unused-css-rules': ["warn", {"minScore": 1}],
              'uses-optimized-images': ["warn", {"minScore": 1}],
              'uses-webp-images': ["warn", {"minScore": 1}],
              'uses-text-compression': ["warn", {"minScore": 1}],
              'uses-rel-preconnect': ["warn", {"minScore": 1}],
              'time-to-first-byte': ["warn", {"minScore": 1}],
              'redirects': ["warn", {"minScore": 1}],
              'uses-rel-preload': ["warn", {"minScore": 1}],
              'efficient-animated-content': ["warn", {"minScore": 1}],
              //Best Practice Audits
              'appcache-manifest': ["warn", {"minScore": 1}],
              'is-on-https': ["warn", {"minScore": 1}],
              'uses-http2': ["warn", {"minScore": 1}],
              'uses-passive-event-listeners': ["warn", {"minScore": 1}],
              'no-document-write': ["warn", {"minScore": 1}],
              'external-anchors-use-rel-noopener': ["warn", {"minScore": 1}],
              'geolocation-on-start': ["warn", {"minScore": 1}],
              'doctype': ["warn", {"minScore": 1}],
              'no-vulnerable-libraries': ["warn", {"minScore": 1}],
              'js-libraries': ["warn", {"minScore": 1}],
              'notification-on-start': ["warn", {"minScore": 1}],
              'deprecations': ["warn", {"minScore": 1}],
              'password-inputs-can-be-pasted-into': ["warn", {"minScore": 1}],
              'errors-in-console': ["warn", {"minScore": 1}],
              'image-aspect-ratio': ["warn", {"minScore": 1}]
            }
          },
          {
            "matchingUrlPattern": "http://[^/]+/donate",
            "assertions": {
              //Performance Audits
              'first-contentful-paint': ["warn", {"minScore": 1}],
              'first-meaningful-paint': ["warn", {"minScore": 1}],
              'first-cpu-idle': ["warn", {"minScore": 1}],
              'speed-index': ["warn", {"minScore": 1}],
              'interactive': ["warn", {"minScore": 1}],
              //Performance Opportunities
              'render-blocking-resources': ["warn", {"minScore": 1}],
              'uses-responsive-images': ["warn", {"minScore": 1}],
              'offscreen-images': ["warn", {"minScore": 1}],
              'unminified-css': ["warn", {"minScore": 1}],
              'unminified-javascript': ["warn", {"minScore": 1}],
              'unused-css-rules': ["warn", {"minScore": 1}],
              'uses-optimized-images': ["warn", {"minScore": 1}],
              'uses-webp-images': ["warn", {"minScore": 1}],
              'uses-text-compression': ["warn", {"minScore": 1}],
              'uses-rel-preconnect': ["warn", {"minScore": 1}],
              'time-to-first-byte': ["warn", {"minScore": 1}],
              'redirects': ["warn", {"minScore": 1}],
              'uses-rel-preload': ["warn", {"minScore": 1}],
              'efficient-animated-content': ["warn", {"minScore": 1}],
              //Best Practice Audits
              'appcache-manifest': ["warn", {"minScore": 1}],
              'is-on-https': ["warn", {"minScore": 1}],
              'uses-http2': ["warn", {"minScore": 1}],
              'uses-passive-event-listeners': ["warn", {"minScore": 1}],
              'no-document-write': ["warn", {"minScore": 1}],
              'external-anchors-use-rel-noopener': ["warn", {"minScore": 1}],
              'geolocation-on-start': ["warn", {"minScore": 1}],
              'doctype': ["warn", {"minScore": 1}],
              'no-vulnerable-libraries': ["warn", {"minScore": 1}],
              'js-libraries': ["warn", {"minScore": 1}],
              'notification-on-start': ["warn", {"minScore": 1}],
              'deprecations': ["warn", {"minScore": 1}],
              'password-inputs-can-be-pasted-into': ["warn", {"minScore": 1}],
              'errors-in-console': ["warn", {"minScore": 1}],
              'image-aspect-ratio': ["warn", {"minScore": 1}]
            }
          },
        ]
      },
      upload: {
        "target": "temporary-public-storage"
      },
      server: {
        // server options here
      },
      wizard: {
        // wizard options here
      },
    },
  };