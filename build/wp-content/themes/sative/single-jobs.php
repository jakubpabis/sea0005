<?php
/**
 * The template for displaying all single jobs
 *
 * @package Sative
 */

get_header(); ?>

<?php while ( have_posts() ) : the_post(); 

	get_template_part( 'template-parts/breadcrumbs' ); ?>

	<section class="jobs__single">
		<div class="container">
			<div class="row">
                <header class="jobs__single-title col-lg-8">
                    <?php the_title( '<h1>', '</h1>' ); ?>
                </header>
                <div class="col-lg-4 text-right">
                    <a href="" class="btn btn__medium yellow"><?php pll_e( 'Back' ); ?></a>
                </div>
            </div>
            <div class="row pt-3">
				<article class="col-lg-8 jobs__single-article">

					<?php 
					
					the_content();

					if(get_field('button')) :
						echo '<a href="'.get_field('button')['url'].'" class="btn btn__default yellow">'.get_field('button')['title'].'</a>'; 
					endif;

                    ?>

                    <?php if(is_array(get_field('recruiter_related'))): $recruiter = get_field('recruiter_related')[0]; ?>
                    <?php var_dump($recruiter); ?>
                    <aside class="jobs__single-recruiter">
                        <h3><?php pll_e( 'Executive search consultant' ); ?></h3>
                        <div class="row recruiter">
                            <div class="col-lg-3">
                                <div class="recruiter-img">
                                    <img data-src="<?= get_the_post_thumbnail_url($recruiter->ID, 'medium'); ?>" alt="" class="lazy bg-cover">
                                </div>
                            </div>
                            <div class="col-lg-auto">
                                <div class="recruiter-text">
                                    <h5>
                                        <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.365 15L9 10.64 4.635 15 3 13.367l4.365-4.36L7.36 9l.006-.006L3 4.633 4.635 3 9 7.36 13.365 3 15 4.633l-4.365 4.36.006.007-.006.006L15 13.367 13.365 15zM0 18h18V0H0v18z" fill="#FDD963"/></svg>
                                        <?= $recruiter->post_title; ?>
                                    </h5>
                                    <div class="recruiter-contact">
                                        <a href="mailto:<?= get_field('email', $recruiter->ID); ?>" class="text-size-small"><?= get_field('email', $recruiter->ID); ?></a>
                                        <a href="tel:<?= get_field('phone', $recruiter->ID); ?>" class="text-size-small"><?= get_field('phone', $recruiter->ID); ?></a>
                                    </div>
                                    <div class="recruiter-btns">
                                        <a href="" class="btn btn__social notched yellow"><i class="fab fa-whatsapp"></i></a>
                                        <a href="" class="btn btn__social notched yellow"><i class="fab fa-skype"></i></a>
                                        <a href="<?= get_field('calendly', $recruiter->ID); ?>" class="text-size-small"><u><?php pll_e( 'Schedule a call or meeting' ); ?></u></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    <?php endif; ?>

				</article>
				<aside class="col-lg-4 jobs__single-sidebar">
					<?php get_sidebar('jobs'); ?>
				</aside>
			</div>
		</div>
    </section>

    <?php
        $customTaxonomyTerms = wp_get_object_terms( $post->ID, 'job-category', array('fields' => 'ids', 'childless' => true) );
        $args = array(
            'post_type' => 'jobs',
            'post_status' => 'publish',
            'posts_per_page' => 3,
            'orderby' => 'rand',
            'tax_query' => array(
                array(
                    'taxonomy' => 'job-category',
                    'field' => 'id',
                    'terms' => $customTaxonomyTerms
                )
            ),
            'post__not_in' => array ($post->ID),
        );
        $relatedPosts = new WP_Query( $args );
    ?>
    <?php if($relatedPosts->have_posts()) : ?>
    <section class="cards__section">
        <div class="cards__section-img job-single">
            <img data-src="<?= get_template_directory_uri(); ?>/assets/img/searchitrecruitment_homepage.jpg" class="bg-cover lazy">
        </div>
        <div class="cards__section-content bg-sea job-single">
            <div class="container">
                <div class="row">
                    <?php while($relatedPosts->have_posts()) : $relatedPosts->the_post(); $helper = jobDisplayHelper(); ?>
                    <div class="col-lg-4">
                        <div class="card">
                            <h3 class="title"><a href="<?= get_the_permalink(); ?>"><?= get_the_title(); ?></a></h3>
                            <div class="info">
                                <?php if(get_field('location')): ?>
                                <div class="info__item">
                                    <i class="far fa-map-marker-alt"></i>
                                    <span class="text-size-medium location"><?= get_field('location'); ?></span>
                                </div>
                                <?php endif; ?>
                                <?php if($helper['type']): ?>
                                <div class="info__item">
                                    <i class="far fa-clock"></i>
                                    <span class="text-size-medium type"><?= $helper['type']; ?></span>
                                </div>
                                <?php endif; ?>
                                <?php if(get_field('salary_min') || get_field('salary_max')): ?>
                                <div class="info__item">
                                    <i class="far fa-euro-sign"></i>
                                    <span class="text-size-medium">
                                        <number class="salarymin">
                                            <?= number_format((int)get_field('salary_min'), 0, ".", "."); ?>
                                        </number>
                                        <?= get_field('salary_min') && get_field('salary_max') ? '&nbsp;-&nbsp;' : null ?>
                                        <number class="salarymax">
                                            <?= number_format((int)get_field('salary_max'), 0, ".", "."); ?>
                                        </number>
                                    </span>
                                </div>
                                <?php endif; ?>
                                <?php if(get_field('industry')): ?>
                                <div class="info__item">
                                    <i class="far fa-industry"></i>
                                    <span class="text-size-medium industry"></span>
                                </div>
                                <?php endif; ?>
                            </div>
                            <a href="<?= get_the_permalink(); ?>" class="btn btn__small navy"><?php pll_e( 'More info' ); ?></a>
                        </div>
                    </div>
                    <?php endwhile; ?>
                </div>
            </div>
        </div>
    </section>
    <?php endif; wp_reset_postdata(); ?>

    <section class="jobs__single-cta-section text-center">
        <a href="" class="btn btn__default yellow"><?php pll_e( 'Show all jobs' ); ?></a>
    </section>

<?php endwhile; ?>

<?php get_footer();