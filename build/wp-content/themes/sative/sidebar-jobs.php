<div class="card bg-sea">
    <h3>
        <?php pll_e( 'Apply here' ); ?>
    </h3>
    <span class="text500 text-size-small"><?php pll_e( 'Apply with:' ); ?></span>
    <div class="social-login">
        <?php global $wp; ?>
        <button type="button" class="btn btn__small navy icon full" onclick="myLinkedinLogin( '<?= siteURL().'userdatafetch'; ?>', '<?= home_url( $wp->request ) ?>')">
            <i class="fab fa-linkedin"></i>
            <span>LinkedIn</span>
        </button>
        <button type="button" class="btn btn__small navy icon full" onclick="myGithubLogin('<?= home_url( $wp->request ) ?>')">
            <i class="fab fa-github"></i>
            <span>Github</span>
        </button>
        <button type="button" class="btn btn__small navy icon full">
            <div class="g-signin2" data-onsuccess="onSignIn"></div>
            <i class="fab fa-google"></i>
            <span>Google</span>
        </button>
        <button type="button" class="btn btn__small navy icon full" onclick="myFacebookLogin()">
            <i class="fab fa-facebook-square"></i>
            <span>Facebook</span>
        </button>
    </div>
    <?php

        $countries = array("Netherlands", "Netherlands Antilles", "Belgium", "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe");

    ?>
    <?php
        if( isset( $_GET['app-name'] ) && $_GET['app-name'] ) {
            $app_name = $_GET['app-name'];
        } else {
            $app_name = null;
        }
        if( isset( $_GET['app-email'] ) && $_GET['app-email'] ) {
            $app_email = $_GET['app-email'];
        } else {
            $app_email = null;
        }
        if( isset( $_GET['app-location'] ) && $_GET['app-location'] ) {
            $app_location = $_GET['app-location'];
        } else {
            $app_location = null;
        }
        if( isset( $_GET['app-motivation'] ) && $_GET['app-motivation'] ) {
            $app_motivation = $_GET['app-motivation'];
        } else {
            $app_motivation = null;
        }
        if( isset( $_GET['app-url'] ) && $_GET['app-url'] ) {
            $app_url = $_GET['app-url'];
        } else {
            $app_url = null;
        }
    ?>
    <form method="POST" action="<?php echo esc_url( admin_url('admin-post.php') ); ?>" accept-charset="UTF-8" role="form" class="pt-3" id="job-application-form" enctype="multipart/form-data">
        <div class="row align-items-center jobs__single-sidebar-inputs">
            <div class="col-12 pb-1">
                <div class="pretty p-icon p-round p-plain p-jelly">
                    <input type="radio" name="app-gender" value="Male">
                    <div class="state">
                        <i class="icon fas fa-mars"></i>
                        <label><?php pll_e( 'Male' ); ?></label>
                    </div>
                </div>
                <div class="pretty p-icon p-round p-plain p-jelly ml-4">
                    <input type="radio" name="app-gender" value="Female">
                    <div class="state">
                        <i class="icon fas fa-venus"></i>
                        <label><?php pll_e( 'Female' ); ?></label>
                    </div>
                </div>
            </div>
            <div class="col-lg-12 col-sm-6 ugly pt-2">
                <input class="required" type="text" name="app-name" required value="<?= $app_name ? $app_name : null; ?>">
                <label class="ugly-label" for="app-name" <?= $app_name ? 'style="opacity: 0;"' : null; ?>><?php pll_e( 'Name' ); ?> <span>*</span></label>
            </div>
            <div class="col-lg-12 col-sm-6 ugly pt-2">
                <input class="required" type="email" name="app-email" required value="<?= $app_email ? $app_email : null; ?>">
                <label class="ugly-label" for="app-email" <?= $app_email ? 'style="opacity: 0;"' : null; ?>><?php pll_e( 'Email' ); ?> <span>*</span></label>
            </div>
            <div class="col-lg-12 col-sm-6 ugly pt-2">
                <input type="tel" name="app-phone">
                <label class="ugly-label" for="app-phone"><?php pll_e( 'Phone' ); ?></label>
            </div>
            <div class="col-lg-12 col-sm-6 ugly pt-2">
                <input id="app-dob-datepicker" type="text" name="app-dob" pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}">
                <label class="ugly-label" for="app-dob"><?php pll_e( 'Date of birth' ); ?></label>
            </div>
            <div class="col-lg-12 col-sm-6 ugly pt-2">
                <input type="text" name="app-city" value="<?= $app_location ? $app_location : null; ?>">
                <label class="ugly-label" for="app-city" <?= $app_location ? 'style="opacity: 0;"' : null; ?>><?php pll_e( 'City' ); ?></label>
            </div>
            <div class="col-lg-12 col-sm-6 ugly pt-2">
                <select name="app-country">
                    <option class="default" value=""><?= pll_e( 'Choose your country' ); ?></option>
                    <?php $i = 1; foreach( $countries as $country ): ?>
                    <?php if( $i === 1 || $i === 4 ): ?>
                        <optgroup>
                    <?php endif; ?>
                        <option value="<?php echo $country; ?>"><?php echo $country; ?></option>
                    <?php if( $i === 3 || $i === count($countries) ): ?>
                        </optgroup>
                    <?php endif; ?>
                    <?php $i++; endforeach; ?>
                </select>
            </div>
            <div class="col-12 ugly upload pt-2">
                <label id="app-cv-label" class="full bg-white" for="app-cv"><?php pll_e( 'CV' ); ?> <span><?= pll_e( 'Upload' ); ?></span></label>
                <input type="file" accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" name="app-cv" onchange="getFileName(this, 'app-cv-label')">
            </div>
            <div class="col-12 ugly pt-2">
                <textarea name="app-motivation"><?= $app_motivation ? $app_motivation : null; ?></textarea>
                <label class="ugly-label" for="app-motivation" <?= $app_motivation ? 'style="opacity: 0;"' : null; ?>><?php pll_e( 'Motivation' ); ?></label>
            </div>
            <div class="col-12 pt-1">
                <div class="pretty p-icon p-plain p-jelly">
                    <input type="checkbox" name="app-pp" required class="required">
                    <div class="state">
                        <i class="icon fal fa-times"></i>
                        <label><?php pll_e( 'I hereby agree with the' ); ?> <a href="<?php if( pll_current_language() === 'en' ) : ?>/privacy-policy<?php else: ?>/privacyverklaring<?php endif; ?>" style="position: relative; z-index: 9999;"><u><?php pll_e( 'Privacy Policy' ); ?></u></a> <span class="color-pink text-size-small text600">*</span></label>
                    </div>
                </div>
            </div>
            <div class="col-12 pt-4">
                <input type="email" id="form__app__email" name="email" value="" />
                <input type="text" id="form__app__website" name="website" value="" />
                <?php get_template_part( 'template-parts/referrer' ); ?>
                <input type="hidden" name="postid" value="<?= get_the_ID(); ?>">
                <input type="hidden" name="app-jobid" value="<?= get_field('job_id'); ?>">
                <input type="hidden" name="action" value="application_form">
                <?php wp_nonce_field( 'application_form', 'application_form_nonce' ); ?>
                <button type="button" data-btn="load" disabled class="btn_app_loading btn btn__default pink d-none disabled"><?= pll_e( 'Sending, please wait...' ); ?></button>
                <button type="submit" data-btn="submit" class="btn btn__default yellow"><?= pll_e( 'Send application' ); ?></button>
            </div>
        </div>
    </form>
</div>
<div class="share">
    <h5 class="text500"><?php pll_e( 'Share this content' ); ?></h5>
    <div class="btns">
        <?php
            global $wp;
            $current_url = home_url( add_query_arg( array(), $wp->request ) );
        ?>
        <a class="btn btn__social notched navy" href="https://www.facebook.com/sharer/sharer.php?u=<?= $current_url; ?>&t=<?= get_the_title(); ?>" target="_blank">
            <i class="fab fa-facebook-f"></i>
        </a>
        <a class="btn btn__social notched navy" href="https://twitter.com/intent/tweet?source=<?= $current_url; ?>&text=<?= $current_url; ?> - <?= get_the_title(); ?>" target="_blank">
            <i class="fab fa-twitter"></i>
        </a>
        <a class="btn btn__social notched navy" href="http://www.linkedin.com/shareArticle?mini=true&url=<?= $current_url; ?>&title=<?= get_the_title(); ?>&summary=Checkout%20this%20job%20offer!&source=<?= $current_url; ?>" target="_blank">
            <i class="fab fa-linkedin-in"></i>
        </a>
        <a class="btn btn__social notched navy" href="https://getpocket.com/save?url=<?= $current_url; ?>&title=<?= get_the_title(); ?>" target="_blank">
            <i class="fab fa-get-pocket"></i>
        </a>
        <a class="btn btn__social notched navy" href="whatsapp://send?text=<?= get_the_title(); ?>&nbsp;&nbsp;<?= $current_url; ?>" target="_blank">
            <i class="fab fa-whatsapp"></i>
        </a>
        <a class="btn btn__social notched navy" href="mailto:?subject=<?= get_the_title(); ?>&body=Checkout%20this%20job%20offer: <?= $current_url; ?>" target="_blank">
            <i class="far fa-envelope"></i>
        </a>
    </div>
</div>
