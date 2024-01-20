<?php
/*
Plugin Name: SearchX Application plugin
Plugin URI: https://tutsplus.com/
Description: Plugin for sending application data to SearchX software
Version: 1.0
Author: Sative
Author URI: https://www.sative.co.uk/
License: GPLv2 or later
Text Domain: searchx-application
*/

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$recaptchaKey = '6LdyeiQhAAAAAN_FcoL_GuLLqBVFSRUedpkNtB0H';
$api_key = 'XoslTEyE';
$api_secret = 'ZZXRgDovPQvPfLjklPLBoTAl';

function wpdocs_set_html_mail_content_type()
{
	return 'text/html';
}

require_once(dirname(__FILE__) . '/tpl/cv.php');
require_once(dirname(__FILE__) . '/tpl/contact.php');
require_once(dirname(__FILE__) . '/tpl/application.php');

require_once(dirname(__FILE__) . '/send/cv.php');
require_once(dirname(__FILE__) . '/send/contact.php');
require_once(dirname(__FILE__) . '/send/application.php');

require_once(dirname(__FILE__) . '/post-request.php');

require_once(dirname(__FILE__) . '/action/cv.php');
require_once(dirname(__FILE__) . '/action/subscribe.php');
require_once(dirname(__FILE__) . '/action/application.php');

function sative_cv_form_submit()
{
	$message = add_to_queue_cv();
	$referer = remove_query_arg('message', $_POST['_wp_http_referer']);
	$referer = remove_query_arg('messagecv', $_POST['_wp_http_referer']);
	$referer = remove_query_arg('messagesb', $_POST['_wp_http_referer']);
	$referer = remove_query_arg('messagect', $_POST['_wp_http_referer']);
	$redirect = '/app-success?ref=' . $referer . '&messagecv=' . $message;
	header("Location: $redirect");
}
add_action('admin_post_nopriv_cv_form', 'sative_cv_form_submit');
add_action('admin_post_cv_form', 'sative_cv_form_submit');

function sative_application_form_submit()
{
	$message = add_to_queue();
	$referer = remove_query_arg('message', $_POST['_wp_http_referer']);
	$referer = remove_query_arg('messagecv', $_POST['_wp_http_referer']);
	$referer = remove_query_arg('messagesb', $_POST['_wp_http_referer']);
	$referer = remove_query_arg('messagect', $_POST['_wp_http_referer']);
	$redirect = '/app-success?ref=' . $referer . '&message=' . $message;
	header("Location: $redirect");
}
add_action('admin_post_nopriv_application_form', 'sative_application_form_submit');
add_action('admin_post_application_form', 'sative_application_form_submit');

function sative_subscribe_form_submit()
{
	$message = subscribe_person();
	$referer = remove_query_arg('message', $_POST['_wp_http_referer']);
	$referer = remove_query_arg('messagecv', $_POST['_wp_http_referer']);
	$referer = remove_query_arg('messagesb', $_POST['_wp_http_referer']);
	$referer = remove_query_arg('messagect', $_POST['_wp_http_referer']);
	$redirect = '/app-success?ref=' . $referer . '&messagesb=' . $message;
	header("Location: $redirect");
}
add_action('admin_post_nopriv_subscribe_form', 'sative_subscribe_form_submit');
add_action('admin_post_subscribe_form', 'sative_subscribe_form_submit');

function sative_contact_form_submit()
{
	$message = sendEmailContact();
	$referer = remove_query_arg('message', $_POST['_wp_http_referer']);
	$referer = remove_query_arg('messagecv', $_POST['_wp_http_referer']);
	$referer = remove_query_arg('messagesb', $_POST['_wp_http_referer']);
	$referer = remove_query_arg('messagect', $_POST['_wp_http_referer']);
	$redirect = '/app-success?ref=' . $referer . '&messagect=' . $message;
	header("Location: $redirect");
}
add_action('admin_post_nopriv_contact_form', 'sative_contact_form_submit');
add_action('admin_post_contact_form', 'sative_contact_form_submit');

function sative_cta_dog_contact_form_submit()
{
	$message = sendEmailContactDog();
	$referer = remove_query_arg('message', $_POST['_wp_http_referer']);
	$referer = remove_query_arg('messagecv', $_POST['_wp_http_referer']);
	$referer = remove_query_arg('messagesb', $_POST['_wp_http_referer']);
	$referer = remove_query_arg('messagect', $_POST['_wp_http_referer']);
	$redirect = '/app-success?ref=' . $referer . '&messagect=' . $message;
	header("Location: $redirect");
}
add_action('admin_post_nopriv_cta_dog_contact_form', 'sative_cta_dog_contact_form_submit');
add_action('admin_post_cta_dog_contact_form', 'sative_cta_dog_contact_form_submit');
