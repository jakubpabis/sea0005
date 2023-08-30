<?php 
	$position = get_sub_field('position'); 
	$id = 'accordion_section_' . rand(99, 999999);
 	switch($position) {
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
?>
<?php if(have_rows('accordion_items')): ?>
	<section class="flex_content flex-section">
		<div class="container">
			<div class="row">
				<div class="<?php echo $class; ?>">
					<div class="accordion" id="<?php echo $id; ?>">
						<?php $i = 1; while(have_rows('accordion_items')) : the_row(); ?>
						<div class="accordion-card">
							<h4 class="card-header accordion-header my-0" id="heading<?php echo $i; ?>">
								<span class="accordion-button w-100 d-block point pointer-event" data-toggle="collapse" data-target="#collapse<?php echo $i; ?>" aria-expanded="<?php echo $i === 1 ? true : false; ?>" aria-controls="collapse<?php echo $i; ?>">
								<?php echo get_sub_field('title'); ?>
								</span>
							</h4>
							<div id="collapse<?php echo $i; ?>" class="collapse <?php echo $i === 1 ? 'show' : null; ?>" aria-labelledby="heading<?php echo $i; ?>" data-parent="#<?php echo $id; ?>">
								<div class="card-body py-0">
									<?php echo get_sub_field('content'); ?>
								</div>
							</div>
						</div>
						<?php $i++; endwhile; ?>
					</div>
				</div>
			</div>
		</div>
	</section>
<?php endif; ?>