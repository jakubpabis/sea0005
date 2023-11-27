<?php

/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WP_Bootstrap_Starter
 */

get_header();

require_once get_template_directory() . '/inc/posts-filtering.php'; ?>

<form id="main-posts-filter-form" action="" method="GET">

	<header class="header__posts bg-sea">
		<div class="container">
			<div class="row py-4">
				<div class="col-lg-8">
					<h4 class="text-uppercase mb-3 text700 font-primary">
						<?php pll_e('Artikelen'); ?>
					</h4>
					<span class="display-3 text700 font-primary">
						<?php pll_e('Onze <span class="bg-yellow px-3 font-primary">kennisbank</span>'); ?>
					</span>
				</div>
			</div>
			<div id="search-filter" class="row align-items-center justify-content-md-between justify-content-end header__posts-search">
				<div class="header__posts-dog">
					<svg viewBox="0 0 649.89 364.92" xmlns="http://www.w3.org/2000/svg">
						<path d="M484.2 0l-28 28.09v138.59h41.45l25.37-25.37v-62h-10.23v57.79l-19.43 19.42h-27v-124l22-22.15H639.5v42.84l-26.11 26.11H534.2v99H170.76L63.11 285.84H0v10.28h67.44L175.1 188.58h359.1v91.94l-37.87 46.28 26.85 27.72h-56.8v-72.26H233.13l-46.53 44.42 26.73 27.72h-64.22V237h-10.27v127.79h98.75l-36.39-37.74 36-34.4h218.9v72.27h91.33l-37.25-38.49 34.4-41.95V89.84h73.13l32.17-32.05V.49H484.2" fill="#173751" />
						<g class="bowtie" fill="#FDD963">
							<path d="M555.61 206.72l-23.4-23.39 23.4-23.4 7.22 7.22-16.18 16.18 16.18 16.17z" />
							<path d="M523.25 206.72L516 199.5l16.17-16.17L516 167.15l7.21-7.22 23.4 23.4-23.4 23.39" />
						</g>
					</svg>
				</div>
				<div class="col-md-7 col-11">
					<input type="text" name="k-title" value="<?php echo isset($_GET['k-title']) ? $_GET['k-title'] : null ?>" placeholder="<?php pll_e('Zoek naar een artikel'); ?>">
					<i class="fas fa-search color-pink"></i>
				</div>
			</div>
		</div>
	</header>

	<section id="jobs__list-cont" class="jobs__list">
		<div class="container">
			<div class="row justify-content-md-center justify-content-end">
				<div class="col-12">
					<aside class="additionals py-4">
						<p class="text-size-small font-primary">
							<span class="jobsno"><?php echo $post_no; ?></span> <?php pll_e('articles found'); ?>
						</p>
					</aside>
				</div>
				<div class="col-lg-4 col-12 jobs__list-filters-container posts-filters">
					<?php get_template_part('template-parts/posts-filters'); ?>
					<aside class="mt-4">
						<div class="card bg-yellow text-navy text-left" style="padding: 30px;">
							<div class="row">
								<div class="col">
									<h2 class="m-0">
										<?php pll_e('Hulp nodig?'); ?>
									</h2>
									<p class="line-height-1 mt-2">
										<?php pll_e('Stel je vraag aan onze specialisten'); ?>
									</p>
								</div>
								<div class="col-auto px-0 mr-n4">
									<svg class="d-block" style="width: 100px; margin-top: -100px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 121 266">
										<g fill="none" fill-rule="evenodd">
											<path fill="#183153" d="M44.16 0l7.044 7.327-20.202 18.26v86.661l-1.71-1.712h-14.59v31.73l11.069 11.107h5.448v11.08l10.394 10.383v30.172H12.681L0 218.348v22.622h51.76l-1.685-4.06H4.06v-16.94l10.364-10.903h31.25v-35.914l-2.537-2.534h21.79l11.314-13.393V55.281l23.09-23.09h21.49v-4.06H97.65L72.182 53.6v102.14l-9.14 10.819H39.206v.134l-3.929-3.924v-9.397H56.69v4.724h4.058v-8.782H27.456l-8.696-8.727v-25.992h8.85l7.657 7.656v12.071H50.96v-4.059H39.326v-9.693l-4.265-4.264V27.388l18.957-17.133 3.192 3.32-15.04 13.803 17.88 18.255 2.9-2.84-14.946-15.26 15.012-13.776-9.324-9.698h25.41v33.277h4.059V0z" />
											<path fill="#FFF" d="M31.864 159.328l9.262 9.261-9.262 9.262-2.87-2.87 6.392-6.392-6.392-6.391z" />
											<path fill="#FFF" d="M44.628 159.328l2.87 2.87-6.391 6.391 6.391 6.392-2.87 2.87-9.261-9.262z" />
											<path fill="#093853" d="M72.43 174.28v86.83H61.79l-7.656-7.657v-36.632h-4.059v38.313L60.11 265.17h16.379v-90.94z" />
										</g>
									</svg>
								</div>
							</div>
							<div class="mt-4">
								<div class="d-flex align-items-center mb-3">
									<a href="contact@searchxrecruitment.com" class="flex-shrink-0 btn btn__social notched navy smaller mr-3" target="_blank">
										<i class="fas fa-envelope"></i>
									</a>
									<a href="mailto:contact@searchxrecruitment.com" class="text500">
										<?php pll_e('E-mail us'); ?>
									</a>
								</div>
								<div class="d-flex align-items-center mb-3">
									<a href="tel:+31207782393" class="btn btn__social notched navy smaller mr-3" target="_blank">
										<i class="fas fa-phone-alt"></i>
									</a>
									<a href="tel:+31207782393" class="text500">
										<?php pll_e('Call us'); ?>
									</a>
								</div>

							</div>
						</div>
					</aside>
				</div>
				<div class="col-lg-8">
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
									<p class="text-size-small excerpt">
										<?php if (get_the_excerpt()) : ?>
											<?php echo wp_specialchars_decode(get_the_excerpt()); ?>
										<?php endif; ?>
									</p>
									<a href="<?php echo get_the_permalink(); ?>" class="btn btn__small navy"><?php pll_e('Less meer'); ?></a>
								</article>
						<?php endwhile;
						endif; ?>
						<nav class="pagination d-flex align-items-center justify-content-center">
							<?php echo $pagination; ?>
						</nav>
					</main>
				</div>
			</div>
		</div>
	</section>

</form>

<?php get_footer();
