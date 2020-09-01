<?php
/**
 * Template Name: App success
 */

get_header();

get_footer();

if( isset($_GET['message']) ) {
    $url = preg_replace('/\?.*/', '', $_GET['ref']);
    $redirect = $url.'?message='.$_GET['message'];
} else if( $_GET['messagecv'] ) {
    $url = preg_replace('/\?.*/', '', $_GET['ref']);
    $redirect = $url.'?messagecv='.$_GET['messagecv'];
}
header("Location: $redirect");