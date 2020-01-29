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

function slideTo(el)
{
	$('html, body').animate({
		scrollTop: $(el).offset().top
	}, 500);
}

function lazyImages()
{

	$('.lazyset').each(function() {
		if($(this).visible( true ) && !$(this).hasClass('loaded')) {
			$(this).attr('srcset', $(this).data('srcset')).removeAttr('data-srcset').addClass('loaded');
		}
	});
	$('.lazy').each(function() {
		if($(this).visible( true ) && !$(this).hasClass('loaded')) {
			$(this).attr('src', $(this).data('src')).removeAttr('data-src').addClass('loaded');
		}	
	});
	
	$(window).on('scroll', function() {
	
		$('.lazyset').each(function() {
			if($(this).visible( true ) && !$(this).hasClass('loaded')) {
				$(this).attr('srcset', $(this).data('srcset')).removeAttr('data-srcset').addClass('loaded');
			}
		});
		$('.lazy').each(function() {
			if($(this).visible( true ) && !$(this).hasClass('loaded')) {
				$(this).attr('src', $(this).data('src')).removeAttr('data-src').addClass('loaded');
			}	
		});

	});

}

function uglyInput() 
{
	$('.ugly').each(function() {
		var $input = $(this).find('input, textarea');
		$input.on('change', function() {
			if(!$input.val()) {
				$input.next('label').css({'opacity':1});
			} else {
				$input.next('label').css({'opacity':0});
			}
		});
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
		responsive: {
			0: {
				items: 2
			},
			767: {
				items: 4
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

function loadMoreJobs($items)
{
	var $left = $items;	
	$('.jobs__list-item:hidden').each(function() {
		if($left > 0) {
			$(this).fadeIn(300);
		}
		$left--;
	});
	if(!$('.jobs__list-item:hidden').length > 0) {
		$('.jobs__list-items').find('.loadmore').fadeOut(300);
	}

}

function activateFilter()
{
	$el = $('.jobs__list-filters').find('.filter-title');
	$el.on('click', function() {
		if($(this).hasClass('active')) {
			$(this).removeClass('active').parent().removeClass('active');
			$(this).next('.filters').find('li.active').each(function() {
				$(this).removeClass('active');
			});
		} else {
			$(this).addClass('active').parent().addClass('active');
		}
	});
}

function selectFilter(el)
{
	$el = $('.jobs__list-filters').find('.filters').find('span');
	$el.on('click', function(e) {
		console.log($(this));
		console.log(e.target);
		if($(this).parent().hasClass('active')) {
			$(this).parent().removeClass('active');
			$(this).next('ul').find('li.active').each(function() {
				$(this).removeClass('active');
			});
		} else {
			$(this).parent().addClass('active');
		}
	});
}

$(document).ready(function() {
	
	lazyImages();
	uglyInput();
	if($('.jobs__list-filters').length > 0) {
		activateFilter();
		selectFilter();
	}

});

$(window).on('load', function() {
	lazyImages();

	if($('.home__clients').length != 0) {
		homepageClients();
	}

});

$(window).on('load resize', function() {
	// if($(window).width() < 768) {
	// 	$('.navigation__menu').addClass('dropdown-menu dropdown-menu-right');
	// } else {
	// 	$('.dropdown-toggle').dropdown('dispose');
	// 	$('.navigation__menu').removeClass('dropdown-menu dropdown-menu-right').removeAttr('style').removeAttr('x-placement');
	// }
});