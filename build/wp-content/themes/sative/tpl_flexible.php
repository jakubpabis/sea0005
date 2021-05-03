<?php
/**
 * Template Name: Flex Content
 */

get_header(); ?>

<?php //$gradient = false; ?>
<?php if( have_rows('sections') ): ?>
    <div class="body-bg-gradient pt-5 pb-5">
        <?php while( have_rows('sections') ): the_row(); ?>
            <?php if( get_row_layout() == 'header' && get_sub_field('image') ): ?>
                <?php get_template_part('template-parts/flex-content/header'); ?>
                <?php /* if( !$gradient ): ?><div class="body-bg-gradient pt-5 pb-5"><?php endif; $gradient = true; */ ?>
            <?php elseif( get_row_layout() == 'home_header' && get_sub_field('video') ): ?> 
                <?php /* if( !$gradient ): ?><div class="body-bg-gradient pt-5 pb-5"><?php endif; $gradient = true; */ ?>
                <?php get_template_part('template_parts/flex-content/header-video'); ?>
            <?php elseif( get_row_layout() == 'copy_section' && (get_sub_field('text') || get_sub_field('first_column')) ): ?>
                <?php get_template_part('template-parts/flex-content/copy-section'); ?>
            <?php elseif( get_row_layout() == 'video_section' && get_sub_field('video') ): ?>
                <?php get_template_part('template-parts/flex-content/video-section'); ?>
            <?php elseif( get_row_layout() == 'tags' && get_sub_field('first_row') ): ?>
                <?php get_template_part('template-parts/flex-content/tags'); ?>
            <?php elseif( get_row_layout() == 'google_reviews' && get_sub_field('image') ): ?>
                <?php get_template_part('template-parts/flex-content/greviews'); ?>
            <?php elseif( get_row_layout() == 'speech_bubbles_with_icons' && get_sub_field('bubbles') ): ?>
                <?php get_template_part('template-parts/flex-content/speech-bubbles'); ?>
            <?php elseif( get_row_layout() == 'job_categories_menus' ): ?>
                <div class="container"><p>Categories menu will be here...</p></div>
            <?php elseif( get_row_layout() == 'dogs_section' ): ?>
                <?php get_template_part('template-parts/flex-content/dogs-section'); ?>
            <?php elseif( get_row_layout() == 'call_to_action_section' && get_sub_field('image') ): ?>
                <?php get_template_part('template-parts/flex-content/cta-section'); ?>
            <?php elseif( get_row_layout() == 'articles' ): ?>
                <?php get_template_part('template-parts/flex-content/articles'); ?>
            <?php elseif( get_row_layout() == 'cards_links' && get_sub_field('links') ): ?>
                <?php get_template_part('template-parts/flex-content/card-links'); ?>
            <?php elseif( get_row_layout() == 'client_logos_big' && get_sub_field('logos') ): ?>
                <?php get_template_part('template-parts/flex-content/client-logos-big'); ?>
            <?php elseif( get_row_layout() == 'client_logos_small' && get_sub_field('logos') ): ?>
                <?php get_template_part('template-parts/flex-content/client-logos-small'); ?>
            <?php elseif( get_row_layout() == 'team' && get_sub_field('people') ): ?>
                <?php get_template_part('template-parts/flex-content/team'); ?>
            <?php elseif( get_row_layout() == 'testimonials' && get_sub_field('testimonials') ): ?>
                <?php get_template_part('template-parts/flex-content/testimonials'); ?>
            <?php elseif( get_row_layout() == 'copy_section_with_speech_bubble' ): ?>
                <?php get_template_part('template-parts/flex-content/copy-speech-bubble'); ?>
            <?php endif; ?>
        <?php endwhile; ?>
    </div>
<?php endif; ?>
<?php /*




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

<section class="flex_content-carousel">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="owl-carousel owl-theme">
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

*/ ?>
<?php // if($gradient) echo '</div>'; ?>




<?php get_footer();