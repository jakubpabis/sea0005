<?php

/**
 * Adding/updating jobs from XML
 *
 * @return void
 */
function userDataFetch()
{
    $cookie = $_COOKIE['redirect_user_url'];

    if( isset( $_GET['code'] ) ) {
        $redirect = $cookie.'?code='.$_GET['code'];
    }
    
    header("Location: $redirect");
}
