<?php

get_header();

get_template_part('template-parts/breadcrumbs'); ?>

<?php if (get_field('candidates_title') || get_field('candidates_text')) : ?>
	<header class="header__testimonials dog section left sea">
		<div class="container">
			<div class="row justify-content-between">
				<div class="col-3">
					<div class="thedog dog__stand left">
						<svg viewBox="0 0 306.39 610.05" xmlns="http://www.w3.org/2000/svg">
							<path d="M140.49 0l-28 28.13v138.49h41.39l25.41-25.41V79.32H169V137l-19.24 19.42h-26.88V32.31l22-22.15h151V53l-26.34 27.77H190.4v90.94l6.35 6.35h-55.17L112.9 212v258.11l-58.45 58.44H0v10.35h58.63l64.43-64.44V215.81l23.24-27.4h60.26V188l10 10v23.8h-54.29v-12h-10.35v22.33h84.22l22.51 22V320h-22.33l-19.42-19.42v-30.5h-39.75v10.35h29.41v24.5l10.7 10.71v225.07l-47.91 43.38-8.17-8.35 38.12-35-45.2-46.28-7.26 7.26 37.75 38.66-37.93 34.82 23.59 24.5H106v-84.22H95.65v94.57h98.74l-17.78-18.52 51.18-46.28V325.81l4.36 4.35H269v-80.41l-28-28.13h-13.75v-28.13l-26.32-26.32v-76h73.33l32.13-33.76V0z" fill="#173751" />
							<g class="bowtie" fill="#88d8e5">
								<path d="M225.42 206.72l-23.51-23.51 23.51-23.51 7.31 7.32-16.19 16.19 16.19 16.2z" />
								<path d="M193.2 206.72l-7.32-7.31 16.2-16.2-16.2-16.21 7.32-7.32 23.51 23.51z" />
							</g>
						</svg>
					</div>
				</div>
				<div class="col-lg-8 col-9">
					<div class="dog__info left bg-sea">
						<?php if (get_field('candidates_title')) : ?>
							<h2 class="text-size-xxxxlarge">
								<?php echo get_field('candidates_title'); ?>
							</h2>
						<?php endif; ?>
						<?php echo get_field('candidates_text'); ?>
					</div>
					<div class="triangle sea"></div>
				</div>
			</div>
		</div>
	</header>
<?php endif; ?>

<?php
wp_reset_postdata();
$args = array(
	'post_type' => 'testimonials',
	'post_status' => 'publish',
	'posts_per_page' => -1,
	'tax_query' => array(
		array(
			'taxonomy' => 'testimonial-type',
			'field' => 'slug',
			'terms' => 'candidate'
		)
	)

);
$query = new WP_Query($args);
?>
<?php if ($query->have_posts()) : ?>
	<section class="testimonials__candidates">
		<div class="container testimonials__candidates-content">
			<div class="row">
				<div class="col-12">
					<div id="carouselCandidates" class="carousel slide bg-yellow" data-ride="carousel">
						<div class="carousel-inner">
							<?php $i = 0;
							while ($query->have_posts()) : $query->the_post(); ?>
								<div class="carousel-item <?php echo $i == 0 ? 'active' : null ?>">
									<div class="row justify-content-center">
										<div class="col-sm-9 col-10">
											<div class="row">
												<?php if (has_post_thumbnail()) : ?>
													<div class="col-lg-2 col-md-3">
														<img data-src="<?php echo get_the_post_thumbnail_url(); ?>" alt="" class="bg-cover lazy" loading="lazy">
													</div>
													<div class="col-lg-10 col-md-9">
													<?php else : ?>
														<div class="col-12">
														<?php endif; ?>
														<i class="fas fa-quote-left"></i>
														<?php the_content(); ?>
														<span>
															<i class="text-size-small text500">
																<?php echo get_the_title(); ?>
															</i>
														</span>
														</div>
													</div>
											</div>
										</div>
									</div>
									<?php $i++; ?>
								<?php endwhile; ?>
								</div>
						</div>
						<?php if ($i > 1) : ?>
							<a class="carousel-control-prev" href="#carouselCandidates" role="button" data-slide="prev">
								<i class="fas fa-caret-left"></i>
								<span class="sr-only">Previous</span>
							</a>
							<a class="carousel-control-next" href="#carouselCandidates" role="button" data-slide="next">
								<i class="fas fa-caret-right"></i>
								<span class="sr-only">Next</span>
							</a>
						<?php endif; ?>
					</div>
				</div>
			</div>
	</section>
<?php endif;
wp_reset_postdata(); ?>

<?php if (get_field('clients_title') || get_field('clients_text')) : ?>
	<section class="dog section grey2 right">
		<div class="container">
			<div class="row">
				<div class="col-lg-8 col-sm-9 col-10">
					<div class="dog__info right bg-grey2">
						<?php if (get_field('clients_title')) : ?>
							<h2 class="text-size-xxxxlarge">
								<?php echo get_field('clients_title'); ?>
							</h2>
						<?php endif; ?>
						<?php echo get_field('clients_text'); ?>
					</div>
					<div class="triangle grey2"></div>
				</div>
				<div class="col-lg-4 col-sm-3 col-2 thedog dog__normal right">
					<svg viewBox="0 0 649.89 364.92" xmlns="http://www.w3.org/2000/svg">
						<path d="M484.2 0l-28 28.09v138.59h41.45l25.37-25.37v-62h-10.23v57.79l-19.43 19.42h-27v-124l22-22.15H639.5v42.84l-26.11 26.11H534.2v99H170.76L63.11 285.84H0v10.28h67.44L175.1 188.58h359.1v91.94l-37.87 46.28 26.85 27.72h-56.8v-72.26H233.13l-46.53 44.42 26.73 27.72h-64.22V237h-10.27v127.79h98.75l-36.39-37.74 36-34.4h218.9v72.27h91.33l-37.25-38.49 34.4-41.95V89.84h73.13l32.17-32.05V.49H484.2" fill="#173751" />
						<g class="bowtie" fill="#88d8e5">
							<path d="M555.61 206.72l-23.4-23.39 23.4-23.4 7.22 7.22-16.18 16.18 16.18 16.17z" />
							<path d="M523.25 206.72L516 199.5l16.17-16.17L516 167.15l7.21-7.22 23.4 23.4-23.4 23.39" />
						</g>
					</svg>
				</div>
			</div>
		</div>
	</section>
<?php endif; ?>

<?php
$args = array(
	'post_type' => 'testimonials',
	'post_status' => 'publish',
	'posts_per_page' => -1,
	'tax_query' => array(
		array(
			'taxonomy' => 'testimonial-type',
			'field' => 'slug',
			'terms' => 'client'
		)
	)

);
$query = new WP_Query($args);
?>
<?php if ($query->have_posts()) : ?>
	<section class="testimonials__clients">
		<div class="container testimonials__clients-content">
			<div class="row">
				<div class="col-12">
					<div id="carouselClients" class="carousel slide bg-sea" data-ride="carousel">
						<div class="carousel-inner">
							<?php $i = 0;
							while ($query->have_posts()) : $query->the_post(); ?>
								<div class="carousel-item <?php echo $i == 0 ? 'active' : null ?>">
									<div class="row justify-content-center">
										<div class="col-sm-9 col-10">
											<div class="row">
												<?php if (has_post_thumbnail()) : ?>
													<div class="col-lg-2 col-md-3">
														<img data-src="<?php echo get_the_post_thumbnail_url(); ?>" alt="" class="bg-cover lazy" loading="lazy">
													</div>
													<div class="col-lg-10 col-md-9">
													<?php else : ?>
														<div class="col-12">
														<?php endif; ?>
														<i class="fas fa-quote-left"></i>
														<?php the_content(); ?>
														<span>
															<i class="text-size-small text500">
																<?php echo get_the_title(); ?>
															</i>
														</span>
														</div>
													</div>
											</div>
										</div>
									</div>
									<?php $i++; ?>
								<?php endwhile; ?>
								</div>
						</div>
						<?php if ($i > 1) : ?>
							<a class="carousel-control-prev" href="#carouselClients" role="button" data-slide="prev">
								<i class="fas fa-caret-left"></i>
								<span class="sr-only">Previous</span>
							</a>
							<a class="carousel-control-next" href="#carouselClients" role="button" data-slide="next">
								<i class="fas fa-caret-right"></i>
								<span class="sr-only">Next</span>
							</a>
						<?php endif; ?>
					</div>
				</div>
			</div>
	</section>
<?php endif; ?>

<?php get_footer();
