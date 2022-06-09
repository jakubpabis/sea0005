<?php

function add_to_queue_cv()
{
	global $recaptchaKey;
	global $api_key;
	global $api_secret;
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

			if (isset($_FILES['app-cv']) && $_FILES['app-cv'] && $_FILES['app-cv']['name'] && $_FILES['app-cv']['tmpname']) {
				$uploaded_cv = realpath($_FILES['app-cv']['tmp_name']);
				$cv_ext = $_FILES['app-cv']['type'];
				$cv_name = basename($_FILES['app-cv']['name']);
				$data['cv'] = curl_file_create($uploaded_cv, $cv_ext, $cv_name);
			} else if (isset($_FILES['cv-cv']) && $_FILES['cv-cv'] && $_FILES['cv-cv']['name'] && $_FILES['cv-cv']['tmpname']) {
				$uploaded_cv = realpath($_FILES['cv-cv']['tmp_name']);
				$cv_ext = $_FILES['cv-cv']['type'];
				$cv_name = basename($_FILES['cv-cv']['name']);
				$data['cv'] = curl_file_create($uploaded_cv, $cv_ext, $cv_name);
			}

			var_dump($application_data);

			$person_response = postRequest('people/add_to_queue', $api_key, $api_secret, $data);
			var_dump($person_response);
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
