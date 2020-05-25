<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

function callAPI($method, $url, $data = false){
    $curl = curl_init();
    switch ($method){
        case "POST":
            curl_setopt($curl, CURLOPT_POST, 1);
            if ($data)
                curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
            break;
        case "PUT":
            curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "PUT");
            if ($data)
                curl_setopt($curl, CURLOPT_POSTFIELDS, $data);			 					
            break;
        default:
            if ($data)
                $url = sprintf("%s?%s", $url, http_build_query($data));
    }
    // OPTIONS:
    curl_setopt($curl, CURLOPT_URL, $url);
    // curl_setopt($curl, CURLOPT_HTTPHEADER, array(
    //     'APIKEY: 111111111111111111111',
    //     'Content-Type: application/json',
    // ));
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    // EXECUTE:
    $result = curl_exec($curl);
    if(!$result){die("Connection Failure");}
    curl_close($curl);
    return $result;
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
        var_dump( callAPI($url, 'POST') );
        //$redirect = $cookie.'?code='.$_GET['code'];
    }
    
    //header("Location: $redirect");
}
