function onFormSubmit()
{
	$(document).on('submit', '#job-application-form, form.cv-form', function() {
		$(this).addClass('disabled').find('input[type="submit"]').attr("disabled", true).addClass('disabled');
		if( $(this).attr('id') === 'job-application-form' ) {
			setCookie('jobid_'+$(this).find('input.app-jobid').val(), $(this).find('input.app-jobid').val(), 365);
		} else if($(this).hasClass('cv-form')) {
			setCookie('cvform', 'sent', 365);
		}
	});
}

function onFormLoad()
{
	var $jobid = $('#job-application-form').find('input.app-jobid').val();
	var $cookie = getCookie('jobid_'+$jobid);

	if(getCookie('cvform')) {
		$('form.cv-form').addClass('cv-sent');
	}

	if($jobid !== 188 && $jobid == $cookie) {
		$('#job-application-form').addClass('application-sent');
	}

}