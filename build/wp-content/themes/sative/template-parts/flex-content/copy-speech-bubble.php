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
	<div class="container">
		<div class="row justify-content-between align-items-end">
			<div class="col-lg-9">
				<?php echo $the_sub_title; ?>
				<?php echo $the_title; ?>
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