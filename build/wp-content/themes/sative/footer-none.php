<?php
/**
 * The template for displaying the footer
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WP_Bootstrap_Starter
 */

$lang = pll_current_language();

?>
            <?php get_template_part( 'template-parts/chat' ); ?>
        </div> <!-- #wrapper -->
        <?php wp_footer(); ?>
        <?php /*<script src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js" data-cfasync="false"></script>
        <script>
            window.cookieconsent.initialise({
                "palette": {
                    "popup": {
                        "background": "#183153"
                    },
                    "button": {
                        "background": "#FDD963",
                        "text": "#183153"
                    }
                },
                "position": "bottom-left",
                "content": {
                    "message": "<?php pll_e( 'Search X Recruitment uses cookies to improve our website and your user experience. <br/>By clicking any link or continuing to browse you are giving your consent to our cookie policy.' ); ?>",
                    "dismiss": "<?php pll_e( 'Accept' ); ?>",
                    "link": "<?php pll_e( 'Learn more' ); ?>",
                    "href": <?php if( pll_current_language() === 'en' ) : ?>"/cookie-policy"<?php else: ?>"/cookiebeleid"<?php endif; ?>
                }
            });
        </script> */ ?>
    </body>
</html>