function menuMobile() {
  $('button.mobileMenu').on('click', function () {
    $(this).toggleClass('active');
    $('.navigation-main-menu').toggleClass('d-block');
  });
}
function mobileMenuGoBack() {
  $('nav.navigation').trigger('click');
}

function megaMenu() {
  $(document).on('click', function (event) {
    var $this = $(event.target);
    if (
      ($this.parents('.mega-menu-parent').length < 1 &&
        $('.mega-menu-parent').is(':visible')) ||
      $this.hasClass('mega-menu-go-back')
    ) {
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
