<?php

$args = array(
	'post_type' => 'jobs',
	'post_status' => 'publish',
	'posts_per_page' => -1,
	'tax_query' => array(
		'relation' => 'AND',
		array(
			'taxonomy' => 'job-type',
			'field' => 'slug',
			'terms' => 'search-x-internal-jobs',
		),
	),
);

$query = new WP_Query($args);
$post_no = $query->found_posts;

?>
<section class="flex-section">
	<header class="header__jobs mt-5">
		<div class="container">
			<div class="row align-items-center justify-content-md-between header__jobs-search">
				<div class="col-lg-8 col-md-10 col-sm-11">
					<?php if (get_sub_field('subtitle')) : ?>
						<h4 class="text-uppercase mb-3 text700 font-primary">
							<?php echo get_sub_field('subtitle'); ?>
						</h4>
					<?php endif; ?>
					<?php if (get_sub_field('title')) : ?>
						<span class="display-3 text700 font-primary">
							<?php echo get_sub_field('title'); ?>
						</span>
					<?php endif; ?>
				</div>
				<div class="header__jobs-dog ml-0">
					<svg viewBox="0 0 649.89 364.92" xmlns="http://www.w3.org/2000/svg">
						<path d="M484.2 0l-28 28.09v138.59h41.45l25.37-25.37v-62h-10.23v57.79l-19.43 19.42h-27v-124l22-22.15H639.5v42.84l-26.11 26.11H534.2v99H170.76L63.11 285.84H0v10.28h67.44L175.1 188.58h359.1v91.94l-37.87 46.28 26.85 27.72h-56.8v-72.26H233.13l-46.53 44.42 26.73 27.72h-64.22V237h-10.27v127.79h98.75l-36.39-37.74 36-34.4h218.9v72.27h91.33l-37.25-38.49 34.4-41.95V89.84h73.13l32.17-32.05V.49H484.2" fill="#173751" />
						<g class="bowtie" fill="#FDD963">
							<path d="M555.61 206.72l-23.4-23.39 23.4-23.4 7.22 7.22-16.18 16.18 16.18 16.17z" />
							<path d="M523.25 206.72L516 199.5l16.17-16.17L516 167.15l7.21-7.22 23.4 23.4-23.4 23.39" />
						</g>
					</svg>
				</div>
			</div>
		</div>
	</header>

	<section class="jobs__list mb-0">
		<div class="container">
			<div class="row justify-content-md-center justify-content-end">
				<div id="jobs__list-cont" class="col-12">
					<aside class="additionals py-lg-4 py-2 d-flex justify-content-between">
						<div class="py-3">
							<p class="text-size-small font-primary m-0">
								<span class="jobsno"><?php echo $post_no; ?></span> <?php pll_e('jobs found'); ?>
							</p>
						</div>
					</aside>
					<main class="jobs__list-items">
						<div class="row">
							<?php if ($query->have_posts()) : while ($query->have_posts()) : $query->the_post();
									$helper = jobDisplayHelper(); ?>
									<div class="col-lg-6 mb-4">
										<article class="card jobs__list-item bg-white mb-0 h-100 d-flex flex-column">
											<div class="job-title">
												<?php if (strlen($helper['supCatName']) > 0) : ?>
													<span class="icon" data-type="<?php echo $helper['supCatName']; ?>"></span>
												<?php endif; ?>
												<h3 class="title m-0"><a href="<?php echo get_the_permalink(); ?>"><?php echo get_the_title(); ?></a></h3>
											</div>
											<div class="info">
												<?php if (get_field('location')) : ?>
													<div class="info__item">
														<i class="place"></i>
														<span class="location"><?php echo get_field('location'); ?></span>
													</div>
												<?php endif; ?>
												<?php if ($helper['type']) : ?>
													<div class="info__item">
														<i class="clock"></i>
														<span class="type"><?php echo $helper['type']; ?></span>
													</div>
												<?php endif; ?>
												<?php if (get_field('salary_min') || get_field('salary_max')) : ?>
													<div class="info__item">
														<i class="coins"></i>
														<span>
															<number class="salarymin">
																€ <?php echo number_format((int)get_field('salary_min'), 0, ".", "."); ?>
															</number>
															<?php echo get_field('salary_min') && get_field('salary_max') ? '&nbsp;-&nbsp;' : null ?>
															<number class="salarymax">
																€ <?php echo number_format((int)get_field('salary_max'), 0, ".", "."); ?>
															</number>
														</span>
													</div>
												<?php endif; ?>
												<?php if ($helper['industry']) : ?>
													<div class="info__item mb-4">
														<i class="briefcase"></i>
														<span class="industry"><?php echo $helper['industry']; ?></span>
													</div>
												<?php endif; ?>
											</div>

											<a href="<?php echo get_the_permalink(); ?>" class="btn btn__small navy mt-auto"><?php pll_e('More info'); ?></a>
										</article>
									</div>
							<?php endwhile;
							endif; ?>
						</div>
					</main>
				</div>
			</div>
		</div>
	</section>
</section>