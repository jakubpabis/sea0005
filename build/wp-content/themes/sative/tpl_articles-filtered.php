<?php
/**
 * Template Name: Filtered articles
 */

get_header(); 

get_template_part( 'template-parts/breadcrumbs' ); ?>

<?php if(get_field('filtered_text') || get_sub_field('title')) : ?>
<header class="header__generic dog section yellow right">
	<div class="container">
		<div class="row">
			<div class="col-lg-8">
				<div class="dog__info right bg-yellow">
					<?php if(get_field('filtered_title')): ?>
						<h1 class="text-size-xxxxlarge">
							<?= get_field('filtered_title'); ?>
						</h1>
					<?php endif; ?>
					<?= get_field('filtered_text'); ?>
				</div>
				<div class="triangle yellow"></div>
			</div>
			<div class="col-lg-4 thedog dog__normal right">
				<svg viewBox="0 0 649.89 364.92" xmlns="http://www.w3.org/2000/svg"><path d="M484.2 0l-28 28.09v138.59h41.45l25.37-25.37v-62h-10.23v57.79l-19.43 19.42h-27v-124l22-22.15H639.5v42.84l-26.11 26.11H534.2v99H170.76L63.11 285.84H0v10.28h67.44L175.1 188.58h359.1v91.94l-37.87 46.28 26.85 27.72h-56.8v-72.26H233.13l-46.53 44.42 26.73 27.72h-64.22V237h-10.27v127.79h98.75l-36.39-37.74 36-34.4h218.9v72.27h91.33l-37.25-38.49 34.4-41.95V89.84h73.13l32.17-32.05V.49H484.2" fill="#173751"/><g class="bowtie" fill="#88d8e5"><path d="M555.61 206.72l-23.4-23.39 23.4-23.4 7.22 7.22-16.18 16.18 16.18 16.17z"/><path d="M523.25 206.72L516 199.5l16.17-16.17L516 167.15l7.21-7.22 23.4 23.4-23.4 23.39"/></g></svg>
			</div>
		</div>
	</div>
</header>
<?php endif; ?> 

<?php
wp_reset_postdata();
$catID = get_field('categoryID');
$args = array( 
    'post_type' => 'post',
    'post_status' => 'publish',
	'posts_per_page' => -1,
	'cat' => $catID
);
$query = new WP_Query( $args );
?>

<div class="container filtered-articles">
	<div class="row">
		<section class="col-xl-8 col-lg-7 col-12">
			<?php if($query->have_posts()) : while($query->have_posts()) : $query->the_post(); ?>
			<article>

				<h2 class="mt-0">
					<a href="<?= get_permalink(); ?>"><?= get_the_title(); ?></a>
				</h2> 
				
				<?php the_excerpt(); ?>

				<a href="<?= get_permalink(); ?>" class="btn btn__default yellow"><?php pll_e( 'Read more' ); ?></a>

			</article>
			<?php endwhile; endif; ?>
		</section>
		<aside class="col-xl-4 col-lg-5 col-md-7 col-sm-9">
			<div class="card bg-sea">
				<h3>
					<?php pll_e( 'Topics' ); ?>
				</h3>
				<ul>
					<?php if($query->have_posts()) : while($query->have_posts()) : $query->the_post(); ?>
						<li>
							<a href="<?= get_permalink(); ?>"><?= get_the_title(); ?></a>
						</li>
					<?php endwhile; endif; ?>
				</ul>
			</div>
			<div class="share">
				<h5 class="text500"><?php pll_e( 'Share this content' ); ?></h5>
				<div class="btns">
					<?php 
						global $wp;
						$current_url = home_url( add_query_arg( array(), $wp->request ) );
					?>
					<a class="btn btn__social notched navy" href="https://www.facebook.com/sharer/sharer.php?u=<?= $current_url; ?>&t=<?= get_the_title(); ?>" target="_blank">
						<i class="fab fa-facebook-f"></i>
					</a>
					<a class="btn btn__social notched navy" href="https://twitter.com/intent/tweet?source=<?= $current_url; ?>&text=<?= $current_url; ?> - <?= get_the_title(); ?>" target="_blank">
						<i class="fab fa-twitter"></i>
					</a>
					<a class="btn btn__social notched navy" href="http://www.linkedin.com/shareArticle?mini=true&url=<?= $current_url; ?>&title=<?= get_the_title(); ?>&summary=Checkout%20this%20job%20offer!&source=<?= $current_url; ?>" target="_blank">
						<i class="fab fa-linkedin-in"></i>
					</a>
					<a class="btn btn__social notched navy" href="https://getpocket.com/save?url=<?= $current_url; ?>&title=<?= get_the_title(); ?>" target="_blank">
						<i class="fab fa-get-pocket"></i>
					</a>
					<a class="btn btn__social notched navy" href="whatsapp://send?text=<?= get_the_title(); ?>&nbsp;&nbsp;<?= $current_url; ?>" target="_blank">
						<i class="fab fa-whatsapp"></i>
					</a>
					<a class="btn btn__social notched navy" href="mailto:?subject=<?= get_the_title(); ?>&body=Checkout%20this%20job%20offer: <?= $current_url; ?>" target="_blank">
						<i class="far fa-envelope"></i>
					</a>
				</div>
			</div>
		</aside>
	</div>
</div>
<?php wp_reset_postdata(); ?>

<?php get_footer();