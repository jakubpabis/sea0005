<?php

/**
 * Adding/updating jobs from XML
 *
 * @return void
 */
function userDataFetch()
{
    $redirect = $_COOKIE['redirect_user_url'];
    header("Location: $redirect");
}
