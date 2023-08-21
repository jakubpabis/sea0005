function uglyInput() {
  $('.ugly').each(function () {
    var $input = $(this).find('input, textarea');
    $input.on('change focusout', function () {
      if (!$input.val() === true) {
        $input.parent().find('.ugly-label').css({ opacity: 1 });
      } else {
        $input.parent().find('.ugly-label').css({ opacity: 0 });
      }
    });
  });
}

function homeHashtags() {
  $('.home__middle-hashtags')
    .find('li')
    .on('click', function () {
      $('#homeSearchInput').val($(this).text().replace('#', '')).focus();
    });
}

function teamShowMore() {
  $('.team__item-showmore').on('click', function (e) {
    e.preventDefault();
    $(this)
      .parent()
      .addClass('d-none')
      .parent()
      .parent()
      .next('.team__item-hidden')
      .removeClass('d-none');
  });
  $('.team__item-showless').on('click', function (e) {
    e.preventDefault();
    $(this)
      .parent()
      .parent()
      .addClass('d-none')
      .prev()
      .find('.btns')
      .removeClass('d-none');
  });
}

function bodyGradient() {
  var $blue = '#94D4E9';
  var $light = '#C0E5F2';
  var $height = $('.body-bg-gradient').height();
  if ($('.flex_content-tags').length > 0) {
    var $top =
      $('.flex_content-tags').offset().top -
      $('.body-bg-gradient').offset().top +
      $('.flex_content-tags').height() / 2;
    var $middle = ($top * 100) / $height;
  } else {
    var $top = $('.body-bg-gradient').height() / 2;
    var $middle = 50;
  }
  //var $bottom = $('.flex_content-tags').offset().bottom - $('.body-bg-gradient').offset().bottom;

  var $gradient =
    '(180deg, ' +
    $blue +
    ' 0%, ' +
    $light +
    ' ' +
    $middle +
    '%, ' +
    $blue +
    ' 100%)';
  var $normal = 'linear-gradient' + $gradient;
  var $moz = '-moz-linear-gradient' + $gradient;
  var $webkit = '-webkit-linear-gradient' + $gradient;
  $('.body-bg-gradient').css({
    background: $webkit,
    background: $moz,
    background: $normal,
  });
}

function slideThem() {
  var el = $('*[href*="#"]');
  if (el) {
    el.on('click', function (e) {
      e.preventDefault();
      if ($(this).attr('href') === '#openCVmodal') {
        $('#uploadCVModal').modal(
          { backdrop: 'static', keyboard: false },
          'show'
        );
      } else {
        slideTo(el.attr('href'));
      }
    });
  }
}

function bottomBar() {
  var bar = $('.bottom-bar');
  bar.each(function () {
    var height = $(this).outerHeight();
    if (!$(this).hasClass('show') && $(window).scrollTop() > height) {
      $(this).addClass('show');
      $('#wrapper').css({ 'padding-bottom': height + 'px' });
    }
  });
}

function playVideoButton() {
  if (mobileAndTabletCheck()) {
    $('.header__video')
      .find('.vidvid')
      .on('click', function () {
        var video = $(this).find('video').get(0);
        var button = $(this).find('.play-button');
        if (video.paused) {
          video.play();
          button.removeClass('d-block').addClass('d-none');
        } else {
          video.pause();
          button.removeClass('d-none').addClass('d-block');
        }
      });
    $('.header__video')
      .find('video')
      .on('click', function () {
        var video = $(this).get(0);
        var button = $(this).next('.play-button');
        if (video.paused) {
          video.play();
          button.removeClass('d-block').addClass('d-none');
        } else {
          video.pause();
          button.removeClass('d-none').addClass('d-block');
        }
      });
  }
}

function socialShareJob() {
  $('.social-share.btn').on('mouseenter', function () {
    $(this)
      .stop(true, true)
      .removeClass('square')
      .find('.social-share-open')
      .addClass('d-none')
      .parent()
      .find('.social-share-close, .social-share-buttons')
      .removeClass('d-none');
  });
  $('.social-share.btn').on('mouseleave', function () {
    $(this)
      .stop(true, true)
      .addClass('square')
      .find('.social-share-open')
      .removeClass('d-none')
      .parent()
      .find('.social-share-close, .social-share-buttons')
      .addClass('d-none');
  });
}

function jobsLangLink() {
  if ($('#thePostSlugForJobLink') && $('#thePostSlugForJobLink').data('url')) {
    var $url = $('#thePostSlugForJobLink').data('url');
    var $langs = $('ul.lang');
    var $en = $langs.find('li.lang-item').find('a[lang="en-GB"]');
    var $nl = $langs.find('li.lang-item').find('a[lang="nl-NL"]');
    $en.each(function () {
      $(this).attr('href', '/en/job/' + $url);
    });
    $nl.each(function () {
      $(this).attr('href', '/nl/vacature/' + $url);
    });
  }
}

jQuery(document).ready(function () {
  jQuery('#searchPopupModal').on('shown.bs.modal', function () {
    jQuery('#searchPopupModal').find('.job-search-nice').focus();
  });
  if (jQuery('#pleaseShowUploadCVModal').length > 0) {
    jQuery('#uploadCVModal').modal(
      { backdrop: 'static', keyboard: false },
      'show'
    );
  }
  if (jQuery('#pleaseAddCookiesScriptForPopups').length > 0) {
    // var $type = jQuery('#pleaseAddCookiesScriptForPopups').data('popupname');
    // var $cookie = jQuery('#pleaseAddCookiesScriptForPopups').data(
    //   'popupcookie'
    // );
    // var $cookieTime = jQuery('#pleaseAddCookiesScriptForPopups').data(
    //   'popupcookietime'
    // );
    // setTimeout(function () {
    //   jQuery('#' + $type + 'PopupModal').modal('show');
    // }, $cookieTime);
    // jQuery('#' + $type + 'PopupModal')
    //   .find('button.close')
    //   .on('click', function () {
    //     setCookie($type + '_popup', true, $cookie);
    //   });
  }
});

function openNewsletterSubscribeModal() {
  jQuery('.pleaseOpenSubscribeModalPopup').on('click', function (e) {
    e.preventDefault();
    jQuery('#subscribePopupModal').modal(
      { backdrop: 'static', keyboard: false },
      'show'
    );
  });
}
