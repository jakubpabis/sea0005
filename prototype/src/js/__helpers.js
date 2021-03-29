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
			console.log('prevent double submittion');
		} else {
			// Mark it so that the next submit can be ignored
			$form.data('submitted', true);
			$form.find('*[data-btn="load"]').removeClass('d-none');
			$form.find('*[data-btn="submit"]').addClass('d-none');
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

function spaceFromBottom(el)
{
	var eTop = $(el).offset().top; //get the offset top of the element
	if(eTop - $(window).scrollTop() < $(window).height() + 600){
		return true;
	} else {
		return false;
	}
}

function getFileName($input, $el)
{
	$text = $input.value;
	document.getElementById($el).innerHTML = $text.split('\\')[2];
}

function isScriptLoaded(url) {
    var scripts = document.getElementsByTagName('script');
    for (var i = scripts.length; i--;) {
        if (scripts[i].src == url) return true;
    }
    return false;
}

function addScript($src)
{
	var head = document.getElementsByTagName('head')[0];
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = $src;
	head.appendChild(script);
}

function loadScript( url, callback ) {
	var script = document.createElement( "script" )
	script.type = "text/javascript";
	if(script.readyState) {  // only required for IE <9
		script.onreadystatechange = function() {
			if ( script.readyState === "loaded" || script.readyState === "complete" ) {
				script.onreadystatechange = null;
				callback();
			}
		};
	} else {  //Others
		script.onload = function() {
			callback();
		};
	}

	script.src = url;
	document.getElementsByTagName( "head" )[0].appendChild( script );
}

/**
 * Parse url
 */
function urlParser($url)
{
	var parser = document.createElement('a');
	parser.href = $url;

	var $result = parser.hostname;

	return $result;
}

/**
 * Get referrer address
 */
function getReferrer()
{
	var $url = document.referrer;

	if( getCookie('referrerURL') ) {
		var $oldURL = getCookie('referrerURL');
	}

	if($url.length > 0 || $oldURL) {

		if(typeof($oldURL) != "undefined" && $oldURL !== null) {
			var $hostname = urlParser($oldURL);
			var $search = $oldURL.split("?")[1];
		} else {
			var $hostname = urlParser($url);
			var $search = $url.split("?")[1];
		}

		var $searchAdwords = false;
		var $host = $hostname;

		if(typeof($search) != "undefined" && $search !== null) {
			var $searchParts = $search.split("&");
			var $searchPhrase = 'gclid';
			var $searchPartsArr = [];

			for(var $i = 0; $i < $searchParts.length; $i++) {
				$searchPartsArr.push($searchParts[$i].split("="));
			}
			for(var $i = 0; $i < $searchPartsArr.length; $i++) {
				var $part = $searchPartsArr[$i];
				for(var $j = 0; $j < $part.length; $j++) {

					if( $part[$j].match($searchPhrase) !== null ) {
						$searchAdwords = true;
						break;
					}
				}
			}
		}

		if($hostname !== window.location.hostname) {

			if(!$oldURL) {
				setCookie('referrerURL', $url, '7');
			}

			if( $searchAdwords === true ) {
				$('#cv-upload-form, #job-application-form').find('input[name="applicant-find"]').val('Google Adwords');
			} else {
				$('#cv-upload-form, #job-application-form').find('input[name="applicant-find"]').val($host);
			}

		}

	}

}
