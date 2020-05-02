<?php

function sative_application_form_submit() {

    $fields = [];
    foreach ($_POST as $key => $value) {
        $fields[$key] = $value;
    }

    $redirect = $_POST['_wp_http_referer'].'?message=success';
    header("Location: $redirect");

}
add_action( 'admin_post_nopriv_application_form', 'sative_application_form_submit' );
add_action( 'admin_post_application_form', 'sative_application_form_submit' );