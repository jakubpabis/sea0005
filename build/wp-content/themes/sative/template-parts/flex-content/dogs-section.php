<?php

$title = get_sub_field('title');
$title_tag = get_sub_field('title_tag') && !empty(get_sub_field('title_tag')) ? get_sub_field('title_tag') : 'span';
$title_appearance = get_sub_field('title_appearance') && !empty(get_sub_field('title_appearance')) ? get_sub_field('title_appearance') : 'display-3';
$title_class = get_sub_field('title_class') && !empty(get_sub_field('title_class')) ? get_sub_field('title_class') : 'text900';
$the_title = $title ? '<' . $title_tag . ' class="' . $title_appearance . ' ' . $title_class . '">' . $title . '</' . $title_tag . '>' : '';

$sub_title = get_sub_field('sub_title');
$sub_title_tag = get_sub_field('sub_title_tag') && !empty(get_sub_field('sub_title_tag')) ? get_sub_field('sub_title_tag') : 'h5';
$sub_title_appearance = get_sub_field('sub_title_appearance') && !empty(get_sub_field('sub_title_appearance')) ? get_sub_field('sub_title_appearance') : '';
$sub_title_class = get_sub_field('sub_title_class') && !empty(get_sub_field('sub_title_class')) ? get_sub_field('sub_title_class') : 'text-uppercase text700';
$the_sub_title = $sub_title ? '<' . $sub_title_tag . ' class="' . $sub_title_appearance . ' ' . $sub_title_class . '">' . $sub_title . '</' . $sub_title_tag . '>' : '';

?>

<section class="flex_content-copy_section flex-section">
	<div class="container">
		<div class="row mb-5">
			<div class="col-lg-8">
				<?php echo $the_sub_title; ?>
				<?php echo $the_title; ?>
			</div>
		</div>
		<div class="row justify-content-between flex_content-copy_section-dogs align-items-end flex-nowrap mb-lg-5 mb-sm-4 mb-3 pb-xl-5 pb-md-4 pb-sm-3">
			<div class="col text-center px-1 px-sm-4">
				<img class="img-fluid mx-auto" src="<?php echo get_template_directory_uri(); ?>/assets/img/start-up.svg" alt="" loading="lazy">
				<?php if (!empty(get_sub_field('dog_links')) && !empty(get_sub_field('dog_links')[0])) : ?>
					<a href="<?php echo get_sub_field('dog_links')[0]['link']['url']; ?>" class="whole-element-link"></a>
				<?php endif; ?>
			</div>
			<div class="col text-center px-1 px-sm-4">
				<img class="img-fluid mx-auto" src="<?php echo get_template_directory_uri(); ?>/assets/img/scale-up.svg" alt="" loading="lazy">
				<?php if (!empty(get_sub_field('dog_links')) && !empty(get_sub_field('dog_links')[1])) : ?>
					<a href="<?php echo get_sub_field('dog_links')[1]['link']['url']; ?>" class="whole-element-link"></a>
				<?php endif; ?>
			</div>
			<div class="col-3 text-center mx-auto px-1 px-sm-4">
				<img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/img/grown-up.svg" alt="" loading="lazy">
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