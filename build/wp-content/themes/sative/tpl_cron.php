<?php

/**
 * Template Name: Cron
 */
if (isset($GET['hash']) && $GET['hash'] === 'b31d032cfdcf47a399990a71e43c') {
	$hash = true;
} else {
	$hash = false;
}
if (is_user_logged_in() || $hash) {
	xmlRead();
}
