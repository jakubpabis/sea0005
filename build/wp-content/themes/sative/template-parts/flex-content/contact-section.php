<section class="flex-section">
	<div class="container">
		<div class="row">
			<div class="col-lg-6">
				<?php if (get_sub_field('title') || get_sub_field('sub_title')) : ?>
					<h4 class="text-uppercase mb-2 text700">
						<?php echo get_sub_field('sub_title'); ?>
					</h4>
					<span class="display-3 text700 mb-4">
						<?php echo get_sub_field('title'); ?>
					</span>
				<?php endif; ?>
				<?php if (get_field('contact_text_' . $lang, 'option')) : ?>
					<div class="row my-4">
						<div class="col-auto">
							<i class="fal fa-map-marker-alt"></i>
						</div>
						<div class="col pl-0">
							<?php echo get_field('contact_text_' . $lang, 'option'); ?>
						</div>
					</div>
				<?php endif; ?>
				<?php if (get_field('contact_text2_' . $lang, 'option')) : ?>
					<div class="row my-4">
						<div class="col-auto">
							<i class="fal fa-map-marker-alt"></i>
						</div>
						<div class="col pl-0">
							<?php echo get_field('contact_text2_' . $lang, 'option'); ?>
						</div>
					</div>
				<?php endif; ?>
				<div class="row mb-2">
					<div class="col-auto">
						<i class="far fa-envelope"></i>
					</div>
					<div class="col pl-0">
						<a class="font-secondary" href="mailto:info@searchxrecruitment.com">info@searchxrecruitment.com</a>
					</div>
				</div>
				<div class="row mb-2">
					<div class="col-auto">
						<i class="far fa-phone-alt"></i>
					</div>
					<div class="col pl-0">
						<a class="font-secondary" href="tel:+31207782393">+31 (0)20 - 7782393</a>
					</div>
				</div>
				<div class="row mb-4">
					<div class="col-auto">
						<i class="fab fa-whatsapp"></i>
					</div>
					<div class="col pl-0">
						<a class="font-secondary" href="https://wa.me/31207782393" target="_blank"><?php pll_e('WhatsApp us!'); ?></a>
					</div>
				</div>
				<div class="mb-4">
					<a href="https://www.facebook.com/searchxrecruitment" class="btn btn__social notched navy" target="_blank">
						<i class="fab fa-facebook-f"></i>
					</a>
					<a href="https://www.instagram.com/searchxrecruitment/" class="btn btn__social notched navy" target="_blank">
						<i class="fab fa-instagram"></i>
					</a>
					<a href="https://www.linkedin.com/company/search-x-recruitment" class="btn btn__social notched navy" target="_blank">
						<i class="fab fa-linkedin-in"></i>
					</a>
					<a href="https://twitter.com/searchxjobs" class="btn btn__social notched navy" target="_blank">
						<i class="fab fa-twitter"></i>
					</a>
				</div>
				<div class="row mb-4">
					<div class="col-lg-6">
						<h5 class="text700 text-uppercase mb-0">
							It
						</h5>
						<p class="line-height-1 mt-2">
							KVK: 62737244<br />
							BTW: NL854937274B01<br />
							BANK: NL54INGB0006845114
						</p>
					</div>
					<div class="col-lg-6">
						<h5 class="text700 text-uppercase mb-0">
							Sales
						</h5>
						<p class="line-height-1 mt-2">
							KVK: 62737244<br />
							BTW: NL854937274B01<br />
							BANK: NL54INGB0006845114
						</p>
					</div>
				</div>
			</div>
			<div class="col-lg-6">
				<div class="card notched bg-white p-3 mt-5">
					<div class="card-body color-navy">
						<h2 class="m-0 mb-3">
							<?php echo get_sub_field('form_title'); ?>
						</h2>
						<?php $type = 'contact' ?>
						<form method="POST" action="<?php echo esc_url(admin_url('admin-post.php')); ?>" accept-charset="UTF-8" role="form" id="<?php echo $type; ?>_section_form" enctype="multipart/form-data">
							<div class="row align-items-center">
								<div class="col-12 ugly py-2">
									<input class="required" type="text" name="<?php echo $type; ?>_name" minlength="2" required>
									<label class="ugly-label" for="<?php echo $type; ?>_name"><?php echo pll_e('Name'); ?> <span>*</span></label>
								</div>
								<div class="col-12 ugly py-2">
									<input type="text" name="<?php echo $type; ?>_company" minlength="1">
									<label class="ugly-label" for="<?php echo $type; ?>_company"><?php echo pll_e('Company'); ?></label>
								</div>
								<div class="col-12 ugly py-2">
									<input class="required" type="email" name="<?php echo $type; ?>_email" minlength="4" required>
									<label class="ugly-label" for="<?php echo $type; ?>_email"><?php echo pll_e('Email address'); ?> <span>*</span></label>
								</div>
								<div class="col-12 ugly py-2">
									<input type="tel" name="<?php echo $type; ?>_phone" minlength="6">
									<label class="ugly-label" for="<?php echo $type; ?>_phone"><?php echo pll_e('Phone'); ?></label>
								</div>
								<div class="col-12 ugly py-2">
									<textarea class="required" name="<?php echo $type; ?>_message" minlength="10" rows="6" required></textarea>
									<label class="ugly-label" for="<?php echo $type; ?>_message"><?php echo pll_e('Message'); ?> <span>*</span></label>
								</div>
								<div class="col-12 pt-1">
									<input class="d-none" type="text" name="<?php echo $type; ?>_important_consent_field">
									<input type="hidden" name="action" value="<?php echo $type; ?>_form">
									<?php wp_nonce_field('<?php echo $type; ?>_form', '<?php echo $type; ?>_form_nonce'); ?>
									<button type="button" disabled class="fake_btn_contact_loading btn btn__default pink d-none disabled"><?php echo pll_e('Sending, please wait...'); ?></button>
									<button class="g-recaptcha contactF btn btn__default yellow" data-sitekey="6LcJe8kcAAAAAHiiBGXhwhYSUm8KGXpomzLZD8xD" data-callback="onContactSubmit"><?php echo pll_e('Send message'); ?></button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>