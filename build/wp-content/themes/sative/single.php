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
			<img class="bg-cover lazy" data-src="<?= get_the_post_thumbnail_url(); ?>" alt="">
		</picture>
	</header>

	<?php endif;

	get_template_part( 'template-parts/breadcrumbs' ); ?>

	<section class="article">
		<div class="container">
			<div class="row">
				<div class="col-12 mb-4 d-flex justify-content-end">
					<button type="button" id="backBTN" class="btn btn__medium yellow d-none"><?php pll_e( 'Back' ); ?></button>
				</div>
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
				<aside class="col-lg-4 col-md-7 col-sm-9">
					<?php get_sidebar(); ?>
				</aside>
			</div>
		</div>
	</section>

<?php endwhile; ?>
<script>
    if(window.history.length > 1) {
        document.getElementById('backBTN').classList.remove('d-none');
        document.getElementById('backBTN').addEventListener('click', function() {
            window.history.back();
        });
    }
</script>
<?php get_footer();