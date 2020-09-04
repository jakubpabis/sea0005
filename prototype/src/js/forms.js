function onFormSubmit()
{
	$(document).on('submit', '#job-application-form, #cv-upload-form', function() {
		$(this).addClass('disabled').find('input[type="submit"]').attr("disabled", true).addClass('disabled');
		if( $(this).attr('id') === 'job-application-form' ) {
			setCookie('jobid_'+$(this).find('input.app-jobid').val(), $(this).find('input.app-jobid').val(), 365);
		} else if( $(this).attr('id') === 'cv-upload-form' ) {
			setCookie('cvform', 'sent', 365);
		}
	});
}

function onFormLoad()
{
	var $jobid = $('#job-application-form').find('input.app-jobid').val();
	var $cookie = getCookie('jobid_'+$jobid);

	if(getCookie('cvform')) {
		$('#cv-upload-form').addClass('cv-sent');
	}

	if($jobid !== 188 && $jobid == $cookie) {
		$('#job-application-form').addClass('application-sent');
	}

}

function appValidation()
{

	if( $('#job-application-form').length > 0 ) {
		var formApp = $('#job-application-form');
		formApp.validate();
		$('#job-application-form').find('input.required').on('change focusout', function() {
			if( formApp.valid() ) {
				$('.fake_btn_app').addClass('d-none');
				$('.g-recaptcha.app').removeClass('d-none');
			} else {
				$('.fake_btn_app').removeClass('d-none');
				$('.g-recaptcha.app').addClass('d-none');
			}
		});
		$('.fake_btn_app').on('click', function (e) {
			e.preventDefault();
			if( formApp.valid() ) {
				$('.fake_btn_app').addClass('d-none');
				$('.g-recaptcha.app').removeClass('d-none');
				$(this).next('button.g-recaptcha').trigger('click');
			}
		});
	}

	if( $('#cv-upload-form').length > 0 ) {
		var formCV = $('#cv-upload-form');
		formCV.validate();
		$('#cv-upload-form').find('input.required').on('change focusout', function() {
			if( formCV.valid() ) {
				$('.fake_btn_cv').addClass('d-none');
				$('.g-recaptcha').removeClass('d-none');
			} else {
				$('.fake_btn_cv').removeClass('d-none');
				$('.g-recaptcha').addClass('d-none');
			}
		});
		$('.fake_btn_cv').on('click', function (e) {
			e.preventDefault();
			if( formCV.valid() ) {
				$('.fake_btn_cv').addClass('d-none');
				$('.g-recaptcha').removeClass('d-none');
				$(this).next('button.g-recaptcha').trigger('click');
			}
		});
	}

}

function onAppSubmit(token) 
{
	document.getElementById("job-application-form").submit();
}

function onCVSubmit(token) 
{
	document.getElementById("cv-upload-form").submit();
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
		console.log($search);

		var $searchAdwords = false;
		var $host = $hostname;
		
		if(typeof($search) != "undefined" && $search !== null) {
			var $searchParts = $search.split("&");
			var $searchPhrase = 'gclid';
			var $searchPartsArr = [];

			for(var $i = 0; $i < $searchParts.length; $i++) {
				$searchPartsArr.push($searchParts[$i].split("="));
			}
			console.log($searchPartsArr);
			for(var $i = 0; $i < $searchPartsArr.length; $i++) {
				var $part = $searchPartsArr[$i];
				for(var $j = 0; $j < $part.length; $j++) {
					
					if( $part[$j].match($searchPhrase) !== null ) {
						console.log($part[$j]);
						$searchAdwords = true;
						console.log($searchAdwords);
						break;
					}
				}
			}
		}

		if($hostname !== window.location.hostname) {

			console.log('from:'+ $host +' yay!');

			if(!$oldURL) {
				setCookie('referrerURL', $url, '7');
			}
			
			if( $searchAdwords === true ) {
				console.log('selecting Adwords!');
				$('#cv-upload-form, #job-application-form').find('input[name="applicant-find"]').val('Google Adwords');
			} else {
				$('#cv-upload-form, #job-application-form').find('input[name="applicant-find"]').val($host);
			}
			
		}

	}

}