<?php
$position = get_sub_field('position');
$rand = rand(99, 999999);
$id = 'accordion_section_' . $rand;
switch ($position) {
	case 'left':
		$class = 'col-lg-8 col-md-10';
		break;
	case 'center':
		$class = 'col-lg-8 col-md-10 offset-lg-2 offset-md-1';
		break;
	case 'right':
		$class = 'col-lg-8 col-md-10 offset-lg-4 offset-md-2';
		break;
	case 'full':
		$class = 'col-12';
		break;
}
$title = get_sub_field('title');
$title_tag = get_sub_field('title_tag') && !empty(get_sub_field('title_tag')) ? get_sub_field('title_tag') : 'h1';
$title_appearance = get_sub_field('title_appearance') && !empty(get_sub_field('title_appearance')) ? get_sub_field('title_appearance') : '';
$title_class = get_sub_field('title_class') && !empty(get_sub_field('title_class')) ? get_sub_field('title_class') : 'text700 mb-5';
$the_title = $title ? '<' . $title_tag . ' class="' . $title_appearance . ' ' . $title_class . '">' . $title . '</' . $title_tag . '>' : '';
?>
<?php if (have_rows('accordion_items')) : ?>
	<section class="flex_content flex-section">
		<div class="container">
			<div class="row">
				<?php if ($title) : ?>
					<div class="col-12">
						<?php echo $the_title; ?>
					</div>
				<?php endif; ?>
				<div class="<?php echo $class; ?>">
					<div class="accordion" id="<?php echo $id; ?>">
						<?php $i = 1;
						while (have_rows('accordion_items')) : the_row(); ?>
							<div class="accordion-card">
								<h4 class="card-header accordion-header my-0 d-flex flex-row" id="heading_<?php echo $rand; ?>_<?php echo $i; ?>">
									<span class="accordion-button w-100 d-block point pointer-event" data-toggle="collapse" data-target="#collapse_<?php echo $rand; ?>_<?php echo $i; ?>" aria-expanded="false" aria-controls="collapse_<?php echo $rand; ?>_<?php echo $i; ?>">
										<?php echo get_sub_field('title'); ?>
									</span>
									<i class="fas fa-chevron-down" style="margin-top: 3px;"></i>
								</h4>
								<div id="collapse_<?php echo $rand; ?>_<?php echo $i; ?>" class="collapse" aria-labelledby="heading_<?php echo $rand; ?>_<?php echo $i; ?>" data-parent="#<?php echo $id; ?>">
									<div class="card-body py-0">
										<?php echo get_sub_field('content'); ?>
									</div>
								</div>
							</div>
						<?php $i++;
						endwhile; ?>
					</div>
				</div>
			</div>
		</div>
	</section>
<?php endif; ?>