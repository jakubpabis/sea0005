<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

function CallAPI($method, $url, $data = false)
{
    $curl = curl_init();

    switch ($method)
    {
        case "POST":
            curl_setopt($curl, CURLOPT_POST, true);

            if ($data)
                curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));
            break;
        case "PUT":
            curl_setopt($curl, CURLOPT_PUT, 1);
            break;
        default:
            if ($data)
                $url = sprintf("%s?%s", $url, http_build_query($data));
    }

    // Optional Authentication:
    //curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    // curl_setopt($curl, CURLOPT_USERPWD, "username:password");

    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

    $result = curl_exec($curl);

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
        $headers = array('Accept' => 'application/json');
        $options = [
            'client_id' => '3b1b9252c021bbb321e0',
            'client_secret' => '5afd24b3d4d0bf252e8034139ec6a00bc2682367',
            'code' => $_GET['code']
        ];
        $request = Requests::post('https://github.com/login/oauth/access_token', $headers, $options);
        $body = $request->body;
        echo '<pre>';
        echo json_decode( $body );
        echo '</pre>';
        //$redirect = $cookie.'?code='.$_GET['code'];
    }
    
    //header("Location: $redirect");
}
