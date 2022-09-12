<aside class="bottom-bar bg-navy py-4">
	<div class="container">
		<div class="row align-items-center justify-content-between">
			<?php if (get_sub_field('title')) : ?>
				<div class="col-auto">
					<h2 class="color-white m-0">
						<?php echo get_sub_field('title'); ?>
					</h2>
				</div>
			<?php endif; ?>
			<div class="col-auto">
				<?php if (get_sub_field('link')) : ?>
					<a href="<?php echo get_sub_field('link')['url']; ?>" class="btn btn__default yellow">
						<?php echo get_sub_field('link')['title']; ?>
					</a>
				<?php endif; ?>
			</div>
		</div>
	</div>
</aside>