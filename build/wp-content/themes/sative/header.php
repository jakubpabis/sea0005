<?php
/**
 * The header for our theme
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WP_Bootstrap_Starter
 */
?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html <?php language_attributes(); ?>> <!--<![endif]-->
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
    <link rel="stylesheet" href="<?= get_template_directory_uri(); ?>/assets/css/fa.min.css" media="none" onload="if(media!='all')media='all'">
    <noscript>
        <link rel="stylesheet" href="<?= get_template_directory_uri(); ?>/assets/css/fa.min.css"/>
    </noscript>
    <!--<noscript>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" integrity="sha256-UhQQ4fxEeABh4JrcmAJ1+16id/1dnlOEVCFOxDef9Lw=" crossorigin="anonymous"/>
    </noscript>
    <noscript>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" integrity="sha256-kksNxjDRxd/5+jGurZUJd1sdR2v+ClrCl3svESBaJqw=" crossorigin="anonymous"/>
    </noscript>-->
    <link rel="stylesheet" href="<?= get_template_directory_uri(); ?>/assets/css/main.min.css">
    <?php /*<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css" media="none" onload="if(media!='all')media='all'"/>
    <noscript>
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css" />
    </noscript>*/ ?>
</head>
<body <?php body_class(); ?>>
    <!--[if lt IE 7]>
        <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->          
    <div id="wrapper">
        <nav class="navigation">
            <div class="navigation__upper">
                <div class="container">
                    <?php
                        wp_nav_menu(array(
                            'theme_location'    => 'primary',
                            'container'       => '',
                            'container_id'    => '',
                            'container_class' => '',
                            'menu_id'         => false,
                            'menu_class'      => 'navigation__upper-menu',
                            'depth'           => 3,
                            'fallback_cb'     => 'wp_bootstrap_navwalker::fallback',
                            'walker'          => new wp_bootstrap_navwalker()
                        ));
                    ?>
                    <ul class="lang d-lg-none d-flex">
                        <?php 
                            pll_the_languages(array(
                                'show_names' => 0,
                                'display_names_as' => 'slug'
                            )); 
                        ?>
                    </ul>
                    <a href="javascript:void(0)" class="btn btn__small yellow d-lg-none d-inline-block" data-toggle="modal" data-target="#uploadCVModal">
                        <?php pll_e('Upload CV'); ?>
                    </a>
                    <div class="navigation__upper-contact d-lg-none d-flex">
                        <a class="mb-1" href="tel:+31207782393"><i class="fas fa-mobile-android-alt"></i>+31 (0)20 - 7782393</a>
                        <a href="mailto:info@searchxrecruitment.com"><i class="far fa-envelope"></i>info@searchxrecruitment.com</a>
                    </div>
                </div>
            </div>
            <div class="navigation__lower">
                <div class="container">
                    <div class="row justify-content-between align-items-center">
                        <div class="col-md-3 col-auto">
                            <a href="/" class="navigation__lower-logo d-none d-lg-block">
                                <svg viewBox="0 0 587.76 172.97" xmlns="http://www.w3.org/2000/svg"><g fill="#173751"><path d="m129.47 138.46v7.45c-6.42 0-10.19 3.94-10.19 10.11v16.18h-7.28v-33.2h7.28v5.39c2.4-3.68 5.91-5.91 10.19-5.91"/><path d="m139.66 152.42h19.7a10.18 10.18 0 0 0 -19.7 0zm27.4 5.91h-27.48a9.86 9.86 0 0 0 9.93 8c4.19 0 7.71-2 9.08-4.71h8c-2.4 6.68-8.91 11.31-17.13 11.31-10.1 0-17.72-7.45-17.72-17.39s7.62-17.38 17.72-17.38 17.81 7.45 17.81 17.47a14.84 14.84 0 0 1 -.17 2.74"/><path d="m171.6 155.59c0-9.85 7.62-17.38 17.81-17.38 8.74 0 15.67 5.56 17.3 13.53h-7.71a10 10 0 0 0 -9.59-6.51 10.36 10.36 0 1 0 9.59 14.21h7.71c-1.63 8-8.56 13.53-17.3 13.53-10.19 0-17.81-7.53-17.81-17.38"/><path d="m230.6 138.46v7.45c-6.42 0-10.19 3.94-10.19 10.11v16.18h-7.28v-33.2h7.28v5.39c2.4-3.68 5.91-5.91 10.19-5.91"/><path d="m266.56 139v33.2h-7.27v-4.45a12.49 12.49 0 0 1 -10.62 5.25c-7.62 0-12.68-5.05-12.68-12.84v-21.16h7.28v19c0 4.71 3.09 8 7.71 8 5 0 8.31-3.25 8.31-8v-19z"/><path d="m275.21 139h7.28v33.2h-7.28zm-.94-10.19a4.67 4.67 0 0 1 9.33 0 4.61 4.61 0 0 1 -4.7 4.62 4.55 4.55 0 0 1 -4.63-4.62"/><path d="m302.19 145.66v19.86h8.64v6.68h-15.92v-26.54h-6.17v-6.66h6.17v-9.77h7.28v9.77h8.64v6.68h-8.64"/><path d="m369.66 150.62v21.58h-7.28v-19.44c0-4.54-2.82-7.53-7.36-7.53-4.71 0-7.88 3.08-7.88 7.7v19.27h-7.28v-19.44c0-4.54-2.82-7.53-7.36-7.53-4.71 0-7.88 3.08-7.88 7.7v19.27h-7.28v-33.2h7.28v4.28a12 12 0 0 1 10.28-5c5.13 0 9.07 2.39 11 6.42a12.84 12.84 0 0 1 11.56-6.42c7.36 0 12.24 5 12.24 12.41"/><path d="m383.62 152.42h19.69a10.17 10.17 0 0 0 -19.69 0zm27.4 5.91h-27.4a9.88 9.88 0 0 0 9.93 8c4.2 0 7.71-2 9.08-4.71h8c-2.39 6.68-8.9 11.31-17.12 11.31-10.11 0-17.73-7.45-17.73-17.39s7.62-17.38 17.73-17.38 17.81 7.45 17.81 17.47a15 15 0 0 1 -.26 2.74"/><path d="m449.21 151.31v20.89h-7.28v-18.5c0-5-3.25-8.47-8.3-8.47-5.31 0-8.82 3.42-8.82 8.56v18.33h-7.28v-33.23h7.28v4.62a13.27 13.27 0 0 1 11.19-5.39c8 .09 13.18 5.31 13.18 13.19"/><path d="m467.11 145.66v19.86h8.65v6.68h-15.93v-26.54h-6.17v-6.66h6.17v-9.77h7.28v9.77h8.65v6.68h-8.65"/><path d="m3.94 116.46v-11.56h43.76l7.45-7.62v-9.94l-7.88-7.88h-32.71l-14.56-14.21v-16.78l14.56-14.73h46.67v11.73h-40.08l-7.28 7.11v8.05l7.62 7.62h33.06l14.55 14.21v19.44l-14.38 14.56z"/><path d="m97.28 69.19h42.21v-15.67l-8.73-8.65h-24.84l-8.73 8.65zm2.72 47.27-16.6-16.62v-49.49l16.6-16.61h36.82l16.61 16.61v29.88h-56.07v15.93l8.73 8.74h46v11.56z"/><path d="m188.64 105.41h19.61l16.27-16.1v-14l-35.88.18-8.73 8.56v12.71zm-6.16 11-16.48-16.57v-18.84l16.44-16.62h42v-10.26l-8.44-8.65h-39.26v-11.73h45.26l16.44 16.61v66.11h-13.92v-12.76l-12.84 12.76h-29.2"/><path d="m256 116.46v-82.64h13.87v14.9l14.38-14.9h21.15v14h-20.6l-15 15.5v53.26h-13.8"/><path d="m332.84 116.46-16.61-16.62v-49.49l16.61-16.61h37.76l14.56 14.38v13.11h-13.87v-8.57l-7.88-7.88h-24.49l-8.73 8.65v42.57l8.73 8.82h45.56v11.56h-51.64"/><path d="m400 116.46v-116.46h13.87v46.92l12.67-13.1h30.46l16.45 16.62v66.1h-13.88v-62.54l-8.39-9h-21.06l-16.27 16.57v55h-13.85"/><path d="m567.72 104.47-21.92-21.92-21.92 21.92-8.22-8.22 21.92-21.92-21.92-21.93 8.22-8.22 21.92 21.93 21.92-21.93 8.22 8.22-21.94 21.93 21.92 21.92zm-63.79-72.1v83.83h83.83v-83.83z"/></g></svg>
                            </a>
                            <a href="/" class="navigation__lower-logo d-lg-none d-block">
                                <svg viewBox="0 0 587.84 116.74" xmlns="http://www.w3.org/2000/svg"><path d="M3.87 116.56V105h43.78l7.41-7.58v-9.98l-7.92-7.92H14.48L0 65.38V48.71l14.48-14.65h46.64v11.62H21.21L14 52.75v8.08l7.58 7.58h33L69 82.72v19.36l-14.28 14.48zm93.45-47.31h42.26V53.59l-8.76-8.75H105.9l-8.75 8.75v15.66zm2.68 47.31L83.34 99.89v-49.5L100 33.73h36.87l16.67 16.66V80.2H97.32v16l8.75 8.76h46v11.61H100m88.74-11.12h19.53l16.34-16.16v-14l-35.87.17-8.74 8.61V96.7zm-6.23 11.11L166 99.89V81l16.5-16.67h42.1V54.1l-8.6-8.76h-39.21V33.73h45.29l16.5 16.66v66.17h-14v-12.79l-12.8 12.79h-29.3m73.44 0V33.89h14v14.82l14.31-14.82h21.21v14h-20.56l-15 15.49v53.2h-14m76.99-.02L316.2 99.89v-49.5l16.67-16.66h37.71L385.06 48v13.17h-14v-8.59l-7.92-7.91h-24.55l-8.75 8.75V96l8.75 8.93h45.46v11.61h-51.18m67.13.03V0h13.93v46.9l12.58-13.08h30.59l16.49 16.65v66.1h-13.94V54l-8.33-9h-21.07l-16.31 16.68v55.06zm167.8-11.99l-21.9-21.9-21.9 21.9-8.25-8.25 21.9-21.9-21.9-21.9 8.25-8.25 21.9 21.9 21.9-21.9 8.25 8.25-21.9 21.9 21.9 21.9zM504 32.49v83.88h83.88V32.49z" fill="#173751"/></svg>
                            </a>
                        </div>
                        <div class="col-md-9 col-auto">
                            <div class="row align-items-center justify-content-end">
                                <div class="col-xl-auto col-md-6 d-none d-lg-block navigation__lower-contact">
                                    <div class="row justify-content-end">
                                        <div class="col-lg-auto">
                                            <a href="mailto:info@searchxrecruitment.com"><i class="far fa-envelope"></i>info@searchxrecruitment.com</a>
                                        </div>
                                        <div class="col-lg-auto">
                                            <a href="tel:+31207782393"><i class="fas fa-mobile-android-alt"></i>+31 (0)20 - 7782393</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-auto navigation__lower-utils">
                                    <a href="https://wa.me/31207782393" target="_blank"><img src="<?= get_template_directory_uri(); ?>/assets/img/whatsapp.png" alt="" width="22" height="22"></a>
                                    <a href="javascript:void(0)" data-toggle="modal" data-target="#searchModal"><i class="far fa-search"></i></a>
                                    <hr class="d-none d-sm-inline-block">
                                    <ul class="lang d-none d-sm-inline-block">
                                        <?php 
                                            pll_the_languages(array(
                                                'show_names' => 0,
                                                'display_names_as' => 'slug'
                                            )); 
                                        ?>
                                    </ul>
                                    <a href="javascript:void(0)" class="btn btn__small navy d-none d-lg-inline-block" data-toggle="modal" data-target="#uploadCVModal">
                                        <?php pll_e('Upload CV'); ?>
                                    </a>
                                    <button type="button" class="navigation__lower-btn mobileMenu d-lg-none d-inline-block">
                                        <i class="far fa-bars"></i>
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M30.3884 34.2353L20.1176 23.9745L9.84745 34.2353L6 30.3939L16.2713 20.1321L16.2568 20.1171L16.2713 20.1027L6.00107 9.84138L9.84638 6L20.1176 16.2597L30.3889 6L34.2348 9.84138L23.964 20.1027L23.979 20.1171L23.964 20.1321L34.2353 30.3939L30.3884 34.2353ZM0 40H40V0H0V40Z" fill="#EC6278"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>