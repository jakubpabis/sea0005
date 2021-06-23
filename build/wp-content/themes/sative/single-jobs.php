<?php

/**
 * The template for displaying all single jobs
 *
 * @package Sative
 */

get_header('job'); ?>

<?php while (have_posts()) : the_post(); ?>

	<header class="header__jobs header__job-single bg-sea">
		<div class="container">
			<div class="row py-4">
				<div class="col-lg-8">
					<h4 class="text-uppercase mb-3 text700">
						<?php pll_e('Vacature'); ?>
					</h4>
					<h1 class="display-3 text700 mt-0 mb-4">
						<?php echo get_the_title(); ?>
					</h1>
				</div>
			</div>
			<div class="row align-items-center justify-content-md-between justify-content-end">
				<div class="offset-md-1 col-md-7 col-11">
					<div class="info card notched p-3 mb-4">
						<div class="card-body p-3">
							<?php $helper = jobDisplayHelper(); ?>
							<div class="info">
								<?php if (get_field('location')) : ?>
									<div class="info__item">
										<i class="place"></i>
										<span class="location"><?= get_field('location'); ?></span>
									</div>
								<?php endif; ?>
								<?php if ($helper['type']) : ?>
									<div class="info__item">
										<i class="clock"></i>
										<span class="type"><?= $helper['type']; ?></span>
									</div>
								<?php endif; ?>
								<?php if (get_field('salary_min') || get_field('salary_max')) : ?>
									<div class="info__item">
										<i class="coins"></i>
										<span>
											<number class="salarymin">
												€ <?= number_format((int)get_field('salary_min'), 0, ".", "."); ?>,-
											</number>
											<?= get_field('salary_min') && get_field('salary_max') ? '&nbsp;-&nbsp;' : null ?>
											<number class="salarymax">
												€ <?= number_format((int)get_field('salary_max'), 0, ".", "."); ?>,-
											</number>
										</span>
									</div>
								<?php endif; ?>
								<?php if ($helper['industry']) : ?>
									<div class="info__item">
										<i class="briefcase"></i>
										<span class="industry"><?= $helper['industry']; ?></span>
									</div>
								<?php endif; ?>
							</div>
						</div>
					</div>
					<a href="" class="btn btn__default yellow mr-2"><?php pll_e('Direct solliciteren!'); ?></a>
					<a href="" class="btn btn__default square outline navy"><i class="fas fa-share-alt"></i></a>
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

	<section class="jobs__single mt-4 pt-2">
		<div class="container">
			<?php if (isset($_GET['message'])) : ?>
				<div class="row mb-5 mt-5">
					<div class="col-12 text-center">
						<?php if ($_GET['message'] === 'success') : ?>
							<img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=1233946&conversionId=1160586&fmt=gif" />
							<script>
								dataLayer.push({
									'formulier': 'apply job',
									'event': 'formulierVerstuurd',
									'vacature': '{{ record.title|raw }}'
								});
							</script>
							<div class="info card bg-yellow">
								<h2 class="color-navy">
									<?= pll_e('Congratulations! Your application was successfully submitted!'); ?>
								</h2>
							<?php else : ?>
								<div class="info card bg-pink">
									<h2 class="color-navy">
										<?= pll_e('Sorry, there was a problem with your application, please try again later...'); ?>
									</h2>
								<?php endif; ?>
								</div>
							</div>
					</div>
				<?php endif; ?>
				<div class="row justify-content-center">
					<aside class="col-12">
						<div class="row justify-content-between align-items-center">
							<div class="col-auto">
								<span class="mr-4 text-size-small font-secondary"><?php pll_e('Snel naar:'); ?></span>
								<a href="" class="text-uppercase text700 mr-4 pr-3 text-size-small">Introductie</a>
								<a href="" class="text-uppercase text700 mr-4 pr-3 text-size-small">Wat je gaat doen</a>
								<a href="" class="text-uppercase text700 mr-4 pr-3 text-size-small">Waarom search X</a>
								<a href="" class="text-uppercase text700 mr-4 pr-3 text-size-small">Wat je krijgt</a>
							</div>
							<div class="col-auto">
								<a href="" class="btn btn__default square outline navy mr-2"><i class="fas fa-share-alt"></i></a>
								<a href="" class="btn btn__default yellow"><?php pll_e('Solliciteren'); ?></a>
							</div>
						</div>
						<hr>
					</aside>
					<article class="mt-5 col-lg-10 jobs__single-article">

						<?php

						the_content();

						if (get_field('button')) :
							echo '<a href="' . get_field('button')['url'] . '" class="btn btn__default yellow">' . get_field('button')['title'] . '</a>';
						endif;

						?>
						<a href="" class="btn btn__default yellow mr-2"><?php pll_e('Direct solliciteren!'); ?></a>
						<?php /* $recruiterF = get_field('recruiter_related'); ?>
						<?php if (is_array($recruiterF) && !empty($recruiterF)) : $recruiter = $recruiterF[0]; ?>

							<aside class="jobs__single-recruiter">
								<h3><?php pll_e('Executive search consultant'); ?></h3>
								<div class="row recruiter">
									<div class="col-xl-3 col-lg-4 col-md-3 col-sm-4">
										<div class="recruiter-img">
											<img data-src="<?= get_the_post_thumbnail_url($recruiter->ID, 'medium_large'); ?>" alt="" class="lazy bg-cover">
										</div>
									</div>
									<div class="col-lg-auto col-md-9 col-sm-8">
										<div class="recruiter-text">
											<h5>
												<svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" clip-rule="evenodd" d="M13.365 15L9 10.64 4.635 15 3 13.367l4.365-4.36L7.36 9l.006-.006L3 4.633 4.635 3 9 7.36 13.365 3 15 4.633l-4.365 4.36.006.007-.006.006L15 13.367 13.365 15zM0 18h18V0H0v18z" fill="#FDD963" />
												</svg>
												<?= $recruiter->post_title; ?>
											</h5>
											<div class="recruiter-contact">
												<a href="mailto:<?= get_field('email', $recruiter->ID); ?>" class="text-size-small"><?= get_field('email', $recruiter->ID); ?></a>
												<a href="tel:<?= get_field('phone', $recruiter->ID); ?>" class="text-size-small"><?= get_field('phone', $recruiter->ID); ?></a>
											</div>
											<div class="recruiter-btns">
												<a href="" class="btn btn__social notched yellow"><i class="fab fa-whatsapp"></i></a>
												<a href="" class="btn btn__social notched yellow"><i class="fab fa-skype"></i></a>
												<a href="<?= get_field('calendly', $recruiter->ID); ?>" class="text-size-small"><u><?php pll_e('Schedule a call or meeting'); ?></u></a>
											</div>
										</div>
									</div>
								</div>
							</aside>

						<?php endif; */ ?>

					</article>
					<?php /*
					<aside class="col-lg-4 jobs__single-sidebar">
						<?php get_sidebar('jobs'); ?>
					</aside> */ ?>
				</div>
				</div>
	</section>

	<?php
	$customTaxonomyTerms = wp_get_object_terms($post->ID, 'job-category', array('fields' => 'ids', 'childless' => true));
	$args = array(
		'post_type' => 'jobs',
		'post_status' => 'publish',
		'posts_per_page' => 3,
		'orderby' => 'rand',
		'tax_query' => array(
			array(
				'taxonomy' => 'job-category',
				'field' => 'id',
				'terms' => $customTaxonomyTerms
			)
		),
		'post__not_in' => array($post->ID),
	);
	$relatedPosts = new WP_Query($args);
	?>
	<?php if ($relatedPosts->have_posts()) : ?>
		<section class="jobs__single-related bg-sea py-5">
			<div class="container py-5 my-5">
				<div class="row justify-content-center">
					<div class="col-12 mb-5">
						<h5 class="text-uppercase mb-2 text700">
							<?php pll_e('bekijk ook'); ?>
						</h5>
						<span class="display-3 text700 my-0">
							<?php pll_e('Vergelijkbare vacatures'); ?>
						</span>
					</div>
					<?php while ($relatedPosts->have_posts()) : $relatedPosts->the_post();
						$helper = jobDisplayHelper(); ?>
						<div class="col-lg-4 col-md-8 col-sm-10 d-flex">
							<div class="card w-100 d-flex flex-row flex-wrap p-4">
								<div class="content mb-4">
									<h2 class="font-primary text700 my-0"><a href="<?= get_the_permalink(); ?>"><?= get_the_title(); ?></a></h2>
								</div>
								<div class="btn-cont align-self-end">
									<div class="info mb-4 pb-2">
										<?php if (get_field('location')) : ?>
											<div class="info__item">
												<i class="place"></i>
												<span class="font-secondary location"><?= get_field('location'); ?></span>
											</div>
										<?php endif; ?>
										<?php if ($helper['type']) : ?>
											<div class="info__item">
												<i class="clock"></i>
												<span class="font-secondary type"><?= $helper['type']; ?></span>
											</div>
										<?php endif; ?>
										<?php if (get_field('salary_min') || get_field('salary_max')) : ?>
											<div class="info__item">
												<i class="coins"></i>
												<span class="font-secondary">
													<number class="salarymin">
														<?= number_format((int)get_field('salary_min'), 0, ".", "."); ?>
													</number>
													<?= get_field('salary_min') && get_field('salary_max') ? '&nbsp;-&nbsp;' : null ?>
													<number class="salarymax">
														<?= number_format((int)get_field('salary_max'), 0, ".", "."); ?>
													</number>
												</span>
											</div>
										<?php endif; ?>
									</div>
									<a href="<?= get_the_permalink(); ?>" class="btn btn__small navy"><?php pll_e('More info'); ?></a>
								</div>
							</div>
						</div>
					<?php endwhile; ?>
				</div>
			</div>
		</section>
	<?php endif;
	wp_reset_postdata(); ?>

<?php endwhile; ?>
<script>
	if (window.history.length > 1) {
		document.getElementById('backBTN').classList.remove('d-none');
		document.getElementById('backBTN').addEventListener('click', function() {
			window.history.back();
		});
	}
</script>
<?php get_footer();
