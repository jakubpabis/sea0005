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
</div> <!-- #wrapper -->
<?php wp_footer(); ?>

<?php require_once get_template_directory() . '/inc/scripts.php'; ?>
</body>

</html>