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
  if (isScriptLoaded('https://www.google.com/recaptcha/api.js') == false) {
    addScript('https://www.google.com/recaptcha/api.js');
  }
  if (isScriptLoaded('/wp-content/themes/sative/assets/js/forms.js') == false) {
    addScript('/wp-content/themes/sative/assets/js/forms.js');
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

function onFormSubmit() {
  $(document).on(
    'submit',
    '#job-application-form, #cv-upload-form',
    function () {
      $(this)
        .addClass('disabled')
        .find('input[type="submit"]')
        .attr('disabled', true)
        .addClass('disabled');
      if ($(this).attr('id') === 'job-application-form') {
        setCookie(
          'jobid_' + $(this).find('input.app-jobid').val(),
          $(this).find('input.app-jobid').val(),
          365
        );
      } else if ($(this).attr('id') === 'cv-upload-form') {
        setCookie('cvform', 'sent', 365);
      }
    }
  );
}

function onFormLoad() {
  var $jobid = $('#job-application-form').find('input.app-jobid').val();
  var $cookie = getCookie('jobid_' + $jobid);

  if (getCookie('cvform')) {
    $('#cv-upload-form').addClass('cv-sent');
  }

  if ($jobid !== 188 && $jobid == $cookie) {
    $('#job-application-form').addClass('application-sent');
  }
}

function appValidation() {
  if ($('#job-application-form').length > 0) {
    var formApp = $('#job-application-form');
    formApp.validate({
      onfocusout: function (element) {
        $(element).valid();
      },
      focusCleanup: true,
      onkeyup: false,
    });
    formApp.find('input.required').on('change focusout', function () {
      if (formApp.valid()) {
        $('.fake_btn_app').addClass('d-none');
        $('.g-recaptcha.app').removeClass('d-none');
      } else {
        $('.fake_btn_app').removeClass('d-none');
        $('.g-recaptcha.app').addClass('d-none');
      }
    });
    formApp.find('.fake_btn_app').on('click', function (e) {
      e.preventDefault();
      if (formApp.valid()) {
        $('.fake_btn_app').addClass('d-none');
        $('.g-recaptcha.app').removeClass('d-none');
        $(this).next('button.g-recaptcha.app').trigger('click').remove();
      }
    });
  }

  if ($('#cv-upload-form').length > 0) {
    $('#uploadCVModal').on('show.bs.modal', function (e) {
      var formCV = $('#cv-upload-form');
      formCV.validate({
        onfocusout: function (element) {
          $(element).valid();
        },
        focusCleanup: true,
        onkeyup: false,
      });
      formCV.find('input.required').on('change focusout', function () {
        if (formCV.valid()) {
          $('.fake_btn_cv').addClass('d-none');
          $('.g-recaptcha.cvBTN').removeClass('d-none');
        } else {
          $('.fake_btn_cv').removeClass('d-none');
          $('.g-recaptcha.cvBTN').addClass('d-none');
        }
      });
      formCV.find('.fake_btn_cv').on('click', function (e) {
        e.preventDefault();
        if (formCV.valid()) {
          $('.fake_btn_cv').addClass('d-none');
          $('.g-recaptcha.cvBTN').removeClass('d-none');
          $(this).next('button.g-recaptcha.cvBTN').trigger('click').remove();
        }
      });
    });
  }

  if ($('#subscribe-popup-form').length > 0) {
    $('#subscribePopupModal').on('show.bs.modal', function (e) {
      var formSub = $('#subscribe-popup-form');
      formSub.validate({
        onfocusout: function (element) {
          $(element).valid();
        },
        focusCleanup: true,
        onkeyup: false,
      });
      formSub.find('.required').on('change focusout', function () {
        if (
          formSub.valid() &&
          formSub.find('select.required').val() &&
          formSub.find('select.required').val().length > 0
        ) {
          $('.fake_btn_subscribe').addClass('d-none');
          $('.g-recaptcha.subscribe').removeClass('d-none');
        } else {
          $('.fake_btn_subscribe').removeClass('d-none');
          $('.g-recaptcha.subscribe').addClass('d-none');
        }
      });
      formSub.find('.fake_btn_subscribe').on('click', function (e) {
        e.preventDefault();
        if (
          formSub.valid() &&
          formSub.find('select.required').val() &&
          formSub.find('select.required').val().length > 0
        ) {
          $('.fake_btn_subscribe').addClass('d-none');
          $('.g-recaptcha.subscribe').removeClass('d-none');
          $(this)
            .next('button.g-recaptcha.subscribe')
            .trigger('click')
            .remove();
        }
      });
    });
  }
}

function onAppSubmit(token) {
  $('#job-application-form').find('button.g-recaptcha').remove();
  $('#job-application-form').find('button.fake_btn_app').addClass('d-none');
  $('#job-application-form')
    .find('button.fake_btn_app_loading')
    .removeClass('d-none');
  document.getElementById('job-application-form').submit();
}

function onCVSubmit(token) {
  $('#cv-upload-form').find('button.g-recaptcha').remove();
  $('#cv-upload-form').find('button.fake_btn_cv').addClass('d-none');
  $('#cv-upload-form').find('button.fake_btn_cv_loading').removeClass('d-none');
  document.getElementById('cv-upload-form').submit();
}

function onSubscribeSubmit(token) {
  console.log(token);
  $('#subscribe-popup-form').find('button.g-recaptcha').remove();
  $('#subscribe-popup-form')
    .find('button.fake_btn_subscribe')
    .addClass('d-none');
  $('#subscribe-popup-form')
    .find('button.fake_btn_subscribe_loading')
    .removeClass('d-none');
  document.getElementById('subscribe-popup-form').submit();
}

function onContactSubmit() {
  $('#contact_section_form').find('button.g-recaptcha').remove();
  $('#contact_section_form').find('button.fake_btn_contact').addClass('d-none');
  $('#contact_section_form')
    .find('button.fake_btn_contact_loading')
    .removeClass('d-none');
  document.getElementById('contact_section_form').submit();
}

function onSmallContactSubmit() {
  $('#cta_dog_contact_section_form').find('button.g-recaptcha').remove();
  $('#cta_dog_contact_section_form')
    .find('button.fake_btn_contact')
    .addClass('d-none');
  $('#cta_dog_contact_section_form')
    .find('button.fake_btn_small_contact_loading')
    .removeClass('d-none');
  document.getElementById('cta_dog_contact_section_form').submit();
}
