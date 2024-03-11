<?php

/**
 * 
 * Template name: Team
 * 
 */

get_header(); ?>

<header class="header flex_content-header py-5">
	<div class="container">
		<div class="row justify-content-between align-items-end">
			<div class="col-lg-10">
				<h4 class="text-uppercase mb-3 text700">
					<?php echo get_field('sub_title'); ?>
				</h4>
				<span class="display-3 text700">
					<?php echo get_field('title'); ?>
				</span>
			</div>
		</div>
	</div>
</header>

<main class="team">
	<div class="container">
		<?php if (get_field('team_title') || get_field('team_text')) : ?>
			<div class="row justify-content-center">
				<div class="col-lg-8 text-center">
					<?php if (get_field('team_title')) : ?>
						<h2 class="text-size-xxxxlarge">
							<?php echo get_field('team_title'); ?>
						</h2>
					<?php endif; ?>
					<?php if (get_field('team_text')) : ?>
						<?php echo get_field('team_text'); ?>
					<?php endif; ?>
				</div>
			</div>
		<?php endif; ?>
		<?php wp_reset_postdata(); ?>
		<?php
		$args = array(
			'post_type' => 'team',
			'post_status' => 'publish',
			'posts_per_page' => -1
		);
		$query = new WP_Query($args);
		$i = 1;
		?>
	</div>
	<div class="container-lg">
		<?php if ($query->have_posts()) : while ($query->have_posts()) : $query->the_post(); ?>
				<?php if ($i % 3 == 0) : ?>
					<div class="row justify-content-lg-end justify-content-center">
					<?php elseif ($i % 2 == 0) : ?>
						<div class="row justify-content-center">
						<?php else : ?>
							<div class="row justify-content-lg-start justify-content-center">
							<?php endif; ?>
							<div class="col-lg-10 col-md-12 col-sm-8">
								<div class="team__item">
									<div class="row">
										<div class="col-md-5">
											<?php if (has_post_thumbnail()) : ?>
												<div class="team__item-img">
													<img class="lazy bg-cover" data-src="<?php echo get_the_post_thumbnail_url(); ?>" alt="" loading="lazy">
												</div>
											<?php endif; ?>
										</div>
										<div class="col-md-7">
											<div class="team__item-text">
												<div class="row justify-content-between">
													<div class="col-xl-8 col-lg-7 col-auto">
														<h2><?php echo get_the_title(); ?></h2>
														<h4 class="color-pink"><?php echo get_field('title'); ?></h4>
													</div>
													<div class="col-auto team__item-social">
														<?php if (get_field('whatsapp')) : ?>
															<a href="<?php echo get_field('whatsapp'); ?>" class="btn btn__social notched sea"><i class="fab fa-whatsapp"></i></a>
														<?php endif; ?>
														<?php if (get_field('skype')) : ?>
															<a href="<?php echo get_field('skype'); ?>" class="btn btn__social notched sea"><i class="fab fa-skype"></i></a>
														<?php endif; ?>
														<?php if (get_field('linkedin')) : ?>
															<a href="<?php echo get_field('linkedin'); ?>" class="btn btn__social notched sea"><i class="fab fa-linkedin-in"></i></a>
														<?php endif; ?>
													</div>
												</div>
												<a href="mailto:<?php echo get_field('email'); ?>" class="text-size-medium"><?php echo get_field('email'); ?></a><br />
												<a href="tel:<?php echo get_field('phone'); ?>" class="text-size-medium"><?php echo get_field('phone'); ?></a><br />
												<?php echo get_field('short_bio'); ?>
												<div class="btns">
													<?php if (get_the_content()) : ?>
														<a href="javascript:void(0)" class="btn btn__default navy team__item-showmore"><?php pll_e('Read more'); ?></a>
													<?php endif; ?>
													<?php if (get_field('calendly')) : ?>
														<a href="<?php echo get_field('calendly') ?>"><u><?php pll_e('Schedule a call or meeting'); ?></u></a>
													<?php endif; ?>
												</div>
											</div>
										</div>
										<?php if (get_the_content()) : ?>
											<div class="col-12 team__item-hidden d-none">
												<?php the_content(); ?>
												<?php if (get_field('calendly')) : ?>
													<div class="text-center mt-3 mb-4">
														<a href="<?php echo get_field('calendly') ?>"><u><?php pll_e('Schedule a call or meeting'); ?></u></a>
													</div>
												<?php endif; ?>
												<div class="text-center mt-4">
													<a href="javascript:void(0)" class="btn btn__default navy team__item-showless"><?php pll_e('Show less'); ?></a>
												</div>
											</div>
										<?php endif; ?>
									</div>
								</div>
							</div>
							</div>
					<?php $i++;
				endwhile;
			endif; ?>
					<?php wp_reset_postdata(); ?>
						</div>
</main>

<?php get_footer();
