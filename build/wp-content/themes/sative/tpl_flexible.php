<?php
/**
 * Template Name: Flex Content
 */

get_header(); ?>

<!-- <header class="header flex_content-header bg-sea py-5">
    <div class="container">
        <div class="row">
            <div class="col-12 py-5 mt-5">
                <img src="<?php //echo get_template_directory_uri(); ?>/assets/img/some-header.svg" alt="" class="lazy img-fluid">
            </div>
        </div>
    </div>
</header> -->

<header class="header__video bg-sea">
    <div class="container-fluid px-0 justify-content-center d-flex">
        <video muted autoplay preload="true" loop>
            <source src="<?php echo get_template_directory_uri(); ?>/assets/video/home.mp4" type="video/mp4">
            <source src="<?php echo get_template_directory_uri(); ?>/assets/video/home.webm" type="video/webm">
            <source src="<?php echo get_template_directory_uri(); ?>/assets/video/home.ogg" type="video/ogg">
            Your browser does not support the video tag.
        </video>
    </div>
    <div class="container">
        <div class="row position-absolute bottom-8vh justify-content-center w-100">
            <div class="col-lg-7 px-0 text-center">
                <span class="text-size-xxxxlarge d-block mb-0">
                    Wij zijn de eerste die je belt
                </span>
                <span class="mt-0 text-size-large d-block text400 font-secondary">
                    als je van plan bent om te groeien
                </span>
                <div class="card notched bg-white d-flex align-items-center mt-4 py-4 px-3 flex-row">
                    <a href="" class="btn btn__default yellow mx-2 w-50">
                        Ik zoek een baan
                    </a>
                    <a href="" class="btn btn__default navy mx-2 w-50">
                        Ik zoek een professional
                    </a>
                </div>
            </div>
        </div>
    </div>
</header>


<div class="body-bg-gradient pt-5 pb-5">

<section class="flex_content">
    <div class="container">
        <div class="row justify-content-between align-items-end">
            <div class="col-lg-9">
                <h4 class="text-uppercase mb-0 text700">
                    Jouw groei is ons instinct
                </h4>
                <span class="display-3 text700">
                    Niet wat je zoekt maar<br/>
                    <span class="bg-yellow px-3">
                        wat je nodig hebt!
                    </span>
                </span>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-lg-6 offset-lg-1">
                <p class="h3">
                    Search X Recruitment is gespecialiseerd in het bemiddelen van IT, Sales en Marketing professionals voor vaste vacatures en freelance opdrachten.
                </p>
                <p>
                    Ons werk is meer dan alleen het zoeken naar een passende kandidaat of het voorstellen van een interessante vacature. Wij zoeken een antwoord op de vraag van onze klant. En om dat antwoord te vinden, moeten we eerst de vraag echt begrijpen. Hoe we dat doen? Door te luisteren. Naar onze klanten, onze kandidaten en naar de markt.
                </p>
                <a href="" class="btn btn__default navy">
                    Wij zijn Search X.
                </a>
            </div>
            <div class="col-lg-5 mt-4">
                <div class="bg-white card d-block">
                    <p class="h2 text700 m-0">
                        Zo vinden wij jouw
                    </p>
                    <p>
                        Speuren, graven, ontleden… Alles om de mens achter de kandidaat en de opdrachtgever te leren kennen. Wij zijn eigenwijs en hebben een gezond jachtinstinct. Wij bewaken en teckelen alles. 
                        Opgeven is geen optie.
                    </p>
                    <a href="" class="btn btn__default yellow">
                        Onze kernwaarden
                    </a>
                </div>
                <div class="text-bubble text-bubble-left"></div>
            </div>
        </div>
    </div>
</section>

<section class="py-5 my-5">
    <div class="container">
        <div class="row">
            <div class="col-lg-4">
                <div class="card bg-white d-block">
                    <div class="row">
                        <div class="col-lg-4">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/approved.svg" alt="">
                        </div>
                        <div class="col-lg-8">
                            <span class="display-2 text700 m-0">
                                356
                            </span>
                            <p class="text-size-xlarge text700 font-primary mt-3 mb-0">
                                Bemiddelde 
                                kandidaten
                            </p>
                        </div>
                    </div>
                </div>
                <div class="text-bubble text-bubble-left"></div>
            </div>
            <div class="col-lg-4">
                <div class="card bg-white d-block">
                    <div class="row">
                        <div class="col-lg-4">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/career.svg" alt="">
                        </div>
                        <div class="col-lg-8">
                            <span class="display-2 text700 m-0">
                                108
                            </span>
                            <p class="text-size-xlarge text700 font-primary mt-3 mb-0">
                                Tevreden
                                klanten
                            </p>
                        </div>
                    </div>
                </div>
                <div class="text-bubble text-bubble-right"></div>
            </div>
            <div class="col-lg-4">
                <div class="card bg-white d-block">
                    <div class="row">
                        <div class="col-lg-4">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/job.svg" alt="">
                        </div>
                        <div class="col-lg-8">
                            <span class="display-2 text700 m-0">
                                233
                            </span>
                            <p class="text-size-xlarge text700 font-primary mt-3 mb-0">
                                Kandidaten in proces
                            </p>
                        </div>
                    </div>
                </div>
                <div class="text-bubble text-bubble-left"></div>
            </div>
        </div>
    </div>
</section>

<section class="flex_content-main_title">
    <div class="container">
        <div class="row justify-content-between align-items-end">
            <div class="col-lg-7">
                <h4 class="text-uppercase mb-0 text700">
                    WIJ ZIJN GEEN IT’ERS
                </h4>
                <span class="display-1 text700">
                    Wij zijn<br/>
                    <span class="bg-yellow px-3">
                        IT recruiters
                    </span>
                </span>
            </div>
            <div class="col-auto">
                <svg width="27px" height="69px" viewBox="0 0 27 69" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="1920" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="IT" transform="translate(-1510.000000, -949.000000)" fill="#183153" fill-rule="nonzero">
                            <path d="M1525.56719,949 L1525.567,1011.181 L1534.66124,1001.98857 L1537,1004.35283 L1523.5,1018 L1510,1004.35283 L1512.33876,1001.98857 L1522.259,1012.016 L1522.25968,949 L1525.56719,949 Z" id="Combined-Shape"></path>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    </div>
</section>

<section class="flex_content-copy_section">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <p class="h2 d-block mb-5">
                    Goede IT-professionals zijn ontzettend schaars.<br/>
                    En ze worden alleen maar schaarser.
                </p>
                <p class="h3 d-block mb-5 font-secondary text400">
                    Dat weten we allemaal. Ze komen aan opties niets tekort en worden dagelijks benaderd met nieuwe vacatures. De IT-markt is de afgelopen jaren namelijk overspoeld.
                </p>
                <p class="h4 d-block font-secondary text400">
                    Overspoeld met recruitmentbureaus die kwantiteit boven kwaliteit stellen en headhunters die enkel geloven in de wet van de grote getallen. And it shows. Inboxen stromen vol met niet passende profielen, kandidaten worden op hun werk lastiggevallen en de voicemails puilen uit van de onbeantwoorde cold calls. Dat kan anders. Dat moet anders. Dat moet beter. Daarom zijn wij er, Search IT Recruitment.
                </p>
            </div>
        </div>
    </div>
</section>

<section class="flex_content-video_section">
    <div class="container position-absolute h-100 right-0 top-80">
        <div class="row">
            <div class="col-lg-11 position-absolute h-100 p-0 right-0">
                <div class="flex_content-video_section-dog right bg-yellow w-100 h-100">
                    <svg class="flip-vertical" viewBox="0 0 649.89 364.92" xmlns="http://www.w3.org/2000/svg"><path d="m484.2 0-28 28.09v138.59h41.45l25.37-25.37v-62h-10.23v57.79l-19.43 19.42h-27v-124l22-22.15h151.14v42.84l-26.11 26.11h-79.19v99h-363.44l-107.65 107.52h-63.11v10.28h67.44l107.66-107.54h359.1v91.94l-37.87 46.28 26.85 27.72h-56.8v-72.26h-233.25l-46.53 44.42 26.73 27.72h-64.22v-117.4h-10.27v127.79h98.75l-36.39-37.74 36-34.4h218.9v72.27h91.33l-37.25-38.49 34.4-41.95v-194.64h73.13l32.17-32.05v-57.3h-165.68" fill="#FFFFFF"/><g class="bowtie" fill="#EC6278"><path d="m555.61 206.72-23.4-23.39 23.4-23.4 7.22 7.22-16.18 16.18 16.18 16.17z"/><path d="m523.25 206.72-7.25-7.22 16.17-16.17-16.17-16.18 7.21-7.22 23.4 23.4-23.4 23.39"/></g></svg>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-lg-9">
                <h4 class="text-uppercase">
                    LIEVER KIJKEN DAN LEZEN?
                </h4>
                <span class="display-2 text700">
                    We nemen je mee<br/>
                    in ons verhaal
                </span>
            </div>
            <div class="col-lg-9 mt-5 pt-5">
                <div class="flex_content-video_section-video left">
                    <div class="embed-container">
                        <iframe src="https://www.youtube.com/embed/QILiHiTD3uc" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="flex_content-copy_section">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <p class="h2 d-block mb-5">
                    Recruitment is voor ons meer dan een numbers game.<br/>
                    We hebben kandidaten genoeg. 
                </p>
                <p class="h3 mb-5 d-block mb-5 font-secondary text400">
                    Maar we begrijpen dat jouw nieuwe collega meer is dan een functieprofiel. Het gaat niet alleen om hard skills, maar ook om een persoonlijke klik. Met jou, jouw team en jullie missie.
                </p>
                <p class="h4 d-block font-secondary text400">
                    Daar begint onze zoektocht. En zodra we het spoor te pakken hebben laten we niet meer los. Zelfs niet wanneer we beet hebben. Want ook nadat jouw nieuwe medewerker is gevonden gaat het werk door. Van werkvergunningen en huisvesting tot de 30%-regeling en persoonlijke coaching. Jouw groei is onze uitdaging.
                </p>
            </div>
        </div>
    </div>
</section>

<section class="flex_content-tags">
    <div class="continuous-slider">
        <span>#engineering</span>
        <span>#engineering</span>
        <span>#engineering</span>
        <span>#engineering</span>
        <span>#engineering</span>
        <span>#engineering</span>
        <span>#engineering</span>
    </div>
    <div class="continuous-slider">
        <span>#engineering</span>
        <span>#engineering</span>
        <span>#engineering</span>
        <span>#engineering</span>
        <span>#engineering</span>
        <span>#engineering</span>
        <span>#engineering</span>
    </div>
</section>

<section class="flex_content-copy_section">
    <div class="container">
        <div class="row mb-5">
            <div class="col-lg-7">
                <span class="display-2 text900">
                    Techniek staat<br/>
                    voor niets
                </span>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <p class="h2 d-block mb-5">
                    Recruitment is voor ons meer dan een numbers game.<br/>
                    We hebben kandidaten genoeg. 
                </p>
                <p class="h3 d-block mb-5 font-secondary text400">
                    Maar we begrijpen dat jouw nieuwe collega meer is dan een functieprofiel. Het gaat niet alleen om hard skills, maar ook om een persoonlijke klik. Met jou, jouw team en jullie missie.
                </p>
                <p class="h4 d-block font-secondary text400">
                    Daar begint onze zoektocht. En zodra we het spoor te pakken hebben laten we niet meer los. Zelfs niet wanneer we beet hebben. Want ook nadat jouw nieuwe medewerker is gevonden gaat het werk door. Van werkvergunningen en huisvesting tot de 30%-regeling en persoonlijke coaching. Jouw groei is onze uitdaging.
                </p>
            </div>
        </div>
    </div>
</section>

<section class="flex_content-video_section">
    <div class="container position-absolute h-100 left-0 top-80">
        <div class="row">
            <div class="col-lg-11 position-absolute h-100 p-0 left-0">
                <div class="flex_content-video_section-dog bg-sea left w-100 h-100">
                    <svg viewBox="0 0 649.89 364.92" xmlns="http://www.w3.org/2000/svg"><path d="m484.2 0-28 28.09v138.59h41.45l25.37-25.37v-62h-10.23v57.79l-19.43 19.42h-27v-124l22-22.15h151.14v42.84l-26.11 26.11h-79.19v99h-363.44l-107.65 107.52h-63.11v10.28h67.44l107.66-107.54h359.1v91.94l-37.87 46.28 26.85 27.72h-56.8v-72.26h-233.25l-46.53 44.42 26.73 27.72h-64.22v-117.4h-10.27v127.79h98.75l-36.39-37.74 36-34.4h218.9v72.27h91.33l-37.25-38.49 34.4-41.95v-194.64h73.13l32.17-32.05v-57.3h-165.68" fill="#FFFFFF"/><g class="bowtie" fill="#FDD963"><path d="m555.61 206.72-23.4-23.39 23.4-23.4 7.22 7.22-16.18 16.18 16.18 16.17z"/><path d="m523.25 206.72-7.25-7.22 16.17-16.17-16.17-16.18 7.21-7.22 23.4 23.4-23.4 23.39"/></g></svg>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-lg-9">
                <h4 class="text-uppercase">
                    Hoor het van een ander
                </h4>
                <span class="display-2 text700">
                    Wat opdrachtgevers<br/>
                    over ons zeggen
                </span>
            </div>
            <div class="offset-lg-3 col-lg-9 mt-5 pt-5">
                <div class="flex_content-video_section-video right">
                    <div class="embed-container">
                        <iframe src="https://www.youtube.com/embed/QILiHiTD3uc" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="flex_content-reviews">
    <div class="container">
        <div class="row">
            <div class="col-lg-1">
                <svg width="58" height="35" xmlns="http://www.w3.org/2000/svg"><path d="M20.52 34.32L28.92 0h-15L0 34.32h20.52zm28.92 0L57.84 0h-15l-13.8 34.32h20.4z" fill="#EC6278"/></svg>
            </div>
            <div class="col-lg-6">
                <p class="h3 font-primary text400">
                    Wij zijn blij met Search X Recruitment omdat ze precies begrijpen hoe wij werken en welke mensen wij zoeken. Ze zijn vernieuwend in hun aanpak en geloven in echt het opbouwen van een relatie met de klant.
                </p>
                <p class="h4 font-primary text700">
                    Karin Struikman, Wolters Kluwer
                </p>
            </div>
            <div class="col-lg-4 offset-lg-1">
                <img class="lazy" data-src="<?php echo get_template_directory_uri(); ?>/assets/img/greviews.svg" alt="">
            </div>
        </div>
    </div>
</section>

<section class="flex_content-carousel">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="owl-carousel owl-theme">
                    <?php /* while ( have_rows('clients') ) : the_row(); ?>
                        <img class="owl-lazy" data-src="<?php // echo get_sub_field('image')['url']; ?>" alt="">
                    <?php // endwhile; */ ?>
                    <img class="owl-lazy" data-src="<?php echo get_template_directory_uri(); ?>/assets/img/clients/Ireckonu.png" alt="">
                    <img class="owl-lazy" data-src="<?php echo get_template_directory_uri(); ?>/assets/img/clients/Ireckonu.png" alt="">
                    <img class="owl-lazy" data-src="<?php echo get_template_directory_uri(); ?>/assets/img/clients/Ireckonu.png" alt="">
                    <img class="owl-lazy" data-src="<?php echo get_template_directory_uri(); ?>/assets/img/clients/Ireckonu.png" alt="">
                    <img class="owl-lazy" data-src="<?php echo get_template_directory_uri(); ?>/assets/img/clients/Ireckonu.png" alt="">
                    <img class="owl-lazy" data-src="<?php echo get_template_directory_uri(); ?>/assets/img/clients/Ireckonu.png" alt="">
                </div>
                <?php // if(count(get_field('clients')) > 1): ?>
                    <div class="custom-owl-prev" role="button">
                        <svg width="34" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M8.115.278L.271 8.329a.948.948 0 00-.078.091l.078-.09a.95.95 0 00-.236.412l-.006.023A.898.898 0 000 9l.006.11.002.011a.976.976 0 00.02.114c.003.007.004.014.006.022a.911.911 0 00.159.323l.01.013.068.078 7.844 8.051a.91.91 0 001.307 0 .966.966 0 000-1.342L3.157 9.948h29.919c.51 0 .924-.424.924-.948a.937.937 0 00-.924-.949H3.156L9.422 1.62a.966.966 0 000-1.342.908.908 0 00-1.307 0z" fill="#183153"/></svg>
                        <span class="sr-only">Previous</span>
                    </div>
                    <div class="custom-owl-next" role="button">
                        <svg width="34" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M25.885.278l7.844 8.051a.947.947 0 01.078.091l-.078-.09a.95.95 0 01.236.412l.006.023A.895.895 0 0134 9l-.006.11-.002.011a.974.974 0 01-.02.114c-.003.007-.004.014-.006.022a.91.91 0 01-.159.323l-.01.013-.068.078-7.844 8.051a.91.91 0 01-1.307 0 .966.966 0 010-1.342l6.265-6.432H.924A.937.937 0 010 9c0-.524.414-.949.924-.949h29.92L24.578 1.62a.966.966 0 010-1.342.908.908 0 011.307 0z" fill="#183153"/></svg>
                        <span class="sr-only">Next</span>
                    </div>
                <?php // endif; ?>
            </div>
        </div>
    </div>
</section>

<section class="flex_content-copy_section">
    <div class="container">
        <div class="row mb-5">
            <div class="col-lg-8">
                <h5 class="text-uppercase text700">
                    Van pup naar Grown-up
                </h5>
                <span class="display-3 text900">
                    Wij faciliteren<br/>
                    groei in elke <span class="bg-yellow px-3">fase</span> 
                </span>
            </div>
        </div>
        <div class="row justify-content-between flex_content-copy_section-dogs align-items-end flex-nowrap mb-5 pb-5">
            <div class="col">
                <img class="lazy img-fluid" data-src="<?php echo get_template_directory_uri(); ?>/assets/img/start-up.svg" alt="">
            </div>
            <div class="col">
                <img class="lazy img-fluid" data-src="<?php echo get_template_directory_uri(); ?>/assets/img/scale-up.svg" alt="">
            </div>
            <div class="col-auto">
                <img class="lazy img-fluid" data-src="<?php echo get_template_directory_uri(); ?>/assets/img/grown-up.svg" alt="">
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <p class="h2 d-block mb-5">
                    Recruitment is voor ons meer dan een numbers game.<br/>
                    We hebben kandidaten genoeg. 
                </p>
                <p class="h3 d-block mb-5 font-secondary text400">
                    Maar we begrijpen dat jouw nieuwe collega meer is dan een functieprofiel. Het gaat niet alleen om hard skills, maar ook om een persoonlijke klik. Met jou, jouw team en jullie missie.
                </p>
                <p class="h4 d-block font-secondary text400">
                    Daar begint onze zoektocht. En zodra we het spoor te pakken hebben laten we niet meer los. Zelfs niet wanneer we beet hebben. Want ook nadat jouw nieuwe medewerker is gevonden gaat het werk door. Van werkvergunningen en huisvesting tot de 30%-regeling en persoonlijke coaching. Jouw groei is onze uitdaging.
                </p>
            </div>
            <div class="col-lg-6">
                <p class="h2 d-block mb-5">
                    Recruitment is voor ons meer dan een numbers game.<br/>
                    We hebben kandidaten genoeg. 
                </p>
                <p class="h3 d-block mb-5 font-secondary text400">
                    Maar we begrijpen dat jouw nieuwe collega meer is dan een functieprofiel. Het gaat niet alleen om hard skills, maar ook om een persoonlijke klik. Met jou, jouw team en jullie missie.
                </p>
                <p class="h4 d-block font-secondary text400">
                    Daar begint onze zoektocht. En zodra we het spoor te pakken hebben laten we niet meer los. Zelfs niet wanneer we beet hebben. Want ook nadat jouw nieuwe medewerker is gevonden gaat het werk door. Van werkvergunningen en huisvesting tot de 30%-regeling en persoonlijke coaching. Jouw groei is onze uitdaging.
                </p>
            </div>
        </div>
    </div>
</section>

<section class="flex_content-cta">
    <div class="container position-absolute h-100 left-0">
        <div class="row">
            <div class="col-xl-8 position-absolute h-100 p-0 left-0">
                <div class="flex_content-cta-bg max left bg-yellow w-100 h-100"></div>
            </div>
        </div>
    </div>
    <div class="container py-5">
        <div class="row py-5">
            <div class="col-lg-8 mb-5">
                <h5 class="text-uppercase text700">
                    Speuren & graven
                </h5>
                <span class="display-3 text900 d-block">
                    Laten we de perfecte baan voor je zoeken
                </span>
                <form class="pt-2 mt-5 w-80">
                    <input class="search-input d-block w-100" type="search" placeholder="Waar ben jij naar op zoek?" />
                    <div class="hashtags my-4 py-2">
                        <a href="" class="text500 text-italic mr-3">#fintech</a>
                        <a href="" class="text500 text-italic mr-3">#fintech</a>
                        <a href="" class="text500 text-italic mr-3">#fintech</a>
                        <a href="" class="text500 text-italic mr-3">#fintech</a>
                        <a href="" class="text500 text-italic mr-3">#fintech</a>
                        <a href="" class="text500 text-italic mr-3">#fintech</a>
                        <a href="" class="text500 text-italic mr-3">#fintech</a>
                        <a href="" class="text500 text-italic mr-3">#fintech</a>
                        <a href="" class="text500 text-italic mr-3">#fintech</a>
                        <a href="" class="text500 text-italic mr-3">#fintech</a>
                        <a href="" class="text500 text-italic mr-3">#fintech</a>
                        <a href="" class="text500 text-italic mr-3">#fintech</a>
                        <a href="" class="text500 text-italic mr-3">#fintech</a>
                        <a href="" class="text500 text-italic mr-3">#fintech</a>
                        <a href="" class="text500 text-italic mr-3">#fintech</a>
                        <a href="" class="text500 text-italic mr-3">#fintech</a>
                        <a href="" class="text500 text-italic mr-3">#fintech</a>
                        <a href="" class="text500 text-italic mr-3">#fintech</a>
                        <a href="" class="text500 text-italic mr-3">#fintech</a>
                        <a href="" class="text500 text-italic mr-3">#fintech</a>
                        <a href="" class="text500 text-italic mr-3">#fintech</a>
                        <a href="" class="text500 text-italic mr-3">#fintech</a>
                        <a href="" class="text500 text-italic mr-3">#fintech</a>
                        <a href="" class="text500 text-italic mr-3">#fintech</a>
                        <a href="" class="text500 text-italic mr-3">#fintech</a>
                        <a href="" class="text500 text-italic mr-3">#fintech</a>
                        <a href="" class="text500 text-italic mr-3">#fintech</a>
                    </div>
                    <button type="submit" class="btn btn__default navy">Bekijk alle vacatures</button>
                </form>
            </div>
            <div class="col-lg-4">
                <h5 class="text-uppercase text700 mb-5">
                    Zoek per vakgebied
                </h5>
                <ul class="lined">
                    <li>
                        <a href="">IT</a>
                    </li>
                    <li>
                        <a href="">Sales</a>
                    </li>
                    <li>
                        <a href="">Marketing</a>
                    </li>
                    <li>
                        <a href="">Renewable Engineering</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>

<section class="flex_content-cta">
    <div class="container position-absolute h-100 left-0">
        <div class="row">
            <div class="col-lg-10 position-absolute h-100 p-0 left-0">
                <div class="flex_content-cta-bg right bg-yellow w-100 h-100"></div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-5 ml-lg-n5">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/Joost.png" alt="" class="lazy img-fluid">
            </div>
            <div class="col-lg-7 pt-5 mt-5">
                <h5 class="text-uppercase">
                    Neem met ons de volgende stap
                </h5>
                <span class="display-3 d-block text700 mb-5">
                    Wij zijn er klaar voor! Jij ook?
                </span>
                <a href="" class="btn btn__default pink bg-pink color-white">
                    Start vandaag met groeien
                </a>
            </div>
        </div>
    </div>
</section>

<section class="flex_content-bubbles">
    <div class="container">
        <div class="row align-items-end">
            <div class="col-lg-auto">
                <span class="d-block display-3 text700">
                    Start vandaag<br/>
                    met groeien 
                </span>
            </div>
            <div class="offset-lg-1 col-lg-5">
                <h2 class="m-0">
                    Ik start hier de jacht
                    <svg class="position-absolute ml-4 mt-3" width="118" height="445" xmlns="http://www.w3.org/2000/svg"><g stroke="#183153" stroke-width="5" fill="none" fill-rule="evenodd"><path d="M86 431.28l15 9.867 15-9.867"/><path d="M101.492 441.347V26.505L77.72 3.048H0"/></g></svg>
                </h2>
            </div>
        </div>
        <div class="row pt-5 mt-4 pb-5">
            <div class="col-lg-4 d-flex flex_content-bubbles-bubble-cont">
                <div class="flex_content-bubbles-bubble">
                    <h2 class="bg-sea px-2 d-inline-block my-0">
                        Slim
                    </h2>
                    <p class="text400">
                        Een nieuwe medewerker is meer dan een functie profiel, jij weet wie je zoekt wij weten het te vinden
                    </p>
                </div>
                <div class="triangle"></div>
            </div>
            <div class="col-lg-4 d-flex flex_content-bubbles-bubble-cont">
                <div class="flex_content-bubbles-bubble">
                    <h2 class="bg-yellow px-2 d-inline-block my-0">
                        Eigenwijs
                    </h2>
                    <p class="text400">
                        Een nieuwe medewerker is meer dan een functie profiel, jij weet wie je zoekt wij weten het te vinden
                    </p>
                </div>
                <div class="triangle"></div>
            </div>
            <div class="col-lg-4 d-flex flex_content-bubbles-bubble-cont">
                <div class="flex_content-bubbles-bubble">
                    <h2 class="bg-pink px-2 d-inline-block my-0">
                        Loyaal
                    </h2>
                    <p class="text400">
                        Een nieuwe medewerker is meer dan een functie profiel, jij weet wie je zoekt wij weten het te vinden
                    </p>
                </div>
                <div class="triangle"></div>
            </div>
        </div>
    </div>
</section>

<section class="flex_content-contact">
    <div class="container">
        <div class="row justify-content-end">
            <div class="col-lg-10 flex_content-contact-dog">
                <svg viewBox="0 0 650.13 306.3" xmlns="http://www.w3.org/2000/svg"><path d="M484.68 0l-28.1 28.1v138.58h41.54l25.3-25.31v-62h-10.29v57.77l-19.38 19.38h-26.88V32.46l22-22.16H640v42.76l-26.18 26h-79.23v99H171.22L63.53 285.54H0v10.29h67.72l107.69-107.51h359.18v69.29h73v19.55L591 295.83h-95.15v-64.92l-21.3-21.3-7.33 7.33 18.33 18.33v47H215l-10.1-10.7 38.22-35.08-35.25-34.21-7.16 7.33 27.4 26.71-37.87 34.73 23.56 24.61h-64.4v-60.22h-10.3V306h98.79L225 292.52h260.55v13.78h110.13l22.17-25.13v-33.68h-73V89.54H618l32.11-32.12V0z" fill="#173751"/><g fill="#ffffff"><path d="M556 206.6l-23.4-23.41 23.4-23.4 7.2 7.21-16.2 16.19 16.22 16.22z"/><path d="M523.74 206.6l-7.18-7.19 16.21-16.22L516.56 167l7.18-7.19 23.41 23.4z"/></g></svg>
            </div>
            <div class="col-lg-6">
                some
            </div>
        </div>
    </div>
</section>

<?php if( have_rows('sections') ): ?>
    <?php while( have_rows('sections') ): the_row(); ?>
        <?php if( get_row_layout() == 'main_title' ): ?>
            
        <?php elseif( get_row_layout() == 'slider' ): ?>

        <?php endif; ?>
    <?php endwhile; ?>
<?php endif; ?>

</div>



<?php get_footer();