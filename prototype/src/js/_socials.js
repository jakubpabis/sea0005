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

function afterFormOpen()
{
	if(isScriptLoaded('https://apis.google.com/js/platform.js') == false) {
		var meta = document.createElement('meta');
		meta.name = "google-signin-client_id";
		meta.content = "499620265848-all65e4hmunlra2h0c6fo2efrujsri66.apps.googleusercontent.com";
		document.getElementsByTagName('head')[0].appendChild(meta);
		addScript('https://apis.google.com/js/platform.js');
		// $('.g-signin2').bind('DOMSubtreeModified', function() {
		// 	if(!$(this).hasClass('appended')) {
		// 		$('.g-signin2').append('<i class="fab fa-google"></i><span>Google</span>');
		// 		$('.g-signin2').addClass('appended');
		// 	}
		// });
	}
	// if(isScriptLoaded('https://www.google.com/recaptcha/api.js') == false) {
	// 	addScript('https://www.google.com/recaptcha/api.js');
	// }
	if(isScriptLoaded('https://connect.facebook.net/en_US/sdk.js') == false) {
		loadScript('https://connect.facebook.net/en_US/sdk.js', function() {
			window.fbAsyncInit = function() {
				FB.init({
					appId            : '382574281913074',
					autoLogAppEvents : true,
					xfbml            : true,
					version          : 'v7.0'
				});
			};
			FB.getLoginStatus(function(response) {
				statusChangeCallback(response);
			});
		});
	}
}

function myLinkedinLogin($url, $src)
{
	setCookie('redirect_user_url', $src, 1);
	setCookie('api_type', 'linkedin', 1);
	window.location.href = "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=77dug7ogaz4ouh&redirect_uri="+$url+"&scope=r_liteprofile%20r_emailaddress%20w_member_social";
	// var head = document.getElementsByTagName('head')[0];
	// var script = document.createElement('script');
	// script.type = 'IN/Form2';
	// script.setAttribute('data-form', 'job-application-form');
	// script.setAttribute('data-field-email', 'app-email');
	// head.appendChild(script);
}

function myGithubLogin($src)
{
	setCookie('redirect_user_url', $src, 1);
	setCookie('api_type', 'github', 1);
	window.location.href = 'https://github.com/login/oauth/authorize?client_id=3b1b9252c021bbb321e0&scope=read:user';
}

function onSignIn(googleUser) {
	var profile = googleUser.getBasicProfile();

	if( profile.getName() ) {
		$('form').find('input[name="app-name"]').val(profile.getName()).next('label').css({'opacity':0});
		$('form').find('input[name="cv-name"]').val(profile.getName()).next('label').css({'opacity':0});
	}

	if( profile.getEmail() ) {
		$('form').find('input[name="app-email"]').val(profile.getEmail()).next('label').css({'opacity':0});
		$('form').find('input[name="cv-email"]').val(profile.getEmail()).next('label').css({'opacity':0});
	}
	console.log('Image URL: ' + profile.getImageUrl());
}

function myFacebookLogin() {

	FB.login(function(response) {
		if (response.status === 'connected') {
			FB.api('/me', {fields: 'name, email, birthday, gender, location, picture'}, function(response) {
				console.log(response);
				if(response['name']) {
                    $('form').find('input[name="app-name"]').val(response['name']).next('label').css({'opacity':0});
                    $('form').find('input[name="cv-name"]').val(response['name']).next('label').css({'opacity':0});
				}
				if(response['email']) {
                    $('form').find('input[name="app-email"]').val(response['email']).next('label').css({'opacity':0});
                    $('form').find('input[name="cv-email"]').val(response['email']).next('label').css({'opacity':0});
				}
				// $('form').find('input[name="applicant-photo"]').val(response['picture']['data']['url']);
				if(response['gender'] == 'male') {
                    $('form').find('input[name="app-gender"][value="male"]').prop('checked', true);
                    $('form').find('input[name="cv-gender"][value="male"]').prop('checked', true);
				} else if(response['gender'] == 'female') {
                    $('form').find('input[name="app-gender"][value="female"]').prop('checked', true);
                    $('form').find('input[name="cv-gender"][value="female"]').prop('checked', true);
				}
				if(response['location']['name']) {
                    $('form').find('input[name="app-city"]').val(response['location']['name']).next('label').css({'opacity':0});
                    $('form').find('input[name="cv-city"]').val(response['location']['name']).next('label').css({'opacity':0});
				}
				if(response['birthday']) {
					var $bdayO = response['birthday'];
					var $bdayM = $bdayO.split('/');
					$bdayM = $bdayM[1]+'-'+$bdayM[0]+'-'+$bdayM[2];
                    $('form').find('input[name="app-dob"]').val($bdayM).next('label').css({'opacity':0});
                    $('form').find('input[name="cv-dob"]').val($bdayM).next('label').css({'opacity':0});
				}
			});
		} else {
			console.log('User cancelled login or did not fully authorize.');
		}
	}, {scope: 'public_profile,email,user_gender,user_location,user_birthday'});

}