// function onFormSubmit()
// {
// 	$(document).on('submit', 'form.application-form, form.cv-form', function() {
// 		$(this).addClass('disabled').find('input[type="submit"]').attr("disabled", true).addClass('disabled');
// 		if($(this).hasClass('application-form')) {
// 			setCookie('jobid_'+$(this).find('input.job-id').val(), $(this).find('input.job-id').val(), 365);
// 		} else if($(this).hasClass('cv-form')) {
// 			setCookie('cvform', 'sent', 365);
// 		}
// 	});
// }

// function onFormLoad()
// {
// 	var $jobid = $('form.application-form').find('input.job-id').val();
// 	var $cookie = getCookie('jobid_'+$jobid);

// 	if(getCookie('cvform')) {
// 		$('form.cv-form').addClass('cv-sent');
// 	}

// 	if($jobid !== 188 && $jobid == $cookie) {
// 		$('form.application-form').addClass('application-sent');
// 	}

// }