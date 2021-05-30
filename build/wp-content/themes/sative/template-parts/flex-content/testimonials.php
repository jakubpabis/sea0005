<section class="articles-slider">
	<div class="container">
		<div class="owl-carousel owl-theme articles-slider-cards testimonials">
			<?php foreach (get_sub_field('testimonials') as $item) : ?>
				<div class="item d-flex h-100 w-100">
					<div class="card nothed h-100 w-100">
						<div class="card-body pb-0">
							<span class="d-block display-1 text700 mb-n5">
								”
							</span>
							<p class="mb-4 pb-2">
								<?php echo wp_trim_words( get_the_content(null, false, $item->ID), 40, '...' ); ?>
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