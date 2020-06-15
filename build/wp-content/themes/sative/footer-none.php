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
        <!-- LinkedIn Insight Tag -->		
        <script type="text/javascript"> _linkedin_partner_id = "14266"; window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || []; window._linkedin_data_partner_ids.push(_linkedin_partner_id); </script>
        <script type="text/javascript"> (function(){var s = document.getElementsByTagName("script")[0]; var b = document.createElement("script"); b.type = "text/javascript";b.async = true; b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js"; s.parentNode.insertBefore(b, s);})(); </script> 
        <noscript> <img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=14266&fmt=gif" /> </noscript>
        <script src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js" data-cfasync="false"></script>
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
        </script>
    </body>
</html>