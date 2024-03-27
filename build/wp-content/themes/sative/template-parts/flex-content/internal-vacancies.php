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
			'terms' => 'x-internal-jobs',
		),
	),
);

$jobsQuery = new WP_Query($args);

?>

<?php

$title = get_sub_field('title');
$title_tag = get_sub_field('title_tag') && !empty(get_sub_field('title_tag')) ? get_sub_field('title_tag') : 'span';
$title_appearance = get_sub_field('title_appearance') && !empty(get_sub_field('title_appearance')) ? get_sub_field('title_appearance') : 'display-3';
$title_class = get_sub_field('title_class') && !empty(get_sub_field('title_class')) ? get_sub_field('title_class') : 'text700';
$the_title = $title ? '<' . $title_tag . ' class="' . $title_appearance . ' ' . $title_class . '">' . $title . '</' . $title_tag . '>' : '';

$sub_title = get_sub_field('sub_title');
$sub_title_tag = get_sub_field('sub_title_tag') && !empty(get_sub_field('sub_title_tag')) ? get_sub_field('sub_title_tag') : 'h5';
$sub_title_appearance = get_sub_field('sub_title_appearance') && !empty(get_sub_field('sub_title_appearance')) ? get_sub_field('sub_title_appearance') : '';
$sub_title_class = get_sub_field('sub_title_class') && !empty(get_sub_field('sub_title_class')) ? get_sub_field('sub_title_class') : 'text-uppercase mb-1 text700';
$the_sub_title = $sub_title ? '<' . $sub_title_tag . ' class="' . $sub_title_appearance . ' ' . $sub_title_class . '">' . $sub_title . '</' . $sub_title_tag . '>' : '';

?>

<section class="flex-section articles-slider articles-slider--vacancies">
	<div class="container">
		<div class="row align-items-end justify-content-between mb-4 pb-3">
			<div class="col-lg-9">
				<?php echo $the_sub_title; ?>
				<?php echo $the_title; ?>
			</div>
			<div class="col-auto d-none d-lg-block">
				<?php if (get_sub_field('link')) : ?>
					<a href="<?php echo get_sub_field('link')['url']; ?>" class="btn btn__default navy">
						<?php echo get_sub_field('link')['title']; ?>
					</a>
				<?php endif; ?>
			</div>
		</div>
	</div>
	<div class="container">
		<div class="owl-carousel owl-theme articles-slider-cards">
			<?php while ($jobsQuery->have_posts()) : $jobsQuery->the_post();

				$helper = jobDisplayHelper(); ?>
				<div class="item d-flex h-100 w-100">
					<div class="card nothed h-100 w-100">
						<div class="card-body jobs__list-item">

							<div class="job-title">
								<?php if (strlen($helper['supCatName']) > 0) : ?>
									<span class="icon" data-type="<?php echo $helper['supCatName']; ?>"></span>
								<?php endif; ?>
								<h3 class="title m-0"><a href="<?php echo get_the_permalink(); ?>"><?php echo get_the_title(); ?></a></h3>
							</div>
							<div class="info mb-4">
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

							<p>
								<?php echo wp_trim_words(get_the_content(), 40, '...'); ?>
							</p>

							<a href="<?php echo get_the_permalink(); ?>" class="btn btn__small navy mt-auto"><?php pll_e('More info'); ?></a>

						</div>
					</div>
					<div class="triangle"></div>
				</div>
			<?php endwhile;
			?>

			<?php wp_reset_postdata(); ?>
		</div>
		<div class="row d-block d-lg-none mt-5 pt-4">
			<div class="col-auto">
				<?php if (get_sub_field('link')) : ?>
					<a href="<?php echo get_sub_field('link')['url']; ?>" class="btn btn__default navy mt-5">
						<?php echo get_sub_field('link')['title']; ?>
					</a>
				<?php endif; ?>
			</div>
		</div>
	</div>
</section>