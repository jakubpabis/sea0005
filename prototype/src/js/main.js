"use strict";

function lazyImages() {
  $(".lazyset").each(function () {
    if (spaceFromBottom($(this)) && !$(this).hasClass("loaded")) {
      $(this)
        .attr("srcset", $(this).data("srcset"))
        .removeAttr("data-srcset")
        .addClass("loaded");
    }
  });
  $(".lazy").each(function () {
    if (spaceFromBottom($(this)) && !$(this).hasClass("loaded")) {
      $(this)
        .attr("src", $(this).data("src"))
        .removeAttr("data-src")
        .addClass("loaded");
    }
  });

  $(window).on("scroll resize", function () {
    $(".lazyset").each(function () {
      if (spaceFromBottom($(this)) && !$(this).hasClass("loaded")) {
        $(this)
          .attr("srcset", $(this).data("srcset"))
          .removeAttr("data-srcset")
          .addClass("loaded");
      }
    });
    $(".lazy").each(function () {
      if (spaceFromBottom($(this)) && !$(this).hasClass("loaded")) {
        $(this)
          .attr("src", $(this).data("src"))
          .removeAttr("data-src")
          .addClass("loaded");
      }
    });
  });
}

function knowledgeFilterToggle() {
  $(".knowledge__filters")
    .find(".card")
    .on("click", function () {
      if (
        $(window).width() <= 991 &&
        $(".knowledge__filters").hasClass("not-opened")
      ) {
        $(".knowledge__filters").removeClass("not-opened");
      }
    });

  $(".knowledge__filters")
    .find(".closethis")
    .on("click", function () {
      if ($(window).width() <= 991) {
        $(".knowledge__filters").addClass("not-opened");
      }
    });
}

function jobsFilterToggle() {
  $(".jobs__list-filters")
    .find(".card")
    .on("click", function (e) {
      if (
        $(window).width() <= 991 &&
        $(".jobs__list-filters").hasClass("not-opened")
      ) {
        $(".jobs__list-filters").removeClass("not-opened");
      }
    });

  $(".jobs__list-filters")
    .find(".closethis")
    .on("click", function () {
      if ($(window).width() <= 991) {
        $(".jobs__list-filters").addClass("not-opened");
      }
    });
}

function uglyInput() {
  $(".ugly").each(function () {
    var $input = $(this).find("input, textarea");
    $input.on("change focusout", function () {
      if (!$input.val() === true) {
        $input.parent().find(".ugly-label").css({ opacity: 1 });
      } else {
        $input.parent().find(".ugly-label").css({ opacity: 0 });
      }
    });
  });
}

function chatOpen() {
  $("#chat").on("click", function (event) {
    if (!$(event.target).hasClass("close")) {
      $("#chat").addClass("d-none");
      $("#chat-application").addClass("showed");
      $("#chat-application-iframe")
        .contents()
        .find("#widgetPanel")
        .trigger("click");
    }
  });

  $("#chat-application, #chat-application-iframe").on("change", function () {
    if ($("#chat-application").height() < 100) {
      $("#chat-application").removeClass("showed");
    }
  });
}

function chatClose() {
  $("#chat").addClass("closed");
}

function homeHashtags() {
  $(".home__middle-hashtags")
    .find("li")
    .on("click", function () {
      $("#homeSearchInput").val($(this).text().replace("#", "")).focus();
    });
}

function filterSelect() {
  $("#filter")
    .find(".filters")
    .find("li")
    .find("input")
    .on("change", function () {
      if ($(this).parent().parent().hasClass("active")) {
        $(this).parent().parent().removeClass("active");
        $(this)
          .parent()
          .next()
          .find("li")
          .removeClass("active")
          .find("input")
          .prop("checked", false);
      } else {
        $(this).parent().parent().addClass("active");
      }
    });
  $("#filter")
    .find(".filter-title")
    .on("click", function () {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active").parent().removeClass("active");
        $(this)
          .next(".filters")
          .find("li")
          .find("input")
          .prop("checked", false)
          .parent()
          .parent()
          .removeClass("active");
      } else {
        $(this).addClass("active").parent().addClass("active");
      }
    });
}

function teamShowMore() {
  $(".team__item-showmore").on("click", function (e) {
    e.preventDefault();
    $(this)
      .parent()
      .addClass("d-none")
      .parent()
      .parent()
      .next(".team__item-hidden")
      .removeClass("d-none");
  });
  $(".team__item-showless").on("click", function (e) {
    e.preventDefault();
    $(this)
      .parent()
      .parent()
      .addClass("d-none")
      .prev()
      .find(".btns")
      .removeClass("d-none");
  });
}

function menuMobile() {
  $("button.mobileMenu").on("click", function () {
    $(this).toggleClass("active");
    $(".navigation__upper").toggleClass("d-block");
  });
}

function quickFilters() {
  $(".header__jobs-cats")
    .find("a")
    .on("click", function (e) {
      e.preventDefault();
      var $form = $("#main-jobs-filter-form");
      switch ($(this).attr("href")) {
        case "#it":
          var $input = $(".jobs__list-filters")
            .find(".job-category-filters")
            .find("li")
            .find('input[data-name="it"]');
          var $children = $(".jobs__list-filters")
            .find(".job-category-filters")
            .find("li")
            .find('input[data-name="it"]')
            .parent()
            .next("ul")
            .find("input");
          if ($input) {
            $input.prop("checked", !$input.prop("checked"));
            if ($children) {
              $children.prop("checked", false);
            }
            $form.submit();
          }
          break;
        case "#sales":
          var $input = $(".jobs__list-filters")
            .find(".job-category-filters")
            .find("li")
            .find('input[data-name="sales"]');
          var $children = $(".jobs__list-filters")
            .find(".job-category-filters")
            .find("li")
            .find('input[data-name="sales"]')
            .parent()
            .next("ul")
            .find("input");
          if ($input) {
            $input.prop("checked", !$input.prop("checked"));
            if ($children) {
              $children.prop("checked", false);
            }
            $form.submit();
          }
          break;
        case "#marketing":
          var $input = $(".jobs__list-filters")
            .find(".job-category-filters")
            .find("li")
            .find('input[data-name="marketing"]');
          var $children = $(".jobs__list-filters")
            .find(".job-category-filters")
            .find("li")
            .find('input[data-name="marketing"]')
            .parent()
            .next("ul")
            .find("input");
          if ($input) {
            $input.prop("checked", !$input.prop("checked"));
            if ($children) {
              $children.prop("checked", false);
            }
            $form.submit();
          }
          break;
        case "#executive":
          var $input = $(".jobs__list-filters")
            .find(".job-salary-filters")
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
        case "#freelance":
          var $input = $(".jobs__list-filters")
            .find(".job-type-filters")
            .find("li")
            .find(
              'input[data-name="freelance"], input[data-name="freelance-interim-contractor"]'
            );
          if ($input) {
            $input.prop("checked", !$input.prop("checked"));
            $form.submit();
          }
          break;
      }
    });

  $(".jobs__list-filters")
    .find("li.active")
    .each(function () {
      if ($(this).find('input[data-name="it"]').is(":checked")) {
        $(".header__jobs-cats").find('a[href="#it"]').addClass("active");
      }
      if ($(this).find('input[data-name="sales"]').is(":checked")) {
        $(".header__jobs-cats").find('a[href="#sales"]').addClass("active");
      }
      if ($(this).find('input[data-name="freelance"]').is(":checked")) {
        $(".header__jobs-cats").find('a[href="#freelance"]').addClass("active");
      }
    });

  if (
    $(".jobs__list-filters")
      .find(".job-salary-filters")
      .find('input[name="salary_min"]')
      .val() == 80000
  ) {
    $(".header__jobs-cats").find('a[href="#executive"]').addClass("active");
  }
}

function itemsDown($item) {
  var item = $("." + $item);
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
    item.css({ "margin-top": fH + "px" });
  }
}

function bodyGradient() {
  var $blue = "#94D4E9";
  var $light = "#C0E5F2";
  var $height = $(".body-bg-gradient").height();
  if ($(".flex_content-tags").length > 0) {
    var $top =
      $(".flex_content-tags").offset().top -
      $(".body-bg-gradient").offset().top +
      $(".flex_content-tags").height() / 2;
    var $middle = ($top * 100) / $height;
  } else {
    var $top = $(".body-bg-gradient").height() / 2;
    var $middle = 50;
  }
  //var $bottom = $('.flex_content-tags').offset().bottom - $('.body-bg-gradient').offset().bottom;

  var $gradient =
    "(180deg, " +
    $blue +
    " 0%, " +
    $light +
    " " +
    $middle +
    "%, " +
    $blue +
    " 100%)";
  var $normal = "linear-gradient" + $gradient;
  var $moz = "-moz-linear-gradient" + $gradient;
  var $webkit = "-webkit-linear-gradient" + $gradient;
  $(".body-bg-gradient").css({
    background: $webkit,
    background: $moz,
    background: $normal,
  });
}

jQuery(document).ready(function () {
  lazyImages();
  uglyInput();
  filterSelect();
  menuMobile();
  knowledgeFilterToggle();
  teamShowMore();
  jobsFilterToggle();
  quickFilters();
  onFormSubmit();
  onFormLoad();
  appValidation();

  if ($(".body-bg-gradient").length > 0) {
    bodyGradient();
  }

  $("div.dropdown-menu")
    .parent()
    .on("shown.bs.dropdown", function () {
      itemsDown("sub-extra");
    });

  $("form").each(function () {
    $(this).preventDoubleSubmission();
  });

  if ($(".home__middle-hashtags").length != 0) {
    homeHashtags();
  }

  if ($("#searchModal")) {
    $("#searchModal").on("shown.bs.modal", function (e) {
      $("#searchModal").find(".searchInput").find("input").focus();
    });
  }

  if ($("#job-application-form").length > 0) {
    afterFormOpen();
    $("#app-dob-datepicker").datepicker({
      format: "dd-mm-yyyy",
      weekStart: 1,
      autoclose: true,
      startDate: "01-01-1920",
    });
  }

  if ($("#cv-upload-form").length > 0) {
    $("#uploadCVModal").on("show.bs.modal", function (e) {
      afterFormOpen();
      $("#cv-dob-datepicker").datepicker({
        format: "dd-mm-yyyy",
        weekStart: 1,
        autoclose: true,
        startDate: "01-01-1920",
      });
    });
  }

  if ($(".continuous-slider").length > 0) {
    var $i = 1;
    $(".continuous-slider").each(function () {
      console.log($(this));
      if ($i % 2 === 0) {
        $(this).infiniteslide({
          direction: "left",
          pauseonhover: true,
          speed: 69,
        });
      } else {
        $(this).infiniteslide({
          direction: "right",
          pauseonhover: true,
          speed: 69,
        });
      }
      $i++;
    });
  }
});

function megaMenu() {
  $(".mega-menu-parent").on("mouseenter click", function () {
    $(".mega-menu-container")
      .not($(this).find(".mega-menu-container"))
      .stop(true, true)
      .css({ display: "none" });
    $(this)
      .find(".mega-menu-container")
      .stop(true, true)
      .css({ display: "block" });
  });
  $(".mega-menu-parent").on("mouseleave", function () {
    $(this)
      .find(".mega-menu-container")
      .stop(true, true)
      .css({ display: "none" });
  });

  $(".mega-menu__side-submenu-parent")
    .find("> a")
    .on("click focusin mouseenter", function () {
      $(".mega-menu__side-submenu-parent")
        .find("> a")
        .not($(this))
        .stop(true, true)
        .removeClass("active");
      $(".mega-menu__side-submenu")
        .not($(this).parent().find(".mega-menu__side-submenu"))
        .stop(true, true)
        .css({ display: "none" });
      $(this)
        .addClass("active")
        .parent()
        .find(".mega-menu__side-submenu")
        .stop(true, true)
        .css({ display: "block" });
    });
  $(".mega-menu__big-submenu")
    .find("> li")
    .find("> a")
    .on("mouseenter", function () {
      $(".mega-menu__big-submenu")
        .find("> li")
        .find("> a")
        .not($(this))
        .removeClass("active")
        .parent()
        .find(".mega-menu__side-submenu")
        .stop(true, true)
        .css({ display: "none" });
    });
  $(".mega-menu__side-submenu-parent")
    .find("> a")
    .on("focusout", function () {
      $(this)
        .removeClass("active")
        .parent()
        .find(".mega-menu__side-submenu")
        .stop(true, true)
        .css({ display: "none" });
    });
}

jQuery(window).on("load", function () {
  lazyImages();
  //chatOpen();
  //itemsDown( 'sub-extra' );
  megaMenu();

  // if($('.home__clients').length != 0) {
  // 	homepageClients();
  // }

  if ($(".owl-carousel.articles-slider-cards").length > 0) {
    var $owl = $(".owl-carousel.articles-slider-cards");
    $owl.owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      dots: false,
      lazyLoad: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        575: {
          items: 2,
        },
      },
    });
	}
  if ($(".owl-carousel").length > 0) {
    var $owl = $(".owl-carousel");
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
          items: 1,
        },
        420: {
          items: 2,
        },
        767: {
          items: 3,
        },
        991: {
          items: 6,
        },
      },
    });

    $(".custom-owl-prev").click(function () {
      $owl.trigger("prev.owl.carousel");
    });
    $(".custom-owl-next").click(function () {
      $owl.trigger("next.owl.carousel");
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

  if ($(".body-bg-gradient").length > 0) {
    bodyGradient();
  }
});

jQuery(window).on("resize", function () {
  if ($(".body-bg-gradient").length > 0) {
    bodyGradient();
  }
});

jQuery(document).on("click", ".dropdown-menu", function (e) {
  e.stopPropagation();
});
