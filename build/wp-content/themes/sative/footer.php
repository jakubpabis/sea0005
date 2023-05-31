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

<!-- LinkedIn Insight Tag -->
<script type="text/javascript">
	if (getCookie('cookies-accepted') === 'accepted') {
		_linkedin_partner_id = "14266";
		window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
		window._linkedin_data_partner_ids.push(_linkedin_partner_id);
	}
</script>
<script type="text/javascript">
	if (getCookie('cookies-accepted') === 'accepted') {
		(function() {
			var s = document.getElementsByTagName("script")[0];
			var b = document.createElement("script");
			b.type = "text/javascript";
			b.async = true;
			b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
			s.parentNode.insertBefore(b, s);
		})();
	}
</script>
<?php if (isset($_COOKIE['cookies-accepted']) && $_COOKIE['cookies-accepted'] === "accepted") : ?>
	<noscript> <img height="1" width="1" alt="" src="https://px.ads.linkedin.com/collect/?pid=14266&fmt=gif" /> </noscript>
<?php endif; ?>
<!-- Start of HubSpot Embed Code -->
<script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/1932066.js"></script>
<!-- End of HubSpot Embed Code -->
</body>

</html>