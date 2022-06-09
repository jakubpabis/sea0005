<?php

function postRequest($request, $api_key, $api_secret, $json)
{
	$hash = bin2hex(hash_hmac('sha1', $request . '/' . $api_key, $api_secret, true));

	$ch = curl_init('https://api.searchsoftware.nl/' . $request . '?api_key=' . $api_key . '&signature=' . $hash);
	curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
	curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

	$response = curl_exec($ch);
	if (!$response) {
		echo curl_error($ch);
	}
	$response = json_decode($response);
	//var_dump($response);

	return $response;
}
