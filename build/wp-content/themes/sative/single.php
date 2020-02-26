<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package WP_Bootstrap_Starter
 */

get_header(); ?>

<?php while ( have_posts() ) : the_post(); 

	if(get_the_post_thumbnail_url()) : ?>

	<header class="header__article">
		<picture class="bg-cover">
			<source srcset="<?= get_the_post_thumbnail_url(); ?>">
			<img class="bg-cover" src="<?= get_the_post_thumbnail_url(); ?>" alt="">
		</picture>
	</header>

	<?php endif;

	get_template_part( 'template-parts/breadcrumbs' ); ?>

	<section class="article">
		<div class="container">
			<div class="row">
				<article class="col-lg-8">

					<?php 
					
					/* if ( 'post' === get_post_type() ) : 
						wp_bootstrap_starter_posted_on(); 
					endif; */

					the_title( '<h1>', '</h1>' ); 
					
					the_content();

					if(get_field('button')) :
						echo '<a href="'.get_field('button')['url'].'" class="btn btn__default yellow">'.get_field('button')['title'].'</a>'; 
					endif;

					?>

				</article>
				<aside class="col-lg-4">
					<?php get_sidebar(); ?>
				</aside>
			</div>
		</div>
	</section>

<?php endwhile; ?>

<?php get_footer();