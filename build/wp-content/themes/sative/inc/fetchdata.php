<?php

/**
 * Adding/updating jobs from XML
 *
 * @return void
 */
function userDataFetch()
{
    $cookie = $_COOKIE['redirect_user_url'];

    if( isset( $_GET['code'] ) ) { ?>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script>
            $.ajax({
                url: 'https://github.com/login/oauth/access_token?client_id=3b1b9252c021bbb321e0&client_secret=5afd24b3d4d0bf252e8034139ec6a00bc268236&code=<?= $_GET['code']; ?>',
                type: 'POST',
                crossDomain: true,
                dataType: 'jsonp',
                success: function(result) {
                    console.log(result);
                },
                error: function(error) {
                    console.log(error);
                }
            });
        </script>
        <?php $redirect = $cookie.'?code='.$_GET['code'];
    }
    
    //header("Location: $redirect");
}
