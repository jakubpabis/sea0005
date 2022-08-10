<?php

function sendEmailContact()
{
	if (isset($_POST['SXHP_sn_input']) && ($_POST['SXHP_sn_input'] || $_POST['SXHP_sn_input'] !== "")) {
		$message = 'Failed! You’re a bot!';
	} else {
		add_filter('wp_mail_content_type', 'wpdocs_set_html_mail_content_type');

		if (isset($_POST['contact_email']) && trim($_POST['contact_email']) != "") {
			$from = $_POST['contact_email'];
		}
		if (isset($_POST['contact_name']) && trim($_POST['contact_name']) != "") {
			$name = $_POST['contact_name'];
		}
		if (isset($_POST['contact_phone']) && trim($_POST['contact_phone']) != "") {
			$phone = $_POST['contact_phone'];
		}
		if (isset($_POST['contact_company']) && trim($_POST['contact_company']) != "") {
			$company = $_POST['contact_company'];
		}
		if (isset($_POST['contact_message']) && trim($_POST['contact_message']) != "") {
			$messageForm = $_POST['contact_message'];
		}
		$to = 'ernst@searchxrecruitment.com';
		//$to = 'office@sative.co.uk';
		$subject = pll__('Contact form submitted successfully');
		$subjectA = pll__('Contact form message from website');
		$body = contactEmailTemplateA();
		$bodyA = contactEmailTemplateB($from, $name, $phone, $company, $messageForm);
		$headers = array('Content-Type: text/html; charset=UTF-8');

		$email = wp_mail($from, $subject, $body, $headers);
		$emailA = wp_mail($to, $subjectA, $bodyA, $headers);

		if (!isset($_POST['contact_important_consent_field']) || (isset($_POST['contact_important_consent_field']) && trim($_POST['contact_important_consent_field']) != "")) {
			$message = 'robot';
		} else if ($email && $emailA) {
			$message = 'success';
		} else {
			$message = 'failed';
		}

		remove_filter('wp_mail_content_type', 'wpdocs_set_html_mail_content_type');
	}


	return $message;
}

function sendEmailContactDog()
{
	if (isset($_POST['SXHP_sn_input']) && ($_POST['SXHP_sn_input'] || $_POST['SXHP_sn_input'] !== "")) {
		$message = 'Failed! You’re a bot!';
	} else {
		add_filter('wp_mail_content_type', 'wpdocs_set_html_mail_content_type');

		if (isset($_POST['cta_dog_contact_email']) && trim($_POST['cta_dog_contact_email']) != "") {
			$from = $_POST['cta_dog_contact_email'];
		}
		if (isset($_POST['cta_dog_contact_name']) && trim($_POST['cta_dog_contact_name']) != "") {
			$name = $_POST['cta_dog_contact_name'];
		}
		if (isset($_POST['cta_dog_contact_phone']) && trim($_POST['cta_dog_contact_phone']) != "") {
			$phone = $_POST['cta_dog_contact_phone'];
		}
		if (isset($_POST['cta_dog_contact_company']) && trim($_POST['cta_dog_contact_company']) != "") {
			$company = $_POST['cta_dog_contact_company'];
		}
		if (isset($_POST['cta_dog_contact_message']) && trim($_POST['cta_dog_contact_message']) != "") {
			$messageForm = $_POST['cta_dog_contact_message'];
		}
		$to = 'ernst@searchxrecruitment.com';
		//$to = 'office@sative.co.uk';
		$subject = pll__('Contact form submitted successfully');
		$subjectA = pll__('Contact form message from website');
		$body = contactEmailTemplateA();
		$bodyA = contactEmailTemplateB($from, $name, $phone, $company, $messageForm);
		$headers = array('Content-Type: text/html; charset=UTF-8');

		$email = wp_mail($from, $subject, $body, $headers);
		$emailA = wp_mail($to, $subjectA, $bodyA, $headers);

		if (!isset($_POST['cta_dog_contact_important_consent_field']) || (isset($_POST['cta_dog_contact_important_consent_field']) && trim($_POST['cta_dog_contact_important_consent_field']) != "")) {
			$message = 'robot';
		} else if ($email && $emailA) {
			$message = 'success';
		} else {
			$message = 'failed';
		}

		remove_filter('wp_mail_content_type', 'wpdocs_set_html_mail_content_type');
	}


	return $message;
}
