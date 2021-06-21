<section>
	<div class="container">
		<div class="row py-5 mb-4">
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
					<div class="row mb-4 mt-4">
						<div class="col-auto">
							<i class="fal fa-map-marker-alt"></i>
						</div>
						<div class="col pl-0">
							<?php echo get_field('contact_text_' . $lang, 'option'); ?>
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
						<a class="font-secondary" href="https://wa.me/31207782393" target="_blank">+31 6 - 83 93 28 22</a>
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
						<h2 class="m-0">
							<?php echo get_sub_field('form_title'); ?>
						</h2>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>