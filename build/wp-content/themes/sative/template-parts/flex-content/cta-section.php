<?php

$title = get_sub_field('title');
$title_tag = get_sub_field('title_tag') && !empty(get_sub_field('title_tag')) ? get_sub_field('title_tag') : 'span';
$title_appearance = get_sub_field('title_appearance') && !empty(get_sub_field('title_appearance')) ? get_sub_field('title_appearance') : 'display-3';
$title_class = get_sub_field('title_class') && !empty(get_sub_field('title_class')) ? get_sub_field('title_class') : 'd-block text700 mb-5';
$the_title = $title ? '<' . $title_tag . ' class="' . $title_appearance . ' ' . $title_class . '">' . $title . '</' . $title_tag . '>' : '';

$sub_title = get_sub_field('sub_title');
$sub_title_tag = get_sub_field('sub_title_tag') && !empty(get_sub_field('sub_title_tag')) ? get_sub_field('sub_title_tag') : 'h5';
$sub_title_appearance = get_sub_field('sub_title_appearance') && !empty(get_sub_field('sub_title_appearance')) ? get_sub_field('sub_title_appearance') : '';
$sub_title_class = get_sub_field('sub_title_class') && !empty(get_sub_field('sub_title_class')) ? get_sub_field('sub_title_class') : 'text-uppercase';
$the_sub_title = $sub_title ? '<' . $sub_title_tag . ' class="' . $sub_title_appearance . ' ' . $sub_title_class . '">' . $sub_title . '</' . $sub_title_tag . '>' : '';

?>

<?php if (!empty(get_sub_field('section_parts')) && (get_sub_field('section_parts') === 'full' || get_sub_field('section_parts') === 'top')) : ?>

	<section class="flex_content-cta flex-section">
		<div class="container position-absolute h-100 left-0 bg-left">
			<div class="row">
				<div class="col-lg-10 col-md-11 position-absolute h-100 p-lg-0 pl-0 pr-3 left-0">
					<div class="flex_content-cta-bg right bg-yellow w-100 h-100"></div>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="row align-items-center">
				<div class="col-lg-5 col-md-6 ml-sm-n5 order-12 order-md-1 pr-0 pr-sm-3">
					<img src="<?php echo get_sub_field('image')['url']; ?>" alt="<?php echo get_sub_field('image')['title']; ?>" class="img-fluid" loading="lazy">
				</div>
				<div class="col-lg-7 col-md-6 pt-lg-5 mt-lg-5 mt-md-0 mt-4 order-1 order-md-12">
					<?php echo $the_sub_title; ?>
					<?php echo $the_title; ?>
					<?php if (!empty(get_sub_field('link')['url'])) : ?>
						<a href="<?php echo get_sub_field('link')['url']; ?>" class="btn btn__default pink bg-pink color-white">
							<?php echo get_sub_field('link')['title']; ?>
						</a>
					<?php endif; ?>
				</div>
			</div>
		</div>
	</section>

<?php endif; ?>

<?php if (!empty(get_sub_field('section_parts')) && (get_sub_field('section_parts') === 'full' || get_sub_field('section_parts') === 'bottom')) : ?>

	<section class="flex_content-bubbles flex-section">
		<div class="container-lg">
			<div class="row align-items-end">
				<div class="col-lg-6">
					<span class="d-block display-3 text700">
						<?php echo get_sub_field('contact_title'); ?>
					</span>
				</div>
				<div class="col-lg-5 col-auto offset-lg-0 offset-md-3 offset-0">
					<h2 class="m-lg-0">
						<?php echo get_sub_field('contact_sub_title'); ?>
						<svg xmlns="http://www.w3.org/2000/svg" class="flex_content-bubbles-arrow position-absolute ml-4 mt-3 d-sm-inline-block d-none" viewBox="0 0 118 445">
							<g fill="none" fill-rule="evenodd" stroke="#183153" stroke-width="5">
								<path d="M86 431.28l15 9.87 15-9.87" />
								<path d="M101.5 441.35V26.5L77.71 3.05H0" />
							</g>
						</svg>
						<span class="flex_content-bubbles-arrow">
							<span class="arrow-right"></span>
							<span class="arrow-line"></span>
							<span class="arrow down"></span>
						</span>
					</h2>
				</div>
			</div>
			<?php if (get_sub_field('contact_text')) : ?>
				<div class="row d-none d-lg-block">
					<div class="col-lg-6">
						<p>
							<?php echo get_sub_field('contact_text'); ?>
						</p>
					</div>
				</div>
			<?php endif; ?>
			<div class="row pt-sm-5 pt-4 mt-md-4 pb-5">
				<?php $i = 1;
				foreach (get_sub_field('bubbles') as $item) : ?>
					<?php
					switch ($i) {
						case 1:
							$color = 'bg-sea';
							break;
						case 2:
							$color = 'bg-yellow';
							break;
						case 3:
							$color = 'bg-pink';
							break;
					}
					?>
					<div class="col-md-4 col-sm-8 col-10 <?php echo $i % 2 === 0 ? 'offset-md-0 offset-sm-4 offset-2' : null; ?> d-flex flex_content-bubbles-bubble-cont mb-md-0 mb-4">
						<div class="flex_content-bubbles-bubble">
							<h2 class="<?php echo $color; ?> px-2 d-inline-block my-0">
								<?php echo $item['title']; ?>
							</h2>
							<?php echo $item['text']; ?>
						</div>
						<div class="triangle"></div>
					</div>
				<?php $i++;
				endforeach; ?>
			</div>
		</div>
	</section>

<?php endif; ?>