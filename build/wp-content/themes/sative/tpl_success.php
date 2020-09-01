<?php
/**
 * Template Name: App success
 */

get_header();

get_footer();

if( isset($_GET['message']) ) {
    $redirect = $_GET['ref'].'?message='.$_GET['message'];
} else if( $_GET['messagecv'] ) {
    $redirect = $_GET['ref'].'?messagecv='.$_GET['messagecv'];
}
header("Location: $redirect");