<?php

$title = get_sub_field('title');
$title_tag = get_sub_field('title_tag') && !empty(get_sub_field('title_tag')) ? get_sub_field('title_tag') : 'h2';
$title_appearance = get_sub_field('title_appearance') && !empty(get_sub_field('title_appearance')) ? get_sub_field('title_appearance') : 'display-4';
$title_class = get_sub_field('title_class') && !empty(get_sub_field('title_class')) ? get_sub_field('title_class') : 'text700 mb-2 mt-0';
$the_title = $title ? '<' . $title_tag . ' class="' . $title_appearance . ' ' . $title_class . '">' . $title . '</' . $title_tag . '>' : '';

?>

<section class="flex-section">
	<div class="container">
		<div class="row align-items-center">
			<div class="col-lg-6">
				<div class="flex-content">
					<?php echo $the_title; ?>
					<?php if (get_sub_field('content')) : ?>
						<?php echo get_sub_field('content'); ?>
					<?php endif; ?>
					<?php if ((get_sub_field('button_1') && get_sub_field('button_1')['url']) || (get_sub_field('button_2') && get_sub_field('button_2')['url'])) : ?>
						<div class="d-flex">
							<?php if (get_sub_field('button_1') && get_sub_field('button_1')['url']) : ?>
								<a href="<?php echo get_sub_field('button_1')['url']; ?>" target="<?php echo get_sub_field('button_1')['target'] ? get_sub_field('button_1')['target'] : '_self'; ?>" class="btn btn__default mr-3 <?php echo !empty(get_sub_field('button_1_type')) && get_sub_field('button_1_type') === 'outline' ? 'outline' : null; ?> <?php echo get_sub_field('button_1_color'); ?>"><?php echo get_sub_field('button_1')['title']; ?></a>
							<?php endif; ?>
							<?php if (get_sub_field('button_2') && get_sub_field('button_2')['url']) : ?>
								<a href="<?php echo get_sub_field('button_2')['url']; ?>" target="<?php echo get_sub_field('button_2')['target'] ? get_sub_field('button_2')['target'] : '_self'; ?>" class="btn btn__default <?php echo !empty(get_sub_field('button_2_type')) && get_sub_field('button_2_type') === 'outline' ? 'outline' : null; ?> <?php echo get_sub_field('button_2_color'); ?>"><?php echo get_sub_field('button_2')['title']; ?></a>
							<?php endif; ?>
						</div>
					<?php endif; ?>
				</div>
			</div>
			<?php if (get_sub_field('image') && get_sub_field('image')['url']) : ?>
				<div class="col-lg-6">
					<div class="flex-image">
						<img src="<?php echo get_sub_field('image')['url']; ?>" alt="<?php echo get_sub_field('image')['alt']; ?>" class="img-fluid" loading="lazy">
					</div>
				</div>
			<?php endif; ?>
		</div>
	</div>
</section>