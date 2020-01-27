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


$(document).ready(function() {
	
	lazyImages();
	uglyInput();

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