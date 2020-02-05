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

<section class="home__cards cards__section">
    <div class="cards__section-img">
        <img data-src="img/searchitrecruitment_homepage.jpg" alt="" class="bg-cover lazy">
    </div>
    <div class="cards__section-content bg-sea">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="card">
                        <h3 class="mb-2"><i class="far fa-briefcase mr-2"></i> 253 open jobs</h3>
                        <p>
                            Are you looking for a job? Let us help you find the perfect match!
                        </p>
                        <div class="btns mt-3">
                            <a href="" class="btn btn__default navy">
                                Upload CV
                            </a>
                            <a href="" class="link text-size-medium color-pink ml-4">All vacancies</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="card">
                        <h3 class="mb-2"><i class="far fa-user-cog mr-2"></i> 159 candidates in progress</h3>
                        <p>
                            Do you want us to help you find the perfect candidate for the job?
                        </p>
                        <div class="btns mt-3">
                            <a href="" class="btn btn__default navy">
                                Get in touch
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="card">
                        <h3 class="mb-2"><i class="far fa-smile-beam mr-2"></i> 88 happy clients</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consec tet uer adipiscing elit commodo ligula eget 
                        </p>
                        <div class="btns mt-3">
                            <a href="" class="btn btn__default navy">
                                Show reviews
                            </a>
                            <a href="" class="link text-size-medium color-pink ml-4">All clients</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="card">
                        <h3 class="mb-2"><i class="far fa-user-check mr-2"></i> 258 matched candidates</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consec tet uer adipiscing elit commodo ligula eget 
                        </p>
                        <div class="btns mt-3">
                            <a href="" class="btn btn__default navy">
                                Show reviews
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="home__jobs">
    <div class="container">
        <div class="row align-content-center">
            <div class="col-lg-3">
                <div class="home__jobs-content">
                    <div class="home__jobs-icon bg-sea">
                        <i class="fal fa-laptop-code"></i>
                    </div>
                    <h2>IT</h2>
                    <div class="home__jobs-hidden">
                        <p class="text-size-small">
                            Lorem ipsum dolor sit amet consecteur detir
                        </p>
                        <a href="" class="btn btn__small navy">
                            48 open jobs
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="home__jobs-content">
                    <div class="home__jobs-icon bg-pink">
                        <i class="fal fa-sack-dollar"></i>
                    </div>
                    <h2>Sales</h2>
                    <div class="home__jobs-hidden">
                        <p class="text-size-small">
                            Lorem ipsum dolor sit amet consecteur detir
                        </p>
                        <a href="" class="btn btn__small navy">
                            48 open jobs
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="home__jobs-content">
                    <div class="home__jobs-icon bg-grey">
                        <i class="fal fa-user-tie"></i>
                    </div>
                    <h2>Executive</h2>
                    <div class="home__jobs-hidden">
                        <p class="text-size-small">
                            Lorem ipsum dolor sit amet consecteur detir
                        </p>
                        <a href="" class="btn btn__small navy">
                            48 open jobs
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="home__jobs-content">
                    <div class="home__jobs-icon bg-yellow">
                        <i class="fal fa-street-view"></i>
                    </div>
                    <h2>Freelance</h2>
                    <div class="home__jobs-hidden">
                        <p class="text-size-small">
                            Lorem ipsum dolor sit amet consecteur detir
                        </p>
                        <a href="" class="btn btn__small navy">
                            48 open jobs
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="home__testimonials testimonials__section">
    <div class="testimonials__section-img">
        <img data-src="img/searchitrecruitment_references_header.jpg" alt="" class="bg-cover lazy">
    </div>
    <div class="testimonials__section-content">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div id="carouselTestimonials" class="carousel slide bg-yellow" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="row justify-content-center">
                                    <div class="col-lg-9">
                                        <div class="row">
                                            <div class="col-lg-2">
                                                <img data-src="img/person.jpg" alt="" class="bg-cover lazy">
                                            </div>
                                            <div class="col-lg-10">
                                                <i class="fas fa-quote-left"></i>
                                                <p class="mb-1 mt-0">
                                                    Search It Recruitment has been incredibly helpful in finding me a job based on my personal characteristics and needs. They have managed to find me three potential offers within a week and, after another week, an official offer from an Utrecht's company. Well done!
                                                </p>
                                                <span class="text-size-small text500">
                                                    <i>
                                                        Giampaolo Falqui - PHP Developer - candidate
                                                    </i>
                                                </span>
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="row justify-content-center">
                                    <div class="col-lg-9">
                                        <div class="row">
                                            <div class="col-lg-2">
                                                <img data-src="img/person.jpg" alt="" class="bg-cover lazy">
                                            </div>
                                            <div class="col-lg-10">
                                                <i class="fas fa-quote-left"></i>
                                                <p class="mb-1 mt-0">
                                                    Search It Recruitment has been incredibly helpful in finding me a job based on my personal characteristics and needs. They have managed to find me three potential offers within a week and, after another week, an official offer from an Utrecht's company. Well done!
                                                </p>
                                                <span class="text-size-small text500">
                                                    <i>
                                                        Giampaolo Falqui - PHP Developer - candidate
                                                    </i>
                                                </span>
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselTestimonials" role="button" data-slide="prev">
                            <i class="fas fa-caret-left"></i>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselTestimonials" role="button" data-slide="next">
                            <i class="fas fa-caret-right"></i>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="home__clients">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="owl-carousel owl-theme">
                    <img class="owl-lazy" data-src="img/clients/download.png" alt="">
                    <img class="owl-lazy" data-src="img/clients/Qelp_Logo_RGB.png" alt="">
                    <img class="owl-lazy" data-src="img/clients/TechMahindra.png" alt="">
                    <img class="owl-lazy" data-src="img/clients/Twinfield.png" alt="">
                    <img class="owl-lazy" data-src="img/clients/Fabory.jpg" alt="">
                    <img class="owl-lazy" data-src="img/clients/Flipbase.png" alt="">
                    <img class="owl-lazy" data-src="img/clients/Gradient.png" alt="">
                    <img class="owl-lazy" data-src="img/clients/IceMobile.svg" alt="">
                    <img class="owl-lazy" data-src="img/clients/Ireckonu.png" alt="">
                    <img class="owl-lazy" data-src="img/clients/Justlease.jpg" alt="">
                    <img class="owl-lazy" data-src="img/clients/MSP.png" alt="">
                </div>
                <div class="custom-owl-prev" role="button">
                    <i class="fas fa-caret-left"></i>
                    <span class="sr-only">Previous</span>
                </div>
                <div class="custom-owl-next" role="button">
                    <i class="fas fa-caret-right"></i>
                    <span class="sr-only">Next</span>
                </div>
            </div>
            <div class="col-12 text-center mt-3">
                <a href="" class="btn btn__default yellow">See all clients</a>
            </div>
        </div>
    </div>
</section>

<?php get_footer();