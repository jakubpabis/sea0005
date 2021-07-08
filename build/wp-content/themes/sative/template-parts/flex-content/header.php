<header class="header flex_content-header">
	<div class="container">
		<?php if (get_sub_field('image_position') === 'top') : ?>
			<div class="row">
				<div class="col-12">
					<img src="<?php echo get_sub_field('image')['url']; ?>" alt="<?php echo get_sub_field('image')['title']; ?>" class="lazy img-fluid">
				</div>
			</div>
			<?php if (get_sub_field('sub_title') || get_sub_field('title')) : ?>
				<div class="row justify-content-between align-items-end">
					<div class="col-lg-10">
						<h4 class="text-uppercase mb-3 text700">
							<?php echo get_sub_field('sub_title'); ?>
						</h4>
						<span class="display-3 text700">
							<?php echo get_sub_field('title'); ?>
						</span>
					</div>
					<div class="col-lg-2 text-right mb-n4">
						<svg height="69" width="27" xmlns="http://www.w3.org/2000/svg">
							<path d="M15.567 0v62.181l9.094-9.192L27 55.353 13.5 69 0 55.353l2.339-2.364 9.92 10.027V0z" fill="#183153" />
						</svg>
					</div>
				</div>
			<?php endif; ?>
		<?php elseif (get_sub_field('image_position') === 'left') : ?>
			<div class="row justify-content-between align-items-end">
				<div class="col-lg-5">
					<img src="<?php echo get_sub_field('image')['url']; ?>" alt="<?php echo get_sub_field('image')['title']; ?>" class="lazy img-fluid">
				</div>
				<div class="col-lg-7">
					<h4 class="text-uppercase mb-3 text700">
						<?php echo get_sub_field('sub_title'); ?>
					</h4>
					<span class="display-3 text700">
						<?php echo get_sub_field('title'); ?>
					</span>
				</div>
			</div>
		<?php elseif (get_sub_field('image_position') === 'right') : ?>
			<div class="row justify-content-between align-items-end">
				<div class="col-lg-5">
					<h4 class="text-uppercase mb-3 text700">
						<?php echo get_sub_field('sub_title'); ?>
					</h4>
					<span class="display-3 text700">
						<?php echo get_sub_field('title'); ?>
					</span>
				</div>
				<div class="col-lg-6 text-right">
					<img src="<?php echo get_sub_field('image')['url']; ?>" alt="<?php echo get_sub_field('image')['title']; ?>" class="lazy img-fluid">
				</div>
			</div>
		<?php endif; ?>
	</div>
</header>