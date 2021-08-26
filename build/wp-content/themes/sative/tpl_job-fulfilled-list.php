<?php

/**
 * Template Name: Fulfilled Job list
 */

get_header();

?>

<?php require_once get_template_directory() . '/inc/jobs-fulfilled-filtering.php'; ?>

<form id="main-jobs-filter-form" action="" method="GET">

	<header class="header__jobs bg-sea">
		<div class="container">
			<div class="row py-4">
				<div class="col-lg-8">
					<h4 class="text-uppercase mb-3 text700 font-primary">
						<?php pll_e('Vervulde vacatures'); ?>
					</h4>
					<span class="display-3 text700 font-primary">
						<?php pll_e('Vervulde vacatures text'); ?>
					</span>
				</div>
			</div>
			<div id="search-filter" class="row align-items-center justify-content-md-between justify-content-end header__jobs-search">
				<div class="col-md-8 col-11">
					<input type="text" name="job-title" value="<?php echo isset($_GET['job-title']) ? $_GET['job-title'] : null ?>" placeholder="<?php pll_e('Enter job title here'); ?>">
					<i class="far fa-search color-pink"></i>
				</div>
				<div class="header__jobs-dog">
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

	<section class="jobs__list">
		<div class="container">
			<div class="row justify-content-md-center justify-content-end">
				<div class="col-12 d-lg-none d-block text-right jobs-number">
					<p class="text-size-small font-primary">
						<span class="jobsno"><?php echo $post_no; ?></span> <?php pll_e('jobs found'); ?>
					</p>
				</div>
				<div id="jobs__list-cont" class="col-12">
					<aside class="additionals py-4">
						<p class="text-size-small font-primary">
							<span class="jobsno"><?php echo $post_no; ?></span> <?php pll_e('jobs found'); ?>
						</p>
					</aside>
					<main class="jobs__list-items">
						<div class="row">
							<?php if ($query->have_posts()) : while ($query->have_posts()) : $query->the_post();
									$helper = jobDisplayHelper(); ?>
									<div class="col-lg-6 mb-5">
										<article class="card jobs__list-item mb-0 h-100">
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
																€ <?php echo number_format((int)get_field('salary_min'), 0, ".", "."); ?>,-
															</number>
															<?php echo get_field('salary_min') && get_field('salary_max') ? '&nbsp;-&nbsp;' : null ?>
															<number class="salarymax">
																€ <?php echo number_format((int)get_field('salary_max'), 0, ".", "."); ?>,-
															</number>
														</span>
													</div>
												<?php endif; ?>
												<?php if ($helper['industry']) : ?>
													<div class="info__item">
														<i class="briefcase"></i>
														<span class="industry"><?php echo $helper['industry']; ?></span>
													</div>
												<?php endif; ?>
											</div>
											<p class="text-size-small excerpt">
												<?php echo wp_specialchars_decode(get_the_excerpt()); ?>
											</p>
											<a href="<?php echo get_the_permalink(); ?>" class="btn btn__small navy"><?php pll_e('More info'); ?></a>
										</article>
									</div>
							<?php endwhile;
							endif; ?>
						</div>
						<nav class="pagination d-flex align-items-center justify-content-center">
							<?php echo $pagination; ?>
						</nav>
					</main>
				</div>
			</div>
		</div>
	</section>

</form>

<?php get_footer('jobs');
