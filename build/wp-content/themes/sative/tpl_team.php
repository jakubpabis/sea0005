<?php
/**
 * Template Name: Team
 */

get_header(); 

get_template_part( 'template-parts/breadcrumbs' ); ?>

<?php if(have_rows('sections')) : ?>
<header class="header__team">
    <?php while(have_rows('sections')) : the_row(); ?>
        <?php if(get_row_index() == 1): ?>
        <section class="dog section grey right">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="dog__info right bg-grey2">
                            <?php if(get_sub_field('h1') == true): ?>
                                <h1 class="text-size-xxxxlarge">
                                    <?= get_sub_field('title'); ?>
                                </h1>
                            <?php else: ?>
                                <h2 class="text-size-xxxxlarge">
                                    <?= get_sub_field('title'); ?>
                                </h2>
                            <?php endif; ?>
                            <?= get_sub_field('text'); ?>
                        </div>
                        <div class="triangle grey2"></div>
                    </div>
                    <div class="col-lg-4 thedog dog__sit right grey2">
                        <svg viewBox="0 0 650.13 306.3" xmlns="http://www.w3.org/2000/svg"><path d="M484.68 0l-28.1 28.1v138.58h41.54l25.3-25.31v-62h-10.29v57.77l-19.38 19.38h-26.88V32.46l22-22.16H640v42.76l-26.18 26h-79.23v99H171.22L63.53 285.54H0v10.29h67.72l107.69-107.51h359.18v69.29h73v19.55L591 295.83h-95.15v-64.92l-21.3-21.3-7.33 7.33 18.33 18.33v47H215l-10.1-10.7 38.22-35.08-35.25-34.21-7.16 7.33 27.4 26.71-37.87 34.73 23.56 24.61h-64.4v-60.22h-10.3V306h98.79L225 292.52h260.55v13.78h110.13l22.17-25.13v-33.68h-73V89.54H618l32.11-32.12V0z" fill="#173751"/><g class="bowtie" fill="#88d8e5"><path d="M556 206.6l-23.4-23.41 23.4-23.4 7.2 7.21-16.2 16.19 16.22 16.22z"/><path d="M523.74 206.6l-7.18-7.19 16.21-16.22L516.56 167l7.18-7.19 23.41 23.4z"/></g></svg>
                    </div>
                </div>
            </div>
        </section>
        <?php elseif(get_row_index() == 2): ?>
        <section class="dog section left sea">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-lg-3">
                        <div class="thedog dog__stand left">
                            <svg viewBox="0 0 306.39 610.05" xmlns="http://www.w3.org/2000/svg"><path d="M140.49 0l-28 28.13v138.49h41.39l25.41-25.41V79.32H169V137l-19.24 19.42h-26.88V32.31l22-22.15h151V53l-26.34 27.77H190.4v90.94l6.35 6.35h-55.17L112.9 212v258.11l-58.45 58.44H0v10.35h58.63l64.43-64.44V215.81l23.24-27.4h60.26V188l10 10v23.8h-54.29v-12h-10.35v22.33h84.22l22.51 22V320h-22.33l-19.42-19.42v-30.5h-39.75v10.35h29.41v24.5l10.7 10.71v225.07l-47.91 43.38-8.17-8.35 38.12-35-45.2-46.28-7.26 7.26 37.75 38.66-37.93 34.82 23.59 24.5H106v-84.22H95.65v94.57h98.74l-17.78-18.52 51.18-46.28V325.81l4.36 4.35H269v-80.41l-28-28.13h-13.75v-28.13l-26.32-26.32v-76h73.33l32.13-33.76V0z" fill="#173751"/><g class="bowtie" fill="#88d8e5"><path d="M225.42 206.72l-23.51-23.51 23.51-23.51 7.31 7.32-16.19 16.19 16.19 16.2z"/><path d="M193.2 206.72l-7.32-7.31 16.2-16.2-16.2-16.21 7.32-7.32 23.51 23.51z"/></g></svg>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="dog__info left bg-sea">
                            <?php if(get_sub_field('h1') == true): ?>
                                <h1 class="text-size-xxxxlarge">
                                    <?= get_sub_field('title'); ?>
                                </h1>
                            <?php else: ?>
                                <h2 class="text-size-xxxxlarge">
                                    <?= get_sub_field('title'); ?>
                                </h2>
                            <?php endif; ?>
                            <?= get_sub_field('text'); ?>
                        </div>
                        <div class="triangle sea"></div>
                    </div>
                </div>
            </div>
        </section>
        <?php elseif(get_row_index() == 3): ?>
        <section class="dog section yellow right">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="dog__info right bg-yellow">
                            <?php if(get_sub_field('h1') == true): ?>
                                <h1 class="text-size-xxxxlarge">
                                    <?= get_sub_field('title'); ?>
                                </h1>
                            <?php else: ?>
                                <h2 class="text-size-xxxxlarge">
                                    <?= get_sub_field('title'); ?>
                                </h2>
                            <?php endif; ?>
                            <?= get_sub_field('text'); ?>
                        </div>
                        <div class="triangle yellow"></div>
                    </div>
                    <div class="col-lg-4 thedog dog__normal right">
                        <svg viewBox="0 0 649.89 364.92" xmlns="http://www.w3.org/2000/svg"><path d="M484.2 0l-28 28.09v138.59h41.45l25.37-25.37v-62h-10.23v57.79l-19.43 19.42h-27v-124l22-22.15H639.5v42.84l-26.11 26.11H534.2v99H170.76L63.11 285.84H0v10.28h67.44L175.1 188.58h359.1v91.94l-37.87 46.28 26.85 27.72h-56.8v-72.26H233.13l-46.53 44.42 26.73 27.72h-64.22V237h-10.27v127.79h98.75l-36.39-37.74 36-34.4h218.9v72.27h91.33l-37.25-38.49 34.4-41.95V89.84h73.13l32.17-32.05V.49H484.2" fill="#173751"/><g class="bowtie" fill="#88d8e5"><path d="M555.61 206.72l-23.4-23.39 23.4-23.4 7.22 7.22-16.18 16.18 16.18 16.17z"/><path d="M523.25 206.72L516 199.5l16.17-16.17L516 167.15l7.21-7.22 23.4 23.4-23.4 23.39"/></g></svg>
                    </div>
                </div>
            </div>
        </section>
        <?php endif; ?>
    <?php endwhile; ?>
</header>

<main class="team bg-grey2">
    <div class="container">
        <?php if(get_field('team_title') || get_field('team_text')): ?>
        <div class="row justify-content-center">
            <div class="col-lg-6 text-center">
                <?php if(get_field('team_title')): ?>
                    <h2 class="text-size-xxxxlarge">
                        <?= get_field('team_title'); ?>
                    </h2>
                <?php endif; ?>
                <?php if(get_field('team_text')): ?>
                    <?= get_field('team_text'); ?>
                <?php endif; ?>
            </div>
        </div>
        <?php endif; ?>
        <?php wp_reset_postdata(); ?>
        <?php
            $args = array( 
                'post_type' => 'team',
                'post_status' => 'publish',
                'posts_per_page' => -1
            );
            $query = new WP_Query( $args );
            $i = 1;
        ?>
        <?php if($query->have_posts()) : while($query->have_posts()) : $query->the_post(); ?>
        <?php if($i % 3 == 0): ?>
        <div class="row justify-content-end">
        <?php elseif($i % 2 == 0): ?>
        <div class="row justify-content-center">
        <?php else: ?>
        <div class="row">
        <?php endif; ?>
            <div class="col-lg-10">
                <div class="team__item">
                    <div class="row">
                        <div class="col-lg-5">
                            <?php if(has_post_thumbnail()): ?>
                            <div class="team__item-img">
                                <img class="lazy bg-cover" data-src="<?= get_the_post_thumbnail_url(); ?>" alt="">
                            </div>
                            <?php endif; ?>
                        </div>
                        <div class="col-lg-7">
                            <div class="team__item-text">
                                <div class="row justify-content-between">
                                    <div class="col-lg-8">
                                        <h2><?= get_the_title(); ?></h2>
                                        <h4 class="color-pink"><?= get_field('title'); ?></h4>
                                    </div>
                                    <div class="col-auto team__item-social">
                                        <?php if(get_field('whatsapp')): ?>
                                            <a href="<?= get_field('whatsapp'); ?>" class="btn btn__social notched sea"><i class="fab fa-whatsapp"></i></a>
                                        <?php endif; ?>
                                        <?php if(get_field('skype')): ?>
                                            <a href="<?= get_field('skype'); ?>" class="btn btn__social notched sea"><i class="fab fa-skype"></i></a>
                                        <?php endif; ?>
                                        <?php if(get_field('linkedin')): ?>
                                            <a href="<?= get_field('linkedin'); ?>" class="btn btn__social notched sea"><i class="fab fa-linkedin-in"></i></a>
                                        <?php endif; ?>
                                    </div>
                                </div>
                                <a href="tel:<?= get_field('email'); ?>" class="text-size-medium"><?= get_field('email'); ?></a><br/>
                                <a href="tel:<?= get_field('phone'); ?>" class="text-size-medium"><?= get_field('phone'); ?></a><br/>
                                <?= get_field('short_bio'); ?>
                                <div class="btns">
                                    <?php if(get_the_content()): ?>
                                        <a href="javascript:void(0)" class="btn btn__default navy"><?php pll_e( 'Read more' ); ?></a>
                                    <?php endif; ?>
                                    <?php if(get_field('calendly')): ?>
                                        <a href="<?= get_field('calendly') ?>"><u><?php pll_e( 'Schedule a call or meeting' ); ?></u></a>
                                    <?php endif; ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php $i++; endwhile; endif; ?>
        <?php wp_reset_postdata(); ?>
    </div>
</main>

<?php endif; ?>

<?php get_footer();