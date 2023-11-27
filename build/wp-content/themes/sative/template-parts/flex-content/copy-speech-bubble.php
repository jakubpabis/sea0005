<section class="flex_content flex-section">
	<div class="container">
		<div class="row justify-content-between align-items-end">
			<div class="col-lg-9">
				<h4 class="text-uppercase mb-0 text700">
					<?php echo get_sub_field('sub_title'); ?>
				</h4>
				<span class="display-3 text700">
					<?php echo get_sub_field('title'); ?>
				</span>
			</div>
		</div>
		<div class="row mt-3">
			<div class="col-lg-6 offset-lg-1 mt-4">
				<?php echo get_sub_field('text'); ?>
				<?php if (get_sub_field('button')) : ?>
					<a href="<?php echo get_sub_field('button')['url']; ?>" class="btn btn__default navy">
						<?php echo get_sub_field('button')['title']; ?>
					</a>
				<?php endif; ?>
			</div>
			<div class="col-lg-5 mt-4">
				<div class="bg-white card d-block copy-section-card">
					<h3 class="my-0 text700">
						<?php echo get_sub_field('speech_bubble_title'); ?>
					</h3>
					<?php echo get_sub_field('speech_bubble_text'); ?>
					<?php if (get_sub_field('speech_bubble_button')) : ?>
						<a href="<?php echo get_sub_field('speech_bubble_button')['url']; ?>" class="btn btn__default yellow">
							<?php echo get_sub_field('speech_bubble_button')['title']; ?>
						</a>
					<?php endif; ?>
				</div>
				<div class="text-bubble text-bubble-left"></div>
			</div>
		</div>
	</div>
</section>