<?php
$testimonials = get_sub_field('testimonials');
if (isset($testimonials) && count($testimonials) > 0) : ?>
	<section class="articles-slider flex-section">
		<div class="container pb-5">
			<div class="owl-carousel owl-theme articles-slider-cards testimonials">
				<?php foreach ($testimonials as $item) : ?>
					<div class="item d-flex flex-column h-100 w-100">
						<div class="card nothed h-100 w-100">
							<div class="card-body pb-0">
								<span class="d-block display-1 text700 mb-n5">
									”
								</span>
								<p class="mb-4 pb-2">
									<?php echo wp_trim_words(get_the_content(null, false, $item->ID), 40, '...'); ?>
								</p>
								<span class="d-block text700">
									<?php echo get_the_title($item->ID); ?>
								</span>
							</div>
						</div>
						<div class="triangle"></div>
					</div>
				<?php endforeach; ?>
			</div>
		</div>
	</section>
<?php endif; ?>