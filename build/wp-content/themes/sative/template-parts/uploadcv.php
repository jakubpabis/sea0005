<?php if (isset($_GET['uploadcv'])) : ?>
	<script defer>
		jQuery(document).ready(function() {
			jQuery('#uploadCVModal').modal('show');
		});
	</script>
<?php endif; ?>
<?php

$countries = array("Netherlands", "Netherlands Antilles", "Belgium", "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe");

if (isset($_GET['app-name']) && $_GET['app-name']) {
	$app_name = $_GET['app-name'];
} else {
	$app_name = null;
}
if (isset($_GET['app-email']) && $_GET['app-email']) {
	$app_email = $_GET['app-email'];
} else {
	$app_email = null;
}
if (isset($_GET['app-location']) && $_GET['app-location']) {
	$app_location = $_GET['app-location'];
} else {
	$app_location = null;
}
if (isset($_GET['app-motivation']) && $_GET['app-motivation']) {
	$app_motivation = $_GET['app-motivation'];
} else {
	$app_motivation = null;
}
if (isset($_GET['app-url']) && $_GET['app-url']) {
	$app_url = $_GET['app-url'];
} else {
	$app_url = null;
}

?>
<div id="uploadCVModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="uploadCVModalTitle" aria-hidden="true">
	<div class="modal-dialog modal-lg modal-dialog-centered" role="document">
		<div class="modal-content py-5">
			<div class="modal-header d-flex">
				<span class="display-3 text700" id="uploadCVModalTitle"><?php pll_e('Upload CV'); ?></span>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span class="text700 text-uppercase text-size-normal mr-2 font-primary">
						<?php pll_e('Sluiten'); ?>
					</span>
					<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M30.3884 34.2353L20.1176 23.9745L9.84745 34.2353L6 30.3939L16.2713 20.1321L16.2568 20.1171L16.2713 20.1027L6.00107 9.84138L9.84638 6L20.1176 16.2597L30.3889 6L34.2348 9.84138L23.964 20.1027L23.979 20.1171L23.964 20.1321L34.2353 30.3939L30.3884 34.2353ZM0 40H40V0H0V40Z" fill="#183153" />
					</svg>
				</button>
			</div>
			<div class="modal-container">
				<div class="modal-body pt-3">
					<div class="row justify-content-center">
						<div class="col-xl-7 col-lg-10">
							<span class="text-size-small text700 text-uppercase mb-2">
								<?php pll_e('Apply with:'); ?>
							</span>
							<div class="row social-login">
								<?php global $wp; ?>
								<button type="button" class="btn btn__small pink color-white text700 icon full text-uppercase" onclick="myLinkedinLogin( '<?php echo siteURL() . 'userdatafetch'; ?>', '<?php echo home_url($wp->request) ?>', true )">
									<i class="fab fa-linkedin"></i>
									<span>LinkedIn</span>
								</button>
								<button type="button" class="btn btn__small pink color-white text700 icon full text-uppercase" onclick="myGithubLogin('<?php echo home_url($wp->request) ?>', true)">
									<i class="fab fa-github"></i>
									<span>Github</span>
								</button>
								<button type="button" class="btn btn__small pink color-white text700 icon full text-uppercase">
									<div class="g-signin2" data-onsuccess="onSignIn"></div>
									<i class="fab fa-google"></i>
									<span>Google</span>
								</button>
								<button type="button" class="btn btn__small pink color-white text700 icon full text-uppercase" onclick="myFacebookLogin()">
									<i class="fab fa-facebook-square"></i>
									<span>Facebook</span>
								</button>
							</div>
							<form method="POST" action="<?php echo esc_url(admin_url('admin-post.php')); ?>" accept-charset="UTF-8" role="form" class="pt-4" id="cv-upload-form" enctype="multipart/form-data">
								<div class="d-flex flex-wrap align-items-center">
									<div class="pb-3 w-100">
										<div class="pretty p-icon p-round p-jelly">
											<input type="radio" value="Male" name="cv-gender">
											<div class="state">
												<i class="icon">&times;</i>
												<label><?php echo pll_e('Male'); ?></label>
											</div>
										</div>
										<div class="pretty p-icon p-round p-jelly ml-4">
											<input type="radio" value="Female" name="cv-gender">
											<div class="state">
												<i class="icon">&times;</i>
												<label><?php echo pll_e('Female'); ?></label>
											</div>
										</div>
										<div class="pretty p-icon p-round p-jelly ml-4">
											<input type="radio" value="Other" name="cv-gender">
											<div class="state">
												<i class="icon">&times;</i>
												<label><?php echo pll_e('Other'); ?></label>
											</div>
										</div>
									</div>
									<div class="w-50 pr-2 ugly pb-2">
										<input type="text" name="cv-name" minlength="1" value="<?php echo $app_name ? $app_name : null; ?>" required>
										<label class="ugly-label" for="cv-name" <?php echo $app_name ? 'style="opacity: 0;"' : null; ?>><?php echo pll_e('Name'); ?> <span>*</span></label>
									</div>
									<div class="w-50 ugly pb-2">
										<input type="email" name="cv-email" value="<?php echo $app_email ? $app_email : null; ?>" required>
										<label class="ugly-label" for="cv-email" <?php echo $app_email ? 'style="opacity: 0;"' : null; ?>><?php echo pll_e('Email'); ?> <span>*</span></label>
									</div>
									<div class="w-50 pr-2 ugly pb-2">
										<input type="text" name="cv-phone">
										<label class="ugly-label" for="cv-phone"><?php echo pll_e('Phone'); ?></label>
									</div>
									<div class="w-50 ugly pb-2">
										<input id="cv-dob-datepicker" type="text" name="cv-dob" pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}">
										<label class="ugly-label" for="cv-dob"><?php echo pll_e('Date of birth'); ?></label>
									</div>
									<div class="w-50 pr-2 ugly pb-2">
										<input type="text" name="cv-city" value="<?php echo $app_location ? $app_location : null; ?>">
										<label class="ugly-label" for="cv-city" <?php echo $app_location ? 'style="opacity: 0;"' : null; ?>><?php echo pll_e('City'); ?></label>
									</div>
									<div class="w-50 ugly pb-2">
										<select name="cv-country">
											<option class="default" value=""><?php echo pll_e('Choose your country'); ?></option>
											<?php $i = 1;
											foreach ($countries as $country) : ?>
												<?php if ($i === 1 || $i === 4) : ?>
													<optgroup>
													<?php endif; ?>
													<option value="<?php echo $country; ?>"><?php echo $country; ?></option>
													<?php if ($i === 3 || $i === count($countries)) : ?>
													</optgroup>
												<?php endif; ?>
											<?php $i++;
											endforeach; ?>
										</select>
									</div>
									<div class="w-100 ugly upload pb-2">
										<label id="cv-cv-label" class="full bg-white ugly-label w-100" for="cv-cv"><?php pll_e('CV'); ?> <span><?php echo pll_e('Upload'); ?></span></label>
										<input type="file" value="" accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" name="cv-cv" onchange="getFileName(this, 'cv-cv-label')">
									</div>
									<div class="w-100 ugly pb-2">
										<textarea name="cv-motivation"><?php echo $app_motivation ? $app_motivation : null; ?></textarea>
										<label class="ugly-label" for="cv-motivation" <?php echo $app_motivation ? 'style="opacity: 0;"' : null; ?>><?php echo pll_e('Motivation'); ?></label>
									</div>
									<div class="w-100 pb-3">
										<div class="pretty p-icon p-jelly">
											<input type="checkbox" name="cv-pp" required>
											<div class="state">
												<i class="icon">&times;</i>
												<label><?php pll_e('I hereby agree with the'); ?> <a href="<?php if (pll_current_language() === 'en') : ?>/privacy-policy<?php else : ?>/privacy-verklaring<?php endif; ?>" style="position: relative; z-index: 9999;"><u><?php pll_e('Privacy Policy'); ?></u></a> <span class="color-pink text-size-small text600">*</span></label>
											</div>
										</div>
									</div>
									<div class="pt-1">
										<?php get_template_part('template-parts/referrer'); ?>
										<input type="hidden" name="cv-jobid" value="188">
										<input type="hidden" name="action" value="cv_form">
										<input type="hidden" name="cvUploadHash" id="cvUploadHash" value="<?php global $hashesForLashes;
																																											echo $hashesForLashes['cvHash']; ?>">
										<?php wp_nonce_field('cv_form', 'cv_form_nonce'); ?>
										<button type="button" disabled class="fake_btn_cv_loading btn btn__default pink d-none disabled"><?php echo pll_e('Sending, please wait...'); ?></button>
										<?php /* <button type="button" class="fake_btn_cv btn btn__default yellow"><?php echo pll_e('Send application'); ?></button> */ ?>
										<button class="g-recaptcha cvBTN btn btn__default yellow" data-sitekey="6LcJe8kcAAAAAHiiBGXhwhYSUm8KGXpomzLZD8xD" data-callback="onCVSubmit"><?php echo pll_e('Send application'); ?></button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>