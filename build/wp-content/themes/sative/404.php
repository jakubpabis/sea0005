<?php

/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package WP_Bootstrap_Starter
 */

get_header('none'); ?>

<section class="not-found w-100 d-flex align-items-center justify-content-center py-5">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-sm-4 col-3 thedog dog__stand right special">
				<svg class="mr-lg-5 pr-lg-5 pl-xl-5" viewBox="0 0 306.39 610.05" xmlns="http://www.w3.org/2000/svg">
					<path d="M140.49 0l-28 28.13v138.49h41.39l25.41-25.41V79.32H169V137l-19.24 19.42h-26.88V32.31l22-22.15h151V53l-26.34 27.77H190.4v90.94l6.35 6.35h-55.17L112.9 212v258.11l-58.45 58.44H0v10.35h58.63l64.43-64.44V215.81l23.24-27.4h60.26V188l10 10v23.8h-54.29v-12h-10.35v22.33h84.22l22.51 22V320h-22.33l-19.42-19.42v-30.5h-39.75v10.35h29.41v24.5l10.7 10.71v225.07l-47.91 43.38-8.17-8.35 38.12-35-45.2-46.28-7.26 7.26 37.75 38.66-37.93 34.82 23.59 24.5H106v-84.22H95.65v94.57h98.74l-17.78-18.52 51.18-46.28V325.81l4.36 4.35H269v-80.41l-28-28.13h-13.75v-28.13l-26.32-26.32v-76h73.33l32.13-33.76V0z" fill="#173751" />
					<g fill="#EC6278">
						<path d="M225.42 206.72l-23.51-23.51 23.51-23.51 7.31 7.32-16.19 16.19 16.19 16.2z" />
						<path d="M193.2 206.72l-7.32-7.31 16.2-16.2-16.2-16.21 7.32-7.32 23.51 23.51z" />
					</g>
				</svg>
			</div>
			<div class="col-xl-7 col-sm-8 col-9 pl-md-4">
				<div class="dog__info left up bg-white">
					<h1 class="text-size-xxxxlarge color-pink mb-md-3 mb-2">
						<?php pll_e('Page Not Found'); ?>
					</h1>
					<h2 class="mb-md-4 mb-0">
						<?php pll_e('We are sorry, but we couldn’t find what you looking for...'); ?>
					</h2>
				</div>
				<div class="triangle white ml-md-3"></div>
				<div class="btns ml-lg-5 ml-sm-4">
					<a href="/" class="btn btn__default navy mr-md-4 mt-md-4 mt-3">
						<?php pll_e('Go to homepage'); ?>
					</a>
					<a href="/contact" class="btn btn__default navy mt-md-4 mt-3">
						<?php pll_e('Contact us'); ?>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<div class="container">
	<div class="row justify-content-center">
		<div class="col-12">
			<?php the_content(); ?>
		</div>
	</div>
</div>

<?php
get_footer('none');
