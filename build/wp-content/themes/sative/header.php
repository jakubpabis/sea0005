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
                </div>
            </div>
            <div class="navigation__lower">
                <div class="container">
                    <div class="row justify-content-between align-items-center">
                        <div class="col-lg-3">
                            <a href="/" class="navigation__lower-logo">
                                <object type="image/svg+xml" data="<?= get_template_directory_uri(); ?>/assets/img/logo.svg">
                                    <img src="<?= get_template_directory_uri(); ?>/assets/img/logo.svg" alt="">
                                </object>
                            </a>
                        </div>
                        <div class="col-lg-9">
                            <div class="row align-items-center justify-content-end">
                                <div class="col-auto navigation__lower-contact">
                                    <a href="mailto:info@searchxrecruitment.com"><i class="far fa-envelope"></i>info@searchxrecruitment.com</a>
                                </div>
                                <div class="col-auto navigation__lower-contact">
                                    <a href="tel:+31207782393"><i class="fas fa-mobile-android-alt"></i>+31 (0)20 - 7782393</a>
                                </div>
                                <div class="col-auto navigation__lower-utils">
                                    <a href="" target="_blank"><img src="<?= get_template_directory_uri(); ?>/assets/img/whatsapp.png" alt="" width="22" height="22"></a>
                                    <a href="javascript:void(0)" data-toggle="modal" data-target="#searchModal"><i class="far fa-search"></i></a>
                                    <hr>
                                    <ul class="lang">
                                        <?php 
                                            pll_the_languages(array(
                                                'show_names' => 0,
                                                'display_names_as' => 'slug'
                                            )); 
                                        ?>
                                    </ul>
                                    <a href="javascript:void(0)" class="btn btn__small navy" data-toggle="modal" data-target="#uploadCVModal">
                                        Upload CV
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>