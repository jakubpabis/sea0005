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
</div> <!-- #wrapper -->
<?php wp_footer(); ?>

<!-- Smartsupp Chat Tag -->
<script type="text/javascript">
	if (getCookie('cookies-accepted') === 'accepted') {
		var _smartsupp = _smartsupp || {};
		_smartsupp.key = 'f32f591b82ffa879c325ae96ca021013ef7a7d64';
		_smartsupp.gaKey = 'UA-6319827-2';
		window.smartsupp || (function(d) {
			var s, c, o = smartsupp = function() {
				o._.push(arguments)
			};
			o._ = [];
			s = d.getElementsByTagName('script')[0];
			c = d.createElement('script');
			c.type = 'text/javascript';
			c.charset = 'utf-8';
			c.async = true;
			c.src = '//www.smartsuppchat.com/loader.js?';
			s.parentNode.insertBefore(c, s);
		})(document);
	}
</script>

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
</body>

</html>