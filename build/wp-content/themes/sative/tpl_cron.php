<?php

/**
 * Template Name: Cron
 */
if (isset($_GET['hash']) && $_GET['hash'] === 'b31d032cfdcf47a399990a71e43c') {
	$hash = true;
} else {
	$hash = false;
}
var_dump($_GET['hash']);
if (is_user_logged_in() || $hash) {
	xmlRead();
}
