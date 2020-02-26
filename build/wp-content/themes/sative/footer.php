<?php
/**
 * The template for displaying the footer
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WP_Bootstrap_Starter
 */

?>
			<footer class="footer">
                <div class="container">
                    <div class="row align-items-center footer__upper">
                        <div class="col-lg-4 footer__upper-contact">
                            <a class="d-inline-block mt-1 text-size-medium" href="mailto:info@searchxrecruitment.com"><i class="far fa-envelope mr-3"></i>info@searchxrecruitment.com</a><br/>
                            <a class="d-inline-block mt-1 text-size-medium" href="tel:+31207782393"><i class="fas fa-mobile-android-alt mr-4"></i>+31 (0)20 - 7782393</a>
                        </div>
                        <div class="col-lg-4 text-center">
                            <a href="index.html">
                                <object type="image/svg+xml" data="<?= get_template_directory_uri(); ?>/assets/img/logo-white.svg" width="250" height="74">
                                    <img src="<?= get_template_directory_uri(); ?>/assets/img/logo-white.svg" alt="" width="250" height="74">
                                </object>
                            </a>
                        </div>
                        <div class="col-lg-4 text-right">
                            <a href="https://www.facebook.com/searchitrecruitment/" class="btn btn__social notched sea" target="_blank">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.instagram.com/searchitjobs/" class="btn btn__social notched sea" target="_blank">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com/company/search-it-recruitment/" class="btn btn__social notched sea" target="_blank">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://twitter.com/searchitjobs" class="btn btn__social notched sea" target="_blank">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                    <hr>
                    <div class="row footer__middle">
                        <div class="col-lg-3">
                            <h4>
                                Contact
                            </h4>
                            <p class="text-size-small font-primary">
                                Laan van Kronenburg 14<br/>
                                1183 AS Amstelveen<br/>
                                Amsterdam Area, The Netherlands<br/>
                                <a href="https://g.page/searchitrecruitment?share" class="color-sea" target="_blank"><strong><u>Open in maps</u></strong></a><br/>
                                <br/>
                                KVK: 62737244<br/>
                                BTW: NL854937274B01<br/>
                                BANK: NL54INGB0006845114
                            </p>
                        </div>
                        <div class="col-lg-3">
                            <h4>
                                Recent jobs
                            </h4>
                            <ul class="text-size-small">
                                <li>
                                    <a href="">Product Owner</a>
                                </li>
                                <li>
                                    <a href="">Junior Business Developer</a>
                                </li>
                                <li>
                                    <a href="">Front-End Developer</a>
                                </li>
                                <li>
                                    <a href="">Solution Architect</a>
                                </li>
                                <li>
                                    <a href="">Senior Accountmanager Food Industry</a>
                                </li>
                                <li>
                                    <a href="">Technical Support Engineer - Renewable Energy</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-3">
                            <h4>
                                Hot skills
                            </h4>
                            <p class="text-size-small font-primary">
                                <a href="">Java</a> / <a href="">.NET</a> / <a href="">PHP</a> / <a href="">JavaScript</a> / <a href="">Cloud</a> / <a href="">Android</a> / <a href="">iOS</a> / <a href="">Data Science</a> / <a href="">Business Intelligence</a> / <a href="">Data Engineering</a> / <a href="">Sales</a> / <a href="">DevOps</a>
                            </p>
                        </div>
                        <div class="col-lg-3">
                            <h4>
                                Subscribe to our newsletter
                            </h4>
                            <p class="text-size-small font-primary">
                                Interested in instantly receiving the latest Search X Recruitment jobs within your area of expertise?
                            </p>
                            <form action="" class="newsletter">
                                <input type="email" placeholder="Email">
                                <button type="submit"><i class="fas fa-caret-right"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="footer__lower">
                    <div class="container">
                        <div class="row justify-content-between">
                            <div class="col-auto">
                                <span>© Search X Recruitment - 2020</span>
                            </div>
                            <div class="col-auto">
                                <span>
                                    Design by <a href="http://loyals.com" target="blank">loyals.com</a>
                                </span>
                                <span class="sative">
                                    <a href="https://www.sative.co.uk" target="_blank">Made with <i class="fas fa-heart"></i> by <span>sative</span></a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <?php get_template_part( 'template-parts/chat' ); ?>
            <?php get_template_part( 'template-parts/search' ); ?>
            <?php get_template_part( 'template-parts/uploadcv' ); ?>
        </div> <!-- #wrapper -->
		<?php wp_footer(); ?>
    </body>
</html>