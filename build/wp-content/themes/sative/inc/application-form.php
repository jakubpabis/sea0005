<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$recaptchaKey = '6LcJe8kcAAAAABJutpNaeZ3Rf1i0VbzOI6Kp7qa7';

function postRequest($request, $api_key, $api_secret, $json)
{
	$hash = bin2hex(hash_hmac('sha1', $request . '/' . $api_key, $api_secret, true));

	$ch = curl_init('https://api.searchsoftware.nl/' . $request . '?api_key=' . $api_key . '&signature=' . $hash);
	curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
	curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

	$response = curl_exec($ch);
	// if(!$response)
	// {
	//     echo curl_error($ch);
	// }
	$response = json_decode($response);
	//var_dump($response);

	return $response;
}

function add_to_queue()
{
	global $recaptchaKey;
	if (!isset($_POST['app-name']) || !$_POST['app-name'] || $_POST['app-name'] == "") {
		$message = 'failed wrong name';
	} else if (!isset($_POST['app-email']) || !$_POST['app-email'] || $_POST['app-email'] == "") {
		$message = 'failed wrong email';
	} else if (isset($_POST['g-recaptcha-response'])) {

		# Our new data
		$data = array(
			'secret' => $recaptchaKey,
			'response' => $_POST['g-recaptcha-response']
		);
		# Create a connection
		$url = 'https://www.google.com/recaptcha/api/siteverify';
		$ch = curl_init($url);
		# Form data string
		$postString = http_build_query($data, '', '&');
		# Setting our options
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $postString);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		# Get the response
		$responseJson = curl_exec($ch);
		curl_close($ch);
		$response = json_decode($responseJson);

		if ($response->success === true) {

			$api_key = 'XoslTEyE';
			$api_secret = 'ZZXRgDovPQvPfLjklPLBoTAl';

			$application_data = array(

				'name'          => isset($_POST['app-name']) ? $_POST['app-name'] : '',
				'email'         => isset($_POST['app-email']) ? $_POST['app-email'] : '',
				'date_of_birth' => isset($_POST['app-dob']) ? $_POST['app-dob'] : '',
				'gender'        => isset($_POST['app-gender']) ? $_POST['app-gender'] : '',
				'phone'         => isset($_POST['app-phone']) ? $_POST['app-phone'] : '',

				'location' => array(
					'line1'   => '',
					'line2'   => '',
					'line3'   => '',
					'zip'     => '',
					'city'    => isset($_POST['app-city']) ? $_POST['app-city'] : '',
					'state'   => '',
					'country' => isset($_POST['app-country']) ? $_POST['app-country'] : '',
				),

				'sources' => array(
					array(
						'parent_source_id' => isset($_POST['the_user_referrer']) ? $_POST['the_user_referrer'] : 'Website SIR',
						'name' => 'Applicant' // Example: Applicant
					),
				),

				'note' => array(
					'text' => isset($_POST['app-motivation']) ? $_POST['app-motivation'] : '',
				),

				'job' => array(
					'id' => isset($_POST['app-jobid']) ? $_POST['app-jobid'] : 188,
				),

				//'urls' => array('https://www.example.com/some/url/123'),

			);

			$data['json'] = json_encode($application_data);

			if (isset($_FILES['app-cv']) && $_FILES['app-cv']) {

				// if( $_FILES['app-cv']['size'] <= 5248000 ) {

				$uploaded_cv = realpath($_FILES['app-cv']['tmp_name']);
				$cv_ext = $_FILES['app-cv']['type'];
				$cv_name = basename($_FILES['app-cv']['name']);
				$data['cv'] = curl_file_create($uploaded_cv, $cv_ext, $cv_name);
			} else if (isset($_FILES['cv-cv']) && $_FILES['cv-cv']) {
				$uploaded_cv = realpath($_FILES['cv-cv']['tmp_name']);
				$cv_ext = $_FILES['cv-cv']['type'];
				$cv_name = basename($_FILES['cv-cv']['name']);
				$data['cv'] = curl_file_create($uploaded_cv, $cv_ext, $cv_name);
			}

			$person_response = postRequest('people/add_to_queue', $api_key, $api_secret, $data);

			// echo '<pre>';
			// echo var_dump($person_response);
			// echo '</pre>';
			// var_dump($person_response->status);

			if (isset($person_response->status) && $person_response->status === 'ok') {
				$message = sendEmail();
			} else {
				$message = 'failed';
			}
		} else {
			$message = 'recaptchafailed';
		}
	} else {
		$message = 'norecaptcha';
	}

	return $message;
}

function add_to_queue_cv()
{
	global $recaptchaKey;
	if (!isset($_POST['cv-name']) || !$_POST['cv-name'] || $_POST['cv-name'] == "") {
		$message = 'failed wrong name';
	} else if (!isset($_POST['cv-email']) || !$_POST['cv-email'] || $_POST['cv-email'] == "") {
		$message = 'failed wrong email';
	} else if (isset($_POST['g-recaptcha-response'])) {

		# Our new data
		$data = array(
			'secret' => $recaptchaKey,
			'response' => $_POST['g-recaptcha-response']
		);
		# Create a connection
		$url = 'https://www.google.com/recaptcha/api/siteverify';
		$ch = curl_init($url);
		# Form data string
		$postString = http_build_query($data, '', '&');
		# Setting our options
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $postString);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		# Get the response
		$responseJson = curl_exec($ch);
		curl_close($ch);
		$response = json_decode($responseJson);

		if ($response->success === true) {

			$api_key = 'XoslTEyE';
			$api_secret = 'ZZXRgDovPQvPfLjklPLBoTAl';

			$application_data = array(

				'name'          => isset($_POST['cv-name']) ? $_POST['cv-name'] : '',
				'email'         => isset($_POST['cv-email']) ? $_POST['cv-email'] : '',
				'date_of_birth' => isset($_POST['cv-dob']) ? $_POST['cv-dob'] : '',
				'gender'        => isset($_POST['cv-gender']) ? $_POST['cv-gender'] : '',
				'phone'         => isset($_POST['cv-phone']) ? $_POST['cv-phone'] : '',

				'location' => array(
					'line1'   => '',
					'line2'   => '',
					'line3'   => '',
					'zip'     => '',
					'city'    => isset($_POST['cv-city']) ? $_POST['cv-city'] : '',
					'state'   => '',
					'country' => isset($_POST['cv-country']) ? $_POST['cv-country'] : '',
				),

				'sources' => array(
					array(
						'parent_source_id' => isset($_POST['the_user_referrer']) ? $_POST['the_user_referrer'] : 'Website SIR',
						'name' => 'Applicant' // Example: Applicant
					),
				),

				'note' => array(
					'text' => isset($_POST['cv-motivation']) ? $_POST['cv-motivation'] : '',
				),

				'job' => array(
					'id' => isset($_POST['cv-jobid']) ? $_POST['cv-jobid'] : 188,
				),

				//'urls' => array('https://www.example.com/some/url/123'),

			);

			$data['json'] = json_encode($application_data);

			if (isset($_FILES['app-cv']) && $_FILES['app-cv']) {

				// if( $_FILES['app-cv']['size'] <= 5248000 ) {

				$uploaded_cv = realpath($_FILES['app-cv']['tmp_name']);
				$cv_ext = $_FILES['app-cv']['type'];
				$cv_name = basename($_FILES['app-cv']['name']);
				$data['cv'] = curl_file_create($uploaded_cv, $cv_ext, $cv_name);
			} else if (isset($_FILES['cv-cv']) && $_FILES['cv-cv']) {
				$uploaded_cv = realpath($_FILES['cv-cv']['tmp_name']);
				$cv_ext = $_FILES['cv-cv']['type'];
				$cv_name = basename($_FILES['cv-cv']['name']);
				$data['cv'] = curl_file_create($uploaded_cv, $cv_ext, $cv_name);
			}

			//var_dump($application_data);

			$person_response = postRequest('people/add_to_queue', $api_key, $api_secret, $data);
			//var_dump($person_response);
			if (isset($person_response->status) && $person_response->status === 'ok') {
				$message = sendEmailCV();
			} else {
				$message = 'failed';
			}
		} else {
			$message = 'recaptchafailed';
		}
	} else {
		$message = 'norecaptcha';
	}

	return $message;
}

function subscribe_person()
{
	global $recaptchaKey;
	if (isset($_POST['g-recaptcha-response'])) {

		# Our new data
		$data = array(
			'secret' => $recaptchaKey,
			'response' => $_POST['g-recaptcha-response']
		);
		# Create a connection
		$url = 'https://www.google.com/recaptcha/api/siteverify';
		$ch = curl_init($url);
		# Form data string
		$postString = http_build_query($data, '', '&');
		# Setting our options
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $postString);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		# Get the response
		$responseJson = curl_exec($ch);
		curl_close($ch);
		$response = json_decode($responseJson);

		if ($response->success === true) {
			$api_key = '6KlPHA3GzUs0Mt5ZMzIA7fBJKhvXsF37IQd3zaBj';
			$path = 'v2/job_boards/subscribers/' . $_POST['subscribe_email'];

			$subscriber_data = array(
				'categories' => $_POST['subscribe_checkbox']
			);

			$data = json_encode($subscriber_data);
			$subscribe_response = putRequestToken($path, $api_key, $data);

			if (isset($subscribe_response->status) && $subscribe_response->status === 'ok') {
				$message = 'success';
			} else {
				$message = json_encode($subscribe_response);
			}
		} else {
			$message = 'recaptchafailed';
		}
	} else {
		$message = 'norecaptcha';
	}

	return $message;
}

function wpdocs_set_html_mail_content_type()
{
	return 'text/html';
}

function sendEmail()
{
	add_filter('wp_mail_content_type', 'wpdocs_set_html_mail_content_type');

	$to = $_POST['app-email'];
	$subject = pll__('Job application successful');
	$body = appEmailTemplate();
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

function sendEmailContact()
{
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
	$body = contactEmailTemplate();
	$bodyA = contactEmailTemplateA($from, $name, $phone, $company, $messageForm);
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

	return $message;
}

function sendEmailContactDog()
{
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
	$body = contactEmailTemplate();
	$bodyA = contactEmailTemplateA($from, $name, $phone, $company, $messageForm);
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

	return $message;
}

function appEmailTemplate()
{
	$job_link = 'https://' . $_SERVER['SERVER_NAME'] . $_POST['_wp_http_referer'];
	$job_title = get_the_title($_POST['postid']);
	$body = '<html>
                <head>
                    <style type="text/css" media="screen">
                        * {
                            font-family: Helvetica!important;
                            font-size: 10pt;
                        }
                        td, tr, th, table {
                            padding: 0px;
                            margin: 0px;
                        }
                        p {
                            margin: 10px 0;
                        }
                    </style>
                </head>
                <body>
                    <table style="max-width: 100%; width: 100%; margin: 15px;" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr>
                                <td>
                                    <h1 style="font-size: 12pt!important;">
                                        Thank you for applying to the position of <a href="' . $job_link . '" style="color: #425CBB; font-size: 12pt!important;">' . $job_title . '</a>. We’ve received your application in good order and will carefully review your profile to see if it’s a match.<br/>
                                        Of course, we will let you know if there is and look forward to speaking with you.
                                    </h1>
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td style="padding-top: 40px;">
                                    <p style="font-size: 10pt!important;">
                                        In the meantime, you can stay posted on our latest jobs by following us on
                                    </p>
                                    <p style="font-size: 10pt!important;">
                                        <strong>LinkedIn: </strong><a href="https://www.linkedin.com/company/search-x-recruitment">https://www.linkedin.com/company/search-x-recruitment</a><br/>
                                        <strong>Facebook: </strong><a href="https://www.facebook.com/searchxrecruitment">https://www.facebook.com/searchxrecruitment</a><br/>
                                        <strong>Twitter: </strong><a href="https://twitter.com/searchxjobs">https://twitter.com/searchxjobs</a><br/>
                                        <strong>Instagram: </strong><a href="https://www.instagram.com/searchxrecruitment/">https://www.instagram.com/searchxrecruitment</a>
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td style="padding-top: 30px;">
                                    <p style="font-size: 10pt!important;">
                                        Keep in mind that by applying on our website you have agreed to and accepted the terms of our <a href="https://www.searchxrecruitment.com/en/privacy-policy" style="color: #425CBB; font-size: 10pt!important;">Privacy Policy</a>.
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <hr />
                    <p>This is an automatic message. Please do not reply to it.</p>
                    <table style="max-width: 320px; width: 100%; margin: 0 15px;" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr>
                                <td>
                                    <a href="https://www.searchxrecruitment.com">
                                        <img id="TemplateLogo" data-class="external" src="https://www.searchxrecruitment.com/wp-content/themes/sative/assets/img/logo-dog.png" alt="Search X Recruitment" style="display: block; margin-left: -24px; max-width: 220px;" width="220px">
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <table cellspacing="0" cellpadding="0" border="0">
                                        <tbody>
                                            <tr>
                                                <td style="font-family: Helvetica; font-size: 9pt; padding: 2px 0;" width="70px">
                                                    <font style="color: #183153; font-size: 9pt; font-family: Helvetica">
                                                        <strong>Phone:</strong>
                                                    </font>
                                                </td>
                                                <td style="font-family: Helvetica; font-size: 9pt;">
                                                    <font style="color: #183153; font-size: 9pt; font-family: Helvetica">
                                                        <a href="tel:+31(0)207782393" style="color: #183153; text-decoration: none;">
                                                            +31 (0) 20 - 7782393
                                                        </a>
                                                    </font>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="font-family: Helvetica; font-size: 9pt; padding: 2px 0;" width="70px">
                                                    <font style="color: #183153; font-size: 9pt; font-family: Helvetica">
                                                        <strong>Email:</strong>
                                                    </font>
                                                </td>
                                                <td style="font-family: Helvetica; font-size: 9pt;">
                                                    <font style="color: #183153; font-size: 9pt; font-family: Helvetica">
                                                        <a href="mailto:info@searchxrecruitment.com" style="color: #183153; text-decoration: none;">
                                                            info@searchxrecruitment.com
                                                        </a>
                                                    </font>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="font-family: Helvetica; font-size: 9pt; padding: 2px 0;" width="70px">
                                                    <font style="color: #183153; font-size: 9pt; font-family: Helvetica">
                                                        <strong>Website:</strong>
                                                    </font>
                                                </td>
                                                <td style="font-family: Helvetica; font-size: 9pt;">
                                                    <font style="color: #183153; font-size: 9pt; font-family: Helvetica">
                                                        <a href="https://www.searchxrecruitment.com" style="color: #183153; text-decoration: none;">
                                                            www.searchxrecruitment.com
                                                        </a>
                                                    </font>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="font-family: Helvetica; font-size: 9pt; padding: 10px 0 1px 0;" width="70px">
                                                    <font style="color: #183153; font-size: 9pt; font-family: Helvetica">
                                                        <strong>Address:<br/><br/></strong>
                                                    </font>
                                                </td>
                                                <td style="font-family: Helvetica; font-size: 9pt; padding: 10px 0 1px 0;">
                                                    <font style="color: #183153; font-size: 9pt; font-family: Helvetica">
                                                        <a href="https://www.google.com/maps/place/Search+X+Recruitment/@52.3895326,4.6489399,17z/data=!3m1!4b1!4m5!3m4!1s0x47c5ef9e18045179:0xfec844f9664ad6f8!8m2!3d52.3895292!4d4.6511288" style="color: #183153; text-decoration: none;">
																														Hendrik Figeeweg 1-0013, 2031 BJ, Haarlem, Amsterdam Area, The Netherlands
                                                        </a>
                                                    </font>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </body>
            </html>';
	return $body;
}

function cvEmailTemplate()
{
	$body = '<html>
                <head>
                    <style type="text/css" media="screen">
                        * {
                            font-family: Helvetica!important;
                            font-size: 10pt;
                        }
                        td, tr, th, table {
                            padding: 0px;
                            margin: 0px;
                        }
                        p {
                            margin: 10px 0;
                        }
                    </style>
                </head>
                <body>
                    <table style="max-width: 100%; width: 100%; margin: 15px;" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr>
                                <td>
                                    <h1 style="font-size: 12pt!important;">
                                        Thank you for uploading your resume. We’ve received it in good order and will carefully review your profile to see if we currently have any matching opportunities.<br/>
                                        Of course, we will let you know if there are and look forward to working with you.
                                    </h1>
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td style="padding-top: 40px;">
                                    <p style="font-size: 10pt!important;">
                                        In the meantime, you can stay posted on our latest jobs by following us on
                                    </p>
                                    <p style="font-size: 10pt!important;">
                                        <strong>LinkedIn: </strong><a href="https://www.linkedin.com/company/search-x-recruitment">https://www.linkedin.com/company/search-x-recruitment</a><br/>
                                        <strong>Facebook: </strong><a href="https://www.facebook.com/searchxrecruitment">https://www.facebook.com/searchxrecruitment</a><br/>
                                        <strong>Twitter: </strong><a href="https://twitter.com/searchxjobs">https://twitter.com/searchxjobs</a><br/>
                                        <strong>Instagram: </strong><a href="https://www.instagram.com/searchxrecruitment/">https://www.instagram.com/searchxrecruitment</a>
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td style="padding-top: 30px;">
                                    <p style="font-size: 10pt!important;">
                                        Keep in mind that by uploading your resume on our website you have agreed to and accepted the terms of our <a href="https://www.searchxrecruitment.com/en/privacy-policy" style="color: #425CBB; font-size: 10pt!important;">Privacy Policy</a>.
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <hr />
                    <p>This is an automatic message. Please do not reply to it.</p>
                    <table style="max-width: 320px; width: 100%; margin: 0 15px;" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr>
                                <td>
                                    <a href="https://www.searchxrecruitment.com">
                                        <img id="TemplateLogo" data-class="external" src="https://www.searchxrecruitment.com/wp-content/themes/sative/assets/img/logo-dog.png" alt="Search X Recruitment" style="display: block; margin-left: -24px; max-width: 220px;" width="220px">
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <table cellspacing="0" cellpadding="0" border="0">
                                        <tbody>
                                            <tr>
                                                <td style="font-family: Helvetica; font-size: 9pt; padding: 2px 0;" width="70px">
                                                    <font style="color: #183153; font-size: 9pt; font-family: Helvetica">
                                                        <strong>Phone:</strong>
                                                    </font>
                                                </td>
                                                <td style="font-family: Helvetica; font-size: 9pt;">
                                                    <font style="color: #183153; font-size: 9pt; font-family: Helvetica">
                                                        <a href="tel:+31(0)207782393" style="color: #183153; text-decoration: none;">
                                                            +31 (0) 20 - 7782393
                                                        </a>
                                                    </font>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="font-family: Helvetica; font-size: 9pt; padding: 2px 0;" width="70px">
                                                    <font style="color: #183153; font-size: 9pt; font-family: Helvetica">
                                                        <strong>Email:</strong>
                                                    </font>
                                                </td>
                                                <td style="font-family: Helvetica; font-size: 9pt;">
                                                    <font style="color: #183153; font-size: 9pt; font-family: Helvetica">
                                                        <a href="mailto:info@searchxrecruitment.com" style="color: #183153; text-decoration: none;">
                                                            info@searchxrecruitment.com
                                                        </a>
                                                    </font>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="font-family: Helvetica; font-size: 9pt; padding: 2px 0;" width="70px">
                                                    <font style="color: #183153; font-size: 9pt; font-family: Helvetica">
                                                        <strong>Website:</strong>
                                                    </font>
                                                </td>
                                                <td style="font-family: Helvetica; font-size: 9pt;">
                                                    <font style="color: #183153; font-size: 9pt; font-family: Helvetica">
                                                        <a href="https://www.searchxrecruitment.com" style="color: #183153; text-decoration: none;">
                                                            www.searchxrecruitment.com
                                                        </a>
                                                    </font>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="font-family: Helvetica; font-size: 9pt; padding: 10px 0 1px 0;" width="70px">
                                                    <font style="color: #183153; font-size: 9pt; font-family: Helvetica">
                                                        <strong>Address:<br/><br/></strong>
                                                    </font>
                                                </td>
                                                <td style="font-family: Helvetica; font-size: 9pt; padding: 10px 0 1px 0;">
                                                    <font style="color: #183153; font-size: 9pt; font-family: Helvetica">
																											<a href="https://www.google.com/maps/place/Search+X+Recruitment/@52.3895326,4.6489399,17z/data=!3m1!4b1!4m5!3m4!1s0x47c5ef9e18045179:0xfec844f9664ad6f8!8m2!3d52.3895292!4d4.6511288" style="color: #183153; text-decoration: none;">
																												Hendrik Figeeweg 1-0013, 2031 BJ, Haarlem, Amsterdam Area, The Netherlands
																											</a>
                                                    </font>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </body>
            </html>';
	return $body;
}

function contactEmailTemplate()
{
	$body = '<html>
                <head>
                    <style type="text/css" media="screen">
                        * {
                            font-family: Helvetica!important;
                            font-size: 10pt;
                        }
                        td, tr, th, table {
                            padding: 0px;
                            margin: 0px;
                        }
                        p {
                            margin: 10px 0;
                        }
                    </style>
                </head>
                <body>
                    <table style="max-width: 100%; width: 100%; margin: 15px;" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr>
                                <td>
                                    <h1 style="font-size: 12pt!important;">
                                        ' . pll__("Thank you for contacting us!<br/>
                                        We will reply to your message as soon as possible.<br/>
                                        Have a nice day!") . '
                                    </h1>
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td style="padding-top: 40px;">
                                    <p style="font-size: 10pt!important;">
																			' . pll__("In the meantime, you can stay posted by following us on") . '  
                                    </p>
                                    <p style="font-size: 10pt!important;">
                                        <strong>LinkedIn: </strong><a href="https://www.linkedin.com/company/search-x-recruitment">https://www.linkedin.com/company/search-x-recruitment</a><br/>
                                        <strong>Facebook: </strong><a href="https://www.facebook.com/searchxrecruitment">https://www.facebook.com/searchxrecruitment</a><br/>
                                        <strong>Twitter: </strong><a href="https://twitter.com/searchxjobs">https://twitter.com/searchxjobs</a><br/>
                                        <strong>Instagram: </strong><a href="https://www.instagram.com/searchxrecruitment/">https://www.instagram.com/searchxrecruitment</a>
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <hr />
                    <p>' . pll__("This is an automatic message. Please do not reply to it.") . '</p>
                    <table style="max-width: 320px; width: 100%; margin: 0 15px;" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr>
                                <td>
                                    <a href="https://www.searchxrecruitment.com">
                                        <img id="TemplateLogo" data-class="external" src="https://www.searchxrecruitment.com/wp-content/themes/sative/assets/img/logo-dog.png" alt="Search X Recruitment" style="display: block; margin-left: -24px; max-width: 220px;" width="220px">
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <table cellspacing="0" cellpadding="0" border="0">
                                        <tbody>
                                            <tr>
                                                <td style="font-family: Helvetica; font-size: 9pt; padding: 2px 0;" width="70px">
                                                    <font style="color: #183153; font-size: 9pt; font-family: Helvetica">
                                                        <strong>Phone:</strong>
                                                    </font>
                                                </td>
                                                <td style="font-family: Helvetica; font-size: 9pt;">
                                                    <font style="color: #183153; font-size: 9pt; font-family: Helvetica">
                                                        <a href="tel:+31(0)207782393" style="color: #183153; text-decoration: none;">
                                                            +31 (0) 20 - 7782393
                                                        </a>
                                                    </font>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="font-family: Helvetica; font-size: 9pt; padding: 2px 0;" width="70px">
                                                    <font style="color: #183153; font-size: 9pt; font-family: Helvetica">
                                                        <strong>Email:</strong>
                                                    </font>
                                                </td>
                                                <td style="font-family: Helvetica; font-size: 9pt;">
                                                    <font style="color: #183153; font-size: 9pt; font-family: Helvetica">
                                                        <a href="mailto:info@searchxrecruitment.com" style="color: #183153; text-decoration: none;">
                                                            info@searchxrecruitment.com
                                                        </a>
                                                    </font>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="font-family: Helvetica; font-size: 9pt; padding: 2px 0;" width="70px">
                                                    <font style="color: #183153; font-size: 9pt; font-family: Helvetica">
                                                        <strong>Website:</strong>
                                                    </font>
                                                </td>
                                                <td style="font-family: Helvetica; font-size: 9pt;">
                                                    <font style="color: #183153; font-size: 9pt; font-family: Helvetica">
                                                        <a href="https://www.searchxrecruitment.com" style="color: #183153; text-decoration: none;">
                                                            www.searchxrecruitment.com
                                                        </a>
                                                    </font>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="font-family: Helvetica; font-size: 9pt; padding: 10px 0 1px 0;" width="70px">
                                                    <font style="color: #183153; font-size: 9pt; font-family: Helvetica">
                                                        <strong>Address:<br/><br/></strong>
                                                    </font>
                                                </td>
                                                <td style="font-family: Helvetica; font-size: 9pt; padding: 10px 0 1px 0;">
                                                    <font style="color: #183153; font-size: 9pt; font-family: Helvetica">
																											<a href="https://www.google.com/maps/place/Search+X+Recruitment/@52.3895326,4.6489399,17z/data=!3m1!4b1!4m5!3m4!1s0x47c5ef9e18045179:0xfec844f9664ad6f8!8m2!3d52.3895292!4d4.6511288" style="color: #183153; text-decoration: none;">
																												Hendrik Figeeweg 1-0013, 2031 BJ, Haarlem, Amsterdam Area, The Netherlands
																											</a>
                                                    </font>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </body>
            </html>';
	return $body;
}


function contactEmailTemplateA($from, $name, $phone = false, $company = false, $message)
{
	if ($company) {
		$from_company = ', from company: ' . $company;
	} else {
		$from_company = '';
	}
	if ($phone) {
		$from_phone = ', reachable also at: <a href="tel:' . $phone . '">' . $phone . '</a>';
	} else {
		$from_phone = '';
	}
	$body = '<html>
                <head>
                    <style type="text/css" media="screen">
                        * {
                            font-family: Helvetica!important;
                            font-size: 10pt;
                        }
                        td, tr, th, table {
                            padding: 0px;
                            margin: 0px;
                        }
                        p {
                            margin: 10px 0;
                        }
                    </style>
                </head>
                <body>
                    <table style="max-width: 100%; width: 100%; margin: 15px;" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr>
                                <td>
                                    <h1 style="font-size: 12pt!important;">
                                        You got a message from: ' . $name . ' at <a href="mailto:"' . $from . '">' . $from . '</a>
                                        ' . $from_company . '
                                        ' . $from_phone . '
                                    </h1>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h2 style="font-size: 11pt!important;">
                                        Message:
                                    </h2>
                                    <p style="font-size: 10pt!important;">
                                        ' . $message . '
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <hr />
                    <p>This is an automatic message. Please do not reply to it.</p>
                </body>
            </html>';
	return $body;
}

function sative_cv_form_submit()
{
	$message = add_to_queue_cv();

	$referer = remove_query_arg('message', $_POST['_wp_http_referer']);
	$referer = remove_query_arg('messagecv', $_POST['_wp_http_referer']);
	$referer = remove_query_arg('messagesb', $_POST['_wp_http_referer']);
	$referer = remove_query_arg('messagect', $_POST['_wp_http_referer']);
	$redirect = '/app-success?ref=' . $referer . '&messagecv=' . $message;
	header("Location: $redirect");
}
add_action('admin_post_nopriv_cv_form', 'sative_cv_form_submit');
add_action('admin_post_cv_form', 'sative_cv_form_submit');

function sative_application_form_submit()
{
	$message = add_to_queue();
	$referer = remove_query_arg('message', $_POST['_wp_http_referer']);
	$referer = remove_query_arg('messagecv', $_POST['_wp_http_referer']);
	$referer = remove_query_arg('messagesb', $_POST['_wp_http_referer']);
	$referer = remove_query_arg('messagect', $_POST['_wp_http_referer']);
	$redirect = '/app-success?ref=' . $referer . '&message=' . $message;
	header("Location: $redirect");
}
add_action('admin_post_nopriv_application_form', 'sative_application_form_submit');
add_action('admin_post_application_form', 'sative_application_form_submit');

function sative_subscribe_form_submit()
{
	$message = subscribe_person();
	$referer = remove_query_arg('message', $_POST['_wp_http_referer']);
	$referer = remove_query_arg('messagecv', $_POST['_wp_http_referer']);
	$referer = remove_query_arg('messagesb', $_POST['_wp_http_referer']);
	$referer = remove_query_arg('messagect', $_POST['_wp_http_referer']);
	$redirect = '/app-success?ref=' . $referer . '&messagesb=' . $message;
	header("Location: $redirect");
}
add_action('admin_post_nopriv_subscribe_form', 'sative_subscribe_form_submit');
add_action('admin_post_subscribe_form', 'sative_subscribe_form_submit');

function sative_contact_form_submit()
{
	$message = sendEmailContact();
	$referer = remove_query_arg('message', $_POST['_wp_http_referer']);
	$referer = remove_query_arg('messagecv', $_POST['_wp_http_referer']);
	$referer = remove_query_arg('messagesb', $_POST['_wp_http_referer']);
	$referer = remove_query_arg('messagect', $_POST['_wp_http_referer']);
	$redirect = '/app-success?ref=' . $referer . '&messagect=' . $message;
	header("Location: $redirect");
}
add_action('admin_post_nopriv_contact_form', 'sative_contact_form_submit');
add_action('admin_post_contact_form', 'sative_contact_form_submit');

function sative_cta_dog_contact_form_submit()
{
	$message = sendEmailContactDog();
	$referer = remove_query_arg('message', $_POST['_wp_http_referer']);
	$referer = remove_query_arg('messagecv', $_POST['_wp_http_referer']);
	$referer = remove_query_arg('messagesb', $_POST['_wp_http_referer']);
	$referer = remove_query_arg('messagect', $_POST['_wp_http_referer']);
	$redirect = '/app-success?ref=' . $referer . '&messagect=' . $message;
	header("Location: $redirect");
}
add_action('admin_post_nopriv_cta_dog_contact_form', 'sative_cta_dog_contact_form_submit');
add_action('admin_post_cta_dog_contact_form', 'sative_cta_dog_contact_form_submit');
