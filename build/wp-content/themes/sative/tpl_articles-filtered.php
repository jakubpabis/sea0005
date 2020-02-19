<?php
/**
 * Template Name: Filtered articles
 */

get_header(); ?>

<?php

$catID = get_field('category-slug')->slug;

$args = array( 
    'post_type' => 'post',
    'post_status' => 'publish',
	'posts_per_page' => -1,
	'cat' => $catID
);
$query = new WP_Query( $args );
?>

<?php if(get_the_post_thumbnail_url()) : ?>

	<header class="header__article">
		<picture class="bg-cover">
			<source srcset="<?= get_the_post_thumbnail_url(); ?>">
			<img class="bg-cover" src="<?= get_the_post_thumbnail_url(); ?>" alt="">
		</picture>
	</header>

<?php endif;

get_template_part( 'template-parts/breadcrumbs' ); ?>

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

<?php get_footer();