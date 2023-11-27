<?php

/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package WP_Bootstrap_Starter
 */

get_header(); ?>
<div class="body-bg-gradient">
	<?php while (have_posts()) : the_post();

		/* if (get_the_post_thumbnail_url()) : ?>

		<header class="header__article">
			<picture class="bg-cover">
				<source srcset="<?php echo get_the_post_thumbnail_url(); ?>">
				<img class="bg-cover lazy" data-src="<?php echo get_the_post_thumbnail_url(); ?>" alt="">
			</picture>
		</header>

	<?php endif; */ ?>

		<section class="article mt-0 pt-5">
			<div class="container">
				<div class="row">
					<?php /* <div class="col-12 mb-4 d-flex justify-content-end">
					<button type="button" id="backBTN" class="btn btn__medium yellow d-none"><?php pll_e('Back'); ?></button>
				</div> */ ?>
					<article class="col-12">
						<?php
						$cat = get_the_category();
						if (isset($cat) && $cat) {
							echo '<h5 class="mb-0 text-uppercase">' . end($cat)->name . '</h5>';
						}

						?>
						<?php the_title('<h1 class="mt-1">', '</h1>'); ?>

						<div class="row justify-content-center">
							<div class="col-lg-10">
								<?php the_content();

								if (get_field('file_download')) :

									echo '<a href="javascript:void(0)" data-toggle="modal" data-target="#whitepapersModal" class="btn-whitepaper"><i class="fas fa-arrow-to-bottom"></i>' . pll__("Download") . ' ' . get_field('file_download')['title'] . '</a>';
									if (get_field('button')) :
										echo '<br />';
									endif;
								endif;

								if (get_field('button')) :
									echo '<a href="' . get_field('button')['url'] . '" class="btn btn__default yellow">' . get_field('button')['title'] . '</a>';
								endif;

								?>
							</div>
							<div class="col-lg-10">
								<hr>
							</div>
						</div>



					</article>
				</div>
			</div>
		</section>

	<?php endwhile; ?>

	<?php
	$related = get_posts(array('category__in' => wp_get_post_categories($post->ID), 'numberposts' => 6, 'post__not_in' => array($post->ID)));
	if ($related) : ?>
		<div class="container my-5 py-2">
			<div class="row justify-content-between align-items-end">
				<div class="col-auto">
					<h5 class="text-uppercase mb-2"><?php pll_e('Artikelen'); ?></h5>
					<h2 class="text-size-xxxlarge my-0">
						<?php pll_e('Vergelijkbare artikelen'); ?>
					</h2>
				</div>
				<div class="col-auto">
					<a href="<?php echo getTplPageKnowledgeURL(); ?>" class="btn btn__default navy"><?php pll_e('Show all articles'); ?></a>
				</div>
			</div>
		</div>
		<section class="cards__section related py-5">
			<div class="cards__section-content py-5">
				<div class="container">
					<div class="row justify-content-center">
						<div class="owl-carousel owl-theme articles-slider-cards">
							<?php foreach ($related as $item) :
								setup_postdata($item); ?>
								<div class="item d-flex h-100 w-100">
									<div class="card nothed h-100 w-100">
										<div class="card-body">
											<h4 class="text-uppercase mb-0 text700">
												<?php echo get_the_category($item->ID)[0]->name; ?>
											</h4>
											<span class="h2 text700">
												<?php echo wp_trim_words(get_the_title($item->ID), 10, '...'); ?>
											</span>
											<p>
												<?php echo wp_trim_words(get_the_content(null, false, $item->ID), 40, '...'); ?>
											</p>
											<a href="<?php echo get_the_permalink($item->ID); ?>" class="btn btn__default navy"><?php pll_e('Lees meer'); ?></a>
										</div>
									</div>
									<div class="triangle"></div>
								</div>
							<?php endforeach; ?>
						</div>
					</div>
				</div>
			</div>
		</section>
	<?php endif;
	wp_reset_postdata();
	?>
</div>
<script>
	if (window.history.length > 1) {
		document.getElementById('backBTN').classList.remove('d-none');
		document.getElementById('backBTN').addEventListener('click', function() {
			window.history.back();
		});
	}
</script>
<?php if (get_field('file_download')) : ?>
	<div id="whitepapersModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="whitepapersModalTitle" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
			<div class="modal-content">
				<button type="button" class="close position-absolute right-0 top-0" data-dismiss="modal" aria-label="Close">
					<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M30.3884 34.2353L20.1176 23.9745L9.84745 34.2353L6 30.3939L16.2713 20.1321L16.2568 20.1171L16.2713 20.1027L6.00107 9.84138L9.84638 6L20.1176 16.2597L30.3889 6L34.2348 9.84138L23.964 20.1027L23.979 20.1171L23.964 20.1321L34.2353 30.3939L30.3884 34.2353ZM0 40H40V0H0V40Z" fill="#EC6278" />
					</svg>
				</button>
				<div class="modal-container">
					<div class="modal-header d-block">
						<h3 class="modal-title d-block" id="whitepapersModalTitle"><?php pll_e('Download'); ?>&nbsp;<?php echo get_field('file_download')['title']; ?></h3>
						<h5 class="modal-title d-block"><?php pll_e('Give us your email and download the file'); ?></h5>
					</div>
					<div class="modal-body pt-3">
						<form class="pt-3" method="POST" action="<?php echo esc_url(admin_url('admin-post.php')); ?>" accept-charset="UTF-8" role="form" id="whitepapers-form" enctype="multipart/form-data">
							<div class="row">
								<div class="col-sm-3 dog">
									<svg viewBox="0 0 306.39 610.05" xmlns="http://www.w3.org/2000/svg">
										<path d="m140.49 0-28 28.13v138.49h41.39l25.41-25.41v-61.89h-10.29v57.68l-19.24 19.42h-26.88v-124.11l22-22.15h151v42.84l-26.34 27.77h-79.14v90.94l6.35 6.35h-55.17l-28.68 33.94v258.11l-58.45 58.44h-54.45v10.35h58.63l64.43-64.44v-258.65l23.24-27.4h60.26v-.41l10 10v23.8h-54.29v-12h-10.35v22.33h84.22l22.51 22v65.87h-22.33l-19.42-19.42v-30.5h-39.75v10.35h29.41v24.5l10.7 10.71v225.07l-47.91 43.38-8.17-8.35 38.12-35-45.2-46.28-7.26 7.26 37.75 38.66-37.93 34.82 23.59 24.5h-64.25v-84.22h-10.35v94.57h98.74l-17.78-18.52 51.18-46.28v-219.44l4.36 4.35h36.85v-80.41l-28-28.13h-13.75v-28.13l-26.32-26.32v-76h73.33l32.13-33.76v-57.41z" fill="#173751" />
										<g fill="#ffffff">
											<path d="m225.42 206.72-23.51-23.51 23.51-23.51 7.31 7.32-16.19 16.19 16.19 16.2z" />
											<path d="m193.2 206.72-7.32-7.31 16.2-16.2-16.2-16.21 7.32-7.32 23.51 23.51z" />
										</g>
									</svg>
								</div>
								<div class="col-sm-9 searchInput d-flex justify-content-center align-items-start">
									<div class="triangle-left"></div>
									<input type="email" name="whitepapers-email" value="" placeholder="<?php pll_e('Put in your email address here'); ?>" required>
									<input type="hidden" name="whitepapers-url" value="<?php echo get_field('file_download')['url']; ?>">
									<input type="hidden" name="whitepapers-filename" value="<?php echo get_field('file_download')['title']; ?>">
									<input type="hidden" name="action" value="whitepapers_form">
									<?php wp_nonce_field('whitepapers_form', 'whitepapers_form_nonce'); ?>
									<button type="submit" class="btn btn__notched d-flex align-items-center"><i class="fas fa-download"></i> <span class="text-size-large my-0 ml-3"><?php pll_e('Download'); ?></span></button>
								</div>
							</div>
						</form>
						<div class="row justify-content-end">
							<div class="col-auto">
								<a class="text-size-small" href="<?php echo get_field('file_download')['url']; ?>"><u><?php pll_e('Or just download the file without giving up your email'); ?></u></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
<?php endif; ?>
<?php get_footer();
