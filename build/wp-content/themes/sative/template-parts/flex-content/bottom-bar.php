<?php

$title = get_sub_field('title');
$title_tag = get_sub_field('title_tag') && !empty(get_sub_field('title_tag')) ? get_sub_field('title_tag') : 'h2';
$title_appearance = get_sub_field('title_appearance') && !empty(get_sub_field('title_appearance')) ? get_sub_field('title_appearance') : '';
$title_class = get_sub_field('title_class') && !empty(get_sub_field('title_class')) ? get_sub_field('title_class') : 'color-white m-0';
$the_title = $title ? '<' . $title_tag . ' class="' . $title_appearance . ' ' . $title_class . '">' . $title . '</' . $title_tag . '>' : '';

?>

<aside class="bottom-bar bg-navy py-4">
	<div class="container">
		<div class="row align-items-center justify-content-between">
			<?php if (get_sub_field('title')) : ?>
				<div class="col-auto">
					<?php echo $the_title; ?>
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