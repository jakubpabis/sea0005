<?php

/**
 * Template Name: Cron Feed Template
 */
if (isset($_GET['hash']) && $_GET['hash'] === 'b31d032cfdcf47a399990a71e43c') {
	$hash = true;
} else {
	$hash = false;
}

if ($hash) {
	xmlCreateFeed();
} else if (is_user_logged_in()) {
	xmlCreateFeed();
} else {
	auth_redirect();
}
