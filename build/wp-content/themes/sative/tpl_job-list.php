<?php
/**
 * Template Name: Job list
 */

get_header(); ?>

<header class="header__jobs">
    <div class="container">
        <div class="dog"></div>
        <div class="row align-items-center justify-content-between">
            <div class="col-lg-auto">
                <h1>
                    <span class="header__jobs-jobsno">234</span> open jobs
                </h1>
            </div>
            <div class="col-lg-auto header__jobs-cats">
                <a href="#it" class="btn btn__medium lgrey icon">
                    <span>IT</span> <i class="far fa-plus"></i>
                </a>
                <a href="#sales" class="btn btn__medium lgrey icon">
                    <span>Sales</span> <i class="far fa-plus"></i>
                </a>
                <a href="#executive" class="btn btn__medium lgrey icon">
                    <span>Executive</span> <i class="far fa-plus"></i>
                </a>
                <a href="#freelance" class="btn btn__medium lgrey icon">
                    <span>Freelance</span> <i class="far fa-plus"></i>
                </a>
            </div>
        </div>
        <div class="row align-items-center justify-content-between header__jobs-search">
            <div class="dog">
                <object type="image/svg+xml" data="<?= get_template_directory_uri(); ?>/assets/img/dog.svg">
                    <img src="<?= get_template_directory_uri(); ?>/assets/img/dog.svg" alt="">
                </object>
            </div>
            <div class="offset-lg-1 col-lg-5">
                <div class="triangle-left"></div>
                <input type="text" placeholder="Enter job title here">
            </div>
            <div class="col-lg-6">
                <input class="location" type="text" placeholder="Enter job location">
                <button type="submit" class="btn btn__notched"><i class="far fa-search"></i></button>
            </div>
            <div class="col-12 text-right">
                <p class="text-size-small font-primary">
                    150 jobs showing
                </p>
            </div>
        </div>
    </div>
</header>

<?php get_footer();