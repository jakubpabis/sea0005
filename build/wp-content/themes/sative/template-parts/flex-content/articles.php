<section class="articles-slider">
	<div class="container mb-5">
		<div class="row align-items-end">
			<div class="col-lg-9">
				<h5 class="text-uppercase mb-1 text700">
					<?php echo get_sub_field('sub_title'); ?>
				</h5>
				<span class="display-3 text700">
					<?php echo get_sub_field('title'); ?>
				</span>
			</div>
			<div class="col-lg-3 text-right">
				<?php if (get_sub_field('link')) : ?>
					<a href="<?php echo get_sub_field('link')['url']; ?>" class="btn btn__default navy">
						<?php echo get_sub_field('link')['title']; ?>
					</a>
				<?php endif; ?>
			</div>
		</div>
	</div>
	<div class="container">
		<div class="owl-carousel owl-theme articles-slider-cards">
			<?php foreach (get_sub_field('articles') as $item) : ?>
				<div class="item d-flex h-100 w-100">
					<div class="card nothed h-100 w-100">
						<div class="card-body">
							<h4 class="text-uppercase mb-0 text700">
								<?php echo get_the_category($item->ID)[0]->name; ?>
							</h4>
							<span class="h2 text700">
								<?php echo get_the_title($item->ID); ?>
							</span>
							<p>
								<?php echo get_the_excerpt($item->ID); ?>
							</p>
							<a href="<?php get_the_permalink($item->ID); ?>" class="btn btn__default navy"><?php pll_e('Lees meer'); ?></a>
						</div>
					</div>
					<div class="triangle"></div>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>