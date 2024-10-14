function afterFormOpen() {
  if (isScriptLoaded('https://apis.google.com/js/platform.js') == false) {
    var meta = document.createElement('meta');
    meta.name = 'google-signin-client_id';
    meta.content =
      '499620265848-all65e4hmunlra2h0c6fo2efrujsri66.apps.googleusercontent.com';
    document.getElementsByTagName('head')[0].appendChild(meta);
    addScript('https://apis.google.com/js/platform.js');
  }
  if (isScriptLoaded('https://connect.facebook.net/en_US/sdk.js') == false) {
    loadScript('https://connect.facebook.net/en_US/sdk.js', function () {
      window.fbAsyncInit = function () {
        FB.init({
          appId: '382574281913074',
          autoLogAppEvents: true,
          xfbml: true,
          version: 'v7.0',
        });
      };
      FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
      });
    });
  }
}

function statusChangeCallback(response) {
  console.log('statusChangeCallback fired.');
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    console.log('Welcome!  Fetching your information.... ');
  } else {
    console.log('FB Error');
  }
}

function myFacebookLogin() {
  FB.login(
    function (response) {
      if (response.status === 'connected') {
        FB.api(
          '/me',
          { fields: 'name, email, gender, picture' },
          function (response) {
            if (response['name']) {
              $('form')
                .find('input[name="app-name"]')
                .val(response['name'])
                .next('label')
                .css({ opacity: 0 });
              $('form')
                .find('input[name="cv-name"]')
                .val(response['name'])
                .next('label')
                .css({ opacity: 0 });
            }
            if (response['email']) {
              $('form')
                .find('input[name="app-email"]')
                .val(response['email'])
                .next('label')
                .css({ opacity: 0 });
              $('form')
                .find('input[name="cv-email"]')
                .val(response['email'])
                .next('label')
                .css({ opacity: 0 });
            }
            if (response['gender'] == 'male') {
              $('form')
                .find('input[name="app-gender"][value="male"]')
                .prop('checked', true);
              $('form')
                .find('input[name="cv-gender"][value="male"]')
                .prop('checked', true);
            } else if (response['gender'] == 'female') {
              $('form')
                .find('input[name="app-gender"][value="female"]')
                .prop('checked', true);
              $('form')
                .find('input[name="cv-gender"][value="female"]')
                .prop('checked', true);
            }
          }
        );
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    },
    { scope: 'public_profile,email,user_gender' }
  );
}

function myLinkedinLogin($url, $src, $cv = false) {
  setCookie('redirect_user_url', $src, 1);
  setCookie('api_type', 'linkedin', 1);
  if ($cv) {
    setCookie('uploadcvmodal', true, 1);
  }
  window.location.href =
    'https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=77dug7ogaz4ouh&redirect_uri=' +
    $url +
    '&scope=r_liteprofile%20r_emailaddress%20w_member_social';
}

function myGithubLogin($src, $cv = false) {
  setCookie('redirect_user_url', $src, 1);
  setCookie('api_type', 'github', 1);
  if ($cv) {
    setCookie('uploadcvmodal', true, 1);
  }
  window.location.href =
    'https://github.com/login/oauth/authorize?client_id=1f774f6bc988fd78b1ab&scope=read:user';
}

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();

  if (profile.getName()) {
    $('form')
      .find('input[name="app-name"]')
      .val(profile.getName())
      .next('label')
      .css({ opacity: 0 });
    $('form')
      .find('input[name="cv-name"]')
      .val(profile.getName())
      .next('label')
      .css({ opacity: 0 });
  }

  if (profile.getEmail()) {
    $('form')
      .find('input[name="app-email"]')
      .val(profile.getEmail())
      .next('label')
      .css({ opacity: 0 });
    $('form')
      .find('input[name="cv-email"]')
      .val(profile.getEmail())
      .next('label')
      .css({ opacity: 0 });
  }
}
