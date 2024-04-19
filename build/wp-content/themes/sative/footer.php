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

<?php get_template_part('template-parts/footer'); ?>
<?php get_template_part('template-parts/uploadcv'); ?>
<?php get_template_part('template-parts/search'); ?>
<?php get_template_part('template-parts/popups'); ?>
</div> <!-- #wrapper -->
<?php wp_footer(); ?>

<?php require_once get_template_directory() . '/inc/scripts.php'; ?>

</body>

</html>