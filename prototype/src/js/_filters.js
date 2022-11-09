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
function filterSelect() {
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
