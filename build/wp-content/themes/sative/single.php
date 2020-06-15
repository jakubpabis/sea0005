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

<?php
	$related = get_posts( array( 'category__in' => wp_get_post_categories($post->ID), 'numberposts' => 3, 'post__not_in' => array($post->ID) ) );
	if( $related ) : ?>
		<div class="container my-5 py-2">
			<div class="row justify-content-center">
				<h2 class="text-size-xxxlarge">
					<?php pll_e( 'Similar articles' ); ?>
				</h2>
			</div>
		</div>
		<section class="cards__section related">
			<div class="cards__section-content related bg-sea job-single">
				<div class="container">
					<div class="row justify-content-center">
					<?php foreach( $related as $post ) :
					setup_postdata($post); ?>
						<div class="col-lg-4 col-md-8 col-sm-10 d-flex">
							<div class="card w-100 d-flex flex-row flex-wrap bg-lgrey">
								<div class="content">
									<h3 class="title"><a href="<?= get_the_permalink(); ?>"><?= get_the_title(); ?></a></h3>
									<?php if( get_the_excerpt() ) { 
										the_excerpt(); 
									} else {
										echo wp_trim_words( get_the_content(), 10, '...' ); 
									} ?>
								</div>
								<div class="btn-cont align-self-end">
									<a href="<?= get_the_permalink(); ?>" class="btn btn__small navy"><?php pll_e( 'Read more' ); ?></a>
								</div>
							</div>
						</div>   
					<?php endforeach; ?>
					</div>
				</div>
			</div>
		</section>
		<section class="jobs__single-cta-section text-center">
			<a href="<?php echo getTplPageKnowledgeURL(); ?>" class="btn btn__default yellow"><?php pll_e( 'Show all articles' ); ?></a>
		</section>
	<?php endif;
	wp_reset_postdata(); 
?>

<script>
    if(window.history.length > 1) {
        document.getElementById('backBTN').classList.remove('d-none');
        document.getElementById('backBTN').addEventListener('click', function() {
            window.history.back();
        });
    }
</script>
<?php get_footer();