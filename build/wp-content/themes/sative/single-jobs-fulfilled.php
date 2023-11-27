<?php

/**
 * The template for displaying all single jobs
 *
 * @package Sative
 */

get_header(); ?>

<?php while (have_posts()) : the_post(); ?>


	<section class="jobs__single">
		<div class="container">
			<div class="row">
				<header class="jobs__single-title col-lg-8 col-sm-9">
					<?php the_title('<h1 class="color-sea">', '</h1>'); ?>
					<h3 class="color-sales">
						<?php pll_e('This job has been fulfilled'); ?>
					</h3>
				</header>
				<div class="col-lg-4 col-sm-3 text-right">
					<button type="button" id="backBTN" class="btn btn__medium yellow d-none"><?php pll_e('Back'); ?></button>
				</div>
			</div>
			<div class="row pt-3">
				<article class="col-lg-8 jobs__single-article">

					<?php $helper = jobDisplayHelper(); ?>
					<div class="info card bg-lgrey">
						<?php if (get_field('location')) : ?>
							<div class="info__item">
								<i class="far fa-map-marker-alt"></i>
								<span class="text-size-medium location"><?php echo get_field('location'); ?></span>
							</div>
						<?php endif; ?>
						<?php if ($helper['type']) : ?>
							<div class="info__item">
								<i class="far fa-clock"></i>
								<span class="text-size-medium type"><?php echo $helper['type']; ?></span>
							</div>
						<?php endif; ?>
						<?php if (get_field('salary_min') || get_field('salary_max')) : ?>
							<div class="info__item">
								<i class="far fa-euro-sign"></i>
								<span class="text-size-medium">
									<number class="salarymin">
										<?php echo number_format((int)get_field('salary_min'), 0, ".", "."); ?>
									</number>
									<?php echo get_field('salary_min') && get_field('salary_max') ? '&nbsp;-&nbsp;' : null ?>
									<number class="salarymax">
										<?php echo number_format((int)get_field('salary_max'), 0, ".", "."); ?>
									</number>
								</span>
							</div>
						<?php endif; ?>
						<?php if ($helper['industry']) : ?>
							<div class="info__item">
								<i class="far fa-industry"></i>
								<span class="text-size-medium industry"><?php echo $helper['industry']; ?></span>
							</div>
						<?php endif; ?>
					</div>

					<?php

					the_content();

					if (get_field('button')) :
						echo '<a href="' . get_field('button')['url'] . '" class="btn btn__default yellow">' . get_field('button')['title'] . '</a>';
					endif;

					echo '<h3 class="color-sales">';
					pll_e('This job has been fulfilled');
					echo '</h3>';

					?>

				</article>
			</div>
		</div>
	</section>
	<?php
	global $post;
	$slug = $post->post_name;
	if (isset($slug) && $slug) :
	?>
		<div id="thePostSlugForJobLink" class="d-none" data-url="<?php echo $slug; ?>"></div>
	<?php endif; ?>
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
