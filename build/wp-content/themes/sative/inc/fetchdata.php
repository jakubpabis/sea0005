<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

/**
 * Getting user data from social APIs
 *
 * @return void
 */
function userDataFetch()
{
    $cookie = $_COOKIE['redirect_user_url'];
    $apiType = $_COOKIE['api_type'];

    if( isset( $_GET['error'] ) ) {
        header("Location: $cookie");
        return;
    }

    if( isset( $_GET['code'] ) && $apiType === 'github' ) {
        $headers = array('Accept' => 'application/json', );
        $options = [
            'client_id' => '3b1b9252c021bbb321e0',
            'client_secret' => '5afd24b3d4d0bf252e8034139ec6a00bc2682367',
            'code' => $_GET['code']
        ];
        $request = Requests::post('https://github.com/login/oauth/access_token', $headers, $options);
        $body = json_decode( $request->body, true);
        $token = $body['access_token'];
        $headersUser = array('Authorization' => 'token '.$token);
        $user = Requests::get('https://api.github.com/user', $headersUser);
        $userBody = json_decode( $user->body, true);

        $user_email = $userBody['email'];
        $user_name = $userBody['name'];
        $user_location = $userBody['location'];
        $user_bio = $userBody['bio'];
        $user_html_url = $userBody['html_url'];
        //$redirect = $cookie.'?code='.$_GET['code'];

        $redirect = $cookie.'?app-name='.$user_name.'&app-email='.$user_email.'&app-location='.$user_location.'&app-motivation='.$user_bio.'&app-url='.$user_html_url;

    } elseif ( isset( $_GET['code'] ) && $apiType === 'linkedin' ) {
        $headers = array('Accept' => 'application/json', );
        
        //$redirect_uri = siteURL().'userdatafetch';
        var_dump(siteURL());
        // $options = [
        //     'grant_type' => 'authorization_code',
        //     'code' => $_GET['code'],
        //     'redirect_uri' => $redirect_uri,
        //     'client_id' => '77dug7ogaz4ouh',
        //     'client_secret' => 'D6hJidRzoq5B0Hqc',
        // ];
        // $request = Requests::post('https://www.linkedin.com/oauth/v2/accessToken', $headers, $options);
        // $body = json_decode( $request->body, true);
        // $token = $body['access_token'];
        
        // $headersUser = array('Authorization' => 'Bearer '.$token);
        // $user = Requests::get('https://api.linkedin.com/v2/me', $headersUser);
        // $userBody = json_decode( $user->body, true);
        // echo '<pre>';
        // echo var_dump( $userBody );
        // echo '</pre>';

        // $user_first_name = $userBody['localizedFirstName'];
        // $user_last_name = $userBody['localizedLastName'];
        // $user_name = $user_first_name.' '.$user_last_name;

        // $redirect = $cookie.'?app-name='.$user_name;
    }
    
    //header("Location: $redirect");
}
