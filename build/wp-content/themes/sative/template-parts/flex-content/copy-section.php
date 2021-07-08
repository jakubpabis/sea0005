<section class="flex_content flex-section">
	<?php if (get_sub_field('type') === 'default') : ?>
		<div class="container">
			<div class="row justify-content-center">
				<?php if (get_sub_field('title') || get_sub_field('sub_title')) : ?>
					<div class="col-12">
						<h4 class="text-uppercase mb-0 text700">
							<?php echo get_sub_field('sub_title'); ?>
						</h4>
						<span class="display-3 text700">
							<?php echo get_sub_field('title'); ?>
						</span>
					</div>
				<?php endif; ?>
				<?php if (get_sub_field('text') || get_sub_field('button')) ?>
				<div class="col-lg-10">
					<?php echo get_sub_field('text'); ?>
					<?php if (get_sub_field('button')) : ?>
						<a href="<?php echo get_sub_field('button')['url']; ?>" class="btn btn__default yellow">
							<?php echo get_sub_field('button')['title']; ?>
						</a>
					<?php endif; ?>
				</div>
			</div>
		</div>
	<?php elseif (get_sub_field('type') === 'dog') : ?>
		<section>
			<div class="container position-absolute h-100 right-0 top-0">
				<div class="row">
					<div class="col-lg-11 position-absolute h-100 p-0 right-0">
						<div class="flex_content-cta-bg dog right bg-sea w-100 h-100">
							<img class="flip-vertical" src="<?php echo get_template_directory_uri(); ?>/assets/img/dog-sit-y-white.svg" alt="">
						</div>
					</div>
				</div>
			</div>
			<div class="container">
				<div class="row py-5 mt-5">
					<div class="col-lg-12">
						<h4 class="text-uppercase mb-0 text700">
							<?php echo get_sub_field('sub_title'); ?>
						</h4>
						<span class="display-3 text700">
							<?php echo get_sub_field('title'); ?>
						</span>
					</div>
					<div class="col-lg-7">
						<?php echo get_sub_field('text'); ?>
						<?php if (get_sub_field('button')) : ?>
							<a href="<?php echo get_sub_field('button')['url']; ?>" class="btn btn__default yellow">
								<?php echo get_sub_field('button')['title']; ?>
							</a>
						<?php endif; ?>
					</div>
				</div>
			</div>
		</section>
	<?php elseif (get_sub_field('type') === 'columns') : ?>
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-6">
					<?php echo get_sub_field('first_column'); ?>
				</div>
				<div class="col-lg-6">
					<?php echo get_sub_field('second_column'); ?>
				</div>
			</div>
		</div>
	<?php endif; ?>
</section>