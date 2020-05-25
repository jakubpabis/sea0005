<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

function CallAPI($method, $url, $data = false)
{
    // kvstore API url
    // Collection object
    $data = [
        'collection' => 'RapidAPI'
    ];
    // Initializes a new cURL session
    $curl = curl_init($url);
    // Set the CURLOPT_RETURNTRANSFER option to true
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    // Set the CURLOPT_POST option to true for POST request
    curl_setopt($curl, CURLOPT_POST, true);
    // Set custom headers for RapidAPI Auth and Content-Type header
    curl_setopt($curl, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json'
    ]);
    // Execute cURL request with all previous settings
    $response = curl_exec($curl);
    // Close cURL session
    curl_close($curl);
    echo $response . PHP_EOL;
}

/**
 * Adding/updating jobs from XML
 *
 * @return void
 */
function userDataFetch()
{
    $cookie = $_COOKIE['redirect_user_url'];

    if( isset( $_GET['code'] ) ) {
        $url = 'https://github.com/login/oauth/access_token?client_id=3b1b9252c021bbb321e0&client_secret=5afd24b3d4d0bf252e8034139ec6a00bc2682367&code='.$_GET['code'];
        CallAPI($url, 'POST');
        //$redirect = $cookie.'?code='.$_GET['code'];
    }
    
    //header("Location: $redirect");
}
