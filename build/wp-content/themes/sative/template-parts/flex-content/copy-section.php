<?php

$title = get_sub_field('title');
$title_tag = get_sub_field('title_tag') && !empty(get_sub_field('title_tag')) ? get_sub_field('title_tag') : 'span';
$title_appearance = get_sub_field('title_appearance') && !empty(get_sub_field('title_appearance')) ? get_sub_field('title_appearance') : 'display-3';
$title_class = get_sub_field('title_class') && !empty(get_sub_field('title_class')) ? get_sub_field('title_class') : 'text700';
$the_title = $title ? '<' . $title_tag . ' class="' . $title_appearance . ' ' . $title_class . '">' . $title . '</' . $title_tag . '>' : '';

$sub_title = get_sub_field('sub_title');
$sub_title_tag = get_sub_field('sub_title_tag') && !empty(get_sub_field('sub_title_tag')) ? get_sub_field('sub_title_tag') : 'h4';
$sub_title_appearance = get_sub_field('sub_title_appearance') && !empty(get_sub_field('sub_title_appearance')) ? get_sub_field('sub_title_appearance') : '';
$sub_title_class = get_sub_field('sub_title_class') && !empty(get_sub_field('sub_title_class')) ? get_sub_field('sub_title_class') : 'text-uppercase mb-0 text700';
$the_sub_title = $sub_title ? '<' . $sub_title_tag . ' class="' . $sub_title_appearance . ' ' . $sub_title_class . '">' . $sub_title . '</' . $sub_title_tag . '>' : '';

?>

<section class="flex_content flex-section">
	<?php if (get_sub_field('type') === 'default') : ?>
		<div class="container">
			<div class="row justify-content-center">
				<?php if (get_sub_field('title') || get_sub_field('sub_title')) : ?>
					<div class="col-12">
						<?php echo $the_sub_title; ?>
						<?php echo $the_title; ?>
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
		<div class="container position-absolute h-100 right-0 top-0">
			<div class="row">
				<div class="col-lg-11 position-absolute h-100 p-0 right-0">
					<div class="flex_content-cta-bg dog right bg-sea w-100 h-100">
						<img class="flip-vertical" src="<?php echo get_template_directory_uri(); ?>/assets/img/dog-sit-y-white.svg" alt="" loading="lazy">
					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="row py-lg-5 mt-lg-5">
				<div class="col-lg-12">
					<?php echo $the_sub_title; ?>
					<?php echo $the_title; ?>
				</div>
				<div class="col-lg-7 offset-lg-1">
					<?php echo get_sub_field('text'); ?>
					<?php if (get_sub_field('button')) : ?>
						<a href="<?php echo get_sub_field('button')['url']; ?>" class="btn btn__default yellow">
							<?php echo get_sub_field('button')['title']; ?>
						</a>
					<?php endif; ?>
				</div>
			</div>
		</div>
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