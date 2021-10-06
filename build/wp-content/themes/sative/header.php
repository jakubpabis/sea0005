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
<!--[if gt IE 8]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php if (isset($_COOKIE['cookies-accepted']) && $_COOKIE['cookies-accepted'] === 'true' || $_COOKIE['cookies-accepted'] === true) : ?>
		<!-- Google Tag Manager -->
		<script>
			(function(w, d, s, l, i) {
				w[l] = w[l] || [];
				w[l].push({
					'gtm.start': new Date().getTime(),
					event: 'gtm.js'
				});
				var f = d.getElementsByTagName(s)[0],
					j = d.createElement(s),
					dl = l != 'dataLayer' ? '&l=' + l : '';
				j.async = true;
				j.src =
					'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
				f.parentNode.insertBefore(j, f);
			})(window, document, 'script', 'dataLayer', 'GTM-PMG8TTV');
		</script>
		<!-- /Google Tag Manager -->
		<!-- Hotjar Tracking Code for www.searchxrecruitment.com -->
		<script>
			(function(h, o, t, j, a, r) {
				h.hj = h.hj || function() {
					(h.hj.q = h.hj.q || []).push(arguments)
				};
				h._hjSettings = {
					hjid: 467663,
					hjsv: 6
				};
				a = o.getElementsByTagName('head')[0];
				r = o.createElement('script');
				r.async = 1;
				r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
				a.appendChild(r);
			})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
		</script>
	<?php endif; ?>

	<!-- Bing Webmaster Tools -->
	<meta name="msvalidate.01" content="DB26E7D9A02A63952EAC119AC5AB03FC" />
	<!-- /Bing Webmaster Tools -->
	<meta name="p:domain_verify" content="40be4aba9dc0f75fdd75d97b0a233017" />

	<?php wp_head(); ?>
	<link rel="preconnect" href="https://fonts.gstatic.com">
</head>

<body <?php body_class(); ?>>
	<!--[if lt IE 7]>
        <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->
	<?php if (isset($_COOKIE['cookies-accepted']) && $_COOKIE['cookies-accepted'] === true) : ?>
		<!-- Google Tag Manager (noscript) -->
		<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PMG8TTV" height="0" width="0"></iframe></noscript>
		<!-- /Google Tag Manager (noscript) -->
	<?php endif; ?>
	<div id="wrapper">
		<?php get_template_part('template-parts/nav'); ?>
		<?php get_template_part('template-parts/breadcrumbs'); ?>
		<?php get_template_part('template-parts/cookies'); ?>