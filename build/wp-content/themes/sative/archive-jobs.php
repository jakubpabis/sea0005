<?php

/**
 * Template for displaying jobs
 */

get_header();

?>

<?php require_once get_template_directory() . '/inc/jobs-filtering.php'; ?>

<form id="main-jobs-filter-form" action="" method="GET">

	<header class="header__jobs bg-sea">
		<div class="container">
			<div class="row py-4">
				<div class="col-lg-8">
					<h4 class="text-uppercase mb-3 text700 font-primary">
						<?php pll_e('Vacatures'); ?>
					</h4>
					<span class="display-3 text700 font-primary">
						<?php pll_e('Laten we de perfecte baan voor je zoeken'); ?>
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

	<?php

	if (isset($_SERVER['QUERY_STRING']) && $_SERVER['QUERY_STRING']) {
		$params = [];
		$string = $_SERVER['QUERY_STRING'];
		$items = explode('&', $string);
		foreach ($items as $item) {
			$param = explode('=', $item);
			if ($param > 1 && end($param)) {
				$key = str_replace($item, '', $string);
				$params[$key] = end($param);
			}
		}
	}

	?>

	<section class="jobs__list">
		<div class="container">
			<div class="row justify-content-md-center justify-content-end">
				<div class="col-lg-4 col-12 jobs__list-filters-container">
					<?php get_template_part('template-parts/job-filters'); ?>
					<div class="d-lg-block d-none">
						<?php get_template_part('template-parts/jobs-sidebar'); ?>
					</div>
				</div>
				<div id="jobs__list-cont" class="col-lg-8">
					<aside class="additionals py-lg-4 py-2 d-flex justify-content-between">
						<div class="py-3">
							<p class="text-size-small font-primary m-0">
								<span class="jobsno"><?php echo $post_no; ?></span> <?php pll_e('jobs found'); ?>
							</p>
						</div>
						<?php if (!empty($params)) : ?>
							<div class="params d-flex flex-wrap justify-content-end">
								<?php foreach ($params as $key => $param) : ?>
									<a href="<?php echo parse_url($_SERVER['REQUEST_URI'])['path'] . '?' . $key; ?>" class="btn btn__medium bg-grey2 color-onavy btn__small mt-3 ml-3 mr-0 d-flex align-items-center">
										<svg width="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13">
											<path fill="#183153" fill-rule="evenodd" d="M10.975 0L13 2.014 8.524 6.467l.033.033-.033.031L13 10.986 10.975 13 6.5 8.546 2.024 13 0 10.986 4.475 6.53 4.443 6.5l.032-.033L0 2.014 2.024 0 6.5 4.453 10.975 0z" />
										</svg>
										<span class="ml-2"><?php echo $param; ?></span>
									</a>
								<?php endforeach; ?>
							</div>
						<?php endif; ?>
					</aside>
					<main class="jobs__list-items">
						<?php if ($query->have_posts()) : while ($query->have_posts()) : $query->the_post();
								$helper = jobDisplayHelper(); ?>
								<article class="card jobs__list-item">
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
						<?php endwhile;
						endif; ?>
						<nav class="pagination d-flex align-items-center justify-content-center">
							<?php echo $pagination; ?>
						</nav>
					</main>
					<div class="d-lg-none d-block mt-5 pt-sm-3 pt-1">
						<?php get_template_part('template-parts/jobs-sidebar'); ?>
					</div>
				</div>
			</div>
		</div>
	</section>

</form>

<?php get_footer('jobs');
