'use strict';

(function($) {
	$.each(['show', 'hide'], function(i, ev) {
		var el = $.fn[ev];
		$.fn[ev] = function() {
			this.trigger(ev);
			return el.apply(this, arguments);
		};
	});
})(jQuery);

jQuery.fn.preventDoubleSubmission = function() {
	$(this).on('submit',function(e){
		var $form = $(this);
	
		if ($form.data('submitted') === true) {
			// Previously submitted - don't submit again
			e.preventDefault();
		} else {
			// Mark it so that the next submit can be ignored
			$form.data('submitted', true);
		}
	});
  
	// Keep chainability
	return this;
};

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function slideTo(el)
{
	$('html, body').animate({
		scrollTop: $(el).offset().top
	}, 500);
}

// function submitOnce()
// {
// 	$('form').submit(function(e){
// 		e.preventDefault();
// 		console.log('cos');
// 		$(this).find('button[type="submit"]').addClass('disabled').prop('disabled', true).prop('type', 'button');
// 		$(this).submit();
//     });
// }

function spaceFromBottom(el)
{
	var eTop = $(el).offset().top; //get the offset top of the element
	//console.log(eTop - $(window).scrollTop()); //position of the ele w.r.t window
	if(eTop - $(window).scrollTop() < $(window).height() + 600){
		return true;
	} else {
		return false;
	}
}

function lazyImages()
{

	$('.lazyset').each(function() {
		if(spaceFromBottom($(this)) && !$(this).hasClass('loaded')) {
			$(this).attr('srcset', $(this).data('srcset')).removeAttr('data-srcset').addClass('loaded');
		}
	});
	$('.lazy').each(function() {
		if(spaceFromBottom($(this)) && !$(this).hasClass('loaded')) {
			$(this).attr('src', $(this).data('src')).removeAttr('data-src').addClass('loaded');
		}	
	});
	
	$(window).on('scroll resize', function() {
	
		$('.lazyset').each(function() {
			if(spaceFromBottom($(this)) && !$(this).hasClass('loaded')) {
				$(this).attr('srcset', $(this).data('srcset')).removeAttr('data-srcset').addClass('loaded');
			}
		});
		$('.lazy').each(function() {
			if(spaceFromBottom($(this)) && !$(this).hasClass('loaded')) {
				$(this).attr('src', $(this).data('src')).removeAttr('data-src').addClass('loaded');
			}	
		});

	});

}

function knowledgeFilterToggle()
{
	$('.knowledge__filters').find('.card').on('click', function() {
		if($(window).width() <= 991 && $('.knowledge__filters').hasClass('not-opened')) {
			$('.knowledge__filters').removeClass('not-opened');
		}
	});

	$('.knowledge__filters').find('.closethis').on('click', function() {
		if($(window).width() <= 991) {
			$('.knowledge__filters').addClass('not-opened');
		}
	});
}

function jobsFilterToggle()
{
	$('.jobs__list-filters').find('.card').on('click', function(e) {
		console.log(e.target);
		if( $(window).width() <= 991 && $('.jobs__list-filters').hasClass('not-opened') ) {
			$('.jobs__list-filters').removeClass('not-opened');
		}
	});

	$('.jobs__list-filters').find('.closethis').on('click', function() {
		if($(window).width() <= 991) {
			$('.jobs__list-filters').addClass('not-opened');
		}
	});
}

function getFileName($input, $el)
{
	$text = $input.value;
	document.getElementById($el).innerHTML = $text.split('\\')[2];
}

function uglyInput() 
{
	$('.ugly').each(function() {
		var $input = $(this).find('input, textarea');
		$input.on('change focusout', function() {
			console.log(!$input.val());
			if( !$input.val() === true ) {
				$input.parent().find('.ugly-label').css({'opacity' : 1});
			} else {
				$input.parent().find('.ugly-label').css({'opacity' : 0});
			}
		});
	});
}

function chatOpen()
{
	$('#chat').on('click', function(event) {
		if(!$(event.target).hasClass('close')) {
			$('#chat').addClass('d-none');
			$('#chat-application').addClass('showed');
			$('#chat-application-iframe').contents().find('#widgetPanel').trigger('click');
		}
	});

	$('#chat-application, #chat-application-iframe').on('change', function() {
		if($('#chat-application').height() < 100) {
			$('#chat-application').removeClass('showed');
		}
	});
}

function chatClose()
{
	$('#chat').addClass('closed');
}

function homepageClients()
{
	var $owl = $('.owl-carousel');
	$owl.owlCarousel({
		loop: true,
		margin: 0,
		nav: false,
		dots: false,
		lazyLoad: true,
		autoplay: true,
		autoplayTimeout: 2500,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1
			},
			420: {
				items: 2
			},
			767: {
				items: 3
			},
			991: {
				items: 6
			}
		}
	});

	$('.custom-owl-prev').click(function() {
		$owl.trigger('prev.owl.carousel');
	});
	$('.custom-owl-next').click(function() {
		$owl.trigger('next.owl.carousel');
	});
}

function homeHashtags()
{
	$('.home__middle-hashtags').find('li').on('click', function() {
		$('#homeSearchInput').val($(this).text().replace('#', '')).focus();
	});
}

function filterSelect()
{
	$('#filter').find('.filters').find('li').find('input').on('change', function() {
		if($(this).parent().parent().hasClass('active')) {
			$(this).parent().parent().removeClass('active');
			$(this).parent().next().find('li').removeClass('active').find('input').prop('checked', false);
		} else {
			$(this).parent().parent().addClass('active');
		}
	});
	$('#filter').find('.filter-title').on('click', function() {
		if($(this).hasClass('active')) {
			$(this).removeClass('active').parent().removeClass('active');
			$(this).next('.filters').find('li').find('input').prop('checked', false).parent().parent().removeClass('active');
			console.log($(this).next('.filters').find('li').find('input:checked').length);
		} else {
			$(this).addClass('active').parent().addClass('active');
		}
	});
}

function teamShowMore()
{
	$('.team__item-showmore').on('click', function(e) {
		e.preventDefault();
		$(this).parent().addClass('d-none').parent().parent().next('.team__item-hidden').removeClass('d-none');
	});
	$('.team__item-showless').on('click', function(e) {
		e.preventDefault();
		$(this).parent().parent().addClass('d-none').prev().find('.btns').removeClass('d-none');
	});
}

function menuMobile()
{
	$('button.mobileMenu').on('click', function() {
		$(this).toggleClass('active');
		$('.navigation__upper').toggleClass('d-block');
	});
}

function quickFilters()
{
	$('.header__jobs-cats').find('a').on('click', function(e) {
		e.preventDefault();
		var $form = $('#main-jobs-filter-form');
		switch( $(this).attr('href') ) {
			case '#it':
				var $input = $('.jobs__list-filters').find('.job-category-filters').find('li').find('input[data-name="it"]');
				var $children = $('.jobs__list-filters').find('.job-category-filters').find('li').find('input[data-name="it"]').parent().next('ul').find('input');
				if($input) {
					$input.prop('checked', !$input.prop('checked'));
					if($children) {
						$children.prop('checked', false);
					}
					$form.submit();
				}
				break;
			case '#sales':
				var $input = $('.jobs__list-filters').find('.job-category-filters').find('li').find('input[data-name="sales"]');
				var $children = $('.jobs__list-filters').find('.job-category-filters').find('li').find('input[data-name="sales"]').parent().next('ul').find('input');
				if($input) {
					$input.prop('checked', !$input.prop('checked'));
					if($children) {
						$children.prop('checked', false);
					}
					$form.submit();
				}
				break;
			case '#marketing':
				var $input = $('.jobs__list-filters').find('.job-category-filters').find('li').find('input[data-name="marketing"]');
				var $children = $('.jobs__list-filters').find('.job-category-filters').find('li').find('input[data-name="marketing"]').parent().next('ul').find('input');
				if($input) {
					$input.prop('checked', !$input.prop('checked'));
					if($children) {
						$children.prop('checked', false);
					}
					$form.submit();
				}
				break;
			case '#executive':
				var $input = $('.jobs__list-filters').find('.job-salary-filters').find('input[name="salary_min"]');
				if($input) {
					if($input.val() != 70000) {
						$input.val(70000);
					} else {
						$input.val(0);
					}
					$form.submit();
				}
				break;
			case '#freelance':
				var $input = $('.jobs__list-filters').find('.job-type-filters').find('li').find('input[data-name="freelance"], input[data-name="freelance-interim-contractor"]');
				if($input) {
					$input.prop('checked', !$input.prop('checked'));
					$form.submit();
				}
				break;
		}
	});

	$('.jobs__list-filters').find('li.active').each(function() {
	
		if( $(this).find('input[data-name="it"]').is(':checked') ) {
			$('.header__jobs-cats').find('a[href="#it"]').addClass('active');
		}
		if( $(this).find('input[data-name="sales"]').is(':checked') ) {
			$('.header__jobs-cats').find('a[href="#sales"]').addClass('active');
		}
		if( $(this).find('input[data-name="freelance"]').is(':checked') ) {
			$('.header__jobs-cats').find('a[href="#freelance"]').addClass('active');
		}

	});

	if($('.jobs__list-filters').find('.job-salary-filters').find('input[name="salary_min"]').val() == 80000) {
		$('.header__jobs-cats').find('a[href="#executive"]').addClass('active');
	}

}

$(document).ready(function() {
	
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
	$('form').preventDoubleSubmission();

	if($('.home__middle-hashtags').length != 0) {
		homeHashtags();
	}

	$("form").submit(function(){
        $("input").each(function(index, obj){
            if($(obj).val() == "") {
                $(obj).remove();
            }
        });
	});
	
	if( $('#job-application-form').length > 0 ) {
		afterFormOpen();
		$('#app-dob-datepicker').datepicker({
			format: "dd-mm-yyyy",
			weekStart: 1,
			autoclose: true,
			startDate: "01-01-1920"
		});
	}

	if( $('#cv-upload-form').length > 0  ) {
		$('#cv-dob-datepicker').datepicker({
			format: "dd-mm-yyyy",
			weekStart: 1,
			autoclose: true,
			startDate: "01-01-1920"
		});
	}

});

$(window).on('load', function() {
	
	lazyImages();
	chatOpen();

	if($('.home__clients').length != 0) {
		homepageClients();
	}

});