'use strict';

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
  openNewsletterSubscribeModal();

  $('select[multiple]').multiselect({
    columns: 1,
    search: true,
    selectAll: true,
    minHeight: 300,
  });

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

jQuery(window).on('load', function () {
  lazyImages();
  megaMenu();
  bottomBar();

  // $('.job-category-filters')
  //   .find('li')
  //   .on('click', function () {});
  if ($('.owl-carousel').length > 0) {
    runOwlCarousels();
  }

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
    e.stopPropagation();
  }
});

// function chatOpen() {
//   $('#chat').on('click', function (event) {
//     if (!$(event.target).hasClass('close')) {
//       $('#chat').addClass('d-none');
//       $('#chat-application').addClass('showed');
//       $('#chat-application-iframe')
//         .contents()
//         .find('#widgetPanel')
//         .trigger('click');
//     }
//   });

//   $('#chat-application, #chat-application-iframe').on('change', function () {
//     if ($('#chat-application').height() < 100) {
//       $('#chat-application').removeClass('showed');
//     }
//   });
// }

// function chatClose() {
//   $('#chat').addClass('closed');
// }
