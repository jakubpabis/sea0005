<?php

if( isset( $_SESSION['referrer'] ) && !empty( $_SESSION['referrer'] )) {
    echo '<input type="hidden" name="the_user_referrer" value="'.$_SESSION['referrer'].'" />';
} else if( isset( $_SERVER['HTTP_REFERER'] ) && !empty( $_SERVER['HTTP_REFERER'] ) && preg_match( '/gclid/i', $_SERVER['HTTP_REFERER'] ) ) {
    $_SESSION['referrer'] = 'AdWords';
    echo '<input type="hidden" name="the_user_referrer" value="AdWords" />';
} else if( isset( $_SERVER['REQUEST_URI'] ) && !empty( $_SERVER['REQUEST_URI'] ) && preg_match( '/gclid/i', $_SERVER['REQUEST_URI'] ) ) {
    $_SESSION['referrer'] = 'AdWords';
    echo '<input type="hidden" name="the_user_referrer" value="AdWords" />';
} else if( isset( $_SERVER['HTTP_REFERER'] ) ) {
    $_SESSION['referrer'] = $_SERVER['HTTP_REFERER'];
    echo '<input type="hidden" name="the_user_referrer" value="'.$_SERVER['HTTP_REFERER'].'" />';
}

?>