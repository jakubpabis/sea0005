<section class="flex_content-cta flex-section">
	<div class="container position-absolute h-100 left-0">
		<div class="row">
			<div class="col-lg-10 col-md-11 position-absolute h-100 p-lg-0 pl-0 pr-3 left-0">
				<div class="flex_content-cta-bg right bg-yellow w-100 h-100"></div>
			</div>
		</div>
	</div>
	<div class="container">
		<div class="row align-items-center">
			<div class="col-lg-5 col-md-6 ml-sm-n5 order-12 order-md-1 pr-0 pr-sm-3">
				<img src="<?php echo get_sub_field('image')['url']; ?>" alt="<?php echo get_sub_field('image')['title']; ?>" class="lazy img-fluid">
			</div>
			<div class="col-lg-7 col-md-6 pt-lg-5 mt-lg-5 mt-md-0 mt-4 order-1 order-md-12">
				<h5 class="text-uppercase">
					<?php echo get_sub_field('sub_title'); ?>
				</h5>
				<span class="display-3 d-block text700 mb-5">
					<?php echo get_sub_field('title'); ?>
				</span>
				<a href="<?php echo get_sub_field('link')['url']; ?>" class="btn btn__default pink bg-pink color-white">
					<?php echo get_sub_field('link')['title']; ?>
				</a>
			</div>
		</div>
	</div>
</section>

<section class="flex_content-bubbles flex-section">
	<div class="container-lg">
		<div class="row align-items-end">
			<div class="col-lg-6">
				<span class="d-block display-3 text700">
					<?php echo get_sub_field('contact_title'); ?>
				</span>
			</div>
			<div class="col-lg-5 col-auto offset-lg-0 offset-md-3 offset-0">
				<h2 class="m-lg-0">
					<?php echo get_sub_field('contact_sub_title'); ?>
					<svg class="position-absolute ml-4 mt-3" width="118" height="445" xmlns="http://www.w3.org/2000/svg">
						<g stroke="#183153" stroke-width="5" fill="none" fill-rule="evenodd">
							<path d="M86 431.28l15 9.867 15-9.867" />
							<path d="M101.492 441.347V26.505L77.72 3.048H0" />
						</g>
					</svg>
				</h2>
			</div>
		</div>
		<div class="row pt-5 mt-4 pb-5">
			<?php $i = 1;
			foreach (get_sub_field('bubbles') as $item) : ?>
				<?php
				switch ($i) {
					case 1:
						$color = 'bg-sea';
						break;
					case 2:
						$color = 'bg-yellow';
						break;
					case 3:
						$color = 'bg-pink';
						break;
				}
				?>
				<div class="col-md-4 col-sm-8 col-10 <?php echo $i % 2 === 0 ? 'offset-md-0 offset-sm-5 offset-3' : null; ?> d-flex flex_content-bubbles-bubble-cont mb-md-0 mb-5 pt-md-0 pt-3">
					<div class="flex_content-bubbles-bubble">
						<h2 class="<?php echo $color; ?> px-2 d-inline-block my-0">
							<?php echo $item['title']; ?>
						</h2>
						<?php echo $item['text']; ?>
					</div>
					<div class="triangle"></div>
				</div>
			<?php $i++;
			endforeach; ?>
		</div>
	</div>
</section>

<section class="flex_content-contact">
	<div class="container-lg">
		<div class="row justify-content-end">
			<div class="col-md-10 flex_content-contact-dog order-md-1 order-12">
				<svg viewBox="0 0 650.13 306.3" xmlns="http://www.w3.org/2000/svg">
					<path d="M484.68 0l-28.1 28.1v138.58h41.54l25.3-25.31v-62h-10.29v57.77l-19.38 19.38h-26.88V32.46l22-22.16H640v42.76l-26.18 26h-79.23v99H171.22L63.53 285.54H0v10.29h67.72l107.69-107.51h359.18v69.29h73v19.55L591 295.83h-95.15v-64.92l-21.3-21.3-7.33 7.33 18.33 18.33v47H215l-10.1-10.7 38.22-35.08-35.25-34.21-7.16 7.33 27.4 26.71-37.87 34.73 23.56 24.61h-64.4v-60.22h-10.3V306h98.79L225 292.52h260.55v13.78h110.13l22.17-25.13v-33.68h-73V89.54H618l32.11-32.12V0z" fill="#173751" />
					<g fill="#ffffff">
						<path d="M556 206.6l-23.4-23.41 23.4-23.4 7.2 7.21-16.2 16.19 16.22 16.22z" />
						<path d="M523.74 206.6l-7.18-7.19 16.21-16.22L516.56 167l7.18-7.19 23.41 23.4z" />
					</g>
				</svg>
			</div>
			<div class="col-md-6 col-sm-9 offset-md-0 offset-sm-3 ordre-md-12 order-1" id="bottom-contact-dog-section">
				<?php if (get_sub_field('links') && !empty(get_sub_field('links'))) : ?>
				<?php else : ?>
					<?php $type = 'cta_dog_contact'; ?>
					<form method="POST" action="<?php echo esc_url(admin_url('admin-post.php')); ?>" accept-charset="UTF-8" role="form" id="<?php echo $type; ?>_section_form" enctype="multipart/form-data">
						<div class="owl-carousel owl-theme contact-form-carousel">
							<div class="ugly p-2">
								<input class="required pristine" type="text" name="<?php echo $type; ?>_name" minlength="2" required>
								<label class="ugly-label" for="<?php echo $type; ?>_name"><?= pll_e('Name'); ?> <span>*</span></label>
								<span class="d-none color-red"><?php pll_e('This field is required'); ?></span>
								<span class="next">
									<svg height="18" width="34" xmlns="http://www.w3.org/2000/svg">
										<path d="M25.885.278l7.844 8.051a.947.947 0 01.078.091l-.078-.09a.95.95 0 01.236.412l.006.023A.895.895 0 0134 9l-.006.11-.002.011a.974.974 0 01-.02.114c-.003.007-.004.014-.006.022a.91.91 0 01-.159.323l-.01.013-.068.078-7.844 8.051a.91.91 0 01-1.307 0 .966.966 0 010-1.342l6.265-6.432H.924C.414 9.949 0 9.525 0 9s.414-.949.924-.949h29.92L24.578 1.62a.966.966 0 010-1.342.908.908 0 011.307 0z" fill="#183153" />
									</svg>
								</span>
							</div>
							<div class="ugly p-2">
								<input type="text" class="pristine" name="<?php echo $type; ?>_company" minlength="1">
								<label class="ugly-label" for="<?php echo $type; ?>_company"><?= pll_e('Company'); ?></label>
								<span class="next">
									<svg height="18" width="34" xmlns="http://www.w3.org/2000/svg">
										<path d="M25.885.278l7.844 8.051a.947.947 0 01.078.091l-.078-.09a.95.95 0 01.236.412l.006.023A.895.895 0 0134 9l-.006.11-.002.011a.974.974 0 01-.02.114c-.003.007-.004.014-.006.022a.91.91 0 01-.159.323l-.01.013-.068.078-7.844 8.051a.91.91 0 01-1.307 0 .966.966 0 010-1.342l6.265-6.432H.924C.414 9.949 0 9.525 0 9s.414-.949.924-.949h29.92L24.578 1.62a.966.966 0 010-1.342.908.908 0 011.307 0z" fill="#183153" />
									</svg>
								</span>
							</div>
							<div class="ugly p-2">
								<input class="required pristine" type="email" name="<?php echo $type; ?>_email" minlength="4" required>
								<label class="ugly-label" for="<?php echo $type; ?>_email"><?= pll_e('Email address'); ?> <span>*</span></label>
								<span class="d-none color-red"><?php pll_e('This field is required'); ?></span>
								<span class="next">
									<svg height="18" width="34" xmlns="http://www.w3.org/2000/svg">
										<path d="M25.885.278l7.844 8.051a.947.947 0 01.078.091l-.078-.09a.95.95 0 01.236.412l.006.023A.895.895 0 0134 9l-.006.11-.002.011a.974.974 0 01-.02.114c-.003.007-.004.014-.006.022a.91.91 0 01-.159.323l-.01.013-.068.078-7.844 8.051a.91.91 0 01-1.307 0 .966.966 0 010-1.342l6.265-6.432H.924C.414 9.949 0 9.525 0 9s.414-.949.924-.949h29.92L24.578 1.62a.966.966 0 010-1.342.908.908 0 011.307 0z" fill="#183153" />
									</svg>
								</span>
							</div>
							<div class="ugly p-2">
								<input type="tel" class="pristine" name="<?php echo $type; ?>_phone" minlength="6">
								<label class="ugly-label" for="<?php echo $type; ?>_phone"><?= pll_e('Phone'); ?></label>
								<span class="next">
									<svg height="18" width="34" xmlns="http://www.w3.org/2000/svg">
										<path d="M25.885.278l7.844 8.051a.947.947 0 01.078.091l-.078-.09a.95.95 0 01.236.412l.006.023A.895.895 0 0134 9l-.006.11-.002.011a.974.974 0 01-.02.114c-.003.007-.004.014-.006.022a.91.91 0 01-.159.323l-.01.013-.068.078-7.844 8.051a.91.91 0 01-1.307 0 .966.966 0 010-1.342l6.265-6.432H.924C.414 9.949 0 9.525 0 9s.414-.949.924-.949h29.92L24.578 1.62a.966.966 0 010-1.342.908.908 0 011.307 0z" fill="#183153" />
									</svg>
								</span>
							</div>
							<div class="ugly p-2">
								<textarea class="required pristine" name="<?php echo $type; ?>_message" minlength="10" rows="6" required></textarea>
								<label class="ugly-label" for="<?php echo $type; ?>_message"><?= pll_e('Message'); ?> <span>*</span></label>
								<span class="d-none color-red"><?php pll_e('This field is required'); ?></span>
								<input class="d-none" type="text" name="<?php echo $type; ?>_important_consent_field">
								<input type="hidden" name="action" value="<?php echo $type; ?>_form">
								<?php wp_nonce_field('<?php echo $type; ?>_form', '<?php echo $type; ?>_form_nonce'); ?>
								<button class="g-recaptcha contactF btn btn__default yellow" data-sitekey="6LeA-gUaAAAAAE0620g-jcBqsq67NPiBtcj0NrCf" data-callback="onContactSubmit"><?= pll_e('Send message'); ?></button>
							</div>
						</div>
					</form>
				<?php endif; ?>
			</div>
		</div>
	</div>
</section>