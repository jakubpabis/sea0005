<?php

get_header();

get_template_part( 'template-parts/breadcrumbs' ); ?>

<?php if(get_field('title') || get_field('text')) : ?>
<header class="header__clients">
    <section class="dog section yellow left abs">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-sm-3 col-2 thedog dog__sit left yellow">
                    <svg viewBox="0 0 650.13 306.3" xmlns="http://www.w3.org/2000/svg"><path d="M484.68 0l-28.1 28.1v138.58h41.54l25.3-25.31v-62h-10.29v57.77l-19.38 19.38h-26.88V32.46l22-22.16H640v42.76l-26.18 26h-79.23v99H171.22L63.53 285.54H0v10.29h67.72l107.69-107.51h359.18v69.29h73v19.55L591 295.83h-95.15v-64.92l-21.3-21.3-7.33 7.33 18.33 18.33v47H215l-10.1-10.7 38.22-35.08-35.25-34.21-7.16 7.33 27.4 26.71-37.87 34.73 23.56 24.61h-64.4v-60.22h-10.3V306h98.79L225 292.52h260.55v13.78h110.13l22.17-25.13v-33.68h-73V89.54H618l32.11-32.12V0z" fill="#173751"/><g class="bowtie" fill="#88d8e5"><path d="M556 206.6l-23.4-23.41 23.4-23.4 7.2 7.21-16.2 16.19 16.22 16.22z"/><path d="M523.74 206.6l-7.18-7.19 16.21-16.22L516.56 167l7.18-7.19 23.41 23.4z"/></g></svg>
                </div>
                <div class="col-lg-8 col-sm-9 col-10">
                    <div class="dog__info left bg-yellow">
                        <h1 class="text-size-xxxxlarge">
                            <?= get_field('title'); ?>
                        </h1>
                        <?= get_field('text'); ?>
                    </div>
                    <div class="triangle yellow"></div>
                </div>
            </div>
        </div>
    </section>
</header>
<?php endif; ?>

<?php if(have_rows('big_clients')): ?>
<section class="clients__big">
    <div class="container">
        <?php if(get_field('big_clients_title')): ?>
        <div class="row justify-content-center clients__big-title">
            <div class="col-lg-6 col-md-9 text-center">
                <h2 class="text-size-xxxxlarge">
                    <?= get_field('big_clients_title'); ?>
                </h2>
            </div>
        </div>
        <?php endif; ?>
        <div class="row align-items-center justify-content-center">
        <?php while(have_rows('big_clients')): the_row(); ?>
            <div class="col-lg-4 col-sm-6 col-10 clients__big-item">
                <img data-src="<?= get_sub_field('image')['sizes']['medium_large']; ?>" alt="<?= get_sub_field('image')['alt']; ?>" class="lazy bg-cover">
            </div>
        <?php endwhile; ?>
        </div>
    </div>
</section>
<?php endif; ?>

<?php if(have_rows('small_clients')): ?>
<section class="clients__small">
    <div class="container">
        <?php if(get_field('small_clients_title')): ?>
        <div class="row justify-content-center clients__small-title">
            <div class="col-lg-6 col-md-9 text-center">
                <h2 class="text-size-xxxlarge">
                    <?= get_field('small_clients_title'); ?>
                </h2>
            </div>
        </div>
        <?php endif; ?>
        <div class="row align-items-center justify-content-center">
        <?php while(have_rows('small_clients')): the_row(); ?>
            <div class="col-lg-3 col-sm-4 col-6 clients__small-item">
                <img data-src="<?= get_sub_field('image')['sizes']['medium_large']; ?>" alt="<?= get_sub_field('image')['alt']; ?>" class="lazy bg-cover">
            </div>
        <?php endwhile; ?>
        </div>
    </div>
</section>
<?php endif; ?>

<?php get_footer();