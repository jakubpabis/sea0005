<?php
/**
 * Template Name: Homepage
 */

get_header(); ?>

<header class="header__home">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 dog">
                <object type="image/svg+xml" data="<?= get_template_directory_uri(); ?>/assets/img/dog-stand-whitebow.svg">
                    <img data-src="<?= get_template_directory_uri(); ?>/assets/img/dog-stand-whitebow.svg" alt="" class="lazy">
                </object>
            </div>
            <div class="col-lg-8">
                <div class="triangle"></div>
                <div class="text">
                    <?= get_field('header_text'); ?>
                </div>
                <?php if( have_rows('header_buttons') ): ?>
                    <div class="btns">
                    <?php while ( have_rows('header_buttons') ) : the_row(); ?>
                        <a href="<?= get_sub_field('button')['url']; ?>" class="btn btn__default navy">
                            <?= get_sub_field('button')['title']; ?>
                        </a>
                    <?php endwhile; ?>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
</header>

<?php if(get_field('intro_text_left') || get_field('intro_text_right')): ?>
<section class="home__middle">
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <?= get_field('intro_text_left'); ?>
                <form class="searchInput" action="">
                    <input id="homeSearchInput" type="search" placeholder="Let's find the perfect job for you">
                    <button type="submit" class="btn btn__notched"><i class="far fa-search"></i></button>
                </form>
                <?php if( have_rows('intro_hashtags') ): ?>
                <ul class="home__middle-hashtags">
                    <?php while ( have_rows('intro_hashtags') ) : the_row(); ?>
                    <li><?= get_sub_field('hashtag'); ?></li>
                    <?php endwhile; ?>
                </ul>
                <?php endif; ?>
            </div>
            <div class="col-lg-4">
                <?= get_field('intro_text_right'); ?>
                <?php if(get_field('intro_cta')): ?>
                    <a href="<?= get_field('intro_cta')['url']; ?>" class="btn btn__default yellow">
                        <?= get_field('intro_cta')['title']; ?>
                    </a>
                <?php endif; ?>
            </div>
        </div>
    </div>
</section>
<?php endif; ?>

<?php if( have_rows('middle_cards') ): ?>
<section class="home__cards cards__section">
    <div class="cards__section-img">
        <img data-src="<?= get_field('middle_cards_image')['url']; ?>" alt="<?= get_field('middle_cards_image')['alt']; ?>" class="bg-cover lazy">
    </div>
    <div class="cards__section-content bg-sea">
        <div class="container">
            <div class="row">
                <?php while ( have_rows('middle_cards') ) : the_row(); ?>
                <div class="col-lg-6">
                    <div class="card">
                        <h3 class="mb-2">
                            <?php if(get_sub_field('icon')): ?>
                            <i class="<?= get_sub_field('icon'); ?> mr-2"></i>&nbsp;
                            <?php endif; ?>
                            <?= get_sub_field('title'); ?>
                        </h3>
                        <?= get_sub_field('text'); ?>
                        <div class="btns mt-3">
                            <?php if(get_sub_field('button')): ?>    
                            <a href="<?= get_sub_field('button')['url']; ?>" class="btn btn__default navy">
                                <?= get_sub_field('button')['title']; ?>
                            </a>
                            <?php endif; ?>
                            <?php if(get_sub_field('additional_link')): ?>
                            <a href="<?= get_sub_field('additional_link')['url']; ?>" class="link text-size-medium color-pink ml-4"><?= get_sub_field('additional_link')['title']; ?></a>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
                <?php endwhile; ?>
            </div>
        </div>
    </div>
</section>
<?php endif; ?>

<?php if( have_rows('job_categories') ): ?>
<section class="home__jobs">
    <div class="container">
        <div class="row align-content-center">
            <?php while ( have_rows('job_categories') ) : the_row(); ?>
            <div class="col-lg-3">
                <div class="home__jobs-content">
                    <div class="home__jobs-icon <?= get_sub_field('colour'); ?>">
                        <i class="<?= get_sub_field('icon'); ?>"></i>
                    </div>
                    <h2><?= get_sub_field('title'); ?></h2>
                    <div class="home__jobs-hidden">
                        <?php if(get_sub_field('text')): ?>
                        <p class="text-size-small">
                            <?= get_sub_field('text'); ?>
                        </p>
                        <?php endif; ?>
                        <?php if(get_sub_field('button')): ?>
                        <a href="<?= get_sub_field('button')['url']; ?>" class="btn btn__small navy">
                            <?= get_sub_field('button')['title']; ?>
                        </a>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
            <?php endwhile; ?>
        </div>
    </div>
</section>
<?php endif; ?>

<?php

wp_reset_postdata();
$args = array( 
    'post_type' => 'testimonials',
    'post_status' => 'publish',
    'posts_per_page' => -1
);
$query = new WP_Query( $args );

?>
<?php if($query->have_posts()) : ?>
<section class="home__testimonials testimonials__section">
    <div class="testimonials__section-img">
        <img data-src="<?= get_field('testimonial_image')['url']; ?>" alt="" class="bg-cover lazy">
    </div>
    <div class="testimonials__section-content">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div id="carouselTestimonials" class="carousel slide bg-yellow" data-ride="carousel">
                        <div class="carousel-inner">
                            <?php $i = 0; while($query->have_posts()) : $query->the_post(); ?>
                            <?php if(get_field('testimonial_featured') == true): ?>
                            <div class="carousel-item <?= $i == 0 ? 'active' : null ?>">
                                <div class="row justify-content-center">
                                    <div class="col-lg-9">
                                        <div class="row">
                                            <?php if(has_post_thumbnail()): ?>
                                            <div class="col-lg-2">
                                                <img data-src="<?= get_the_post_thumbnail_url(); ?>" alt="" class="bg-cover lazy">
                                            </div>
                                            <div class="col-lg-10">
                                            <?php else: ?>
                                            <div class="col-12">
                                            <?php endif; ?>
                                                <i class="fas fa-quote-left"></i>
                                                <?php the_content(); ?>
                                                <span>
                                                    <i class="text-size-small text500">
                                                        <?= get_the_title(); ?>
                                                    </i>
                                                </span>
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                            <?php $i++; endif; ?>
                            <?php endwhile; ?>
                        </div>
                        <?php if($i > 1): ?>
                        <a class="carousel-control-prev" href="#carouselTestimonials" role="button" data-slide="prev">
                            <i class="fas fa-caret-left"></i>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselTestimonials" role="button" data-slide="next">
                            <i class="fas fa-caret-right"></i>
                            <span class="sr-only">Next</span>
                        </a>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<?php endif; wp_reset_postdata(); ?>

<?php if( have_rows('clients') ): ?>
<section class="home__clients">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="owl-carousel owl-theme">
                <?php while ( have_rows('clients') ) : the_row(); ?>
                    <img class="owl-lazy" data-src="<?= get_sub_field('image')['url']; ?>" alt="">
                <?php endwhile; ?>
                </div>
                <?php if(count(get_field('clients')) > 1): ?>
                <div class="custom-owl-prev" role="button">
                    <i class="fas fa-caret-left"></i>
                    <span class="sr-only">Previous</span>
                </div>
                <div class="custom-owl-next" role="button">
                    <i class="fas fa-caret-right"></i>
                    <span class="sr-only">Next</span>
                </div>
                <?php endif; ?>
            </div>
            <?php if(get_field('clients_button')): ?>
            <div class="col-12 text-center mt-3">
                <a href="<?= get_field('clients_button')['url']; ?>" class="btn btn__default yellow"><?= get_field('clients_button')['title']; ?></a>
            </div>
            <?php endif; ?>
        </div>
    </div>
</section>
<?php endif; ?>

<?php get_footer();