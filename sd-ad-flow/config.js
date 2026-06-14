const getParentDomainUrl = (path) => {
  const hostname = window.location.hostname;
  const isIp = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/.test(hostname);
  if (hostname !== "localhost" && !isIp) {
    const parts = hostname.split(".");
    if (parts.length > 1) {
      const parentDomain = parts.slice(-2).join(".");
      return "//" + parentDomain + path;
    }
  }
  return path;
};

/**
 * Application Configuration
 */
export const CONFIG = {
  // The YouTube completion guide video URL
  guideVideoUrl:
    "https://youtu.be/edD0XNwj-jw?list=PL7PHm0ztMuGBm13ewd3p4sCge2Hy8ZP5q&t=114",

  // Duration in seconds for the countdown on each step
  timerDurationSeconds: 12,

  // Duration in seconds for the entry popup timer on each page
  popupTimerDurationSeconds: 12,

  // Configuration for cookie-based gateways activated by the ?c=<id> query parameter.
  cookieGates: {
    "my-test-cookie-id": {
      destinationUrl: "test-cookie-function.html", // Redirect destination on success (relative path works on any domain/port)
      cookieName: "_sec_node_sig", // The cookie name to write (obscure CDN-style name)
      lockedValue: "9f8e7d6c5b4a3f2e", // Value when locked (looks like a hex session token)
      unlockedValue: "1a2b3c4d5e6f7a8b", // Value when unlocked (looks like a hex session token)
    },
    "esports-free-match-gate": {
      destinationUrl: getParentDomainUrl("/ff/free-match-task.php"),
      cookieName: "_sec_task_node",
      lockedValue: "a2f9b8c7e6d5c4b3",
      unlockedValue: "f8b7a6e5d4c3b2a1",
    },
  },

  // The final destination URL mapping when Step 5 is complete and the user clicks Claim
  destinationUrls: {
    test: "https://www.google.com",
    vd32vd: "https://www.bing.com",
    dsv323: "https://www.yahoo.com",
    vdvsd3: "https://www.duckduckgo.com",
  },

  // Ad URLs to open in a new tab when clicking 'Unlock Content' on each step's entry popup
  popupAdUrls: {
    1: "https://omg10.com/4/11064347",
    2: "https://elementarywhole.com/CJ5NXK",
    3: "https://www.effectivecpmnetwork.com/nmtq6ixs?key=a31101e602ee09f38f2ab4df8b79d72c",
    4: "https://omg10.com/4/11064347",
    5: "https://www.effectivecpmnetwork.com/nmtq6ixs?key=a31101e602ee09f38f2ab4df8b79d72c",
  },

  // Ad URLs to open in a new tab when clicking the in-page "Start Verification" button
  stepStartAdUrls: {
    1: "https://www.effectivecpmnetwork.com/nmtq6ixs?key=a31101e602ee09f38f2ab4df8b79d72c",
    2: "https://omg10.com/4/11064347",
    3: "https://elementarywhole.com/CJ5NXK",
    4: "https://omg10.com/4/11064347",
    5: "https://www.effectivecpmnetwork.com/nmtq6ixs?key=a31101e602ee09f38f2ab4df8b79d72c",
  },

  // Ad URLs to open in the CURRENT tab when the user clicks "Proceed" (continue button) on Step 1, 2, 3, and 4.
  // Concurrently, the next step HTML file opens in a new tab.
  stepContinueAdUrls: {
    1: "https://omg10.com/4/11064347",
    2: "https://www.effectivecpmnetwork.com/nmtq6ixs?key=a31101e602ee09f38f2ab4df8b79d72c",
    3: "https://omg10.com/4/11064347",
    4: "https://www.effectivecpmnetwork.com/nmtq6ixs?key=a31101e602ee09f38f2ab4df8b79d72c",
    5: "https://elementarywhole.com/CJ5NXK",
  },

  // Custom banner ad HTML/JS code for each slot on all 5 pages.
  // Leave empty to preserve the default styled placeholder content.
  bannerAds: {
    1: {
      skyscraper: `<!-- myadcash: 160 × 600 Banner --> <div> <script type="text/javascript"> aclib.runBanner({ zoneId: '11444594', }); </script> </div>`,
      rectangle1: `<!-- Hilltopads: 300 × 250 Banner --> <script> (function(hfk){ var d = document, s = d.createElement('script'), l = d.scripts[d.scripts.length - 1]; s.settings = hfk || {}; s.src = "\/\/pricklyassociation.com\/btXoVCs.dAGGlB0\/YyWXca\/beNm\/9ouOZmUAlzkfPVTKcOwVO\/TZI_5\/OHTTMXtzN\/zPAO5IMfj\/k-5pNvwr"; s.async = true; s.referrerPolicy = 'no-referrer-when-downgrade'; l.parentNode.insertBefore(s, l); })({}) </script>`,
      rectangle2: `<!-- myadcash: 336x280 Banner --> <div> <script type="text/javascript"> aclib.runBanner({ zoneId: '11444610', }); </script> </div>`,
      popup1: `<!-- Hilltopads: 300 × 250 Banner --> <script> (function(hfk){ var d = document, s = d.createElement('script'), l = d.scripts[d.scripts.length - 1]; s.settings = hfk || {}; s.src = "\/\/pricklyassociation.com\/btXoVCs.dAGGlB0\/YyWXca\/beNm\/9ouOZmUAlzkfPVTKcOwVO\/TZI_5\/OHTTMXtzN\/zPAO5IMfj\/k-5pNvwr"; s.async = true; s.referrerPolicy = 'no-referrer-when-downgrade'; l.parentNode.insertBefore(s, l); })({}) </script>`,
      popup2: `<!-- myadcash: 300 × 250 Banner --> <div> <script type="text/javascript"> aclib.runBanner({ zoneId: '11444618', }); </script> </div>`,
    },
    2: {
      skyscraper: `<!-- myadcash: 160 × 600 Banner --> <div> <script type="text/javascript"> aclib.runBanner({ zoneId: '11444594', }); </script> </div>`,
      rectangle1: `<!-- Hilltopads: 300 × 250 Banner --> <script> (function(hfk){ var d = document, s = d.createElement('script'), l = d.scripts[d.scripts.length - 1]; s.settings = hfk || {}; s.src = "\/\/pricklyassociation.com\/btXoVCs.dAGGlB0\/YyWXca\/beNm\/9ouOZmUAlzkfPVTKcOwVO\/TZI_5\/OHTTMXtzN\/zPAO5IMfj\/k-5pNvwr"; s.async = true; s.referrerPolicy = 'no-referrer-when-downgrade'; l.parentNode.insertBefore(s, l); })({}) </script>`,
      rectangle2: `<!-- myadcash: 336x280 Banner --> <div> <script type="text/javascript"> aclib.runBanner({ zoneId: '11444610', }); </script> </div>`,
      popup1: `<!-- Hilltopads: 300 × 250 Banner --> <script> (function(hfk){ var d = document, s = d.createElement('script'), l = d.scripts[d.scripts.length - 1]; s.settings = hfk || {}; s.src = "\/\/pricklyassociation.com\/btXoVCs.dAGGlB0\/YyWXca\/beNm\/9ouOZmUAlzkfPVTKcOwVO\/TZI_5\/OHTTMXtzN\/zPAO5IMfj\/k-5pNvwr"; s.async = true; s.referrerPolicy = 'no-referrer-when-downgrade'; l.parentNode.insertBefore(s, l); })({}) </script>`,
      popup2: `<!-- myadcash: 300 × 250 Banner --> <div> <script type="text/javascript"> aclib.runBanner({ zoneId: '11444618', }); </script> </div>`,
    },
    3: {
      skyscraper: `<!-- myadcash: 160 × 600 Banner --> <div> <script type="text/javascript"> aclib.runBanner({ zoneId: '11444594', }); </script> </div>`,
      rectangle1: `<!-- Hilltopads: 300 × 250 Banner --> <script> (function(hfk){ var d = document, s = d.createElement('script'), l = d.scripts[d.scripts.length - 1]; s.settings = hfk || {}; s.src = "\/\/pricklyassociation.com\/btXoVCs.dAGGlB0\/YyWXca\/beNm\/9ouOZmUAlzkfPVTKcOwVO\/TZI_5\/OHTTMXtzN\/zPAO5IMfj\/k-5pNvwr"; s.async = true; s.referrerPolicy = 'no-referrer-when-downgrade'; l.parentNode.insertBefore(s, l); })({}) </script>`,
      rectangle2: `<!-- myadcash: 336x280 Banner --> <div> <script type="text/javascript"> aclib.runBanner({ zoneId: '11444610', }); </script> </div>`,
      popup1: `<!-- Hilltopads: 300 × 250 Banner --> <script> (function(hfk){ var d = document, s = d.createElement('script'), l = d.scripts[d.scripts.length - 1]; s.settings = hfk || {}; s.src = "\/\/pricklyassociation.com\/btXoVCs.dAGGlB0\/YyWXca\/beNm\/9ouOZmUAlzkfPVTKcOwVO\/TZI_5\/OHTTMXtzN\/zPAO5IMfj\/k-5pNvwr"; s.async = true; s.referrerPolicy = 'no-referrer-when-downgrade'; l.parentNode.insertBefore(s, l); })({}) </script>`,
      popup2: `<!-- myadcash: 300 × 250 Banner --> <div> <script type="text/javascript"> aclib.runBanner({ zoneId: '11444618', }); </script> </div>`,
    },
    4: {
      skyscraper: `<!-- myadcash: 160 × 600 Banner --> <div> <script type="text/javascript"> aclib.runBanner({ zoneId: '11444594', }); </script> </div>`,
      rectangle1: `<!-- Hilltopads: 300 × 250 Banner --> <script> (function(hfk){ var d = document, s = d.createElement('script'), l = d.scripts[d.scripts.length - 1]; s.settings = hfk || {}; s.src = "\/\/pricklyassociation.com\/btXoVCs.dAGGlB0\/YyWXca\/beNm\/9ouOZmUAlzkfPVTKcOwVO\/TZI_5\/OHTTMXtzN\/zPAO5IMfj\/k-5pNvwr"; s.async = true; s.referrerPolicy = 'no-referrer-when-downgrade'; l.parentNode.insertBefore(s, l); })({}) </script>`,
      rectangle2: `<!-- myadcash: 336x280 Banner --> <div> <script type="text/javascript"> aclib.runBanner({ zoneId: '11444610', }); </script> </div>`,
      popup1: `<!-- Hilltopads: 300 × 250 Banner --> <script> (function(hfk){ var d = document, s = d.createElement('script'), l = d.scripts[d.scripts.length - 1]; s.settings = hfk || {}; s.src = "\/\/pricklyassociation.com\/btXoVCs.dAGGlB0\/YyWXca\/beNm\/9ouOZmUAlzkfPVTKcOwVO\/TZI_5\/OHTTMXtzN\/zPAO5IMfj\/k-5pNvwr"; s.async = true; s.referrerPolicy = 'no-referrer-when-downgrade'; l.parentNode.insertBefore(s, l); })({}) </script>`,
      popup2: `<!-- myadcash: 300 × 250 Banner --> <div> <script type="text/javascript"> aclib.runBanner({ zoneId: '11444618', }); </script> </div>`,
    },
    5: {
      skyscraper: `<!-- myadcash: 160 × 600 Banner --> <div> <script type="text/javascript"> aclib.runBanner({ zoneId: '11444594', }); </script> </div>`,
      rectangle1: `<!-- Hilltopads: 300 × 250 Banner --> <script> (function(hfk){ var d = document, s = d.createElement('script'), l = d.scripts[d.scripts.length - 1]; s.settings = hfk || {}; s.src = "\/\/pricklyassociation.com\/btXoVCs.dAGGlB0\/YyWXca\/beNm\/9ouOZmUAlzkfPVTKcOwVO\/TZI_5\/OHTTMXtzN\/zPAO5IMfj\/k-5pNvwr"; s.async = true; s.referrerPolicy = 'no-referrer-when-downgrade'; l.parentNode.insertBefore(s, l); })({}) </script>`,
      rectangle2: `<!-- myadcash: 336x280 Banner --> <div> <script type="text/javascript"> aclib.runBanner({ zoneId: '11444610', }); </script> </div>`,
      popup1: `<!-- Hilltopads: 300 × 250 Banner --> <script> (function(hfk){ var d = document, s = d.createElement('script'), l = d.scripts[d.scripts.length - 1]; s.settings = hfk || {}; s.src = "\/\/pricklyassociation.com\/btXoVCs.dAGGlB0\/YyWXca\/beNm\/9ouOZmUAlzkfPVTKcOwVO\/TZI_5\/OHTTMXtzN\/zPAO5IMfj\/k-5pNvwr"; s.async = true; s.referrerPolicy = 'no-referrer-when-downgrade'; l.parentNode.insertBefore(s, l); })({}) </script>`,
      popup2: `<!-- myadcash: 300 × 250 Banner --> <div> <script type="text/javascript"> aclib.runBanner({ zoneId: '11444618', }); </script> </div>`,
    },
  },

  // Custom scripts to dynamically inject into the HTML <head> tag and execute.
  // Mapped by step page (1 to 5).
  // Trigger Types:
  // - "immediate": Runs as soon as app.js initializes on the page.
  // - "time": Runs after the configured milliseconds delay in trigger.value.
  // - "touch": Runs after the user performs the specific number of touches/taps/clicks (trigger.value) on the page.
  headScripts: {
    1: [
      // {
      //   id: 'test-time-script',
      //   code: '<script>alert("[HEAD SCRIPT SUCCESS] Script injected into <head> after 3 seconds delay!");</script>',
      //   trigger: { type: 'time', value: 3000 } // 3 seconds delay
      // },
      // {
      //   id: 'test-touch-script',
      //   code: '<script>alert("[HEAD SCRIPT SUCCESS] Script injected into <head> on 5th touch!");</script>',
      //   trigger: { type: 'touch', value: 5 } // On 5th touch/click
      // },
      // {
      //   id: 'hilltopads-push',
      //   code: `<!-- Hilltopads: In-pagepush --><script> (function(timre){ var d = document, s = d.createElement('script'), l = d.scripts[d.scripts.length - 1]; s.settings = timre || {}; s.src = "\/\/pricklyassociation.com\/bhX.Vas\/dnGGlY0tYZWlc-\/AeOmj9tu\/ZkUGltktP\/TocAwuOUD\/ME4jNbTGMnt\/NczSAY4eM\/z\/gg1MN\/wQ"; s.async = true; s.referrerPolicy = 'no-referrer-when-downgrade'; l.parentNode.insertBefore(s, l); })({}) </script>`,
      //   trigger: { type: 'time', value: 12000 }
      // },
      {
        id: "myadcash-popunder",
        code: `<script type="text/javascript"> aclib.runPop({ zoneId: '11444854', }); </script>`,
        trigger: { type: "time", value: 5 },
      },
      {
        id: "myadcash-inpage-push",
        code: `<script type="text/javascript"> aclib.runInPagePush({ zoneId: '11444574', maxAds: 2, }); </script>`,
        trigger: { type: "time", value: 4 },
      },
      {
        id: "monetag-vignette-banner",
        code: `<script>(function(s){s.dataset.zone='11064338',s.src='https://n6wxm.com/vignette.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))</script>`,
        trigger: { type: "time", value: 10 },
      },
      {
        id: "hilltopads-popunder",
        code: `<script> (function(zbgf){ var d = document, s = d.createElement('script'), l = d.scripts[d.scripts.length - 1]; s.settings = zbgf || {}; s.src = "\/\/sadpicture.com\/coDi9.6Lbs2P5hl-S-WLQC9BNHzcAR4gMFzpgV2lOzS\/0K3DMGDqgFzsOQDicqzg"; s.async = true; s.referrerPolicy = 'no-referrer-when-downgrade'; l.parentNode.insertBefore(s, l); })({}) </script>`,
        trigger: { type: "time", value: 10 },
      },
      {
        id: "hilltopads-inpage-push",
        code: `<script> (function(xpm){ var d = document, s = d.createElement('script'), l = d.scripts[d.scripts.length - 1]; s.settings = xpm || {}; s.src = "\/\/pricklyassociation.com\/bIX.Vfs\/d\/G\/l\/0lYAWDcJ\/beKmy9UuCZRU\/lGkKPKTpcUwUOeD\/Mq4eNhT_MQtsNPzFAx4ZMUzeg\/1\/NSwI"; s.async = true; s.referrerPolicy = 'no-referrer-when-downgrade'; l.parentNode.insertBefore(s, l); })({}) </script>`,
        trigger: { type: "time", value: 12000 },
      },
      {
        id: "hilltopads-video-slider",
        code: `<script> (function(xpm){ var d = document, s = d.createElement('script'), l = d.scripts[d.scripts.length - 1]; s.settings = xpm || {}; s.src = "\/\/pricklyassociation.com\/b.X\/VgsadgGjlX0IYAWOcg\/JepmS9GufZ\/UvlpkWPcT\/cHw_O\/DIMw4\/MfT\/M\/t\/NuztAo4NMpzWgfxYNHwi"; s.async = true; s.referrerPolicy = 'no-referrer-when-downgrade'; l.parentNode.insertBefore(s, l); })({}) </script>`,
        trigger: { type: "touch", value: 7 },
      },
       {
        id: "myadcash-Interstitial-fullscreen",
        code: `<script type="text/javascript"> aclib.runInterstitial({ zoneId: '11444582', }); </script>`,
        trigger: { type: "time", value: 18000 },
      },
    ],
    2: [
      {
        id: "adsterra-popunder",
        code: `<script src="https://pl29565627.effectivecpmnetwork.com/6b/ea/c9/6beac90ea14a31acad5ac8c9ffdce328.js"></script>`,
        trigger: { type: "time", value: 5 },
      },
      {
        id: "monetag-Onclick",
        code: `<script>(function(s){s.dataset.zone='11064391',s.src='https://al5sm.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))</script>`,
        trigger: { type: "time", value: 10 },
      },
      {
        id: "monetag-vignette-banner",
        code: `<script>(function(s){s.dataset.zone='11064338',s.src='https://n6wxm.com/vignette.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))</script>`,
        trigger: { type: "time", value: 10 },
      },
      {
        id: "monetag-inpage-push",
        code: `<script>(function(s){s.dataset.zone='11080599',s.src='https://nap5k.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))</script>`,
        trigger: { type: "touch", value: 4 },
      },
      {
        id: "adsterra-inpage-push-socialbar",
        code: `<script src="https://pl29565630.effectivecpmnetwork.com/bf/c9/6e/bfc96e749080e04add50c796a27a726d.js"></script>`,
        trigger: { type: "time", value: 12000 },
      },
       {
        id: "myadcash-video-sider",
        code: `<script type="text/javascript"> aclib.runVideoSlider({ zoneId: '11444590', }); </script>`,
        trigger: { type: "touch", value: 7 },
      },
      {
        id: "myadcash-Interstitial-fullscreen",
        code: `<script type="text/javascript"> aclib.runInterstitial({ zoneId: '11444582', }); </script>`,
        trigger: { type: "time", value: 18000 },
      },
    ],
    3: [
      {
        id: "myadcash-popunder",
        code: `<script type="text/javascript"> aclib.runPop({ zoneId: '11444854', }); </script>`,
        trigger: { type: "time", value: 5 },
      },
      {
        id: "myadcash-inpage-push",
        code: `<script type="text/javascript"> aclib.runInPagePush({ zoneId: '11444574', maxAds: 2, }); </script>`,
        trigger: { type: "time", value: 4 },
      },
      {
        id: "monetag-vignette-banner",
        code: `<script>(function(s){s.dataset.zone='11064338',s.src='https://n6wxm.com/vignette.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))</script>`,
        trigger: { type: "time", value: 10 },
      },
      {
        id: "hilltopads-popunder",
        code: `<script> (function(zbgf){ var d = document, s = d.createElement('script'), l = d.scripts[d.scripts.length - 1]; s.settings = zbgf || {}; s.src = "\/\/sadpicture.com\/coDi9.6Lbs2P5hl-S-WLQC9BNHzcAR4gMFzpgV2lOzS\/0K3DMGDqgFzsOQDicqzg"; s.async = true; s.referrerPolicy = 'no-referrer-when-downgrade'; l.parentNode.insertBefore(s, l); })({}) </script>`,
        trigger: { type: "time", value: 10 },
      },
      {
        id: "hilltopads-inpage-push",
        code: `<script> (function(xpm){ var d = document, s = d.createElement('script'), l = d.scripts[d.scripts.length - 1]; s.settings = xpm || {}; s.src = "\/\/pricklyassociation.com\/bIX.Vfs\/d\/G\/l\/0lYAWDcJ\/beKmy9UuCZRU\/lGkKPKTpcUwUOeD\/Mq4eNhT_MQtsNPzFAx4ZMUzeg\/1\/NSwI"; s.async = true; s.referrerPolicy = 'no-referrer-when-downgrade'; l.parentNode.insertBefore(s, l); })({}) </script>`,
        trigger: { type: "time", value: 12000 },
      },
      {
        id: "hilltopads-video-slider",
        code: `<script> (function(xpm){ var d = document, s = d.createElement('script'), l = d.scripts[d.scripts.length - 1]; s.settings = xpm || {}; s.src = "\/\/pricklyassociation.com\/b.X\/VgsadgGjlX0IYAWOcg\/JepmS9GufZ\/UvlpkWPcT\/cHw_O\/DIMw4\/MfT\/M\/t\/NuztAo4NMpzWgfxYNHwi"; s.async = true; s.referrerPolicy = 'no-referrer-when-downgrade'; l.parentNode.insertBefore(s, l); })({}) </script>`,
        trigger: { type: "touch", value: 7 },
      },
       {
        id: "myadcash-Interstitial-fullscreen",
        code: `<script type="text/javascript"> aclib.runInterstitial({ zoneId: '11444582', }); </script>`,
        trigger: { type: "time", value: 18000 },
      },
    ],
    4: [
      {
        id: "adsterra-popunder",
        code: `<script src="https://pl29565627.effectivecpmnetwork.com/6b/ea/c9/6beac90ea14a31acad5ac8c9ffdce328.js"></script>`,
        trigger: { type: "time", value: 5 },
      },
      {
        id: "monetag-Onclick",
        code: `<script>(function(s){s.dataset.zone='11064391',s.src='https://al5sm.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))</script>`,
        trigger: { type: "time", value: 10 },
      },
      {
        id: "monetag-vignette-banner",
        code: `<script>(function(s){s.dataset.zone='11064338',s.src='https://n6wxm.com/vignette.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))</script>`,
        trigger: { type: "time", value: 10 },
      },
      {
        id: "monetag-inpage-push",
        code: `<script>(function(s){s.dataset.zone='11080599',s.src='https://nap5k.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))</script>`,
        trigger: { type: "touch", value: 4 },
      },
      {
        id: "adsterra-inpage-push-socialbar",
        code: `<script src="https://pl29565630.effectivecpmnetwork.com/bf/c9/6e/bfc96e749080e04add50c796a27a726d.js"></script>`,
        trigger: { type: "time", value: 12000 },
      },
       {
        id: "myadcash-video-sider",
        code: `<script type="text/javascript"> aclib.runVideoSlider({ zoneId: '11444590', }); </script>`,
        trigger: { type: "touch", value: 7 },
      },
      {
        id: "myadcash-Interstitial-fullscreen",
        code: `<script type="text/javascript"> aclib.runInterstitial({ zoneId: '11444582', }); </script>`,
        trigger: { type: "time", value: 18000 },
      },
    ],
    5: [
      {
        id: "myadcash-popunder",
        code: `<script type="text/javascript"> aclib.runPop({ zoneId: '11444854', }); </script>`,
        trigger: { type: "time", value: 5 },
      },
      {
        id: "myadcash-inpage-push",
        code: `<script type="text/javascript"> aclib.runInPagePush({ zoneId: '11444574', maxAds: 2, }); </script>`,
        trigger: { type: "time", value: 4 },
      },
      {
        id: "monetag-vignette-banner",
        code: `<script>(function(s){s.dataset.zone='11064338',s.src='https://n6wxm.com/vignette.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))</script>`,
        trigger: { type: "time", value: 10 },
      },
      {
        id: "hilltopads-popunder",
        code: `<script> (function(zbgf){ var d = document, s = d.createElement('script'), l = d.scripts[d.scripts.length - 1]; s.settings = zbgf || {}; s.src = "\/\/sadpicture.com\/coDi9.6Lbs2P5hl-S-WLQC9BNHzcAR4gMFzpgV2lOzS\/0K3DMGDqgFzsOQDicqzg"; s.async = true; s.referrerPolicy = 'no-referrer-when-downgrade'; l.parentNode.insertBefore(s, l); })({}) </script>`,
        trigger: { type: "time", value: 10 },
      },
      {
        id: "hilltopads-inpage-push",
        code: `<script> (function(xpm){ var d = document, s = d.createElement('script'), l = d.scripts[d.scripts.length - 1]; s.settings = xpm || {}; s.src = "\/\/pricklyassociation.com\/bIX.Vfs\/d\/G\/l\/0lYAWDcJ\/beKmy9UuCZRU\/lGkKPKTpcUwUOeD\/Mq4eNhT_MQtsNPzFAx4ZMUzeg\/1\/NSwI"; s.async = true; s.referrerPolicy = 'no-referrer-when-downgrade'; l.parentNode.insertBefore(s, l); })({}) </script>`,
        trigger: { type: "time", value: 12000 },
      },
      {
        id: "hilltopads-video-slider",
        code: `<script> (function(xpm){ var d = document, s = d.createElement('script'), l = d.scripts[d.scripts.length - 1]; s.settings = xpm || {}; s.src = "\/\/pricklyassociation.com\/b.X\/VgsadgGjlX0IYAWOcg\/JepmS9GufZ\/UvlpkWPcT\/cHw_O\/DIMw4\/MfT\/M\/t\/NuztAo4NMpzWgfxYNHwi"; s.async = true; s.referrerPolicy = 'no-referrer-when-downgrade'; l.parentNode.insertBefore(s, l); })({}) </script>`,
        trigger: { type: "touch", value: 7 },
      },
       {
        id: "myadcash-Interstitial-fullscreen",
        code: `<script type="text/javascript"> aclib.runInterstitial({ zoneId: '11444582', }); </script>`,
        trigger: { type: "time", value: 18000 },
      },
    ],
  },
};
