<section class="flex_content-copy_section flex-section">
	<div class="container">
		<div class="row mb-5">
			<div class="col-lg-8">
				<h5 class="text-uppercase text700">
					<?php echo get_sub_field('sub_title'); ?>
				</h5>
				<span class="display-3 text900">
					<?php echo get_sub_field('title'); ?>
				</span>
			</div>
		</div>
		<div class="row justify-content-between flex_content-copy_section-dogs align-items-end flex-nowrap mb-5 pb-5">
			<div class="col text-center">
				<img class="lazy img-fluid mx-auto" data-src="<?php echo get_template_directory_uri(); ?>/assets/img/start-up.svg" alt="">
				<?php if (!empty(get_sub_field('dog_links')) && !empty(get_sub_field('dog_links')[0])) : ?>
					<a href="<?php echo get_sub_field('dog_links')[0]['link']['url']; ?>" class="whole-element-link"></a>
				<?php endif; ?>
			</div>
			<div class="col text-center">
				<img class="lazy img-fluid mx-auto" data-src="<?php echo get_template_directory_uri(); ?>/assets/img/scale-up.svg" alt="">
				<?php if (!empty(get_sub_field('dog_links')) && !empty(get_sub_field('dog_links')[1])) : ?>
					<a href="<?php echo get_sub_field('dog_links')[1]['link']['url']; ?>" class="whole-element-link"></a>
				<?php endif; ?>
			</div>
			<div class="col text-center mx-auto">
				<img class="lazy img-fluid" data-src="<?php echo get_template_directory_uri(); ?>/assets/img/grown-up.svg" alt="">
				<?php if (!empty(get_sub_field('dog_links')) && !empty(get_sub_field('dog_links')[2])) : ?>
					<a href="<?php echo get_sub_field('dog_links')[2]['link']['url']; ?>" class="whole-element-link"></a>
				<?php endif; ?>
			</div>
		</div>
		<div class="row justify-content-center">
			<div class="col-lg-6">
				<?php echo get_sub_field('first_column'); ?>
			</div>
			<div class="col-lg-6">
				<?php echo get_sub_field('second_column'); ?>
			</div>
		</div>
	</div>
</section>