'use strict';

function knowledgeFilterToggle() {
  $('.knowledge__filters')
    .find('.card')
    .on('click', function () {
      if (
        $(window).width() <= 991 &&
        $('.knowledge__filters').hasClass('not-opened')
      ) {
        $('.knowledge__filters').removeClass('not-opened');
      }
    });

  $('.knowledge__filters')
    .find('.closethis')
    .on('click', function () {
      if ($(window).width() <= 991) {
        $('.knowledge__filters').addClass('not-opened');
      }
    });
}

function jobsFilterToggle() {
  $('.jobs__list-filters')
    .find('.card')
    .on('click', function (e) {
      if (
        $(window).width() <= 991 &&
        $('.jobs__list-filters').hasClass('not-opened')
      ) {
        $('.jobs__list-filters').removeClass('not-opened');
      }
    });

  $('.jobs__list-filters')
    .find('.closethis')
    .on('click', function () {
      if ($(window).width() <= 991) {
        $('.jobs__list-filters').addClass('not-opened');
      }
    });
}

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

function chatOpen() {
  $('#chat').on('click', function (event) {
    if (!$(event.target).hasClass('close')) {
      $('#chat').addClass('d-none');
      $('#chat-application').addClass('showed');
      $('#chat-application-iframe')
        .contents()
        .find('#widgetPanel')
        .trigger('click');
    }
  });

  $('#chat-application, #chat-application-iframe').on('change', function () {
    if ($('#chat-application').height() < 100) {
      $('#chat-application').removeClass('showed');
    }
  });
}

function chatClose() {
  $('#chat').addClass('closed');
}

function homeHashtags() {
  $('.home__middle-hashtags')
    .find('li')
    .on('click', function () {
      $('#homeSearchInput').val($(this).text().replace('#', '')).focus();
    });
}

function filterSelect() {
  // if ($("#filter")) {
  //   var top = parseInt(getCookie("topScroll"));
  //   if (top) $(document).scrollTop(top);
  // }
  $('#filter')
    .find('.filters')
    .find('li')
    .find('input')
    .on('change', function () {
      if ($(this).parent().parent().hasClass('active')) {
        $(this).parent().parent().removeClass('active');
        $(this)
          .parent()
          .next()
          .find('li')
          .removeClass('active')
          .find('input')
          .prop('checked', false);
      } else {
        $(this).parent().parent().addClass('active');
      }
      // var top = $(document).scrollTop();
      // setCookie("topScroll", top, 0.04);
      // setTimeout(function () {
      //   $('#main-jobs-filter-form, #main-posts-filter-form').submit();
      // }, 250);
    });
  $('#filter')
    .find('.filter-title')
    .on('click', function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active').parent().removeClass('active');
        $(this)
          .next('.filters')
          .find('li')
          .find('input')
          .prop('checked', false)
          .parent()
          .parent()
          .removeClass('active');
      } else {
        $(this).addClass('active').parent().addClass('active');
      }
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

function menuMobile() {
  $('button.mobileMenu').on('click', function () {
    $(this).toggleClass('active');
    $('.navigation-main-menu').toggleClass('d-block');
  });
}

function quickFilters() {
  $('.header__jobs-cats')
    .find('a')
    .on('click', function (e) {
      e.preventDefault();
      var $form = $('#main-jobs-filter-form');
      switch ($(this).attr('href')) {
        case '#it':
          var $input = $('.jobs__list-filters')
            .find('.job-category-filters')
            .find('li')
            .find('input[data-name="it"]');
          var $children = $('.jobs__list-filters')
            .find('.job-category-filters')
            .find('li')
            .find('input[data-name="it"]')
            .parent()
            .next('ul')
            .find('input');
          if ($input) {
            $input.prop('checked', !$input.prop('checked'));
            if ($children) {
              $children.prop('checked', false);
            }
            $form.submit();
          }
          break;
        case '#sales':
          var $input = $('.jobs__list-filters')
            .find('.job-category-filters')
            .find('li')
            .find('input[data-name="sales"]');
          var $children = $('.jobs__list-filters')
            .find('.job-category-filters')
            .find('li')
            .find('input[data-name="sales"]')
            .parent()
            .next('ul')
            .find('input');
          if ($input) {
            $input.prop('checked', !$input.prop('checked'));
            if ($children) {
              $children.prop('checked', false);
            }
            $form.submit();
          }
          break;
        case '#marketing':
          var $input = $('.jobs__list-filters')
            .find('.job-category-filters')
            .find('li')
            .find('input[data-name="marketing"]');
          var $children = $('.jobs__list-filters')
            .find('.job-category-filters')
            .find('li')
            .find('input[data-name="marketing"]')
            .parent()
            .next('ul')
            .find('input');
          if ($input) {
            $input.prop('checked', !$input.prop('checked'));
            if ($children) {
              $children.prop('checked', false);
            }
            $form.submit();
          }
          break;
        case '#executive':
          var $input = $('.jobs__list-filters')
            .find('.job-salary-filters')
            .find('input[name="salary_min"]');
          if ($input) {
            if ($input.val() != 70000) {
              $input.val(70000);
            } else {
              $input.val(0);
            }
            $form.submit();
          }
          break;
        case '#freelance':
          var $input = $('.jobs__list-filters')
            .find('.job-type-filters')
            .find('li')
            .find(
              'input[data-name="freelance"], input[data-name="freelance-interim-contractor"]'
            );
          if ($input) {
            $input.prop('checked', !$input.prop('checked'));
            $form.submit();
          }
          break;
      }
    });

  $('.jobs__list-filters')
    .find('li.active')
    .each(function () {
      if ($(this).find('input[data-name="it"]').is(':checked')) {
        $('.header__jobs-cats').find('a[href="#it"]').addClass('active');
      }
      if ($(this).find('input[data-name="sales"]').is(':checked')) {
        $('.header__jobs-cats').find('a[href="#sales"]').addClass('active');
      }
      if ($(this).find('input[data-name="freelance"]').is(':checked')) {
        $('.header__jobs-cats').find('a[href="#freelance"]').addClass('active');
      }
    });

  if (
    $('.jobs__list-filters')
      .find('.job-salary-filters')
      .find('input[name="salary_min"]')
      .val() == 80000
  ) {
    $('.header__jobs-cats').find('a[href="#executive"]').addClass('active');
  }
}

function itemsDown($item) {
  var item = $('.' + $item);
  var cont = item.parent();
  var elH = 0;
  var dropH = cont.height();
  cont.children().each(function () {
    if (!$(this).hasClass($item)) {
      elH = elH + $(this).outerHeight(true);
      console.log($(this));
    }
  });
  var fH = dropH - elH - item.height() - 50;
  if (fH > 0) {
    item.css({ 'margin-top': fH + 'px' });
  }
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
        $('#uploadCVModal').modal('show');
      } else {
        slideTo(el.attr('href'));
      }
    });
  }
}

function acceptCookies() {
  setCookie('cookies-accepted', 'accepted', 365);
  closeCookies();
}

function closeCookies() {
  $('.cookies-notifictaion').addClass('d-none');
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

function parseParams(querystring) {
  // parse query string
  const params = new URLSearchParams(querystring);

  const obj = {};

  // iterate over all keys
  for (const key of params.keys()) {
    if (params.getAll(key).length > 1) {
      obj[key] = params.getAll(key);
    } else {
      obj[key] = params.get(key);
    }
  }

  return obj;
}

function jobsAjaxFiltering() {
  $('.filters.job')
    .find('ul')
    .find('li')
    .find('a, input')
    .on('click', function () {
      var $current = window.location.search;
      var $currentObj = parseParams($current.search);
      //console.log($current);
      //console.log(parseParams($current.search));

      var $this = $(this);
      var $key = $this.data('key');
      var $value = $this.data('value');
      var $data = {
        action: 'jobs_ajax_filtering',
        url: window.location.href,
      };

      $('.job-category-filters')
        .find('*[data-key]')
        .each(function () {
          if ($(this).parent().parent('li').hasClass('active')) {
            //console.log($(this));
            var $filtersKey = $(this).data('key');
            var $filtersValue = $(this).data('value');
            //console.log($data);
            if (Array.isArray($data['"' + $filtersKey + '"'])) {
              $data['"' + $filtersKey + '"'].push($filtersValue);
            } else {
              $data['"' + $filtersKey + '"'] = [$filtersValue];
            }
            //console.log($data['"' + $filtersKey + '"']);
          }
        });

      if ($this.parent().parent('li').hasClass('active')) {
        var $index = $data['"' + $key + '"'].indexOf($value);
        //console.log($data[$key]);
        if ($index > -1) {
          $data['"' + $key + '"'].splice($index, 1);
        }
        //console.log($data[$key]);
        $this.parent().parent('li').removeClass('active');
      } else {
        $this.parent().parent('li').addClass('active');

        if (Array.isArray($data['"' + $key + '"'])) {
          $data['"' + $key + '"'].push($value);
        } else {
          $data['"' + $key + '"'] = [$value];
        }
        //console.log($data['"' + $key + '"']);
      }

      var $dataCopy = {};
      for (var [key, value] of Object.entries($data)) {
        console.log(key);
        if (key !== 'action' && key !== 'url') {
          $dataCopy[key] = value;
        }
      }
      console.log($dataCopy);

      var $cURL = $data.url;
      // console.log($cURL);

      var recursiveEncoded = $.param($dataCopy);
      var url = new URL($cURL);
      // console.log(`url: ` + url);
      url.search = recursiveEncoded;
      var params = recursiveEncoded
        .toString()
        .replace(/"/g, '')
        .replace(/%22/g, '');
      // console.log(`url: ` + url);
      // console.log(`usr.search: ` + url.search);
      var new_url = url.toString().replace(/"/g, '').replace(/%22/g, '');
      console.log(`new url: ` + new_url);
      window.history.replaceState({}, '', new_url);
      $data['params'] = params;

      console.log($data);

      $.ajax({
        type: 'POST',
        url: '/wp-admin/admin-ajax.php',
        dataType: 'json',
        data: $data,
        success: function (res) {
          $('#jobs__list-cont').html(res.html);
          console.log(res);
        },
        error: function (err) {
          console.error(err);
        },
      });

      return false;
    });
}

function postsAjaxFiltering() {
  $('.filters.post')
    .find('ul')
    .find('li')
    .find('a, input')
    .on('click', function () {
      //var $current = window.location.search;
      //var $currentObj = parseParams($current.search);
      //console.log($current);
      //console.log(parseParams($current.search));

      var $this = $(this);
      var $key = $this.data('key');
      var $value = $this.data('value');
      var $data = {
        action: 'post_ajax_filtering',
        url: window.location.href,
      };

      $('.job-category-filters')
        .find('*[data-key]')
        .each(function () {
          if ($(this).parent().parent('li').hasClass('active')) {
            //console.log($(this));
            var $filtersKey = $(this).data('key');
            var $filtersValue = $(this).data('value');
            //console.log($data);
            if (Array.isArray($data['"' + $filtersKey + '"'])) {
              $data['"' + $filtersKey + '"'].push($filtersValue);
            } else {
              $data['"' + $filtersKey + '"'] = [$filtersValue];
            }
            //console.log($data['"' + $filtersKey + '"']);
          }
        });

      if ($this.parent().parent('li').hasClass('active')) {
        var $index = $data['"' + $key + '"'].indexOf($value);
        //console.log($data[$key]);
        if ($index > -1) {
          $data['"' + $key + '"'].splice($index, 1);
        }
        //console.log($data[$key]);
        $this.parent().parent('li').removeClass('active');
      } else {
        $this.parent().parent('li').addClass('active');

        if (Array.isArray($data['"' + $key + '"'])) {
          $data['"' + $key + '"'].push($value);
        } else {
          $data['"' + $key + '"'] = [$value];
        }
        //console.log($data['"' + $key + '"']);
      }

      var $dataCopy = {};
      for (var [key, value] of Object.entries($data)) {
        console.log(key);
        if (key !== 'action' && key !== 'url') {
          $dataCopy[key] = value;
        }
      }
      //console.log($dataCopy);

      var $cURL = $data.url;
      // console.log($cURL);

      var recursiveEncoded = $.param($dataCopy);
      var url = new URL($cURL);
      // console.log(`url: ` + url);
      url.search = recursiveEncoded;
      // var params = recursiveEncoded
      //   .toString()
      //   .replace(/"/g, '')
      //   .replace(/%22/g, '');
      // console.log(`url: ` + url);
      // console.log(`usr.search: ` + url.search);
      var new_url = url.toString().replace(/"/g, '').replace(/%22/g, '');
      //console.log(`new url: ` + new_url);
      //window.history.replaceState({}, '', new_url);
      window.location.href = new_url;
      //$data['params'] = params;

      // console.log($data);

      // $.ajax({
      //   type: 'POST',
      //   url: '/wp-admin/admin-ajax.php',
      //   dataType: 'json',
      //   data: $data,
      //   success: function (res) {
      //     $('#jobs__list-cont').html(res.html);
      //     console.log(res);
      //   },
      //   error: function (err) {
      //     console.error(err);
      //   },
      // });

      return false;
    });
}

jQuery(document).ready(function () {
  if (mobileAndTabletCheck()) {
    $('body').addClass('is-mobile');
    $('.header__video')
      .find('video')
      .on('click', function () {
        if ($(this).get(0).paused || $(this).get(0).ended) {
          $(this).get(0).play();
        } else {
          $(this).get(0).pause();
        }
      });
  } else {
    $('body').removeClass('is-mobile');
  }
  lazyImages();
  uglyInput();
  filterSelect();
  menuMobile();
  jobsLangLink();
  knowledgeFilterToggle();
  teamShowMore();
  jobsFilterToggle();
  quickFilters();
  onFormSubmit();
  onFormLoad();
  appValidation();
  slideThem();
  playVideoButton();
  socialShareJob();
  jobsAjaxFiltering();
  postsAjaxFiltering();

  console.log(getCookie('cookies-accepted'));

  if (getCookie('cookies-accepted')) {
  }

  if ($('.body-bg-gradient').length > 0) {
    bodyGradient();
  }

  $('div.dropdown-menu')
    .parent()
    .on('shown.bs.dropdown', function () {
      itemsDown('sub-extra');
    });

  $('form').each(function () {
    $(this).preventDoubleSubmission();
  });

  if ($('.home__middle-hashtags').length != 0) {
    homeHashtags();
  }

  if ($('#searchModal')) {
    $('#searchModal').on('shown.bs.modal', function (e) {
      $('#searchModal').find('.searchInput').find('input').focus();
    });
  }

  if ($('#job-application-form').length > 0) {
    afterFormOpen();
    $('#app-dob-datepicker').datepicker({
      format: 'dd-mm-yyyy',
      weekStart: 1,
      autoclose: true,
      startDate: '01-01-1920',
    });
  }

  if ($('#cv-upload-form').length > 0) {
    $('#uploadCVModal').on('show.bs.modal', function (e) {
      afterFormOpen();
      $('#cv-dob-datepicker').datepicker({
        format: 'dd-mm-yyyy',
        weekStart: 1,
        autoclose: true,
        startDate: '01-01-1920',
      });
    });
  }

  if ($('.continuous-slider').length > 0) {
    var $i = 1;
    $('.continuous-slider').each(function () {
      console.log($(this));
      if ($i % 2 === 0) {
        $(this).infiniteslide({
          direction: 'left',
          pauseonhover: true,
          speed: 69,
        });
      } else {
        $(this).infiniteslide({
          direction: 'right',
          pauseonhover: true,
          speed: 69,
        });
      }
      $i++;
    });
  }
});

function mobileMenuGoBack() {
  $('nav.navigation').trigger('click');
}

function megaMenu() {
  // var $height = [];
  // $(".mega-menu__big-submenu").each(function () {
  //   var $this = $(this);
  //   $this.find(".mega-menu__side-submenu").each(function () {
  //     $height.push($(this).height());
  //   });
  //   console.log("some");
  // });
  // console.log($height);
  $(document).on('click', function (event) {
    var $this = $(event.target);
    //console.log($this.parent());
    if (
      ($this.parents('.mega-menu-parent').length < 1 &&
        $('.mega-menu-parent').is(':visible')) ||
      $this.hasClass('mega-menu-go-back')
    ) {
      console.log($this);
      $('.mega-menu-parent')
        .find('.mega-menu-container')
        .stop(true, true)
        .css({ display: 'none' });
    }
  });

  $('.mega-menu-parent').on('click', function () {
    $('.mega-menu-container')
      .not($(this).find('.mega-menu-container'))
      .stop(true, true)
      .css({ display: 'none' });
    $(this)
      .find('.mega-menu-container')
      .stop(true, true)
      .css({ display: 'block' });
  });
  // $(".mega-menu-parent").on("focusout", function () {
  //   if ($focusout) {
  //     $(this)
  //       .find(".mega-menu-container")
  //       .stop(true, true)
  //       .css({ display: "none" });
  //   }
  // });

  $('.mega-menu__side-submenu-parent')
    .find('> a')
    .on('click focusin', function () {
      $focusout = false;
      var $this = $(this);
      setTimeout(function () {
        $('.mega-menu__side-submenu-parent')
          .find('> a')
          .not($this)
          .stop(true, true)
          .removeClass('active');
        $('.mega-menu__side-submenu')
          .not($this.parent().find('.mega-menu__side-submenu'))
          .stop(true, true)
          .css({ display: 'none' });
        $this
          .addClass('active')
          .parent()
          .find('.mega-menu__side-submenu')
          .stop(true, true)
          .css({ display: 'block' });
      }, 200);
    });
  $('.mega-menu__big-submenu')
    .find('> li')
    .find('> a')
    .on('click focusin', function () {
      $focusout = false;
      var $this = $(this);
      setTimeout(function () {
        $('.mega-menu__big-submenu')
          .find('> li')
          .find('> a')
          .not($this)
          .removeClass('active')
          .parent()
          .find('.mega-menu__side-submenu')
          .stop(true, true)
          .css({ display: 'none' });
        console.log('some');
        $this
          .parent()
          .parent()
          .parent()
          .css({
            'min-height':
              $this.parent().find('.mega-menu__side-submenu').height() +
              50 +
              'px',
          });
      }, 200);
    });
  $('.mega-menu__side-submenu-parent')
    .find('> a')
    .on('focusout', function (event) {
      var $this = $(this);
      setTimeout(function () {
        $this
          .removeClass('active')
          .parent()
          .find('.mega-menu__side-submenu')
          .stop(true, true)
          .css({ display: 'none' });
      }, 200);
    });
}

jQuery(window).on('load', function () {
  lazyImages();
  chatOpen();
  //itemsDown( 'sub-extra' );
  megaMenu();
  bottomBar();

  // if($('.home__clients').length != 0) {
  // 	homepageClients();
  // }

  $('.job-category-filters')
    .find('li')
    .on('click', function () {});
  if ($('.owl-carousel').length > 0) {
    $('.owl-carousel').each(function () {
      if ($(this).hasClass('articles-slider-cards')) {
        console.log('articles-slider-cards');
        var $owlS = $(this);
        $owlS.owlCarousel({
          loop: true,
          nav: false,
          dots: false,
          lazyLoad: true,
          autoplay: true,
          autoplayTimeout: 5000,
          autoplayHoverPause: false,
          responsive: {
            0: {
              items: 1,
              margin: 15,
            },
            767: {
              items: 2,
              margin: 20,
            },
            991: {
              items: 2,
              margin: 30,
            },
          },
        });
      } else if ($(this).hasClass('no-repeat')) {
        console.log('no-repeat');
        var $owlR = $(this);
        $owlR.owlCarousel({
          loop: false,
          margin: 20,
          nav: false,
          dots: false,
          repeat: false,
          lazyLoad: true,
          autoplay: false,
          responsive: {
            0: {
              items: 1,
            },
            767: {
              items: 2,
            },
            1199: {
              items: 3,
            },
          },
        });
        $('.custom-owl-prev').click(function () {
          $owlR.trigger('prev.owl.carousel');
        });
        $('.custom-owl-next').click(function () {
          $owlR.trigger('next.owl.carousel');
        });
      } else if ($(this).hasClass('contact-form-carousel')) {
        console.log('contact-form-carousel');
        var $owlC = $(this);
        $owlC.owlCarousel({
          loop: false,
          margin: 10,
          nav: false,
          dots: false,
          lazyLoad: false,
          autoplay: false,
          mouseDrag: false,
          touchDrag: false,
          pullDrag: false,
          rewind: false,
          responsive: {
            0: {
              items: 1,
              autoHeight: true,
            },
            768: {
              items: 1,
              autoHeight: false,
            },
          },
        });

        $('#cta_dog_contact_section_form').on('keyup keypress', function (e) {
          var keyCode = e.keyCode || e.which;
          if (keyCode === 13) {
            e.preventDefault();
            // if (
            //   !$owl.find(".owl-item.active").find(".pristine").hasClass("required")
            // ) {
            //   $owl.stop(true, true).trigger("next.owl.carousel").stop(true, true);
            // } else if ($owl.find(".owl-item.active").find(".valid").length > 0) {
            //   $owl.stop(true, true).trigger("next.owl.carousel").stop(true, true);
            // } else {
            //   $owl.find(".owl-item.active").find(".not-valid").focus();
            //   $owl.find(".owl-item.active").find(".pristine").focus();
            //   $(this)
            //     .parent()
            //     .find("span.d-none")
            //     .removeClass("d-none")
            //     .addClass("d-block");
            // }
            return false;
          }
        });

        $owlC
          .find('input[name="cta_dog_contact_name"]')
          .on('keyup', function () {
            if ($(this).val().length > 2) {
              $(this).removeClass('not-valid');
              $(this).addClass('valid');
              $(this)
                .parent()
                .find('span.d-block')
                .addClass('d-none')
                .removeClass('d-block');
            } else {
              $(this).removeClass('valid');
              $(this).addClass('not-valid');
              $(this)
                .parent()
                .find('span.d-none')
                .removeClass('d-none')
                .addClass('d-block');
            }
          });

        $owlC
          .find('input[name="cta_dog_contact_email"]')
          .on('keyup', function () {
            if (validateEmail($(this).val())) {
              $(this).removeClass('not-valid');
              $(this).addClass('valid');
              $(this)
                .parent()
                .find('span.d-block')
                .addClass('d-none')
                .removeClass('d-block');
            } else {
              $(this).removeClass('valid');
              $(this).addClass('not-valid');
              $(this)
                .parent()
                .find('span.d-none')
                .removeClass('d-none')
                .addClass('d-block');
            }
          });

        $owlC
          .find('input[name="cta_dog_contact_message"]')
          .on('keyup', function () {
            if ($(this).val().length > 9) {
              $(this).removeClass('not-valid');
              $(this).addClass('valid');
              $(this)
                .parent()
                .find('span.d-block')
                .addClass('d-none')
                .removeClass('d-block');
            } else {
              $(this).removeClass('valid');
              $(this).addClass('not-valid');
              $(this)
                .parent()
                .find('span.d-none')
                .removeClass('d-none')
                .addClass('d-block');
            }
          });

        $owlC.find('.next').click(function () {
          if (
            !$owlC
              .find('.owl-item.active')
              .find('.pristine')
              .hasClass('required')
          ) {
            $owlC.trigger('next.owl.carousel');
          } else if ($owlC.find('.owl-item.active').find('.valid').length > 0) {
            $owlC.trigger('next.owl.carousel');
          } else {
            $owlC.find('.owl-item.active').find('.not-valid').focus();
            $owlC.find('.owl-item.active').find('.pristine').focus();
            $(this)
              .parent()
              .find('span.d-none')
              .removeClass('d-none')
              .addClass('d-block');
          }
        });
      } else {
        console.log('regular');
        var $owl = $(this);
        $owl.owlCarousel({
          loop: true,
          margin: 50,
          nav: false,
          dots: false,
          lazyLoad: true,
          autoplay: true,
          autoplayTimeout: 2500,
          autoplayHoverPause: true,
          responsive: {
            0: {
              items: 2,
            },
            575: {
              items: 3,
            },
            767: {
              items: 4,
            },
            991: {
              items: 5,
            },
            1199: {
              items: 6,
            },
          },
        });

        $('.custom-owl-prev').click(function () {
          $owl.trigger('prev.owl.carousel');
        });
        $('.custom-owl-next').click(function () {
          $owl.trigger('next.owl.carousel');
        });
      }
    });
  }

  // make it as accordion for smaller screens
  // if ($(window).width() < 992) {
  // 	$('.dropdown-menu a').click(function(e){
  // 		e.preventDefault();
  // 		  	if($(this).next('.submenu').length){
  // 		    	$(this).next('.submenu').toggle();
  // 		  	}
  // 		  	$('.dropdown').on('hide.bs.dropdown', function () {
  // 		 	$(this).find('.submenu').hide();
  // 		});
  // 	});
  // }

  if ($('.body-bg-gradient').length > 0) {
    bodyGradient();
  }
});

jQuery(window).on('resize', function () {
  if (mobileAndTabletCheck()) {
    $('body').addClass('is-mobile');
  } else {
    $('body').removeClass('is-mobile');
  }
  if ($('.body-bg-gradient').length > 0) {
    bodyGradient();
  }
  bottomBar();
});

jQuery(window).on('scroll', function () {
  bottomBar();
});

jQuery(document).on('click', '.dropdown-menu', function (e) {
  if ($(e.target).not('.mega-menu-go-back')) {
    console.log(e.target);
    e.stopPropagation();
  }
});

// from SUMEDIA.NL

function SUMEDIAvideoCarousel() {
  $('.video-cards').each(function () {
    $(this).owlCarousel({
      loop: !0,
      nav: !1,
      dots: !1,
      lazyLoad: 0,
      center: true,
      autoplay: false,
      responsive: {
        0: { items: 1, margin: 15 },
        767: { items: 2, margin: 20 },
        991: { items: 2, margin: 30 },
        1260: { items: 3, margin: 30 },
      },
    });
  });

  $('.custom-owl-prev-video').click(function () {
    owl.trigger('prev.owl.carousel');
  });

  $('.custom-owl-next-video').click(function () {
    owl.trigger('next.owl.carousel');
  });

  var owl = $('.video-cards');
  owl.owlCarousel();
  const playButtons = document.querySelectorAll(
    '.video-placeholder, .play-video'
  );
  const videoItems = document.querySelectorAll('.video');

  owl.on('changed.owl.carousel', function (event) {
    for (let i = 0; i < playButtons.length; i += 1) {
      playButtons[i].parentElement.classList.remove('active');
    }

    for (let x = 0; x < videoItems.length; x += 1) {
      videoItems[x].load();
    }
  });
}

function SUMEDIAquoteCarousel() {
  $('.quote-carousel').each(function () {
    $(this).owlCarousel({
      loop: !0,
      nav: 1,
      dots: !1,
      lazyLoad: 0,
      center: true,
      autoplay: false,
      items: 1,
    });

    var owl = $('.quote-carousel');
    owl.owlCarousel();

    $('.custom-owl-prev-quote').click(function () {
      owl.trigger('prev.owl.carousel');
    });

    $('.custom-owl-next-quote').click(function () {
      owl.trigger('next.owl.carousel');
    });
  });
}

function SUMEDIAswitchDNA() {
  const dnaSwitcher = document.querySelector('.switch-dna');

  dnaSwitcher.addEventListener('click', () => {
    var dnaItem =
      dnaSwitcher.parentElement.parentElement.parentElement.querySelectorAll(
        '.dna__items__item'
      );
    var dnaSwitcherItem = dnaSwitcher.querySelectorAll('.switch-dna--item');

    if (dnaItem[0].classList.contains('active')) {
      dnaItem[0].classList.remove('active');
      dnaItem[1].classList.add('active');

      dnaSwitcherItem[0].classList.remove('active');
      dnaSwitcherItem[1].classList.add('active');

      dnaSwitcher.id = dnaItem[1].id;
    } else if (dnaItem[1].classList.contains('active')) {
      dnaItem[1].classList.remove('active');
      dnaItem[2].classList.add('active');

      dnaSwitcherItem[1].classList.remove('active');
      dnaSwitcherItem[2].classList.add('active');

      dnaSwitcher.id = dnaItem[2].id;
    } else if (dnaItem[2].classList.contains('active')) {
      dnaItem[2].classList.remove('active');
      dnaItem[0].classList.add('active');

      dnaSwitcherItem[2].classList.remove('active');
      dnaSwitcherItem[0].classList.add('active');

      dnaSwitcher.id = dnaItem[0].id;
    }
  });
}

function SUMEDIAplayVideo() {
  const playButtons = document.querySelectorAll('.play-video');
  const videoItems = document.querySelectorAll('.video');
  const video = document.querySelector('video');
  const close = document.querySelector('.videos .mfp-close');
  if (close != null) {
    close.onclick = () => {
      video.pause();
    };
  }
  if (playButtons.length > 0) {
    for (let i = 0; i < playButtons.length; i += 1) {
      playButtons[i].addEventListener('click', () => {
        playButtons[i].parentElement.classList.add('active');

        if (videoItems.length > 0) {
          for (let x = 0; x < videoItems.length; x += 1) {
            if (videoItems[x].parentElement.classList.contains('active')) {
              videoItems[x].play();
            }
          }
        }
      });
    }
  }
}

$(document).ready(function () {
  SUMEDIAvideoCarousel();
  SUMEDIAquoteCarousel();
  SUMEDIAplayVideo();
  SUMEDIAswitchDNA();
});
