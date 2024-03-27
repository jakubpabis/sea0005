<?php

$title = get_sub_field('title');
$title_tag = get_sub_field('title_tag') && !empty(get_sub_field('title_tag')) ? get_sub_field('title_tag') : 'span';
$title_appearance = get_sub_field('title_appearance') && !empty(get_sub_field('title_appearance')) ? get_sub_field('title_appearance') : 'display-3';
$title_class = get_sub_field('title_class') && !empty(get_sub_field('title_class')) ? get_sub_field('title_class') : 'text700';
$the_title = $title ? '<' . $title_tag . ' class="' . $title_appearance . ' ' . $title_class . '">' . $title . '</' . $title_tag . '>' : '';

$sub_title = get_sub_field('sub_title');
$sub_title_tag = get_sub_field('sub_title_tag') && !empty(get_sub_field('sub_title_tag')) ? get_sub_field('sub_title_tag') : 'h5';
$sub_title_appearance = get_sub_field('sub_title_appearance') && !empty(get_sub_field('sub_title_appearance')) ? get_sub_field('sub_title_appearance') : '';
$sub_title_class = get_sub_field('sub_title_class') && !empty(get_sub_field('sub_title_class')) ? get_sub_field('sub_title_class') : 'text-uppercase mb-1 text700';
$the_sub_title = $sub_title ? '<' . $sub_title_tag . ' class="' . $sub_title_appearance . ' ' . $sub_title_class . '">' . $sub_title . '</' . $sub_title_tag . '>' : '';

?>

<section class="flex-section articles-slider">
	<div class="container">
		<div class="row align-items-end justify-content-between mb-4 pb-3">
			<div class="col-lg-9">
				<?php echo $the_sub_title; ?>
				<?php echo $the_title; ?>
			</div>
			<div class="col-auto d-none d-lg-block">
				<?php if (get_sub_field('link')) : ?>
					<a href="<?php echo get_sub_field('link')['url']; ?>" class="btn btn__default navy">
						<?php echo get_sub_field('link')['title']; ?>
					</a>
				<?php endif; ?>
			</div>
		</div>
	</div>
	<div class="container">
		<div class="owl-carousel owl-theme articles-slider-cards">
			<?php foreach (get_sub_field('articles') as $item) : ?>
				<div class="item d-flex h-100 w-100">
					<div class="card nothed h-100 w-100">
						<div class="card-body p-lg-4 p-md-2 p-0">
							<h4 class="text-uppercase mb-2 mt-0 text700">
								<?php echo get_the_category($item->ID)[0]->name; ?>
							</h4>
							<span class="h2 text700">
								<?php echo wp_trim_words(get_the_title($item->ID), 10, '...'); ?>
							</span>
							<p>
								<?php echo wp_trim_words(get_the_content(null, false, $item->ID), 40, '...'); ?>
							</p>
							<a href="<?php echo get_the_permalink($item->ID); ?>" class="btn btn__default navy"><?php pll_e('Lees meer'); ?></a>
						</div>
					</div>
					<div class="triangle"></div>
				</div>
			<?php endforeach; ?>
		</div>
		<div class="row d-block d-lg-none mt-5 pt-4">
			<div class="col-auto">
				<?php if (get_sub_field('link')) : ?>
					<a href="<?php echo get_sub_field('link')['url']; ?>" class="btn btn__default navy">
						<?php echo get_sub_field('link')['title']; ?>
					</a>
				<?php endif; ?>
			</div>
		</div>
	</div>
</section>