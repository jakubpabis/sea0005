<?php
/**
 * 
 * Template Name: Article
 *
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
				<article class="col-xl-8 col-lg-7 col-12">

					<?php 
					
					if ( 'post' === get_post_type() ) : 
						wp_bootstrap_starter_posted_on(); 
					endif;

					the_title( '<h1>', '</h1>' ); 
					
					the_content();

					if(get_field('button')) :
						echo '<a href="'.get_field('button')['url'].'" class="btn btn__default yellow">'.get_field('button')['title'].'</a>'; 
					endif;

					?>

				</article>
				<aside class="col-xl-4 col-lg-5 col-md-7 col-sm-9">
					<?php get_sidebar(); ?>
				</aside>
			</div>
		</div>
	</section>

<?php endwhile; ?>

<?php get_footer();