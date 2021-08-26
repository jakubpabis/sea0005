<?php

/**
 * The template for displaying all single jobs
 *
 * @package Sative
 */
$lang = pll_current_language();

get_header('job');

get_template_part('template-parts/breadcrumbs'); ?>

<?php while (have_posts()) : the_post(); ?>

	<header class="header__jobs header__job-single bg-sea">
		<div class="container">
			<div class="row py-4">
				<div class="col-lg-8">
					<h4 class="text-uppercase mb-3 text700">
						<?php pll_e('Vacature'); ?>
					</h4>
					<h1 class="display-3 text700 mt-0 mb-md-4 mb-0">
						<?php echo get_the_title(); ?>
					</h1>
				</div>
			</div>
			<div class="row align-items-center justify-content-md-between">
				<div class="offset-lg-1 col-lg-7 col-md-10 col-sm-11">
					<div class="info card notched p-lg-3 p-0 mb-4">
						<div class="card-body p-3">
							<?php $helper = jobDisplayHelper(); ?>
							<div class="info">
								<?php if (get_field('location')) : ?>
									<div class="info__item">
										<i class="place"></i>
										<span class="location"><?php echo get_field('location'); ?></span>
									</div>
								<?php endif; ?>
								<?php if ($helper['type']) : ?>
									<div class="info__item">
										<i class="clock"></i>
										<span class="type"><?php echo $helper['type']; ?></span>
									</div>
								<?php endif; ?>
								<?php if (get_field('salary_min') || get_field('salary_max')) : ?>
									<div class="info__item">
										<i class="coins"></i>
										<span>
											<number class="salarymin">
												€ <?php echo number_format((int)get_field('salary_min'), 0, ".", "."); ?>
											</number>
											<?php echo get_field('salary_min') && get_field('salary_max') ? '&nbsp;-&nbsp;' : null ?>
											<number class="salarymax">
												€ <?php echo number_format((int)get_field('salary_max'), 0, ".", "."); ?>
											</number>
										</span>
									</div>
								<?php endif; ?>
								<?php if ($helper['industry']) : ?>
									<div class="info__item">
										<i class="briefcase"></i>
										<span class="industry"><?php echo $helper['industry']; ?></span>
									</div>
								<?php endif; ?>
							</div>
						</div>
					</div>
					<a href="#single-job-apply" class="btn btn__default yellow mr-2 slideTo"><?php pll_e('Direct solliciteren!'); ?></a>
					<a href="" class="btn btn__default square outline navy"><i class="fas fa-share-alt"></i></a>
				</div>
				<div class="header__jobs-dog">
					<svg viewBox="0 0 649.89 364.92" xmlns="http://www.w3.org/2000/svg">
						<path d="M484.2 0l-28 28.09v138.59h41.45l25.37-25.37v-62h-10.23v57.79l-19.43 19.42h-27v-124l22-22.15H639.5v42.84l-26.11 26.11H534.2v99H170.76L63.11 285.84H0v10.28h67.44L175.1 188.58h359.1v91.94l-37.87 46.28 26.85 27.72h-56.8v-72.26H233.13l-46.53 44.42 26.73 27.72h-64.22V237h-10.27v127.79h98.75l-36.39-37.74 36-34.4h218.9v72.27h91.33l-37.25-38.49 34.4-41.95V89.84h73.13l32.17-32.05V.49H484.2" fill="#173751" />
						<g class="bowtie" fill="#FDD963">
							<path d="M555.61 206.72l-23.4-23.39 23.4-23.4 7.22 7.22-16.18 16.18 16.18 16.17z" />
							<path d="M523.25 206.72L516 199.5l16.17-16.17L516 167.15l7.21-7.22 23.4 23.4-23.4 23.39" />
						</g>
					</svg>
				</div>
			</div>
		</div>
	</header>

	<section class="jobs__single mt-4 pt-2 pb-5">
		<div class="container">
			<?php if (isset($_GET['message'])) : ?>
				<div class="row mb-5 mt-5">
					<div class="col-12 text-center">
						<?php if ($_GET['message'] === 'success') : ?>
							<img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=1233946&conversionId=1160586&fmt=gif" />
							<script>
								dataLayer.push({
									'formulier': 'apply job',
									'event': 'formulierVerstuurd',
									'vacature': '{{ record.title|raw }}'
								});
							</script>
							<div class="info card bg-yellow">
								<h2 class="color-navy">
									<?php echo pll_e('Congratulations! Your application was successfully submitted!'); ?>
								</h2>
							<?php else : ?>
								<div class="info card bg-pink">
									<h2 class="color-navy">
										<?php echo pll_e('Sorry, there was a problem with your application, please try again later...'); ?>
									</h2>
								<?php endif; ?>
								</div>
							</div>
					</div>
				</div>
			<?php endif; ?>
			<div class="row justify-content-center">
				<article class="mt-xl-5 mt-md-4 col-lg-10 jobs__single-article">

					<?php /* <aside class="dog-aside">
							<div class="container position-absolute h-100 left-0 top-80">
								<div class="row">
									<div class="col-lg-11 position-absolute h-100 p-0 left-0">
										<div class="flex_content-video_section-dog left bg-yellow w-100 h-100">
											<svg viewBox="0 0 649.89 364.92" xmlns="http://www.w3.org/2000/svg">
												<path d="m484.2 0-28 28.09v138.59h41.45l25.37-25.37v-62h-10.23v57.79l-19.43 19.42h-27v-124l22-22.15h151.14v42.84l-26.11 26.11h-79.19v99h-363.44l-107.65 107.52h-63.11v10.28h67.44l107.66-107.54h359.1v91.94l-37.87 46.28 26.85 27.72h-56.8v-72.26h-233.25l-46.53 44.42 26.73 27.72h-64.22v-117.4h-10.27v127.79h98.75l-36.39-37.74 36-34.4h218.9v72.27h91.33l-37.25-38.49 34.4-41.95v-194.64h73.13l32.17-32.05v-57.3h-165.68" fill="#183153" />
												<g class="bowtie" fill="#EC6278">
													<path d="m555.61 206.72-23.4-23.39 23.4-23.4 7.22 7.22-16.18 16.18 16.18 16.17z" />
													<path d="m523.25 206.72-7.25-7.22 16.17-16.17-16.17-16.18 7.21-7.22 23.4 23.4-23.4 23.39" />
												</g>
											</svg>
										</div>
									</div>
								</div>
							</div>
							<div class="container">
								<div class="row">
									<div class="col-lg-9">
										<span class="display-2 text700">
											<?php pll_e('Waarom solliciteren via Search X Recruitment?'); ?>
										</span>
									</div>
									<div class="offset-lg-3 col-lg-9 mt-5 pt-5">
									</div>
								</div>
							</div>
						</aside> */ ?>

					<?php

					the_content();

					if (get_field('button')) :
						echo '<a href="' . get_field('button')['url'] . '" class="btn btn__default yellow">' . get_field('button')['title'] . '</a>';
					endif;

					?>
					<a href="#single-job-apply" class="btn btn__default yellow mr-2 slideTo"><?php pll_e('Direct solliciteren!'); ?></a>
					<a href="" class="btn btn__default square outline navy"><i class="fas fa-share-alt"></i></a>


				</article>
				<?php /*
					<aside class="col-lg-4 jobs__single-sidebar">
						<?php get_sidebar('jobs'); ?>
					</aside> */ ?>



			</div>
		</div>
	</section>


	<?php if (get_field('process_' . $lang, 'option')) : ?>
		<section class="jobs__single-process bg-sea py-xl-5 py-lg-4 pt-sm-4 pt-2 pb-0 my-5">
			<div class="container py-5">
				<div class="row">
					<div class="col-12">
						<h5 class="text-uppercase mb-2 text700">
							<?php pll_e('Sollicitatie procedure'); ?>
						</h5>
						<h2 class="display-3 text700 mt-0 mb-3">
							<?php pll_e('Wat staat je te wachten'); ?>
						</h2>
					</div>
				</div>
			</div>
			<div class="jobs__single-process-slider">
				<div class="owl-carousel owl-default no-repeat">
					<?php $i = 1;
					foreach (get_field('process_' . $lang, 'option') as $item) : ?>
						<div class="item d-flex flex-column h-100 w-100">
							<div class="card h-100">
								<strong>
									0<?php echo $i; ?>
								</strong>
								<h2 class="text700 my-lg-2 d-block w-100">
									<?php echo $item['title']; ?>
								</h2>
								<?php echo $item['text']; ?>
							</div>
							<div class="triangle"></div>
							<i class="fal fa-times fa-2x"></i>
						</div>
					<?php $i++;
					endforeach; ?>
				</div>
				<hr>
				<div class="pt-md-5 pt-sm-4 pt-3 mt-5 d-flex">
					<div class="custom-owl-prev mr-4" role="button">
						<svg width="34" height="18" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.115.278L.271 8.329a.948.948 0 00-.078.091l.078-.09a.95.95 0 00-.236.412l-.006.023A.898.898 0 000 9l.006.11.002.011a.976.976 0 00.02.114c.003.007.004.014.006.022a.911.911 0 00.159.323l.01.013.068.078 7.844 8.051a.91.91 0 001.307 0 .966.966 0 000-1.342L3.157 9.948h29.919c.51 0 .924-.424.924-.948a.937.937 0 00-.924-.949H3.156L9.422 1.62a.966.966 0 000-1.342.908.908 0 00-1.307 0z" fill="#183153" />
						</svg>
						<span class="sr-only">Previous</span>
					</div>
					<div class="custom-owl-next" role="button">
						<svg width="34" height="18" xmlns="http://www.w3.org/2000/svg">
							<path d="M25.885.278l7.844 8.051a.947.947 0 01.078.091l-.078-.09a.95.95 0 01.236.412l.006.023A.895.895 0 0134 9l-.006.11-.002.011a.974.974 0 01-.02.114c-.003.007-.004.014-.006.022a.91.91 0 01-.159.323l-.01.013-.068.078-7.844 8.051a.91.91 0 01-1.307 0 .966.966 0 010-1.342l6.265-6.432H.924A.937.937 0 010 9c0-.524.414-.949.924-.949h29.92L24.578 1.62a.966.966 0 010-1.342.908.908 0 011.307 0z" fill="#183153" />
						</svg>
						<span class="sr-only">Next</span>
					</div>
				</div>
			</div>
		</section>
	<?php endif; ?>

	<?php $recruiterF = get_field('recruiter_related'); ?>
	<section class="jobs__single-recruiter py-lg-5 py-0 my-5">

		<div id="single-job-apply" class="container py-5">
			<div class="row align-items-end">
				<div class="col-md-6 job-apply-form">
					<h5 class="text-uppercase mb-2 text700">
						<?php pll_e('Iets voor jou?'); ?>
					</h5>
					<h2 class="display-3 text700 mt-0 mb-5">
						<?php pll_e('Solliciteer nu!'); ?>
					</h2>
					<span class="text700 text-uppercase mb-2"><?php pll_e('Solliciteer met:'); ?></span>
					<div class="social-login mt-2 mb-4">
						<?php global $wp; ?>
						<button type="button" class="btn btn__small pink color-white icon full text-uppercase" onclick="myLinkedinLogin( '<?php echo siteURL() . 'userdatafetch'; ?>', '<?php echo home_url($wp->request) ?>')">
							<i class="fab fa-linkedin"></i>
							<span>LinkedIn</span>
						</button>
						<button type="button" class="btn btn__small pink color-white icon full text-uppercase" onclick="myGithubLogin('<?php echo home_url($wp->request) ?>')">
							<i class="fab fa-github"></i>
							<span>Github</span>
						</button>
						<button type="button" class="btn btn__small pink color-white icon full text-uppercase">
							<div class="g-signin2" data-onsuccess="onSignIn"></div>
							<i class="fab fa-google"></i>
							<span>Google</span>
						</button>
						<button type="button" class="btn btn__small pink color-white icon full text-uppercase" onclick="myFacebookLogin()">
							<i class="fab fa-facebook-square"></i>
							<span>Facebook</span>
						</button>
					</div>
					<?php

					$countries = array("Netherlands", "Netherlands Antilles", "Belgium", "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe");

					?>
					<?php
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
					<form method="POST" action="<?php echo esc_url(admin_url('admin-post.php')); ?>" accept-charset="UTF-8" role="form" class="pt-3" id="job-application-form" enctype="multipart/form-data">
						<div class="row align-items-center jobs__single-sidebar-inputs">
							<div class="col-12 pb-1">
								<div class="pretty p-icon p-round p-jelly">
									<input type="radio" name="app-gender" value="Male">
									<div class="state">
										<i class="icon">&times;</i>
										<label><?php pll_e('Male'); ?></label>
									</div>
								</div>
								<div class="pretty p-icon p-round p-jelly ml-4">
									<input type="radio" name="app-gender" value="Female">
									<div class="state">
										<i class="icon">&times;</i>
										<label><?php pll_e('Female'); ?></label>
									</div>
								</div>
							</div>
							<div class="col-lg-12 col-sm-6 ugly pt-2">
								<input class="required" type="text" name="app-name" required value="<?php echo $app_name ? $app_name : null; ?>">
								<label class="ugly-label" for="app-name" <?php echo $app_name ? 'style="opacity: 0;"' : null; ?>><?php pll_e('Name'); ?> <span>*</span></label>
							</div>
							<div class="col-lg-12 col-sm-6 ugly pt-2">
								<input class="required" type="email" name="app-email" required value="<?php echo $app_email ? $app_email : null; ?>">
								<label class="ugly-label" for="app-email" <?php echo $app_email ? 'style="opacity: 0;"' : null; ?>><?php pll_e('Email'); ?> <span>*</span></label>
							</div>
							<div class="col-lg-12 col-sm-6 ugly pt-2">
								<input type="tel" name="app-phone">
								<label class="ugly-label" for="app-phone"><?php pll_e('Phone'); ?></label>
							</div>
							<div class="col-lg-12 col-sm-6 ugly pt-2">
								<input id="app-dob-datepicker" type="text" name="app-dob" pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}">
								<label class="ugly-label" for="app-dob"><?php pll_e('Date of birth'); ?></label>
							</div>
							<div class="col-lg-12 col-sm-6 ugly pt-2">
								<input type="text" name="app-city" value="<?php echo $app_location ? $app_location : null; ?>">
								<label class="ugly-label" for="app-city" <?php echo $app_location ? 'style="opacity: 0;"' : null; ?>><?php pll_e('City'); ?></label>
							</div>
							<div class="col-lg-12 col-sm-6 ugly pt-2">
								<select name="app-country">
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
							<div class="col-12 ugly upload pt-2">
								<label id="app-cv-label" class="full bg-white" for="app-cv"><?php pll_e('CV'); ?> <span><?php echo pll_e('Upload'); ?></span></label>
								<input type="file" accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" name="app-cv" onchange="getFileName(this, 'app-cv-label')">
							</div>
							<div class="col-12 ugly pt-2">
								<textarea name="app-motivation"><?php echo $app_motivation ? $app_motivation : null; ?></textarea>
								<label class="ugly-label" for="app-motivation" <?php echo $app_motivation ? 'style="opacity: 0;"' : null; ?>><?php pll_e('Motivation'); ?></label>
							</div>
							<div class="col-12 pt-1">
								<div class="pretty p-icon p-jelly">
									<input type="checkbox" name="app-pp" required class="required">
									<div class="state">
										<i class="icon">&times;</i>
										<label><?php pll_e('I hereby agree with the'); ?> <a href="<?php if (pll_current_language() === 'en') : ?>/privacy-policy<?php else : ?>/privacyverklaring<?php endif; ?>" style="position: relative; z-index: 9999;"><u><?php pll_e('Privacy Policy'); ?></u></a> <span class="color-pink text-size-small text600">*</span></label>
									</div>
								</div>
							</div>
							<div class="col-12 pt-4">
								<?php get_template_part('template-parts/referrer'); ?>
								<input type="hidden" name="postid" value="<?php echo get_the_ID(); ?>">
								<input type="hidden" name="app-jobid" value="<?php echo get_field('job_id'); ?>">
								<input type="hidden" name="action" value="application_form">
								<?php wp_nonce_field('application_form', 'application_form_nonce'); ?>
								<input type="hidden" name="jobUploadHash" id="jobUploadHash" value="<?php global $hashesForLashes;
																																										echo $hashesForLashes['appHash']; ?>">
								<button type="button" disabled class="fake_btn_app_loading btn btn__default pink d-none disabled"><?php echo pll_e('Sending, please wait...'); ?></button>
								<button type="button" class="fake_btn_app btn btn__default yellow"><?php echo pll_e('Send application'); ?></button>
								<button class="g-recaptcha app btn btn__default yellow d-none" data-sitekey="6LeA-gUaAAAAAE0620g-jcBqsq67NPiBtcj0NrCf" data-callback="onAppSubmit"><?php echo pll_e('Send application'); ?></button>
							</div>
						</div>
					</form>
				</div>
				<?php if (is_array($recruiterF) && !empty($recruiterF)) : $recruiter = $recruiterF[0]; ?>
					<div class="col-lg-5 col-md-6 offset-lg-1 mb-lg-5 py-md-5 pt-5">
						<div class="row recruiter bg-yellow card mb-3 p-xl-4 p-sm-3 py-3 px-1 pb-5 mx-0">
							<div class="col-12">
								<div class="recruiter-text">
									<div class="row align-items-end">
										<div class="col">
											<h2 class="text700 mb-0">
												<?php pll_e('Vragen?'); ?>
											</h2>
										</div>
										<div class="col-md-6 col-sm-8">
											<div class="recruiter-img">
												<img data-src="<?php echo get_the_post_thumbnail_url($recruiter->ID, 'medium_large'); ?>" alt="" class="lazy bg-cover">
											</div>
										</div>
									</div>
									<p>
										<?php pll_e('Stel ze je persoonlijke recruiter'); ?> <u><?php echo $recruiter->post_title; ?></u>
									</p>
									<div class="recruiter-contact">
										<a href="mailto:<?php echo get_field('email', $recruiter->ID); ?>" class="mb-2">
											<i class="far fa-envelope mr-2"></i>
											<?php echo get_field('email', $recruiter->ID); ?>
										</a>
										<a href="tel:<?php echo get_field('phone', $recruiter->ID); ?>" class="mb-2">
											<i class="far fa-phone-alt mr-2"></i>
											<?php echo get_field('phone', $recruiter->ID); ?>
										</a>
									</div>
									<a href="" class="btn btn__default icon color-white pink text-uppercase my-3 d-inline-flex text-left w-auto mr-xl-4 mr-lg-4 align-items-center">
										<i class="fab fa-whatsapp mr-3 fa-21px"></i>
										<span><?php pll_e('Stel een vraag via Whatsapp'); ?></span>
									</a>
									<a href="<?php echo get_field('calendly', $recruiter->ID); ?>" class="btn btn__default icon navy text-uppercase mr-xl-4 mr-lg-4 d-inline-flex text-left w-auto align-items-center">
										<i class="far fa-video mr-3 fa-21px"></i>
										<?php pll_e('Plan een videocall met');
										echo $recruiter->post_title; ?>
									</a>
								</div>
							</div>
						</div>
					</div>
				<?php endif; ?>
			</div>
		</div>

	</section>

	<?php
	$customTaxonomyTerms = wp_get_object_terms($post->ID, 'job-category', array('fields' => 'ids', 'childless' => true));
	$args = array(
		'post_type' => 'jobs',
		'post_status' => 'publish',
		'posts_per_page' => 3,
		'orderby' => 'rand',
		'tax_query' => array(
			array(
				'taxonomy' => 'job-category',
				'field' => 'id',
				'terms' => $customTaxonomyTerms
			)
		),
		'post__not_in' => array($post->ID),
	);
	$relatedPosts = new WP_Query($args);
	?>
	<?php if ($relatedPosts->have_posts()) : ?>
		<section class="jobs__single-related bg-sea py-5">
			<div class="container py-5 my-5">
				<div class="row justify-content-center">
					<div class="col-12 mb-5">
						<h5 class="text-uppercase mb-2 text700">
							<?php pll_e('bekijk ook'); ?>
						</h5>
						<span class="display-3 text700 my-0 mb-4 d-block">
							<?php pll_e('Vergelijkbare vacatures'); ?>
						</span>
					</div>
					<?php while ($relatedPosts->have_posts()) : $relatedPosts->the_post();
						$helper = jobDisplayHelper(); ?>
						<div class="col-lg-4 col-md-8 col-sm-10 d-flex jobs__single-related-item">
							<div class="item d-flex flex-column h-100 w-100">
								<div class="card w-100 d-flex flex-row flex-wrap p-4 h-100">
									<div class="content mb-4">
										<h2 class="font-primary text700 my-0"><a href="<?php echo get_the_permalink(); ?>"><?php echo get_the_title(); ?></a></h2>
									</div>
									<div class="btn-cont align-self-end">
										<div class="info mb-4 pb-2">
											<?php if (get_field('location')) : ?>
												<div class="info__item">
													<i class="place"></i>
													<span class="font-secondary location"><?php echo get_field('location'); ?></span>
												</div>
											<?php endif; ?>
											<?php if ($helper['type']) : ?>
												<div class="info__item">
													<i class="clock"></i>
													<span class="font-secondary type"><?php echo $helper['type']; ?></span>
												</div>
											<?php endif; ?>
											<?php if (get_field('salary_min') || get_field('salary_max')) : ?>
												<div class="info__item">
													<i class="coins"></i>
													<span class="font-secondary">
														<number class="salarymin">
															<?php echo number_format((int)get_field('salary_min'), 0, ".", "."); ?>
														</number>
														<?php echo get_field('salary_min') && get_field('salary_max') ? '&nbsp;-&nbsp;' : null ?>
														<number class="salarymax">
															<?php echo number_format((int)get_field('salary_max'), 0, ".", "."); ?>
														</number>
													</span>
												</div>
											<?php endif; ?>
										</div>
										<a href="<?php echo get_the_permalink(); ?>" class="btn btn__small navy"><?php pll_e('More info'); ?></a>
									</div>
								</div>
								<div class="triangle"></div>
							</div>
						</div>
					<?php endwhile; ?>
				</div>
			</div>
		</section>
	<?php endif;
	wp_reset_postdata(); ?>

<?php endwhile; ?>
<script>
	if (window.history.length > 1) {
		document.getElementById('backBTN').classList.remove('d-none');
		document.getElementById('backBTN').addEventListener('click', function() {
			window.history.back();
		});
	}
</script>
<?php get_footer();
