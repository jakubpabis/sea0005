<?php
/**
 * Template Name: App success
 */

get_header();

get_footer();

$redirect = $_GET['ref'].'?message='.$_GET['message'];
header("Location: $redirect");