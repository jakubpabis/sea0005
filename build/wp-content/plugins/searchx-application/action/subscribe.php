<?php

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
