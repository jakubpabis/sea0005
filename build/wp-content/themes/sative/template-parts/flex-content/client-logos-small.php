<?php

$title = get_sub_field('title');
$title_tag = get_sub_field('title_tag') && !empty(get_sub_field('title_tag')) ? get_sub_field('title_tag') : 'span';
$title_appearance = get_sub_field('title_appearance') && !empty(get_sub_field('title_appearance')) ? get_sub_field('title_appearance') : 'display-2';
$title_class = get_sub_field('title_class') && !empty(get_sub_field('title_class')) ? get_sub_field('title_class') : 'text700';
$the_title = $title ? '<' . $title_tag . ' class="' . $title_appearance . ' ' . $title_class . '">' . $title . '</' . $title_tag . '>' : '';

$sub_title = get_sub_field('sub_title');
$sub_title_tag = get_sub_field('sub_title_tag') && !empty(get_sub_field('sub_title_tag')) ? get_sub_field('sub_title_tag') : 'h4';
$sub_title_appearance = get_sub_field('sub_title_appearance') && !empty(get_sub_field('sub_title_appearance')) ? get_sub_field('sub_title_appearance') : '';
$sub_title_class = get_sub_field('sub_title_class') && !empty(get_sub_field('sub_title_class')) ? get_sub_field('sub_title_class') : '';
$the_sub_title = $sub_title ? '<' . $sub_title_tag . ' class="' . $sub_title_appearance . ' ' . $sub_title_class . '">' . $sub_title . '</' . $sub_title_tag . '>' : '';

?>

<section class="flex-section flex_content-video_section pb-5">
	<div class="container position-absolute h-100 right-0 top-0">
		<div class="row">
			<div class="col-lg-11 position-absolute h-50 p-0 right-0">
				<div class="flex_content-video_section-dog right bg-sea ?> w-100 h-100">
				</div>
			</div>
		</div>
	</div>
	<div class="container">
		<div class="row">
			<div class="col-lg-9 col-md-10">
				<?php echo $the_sub_title; ?>
				<?php echo $the_title; ?>
			</div>
			<div class="col-lg-10 col-12 offset-lg-1 mt-5">
				<div class="row align-items-stretch client-logos__small">
					<?php foreach (get_sub_field('logos') as $item) : ?>
						<div class="card notched d-flex align-items-center justify-content-center p-2">
							<div class="card-body d-flex align-items-center justify-content-center">
								<img src="<?php echo $item['image']['url']; ?>" alt="" loading="lazy">
							</div>
						</div>
					<?php endforeach; ?>
				</div>
			</div>
		</div>
	</div>
</section>