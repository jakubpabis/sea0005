<?php
/**
 * Template Name: Contact
 */

get_header(); ?>

<?php if(has_post_thumbnail()): ?>
<header class="header__contact">
    <img class="bg-cover-abs" src="<?= get_the_post_thumbnail_url(); ?>" alt="">
</header>
<?php endif; ?>

<?php get_template_part( 'template-parts/breadcrumbs' ); ?>

<section class="contact">
    <section class="dog section yellow left abs">
        <div class="container-md">
            <div class="row">
                <div class="col-xl-4 col-lg-3 col-md-4 col-sm-3 col-2 thedog dog__sit left yellow">
                    <svg viewBox="0 0 650.13 306.3" xmlns="http://www.w3.org/2000/svg"><path d="M484.68 0l-28.1 28.1v138.58h41.54l25.3-25.31v-62h-10.29v57.77l-19.38 19.38h-26.88V32.46l22-22.16H640v42.76l-26.18 26h-79.23v99H171.22L63.53 285.54H0v10.29h67.72l107.69-107.51h359.18v69.29h73v19.55L591 295.83h-95.15v-64.92l-21.3-21.3-7.33 7.33 18.33 18.33v47H215l-10.1-10.7 38.22-35.08-35.25-34.21-7.16 7.33 27.4 26.71-37.87 34.73 23.56 24.61h-64.4v-60.22h-10.3V306h98.79L225 292.52h260.55v13.78h110.13l22.17-25.13v-33.68h-73V89.54H618l32.11-32.12V0z" fill="#173751"/><g class="bowtie" fill="#88d8e5"><path d="M556 206.6l-23.4-23.41 23.4-23.4 7.2 7.21-16.2 16.19 16.22 16.22z"/><path d="M523.74 206.6l-7.18-7.19 16.21-16.22L516.56 167l7.18-7.19 23.41 23.4z"/></g></svg>
                </div>
                <div class="col-xl-8 col-lg-9 col-md-8 col-sm-9 col-10">
                    <div class="dog__info left bg-yellow contact__text">
                        <h1 class="text-size-xxxxlarge">
                            <?php pll_e('Contact us!') ?>
                        </h1>
                        <div class="row contact__text-columns">
                            <div class="col-lg-6">
                                <h5 class="text500">
                                    Search It Recruitment B.V.<br/>
                                    Laan van Kronenburg 14<br/>
                                    1183 AS Amstelveen<br/>
                                    Amsterdam Area, The Netherlands
                                </h5>
                            </div>
                            <div class="col-lg-6">
                                <h5>
                                    <span class="text500">KVK:</span> 62737244<br/>
                                    <span class="text500">BTW:</span> NL854937274B01<br/>
                                    <span class="text500">BANK:</span> NL54INGB0006845114
                                </h5>
                            </div>
                        </div>
                        <div class="row contact__text-columns align-items-center">
                            <div class="col-lg-6">
                                <a class="d-inline-block mt-1 text-size-medium" href="mailto:info@searchxrecruitment.com"><i class="far fa-envelope mr-sm-3 mr-2"></i>info@searchxrecruitment.com</a><br/>
                                <a class="d-inline-block mt-1 text-size-medium" href="tel:+31207782393"><i class="fas fa-mobile-android-alt mr-sm-4 mr-2"></i>+31 (0)20 - 7782393</a>
                            </div>
                            <div class="col-lg-6">
                                <a href="https://www.facebook.com/searchitrecruitment/" class="btn btn__social notched navy" target="_blank">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://www.instagram.com/searchitjobs/" class="btn btn__social notched navy" target="_blank">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="https://www.linkedin.com/company/search-it-recruitment/" class="btn btn__social notched navy" target="_blank">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                                <a href="https://twitter.com/searchitjobs" class="btn btn__social notched navy" target="_blank">
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="triangle yellow"></div>
                </div>
            </div>
        </div>
    </section>
</section>

<?php get_footer();