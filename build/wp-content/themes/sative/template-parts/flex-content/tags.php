<section class="flex_content-tags flex-section">
	<?php if (get_sub_field('first_row')) : ?>
		<div class="continuous-slider">
			<?php foreach (get_sub_field('first_row') as $item) : ?>
				<a href="<?php echo $item['tag_link']['url']; ?>"><span><?php echo $item['tag_link']['title']; ?></span></a>
			<?php endforeach; ?>
		</div>
	<?php endif; ?>
	<?php if (get_sub_field('second_row')) : ?>
		<div class="continuous-slider">
			<?php foreach (get_sub_field('second_row') as $item) : ?>
				<a href="<?php echo $item['tag_link']['url']; ?>"><span><?php echo $item['tag_link']['title']; ?></span></a>
			<?php endforeach; ?>
		</div>
	<?php endif; ?>
</section>