<?php

if (isset($_COOKIE['user-source']) && $_COOKIE['user-source'] === 'job-alert') {
	echo '<input type="hidden" name="the_user_referrer" value="Job Alert" />';
} else if (isset($_SERVER['HTTP_REFERER']) && !empty($_SERVER['HTTP_REFERER']) && preg_match('/gclid/i', $_SERVER['HTTP_REFERER'])) {
	$_SESSION['referrer'] = 'AdWords';
	echo '<input type="hidden" name="the_user_referrer" value="AdWords" />';
} else if (isset($_SERVER['REQUEST_URI']) && !empty($_SERVER['REQUEST_URI']) && preg_match('/gclid/i', $_SERVER['REQUEST_URI'])) {
	$_SESSION['referrer'] = 'AdWords';
	echo '<input type="hidden" name="the_user_referrer" value="AdWords" />';
} else if (isset($_SERVER['HTTP_REFERER'])) {
	$_SESSION['referrer'] = $_SERVER['HTTP_REFERER'];
	echo '<input type="hidden" name="the_user_referrer" value="' . $_SERVER['HTTP_REFERER'] . '" />';
}
