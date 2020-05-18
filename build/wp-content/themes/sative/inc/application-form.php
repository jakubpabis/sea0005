<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


function postRequest($request, $api_key, $api_secret, $json)
{
    $hash = bin2hex(hash_hmac('sha1', $request.'/'.$api_key, $api_secret, true));

    $ch = curl_init('https://api.searchsoftware.nl/'.$request.'?api_key='.$api_key.'&signature='.$hash);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
    curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $response = curl_exec($ch);
    $response = json_decode($response);

    return $response;
}

function add_to_queue(){

    $api_key = 'XoslTEyE';
    $api_secret = 'ZZXRgDovPQvPfLjklPLBoTAl';
    

    $application_data = array(

        'name'          => isset( $_POST['app-name'] ) ? $_POST['app-name'] : '',
        'email'         => isset( $_POST['app-email'] ) ? $_POST['app-email'] : '',
        'date_of_birth' => isset( $_POST['app-dob'] ) ? $_POST['app-dob'] : '',
        'gender'        => isset( $_POST['app-gender'] ) ? $_POST['app-gender'] : '',
        'phone'         => isset( $_POST['app-phone'] ) ? $_POST['app-phone'] : '',

        'location' => array(
            'line1'   => '',
            'line2'   => '',
            'line3'   => '',
            'zip'     => '',
            'city'    => isset( $_POST['app-city'] ) ? $_POST['app-city'] : '',
            'state'   => '',
            'country' => '',
        ),

        'sources' => array(
            array(
                'parent_source_id' => 'test.com', // Example: Website
                'name' => 'Applicant' // Example: Applicant
            ),
        ),

        'note' => array(
            'text' => isset( $_POST['app-motivation'] ) ? $_POST['app-motivation'] : '',
        ),

        'job' => array(
            'id' => isset( $_POST['app-jobid'] ) ? $_POST['app-jobid'] : 188,
            'cv_file' => 'https://url.example.com/cv.pdf' // alternatively instead of sending the file
        ),

        'urls' => array('https://www.example.com/some/url/123'),

    );

    $data['json'] = json_encode($application_data);

    if( isset( $_FILES['app-cv'] ) && $_FILES['app-cv'] ) {

        // if( $_FILES['app-cv']['size'] <= 5248000 ) {

        $uploaded_cv = realpath( $_FILES['app-cv']['tmp_name'] );
        $cv_ext = $_FILES['app-cv']['type'];
        $cv_name = basename( $_FILES['app-cv']['name'] );
        $data['cv'] = curl_file_create($uploaded_cv, $cv_ext, $cv_name);

        //$data['cv'] = '@'.realpath( $_FILES['app-cv']['tmp_name'] );
    }
    
    // $data['files'] = array('@'.realpath('./my_letter.pdf'));
    // $data['profile_picture'] = '@'.realpath('./photo.png');

    $person_response = postRequest('people/add_to_queue', $api_key, $api_secret, $data);

    echo '<pre>';
    echo var_dump($person_response);
    echo '</pre>';
}

function sative_application_form_submit() {

    add_to_queue();

    //$redirect = $_POST['_wp_http_referer'].'?message=success';
    //header("Location: $redirect");

}
add_action( 'admin_post_nopriv_application_form', 'sative_application_form_submit' );
add_action( 'admin_post_application_form', 'sative_application_form_submit' );