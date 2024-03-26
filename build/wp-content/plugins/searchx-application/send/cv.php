<?php

function sendEmailCV()
{
	add_filter('wp_mail_content_type', 'wpdocs_set_html_mail_content_type');

	$to = $_POST['cv-email'];
	$subject = pll__('CV application successful');
	$body = cvEmailTemplate();
	$headers = array('Content-Type: text/html; charset=UTF-8');

	$email = wp_mail($to, $subject, $body, $headers);

	if ($email) {
		$message = 'success';
	} else {
		$message = 'failed';
	}

	remove_filter('wp_mail_content_type', 'wpdocs_set_html_mail_content_type');

	return $message;
}
