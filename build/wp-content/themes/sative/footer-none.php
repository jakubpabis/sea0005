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

<!-- LinkedIn Insight Tag -->
<script type="text/javascript">
	_linkedin_partner_id = "14266";
	window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
	window._linkedin_data_partner_ids.push(_linkedin_partner_id);
</script>
<script type="text/javascript">
	(function() {
		var s = document.getElementsByTagName("script")[0];
		var b = document.createElement("script");
		b.type = "text/javascript";
		b.async = true;
		b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
		s.parentNode.insertBefore(b, s);
	})();
</script>

<noscript> <img height="1" width="1" alt="" src="https://px.ads.linkedin.com/collect/?pid=14266&fmt=gif" /> </noscript>

<!-- Start of HubSpot Embed Code -->
<script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/1932066.js"></script>
<!-- End of HubSpot Embed Code -->
</body>

</html>