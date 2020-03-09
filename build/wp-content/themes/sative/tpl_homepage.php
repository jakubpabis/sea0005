<?php
/**
 * Template Name: Homepage
 */

get_header(); ?>

<header class="header__home">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 dog">
                <svg viewBox="0 0 306.39 610.05" xmlns="http://www.w3.org/2000/svg"><path d="M140.49 0l-28 28.13v138.49h41.39l25.41-25.41V79.32H169V137l-19.24 19.42h-26.88V32.31l22-22.15h151V53l-26.34 27.77H190.4v90.94l6.35 6.35h-55.17L112.9 212v258.11l-58.45 58.44H0v10.35h58.63l64.43-64.44V215.81l23.24-27.4h60.26V188l10 10v23.8h-54.29v-12h-10.35v22.33h84.22l22.51 22V320h-22.33l-19.42-19.42v-30.5h-39.75v10.35h29.41v24.5l10.7 10.71v225.07l-47.91 43.38-8.17-8.35 38.12-35-45.2-46.28-7.26 7.26 37.75 38.66-37.93 34.82 23.59 24.5H106v-84.22H95.65v94.57h98.74l-17.78-18.52 51.18-46.28V325.81l4.36 4.35H269v-80.41l-28-28.13h-13.75v-28.13l-26.32-26.32v-76h73.33l32.13-33.76V0z" fill="#173751"/><g fill="#fff"><path d="M225.42 206.72l-23.51-23.51 23.51-23.51 7.31 7.32-16.19 16.19 16.19 16.2z"/><path d="M193.2 206.72l-7.32-7.31 16.2-16.2-16.2-16.21 7.32-7.32 23.51 23.51z"/></g></svg>
            </div>
            <div class="col-lg-8">
                <div class="triangle"></div>
                <div class="text">
                    <?= get_field('header_text'); ?>
                </div>
                <?php if( have_rows('header_buttons') ): ?>
                    <div class="btns">
                    <?php while ( have_rows('header_buttons') ) : the_row(); ?>
                        <div class="dropdown_container home">
                            <button class="btn btn__default navy dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <?= get_sub_field('button_title'); ?>
                                <i class="fas fa-chevron-down ml-2 mr-n2"></i>
                            </button>
                            <div class="dropdown-menu">
                                <?php if( have_rows('items') ): while ( have_rows('items') ) : the_row(); ?>
                                    <div class="row">
                                        <div class="col-12">
                                            <a class="dropdown-item bg-navy" href="<?= get_sub_field('item')['url']; ?>"><?= get_sub_field('item')['title']; ?></a>
                                        </div>
                                    </div>
                                <?php endwhile; endif; ?>
                            </div>
                        </div>
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