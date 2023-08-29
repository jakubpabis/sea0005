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
	<?php get_template_part('template-parts/cookies-js'); ?>

	<!-- Some other, additional tracking code from Carine -->
	<script>
		(function(ss, ex) {
			window.ldfdr = window.ldfdr || function() {
				(ldfdr._q = ldfdr._q || []).push([].slice.call(arguments));
			};
			(function(d, s) {
				fs = d.getElementsByTagName(s)[0];

				function ce(src) {
					var cs = d.createElement(s);
					cs.src = src;
					cs.async = 1;
					fs.parentNode.insertBefore(cs, fs);
				};
				ce('https://sc.lfeeder.com/lftracker_v1_' + ss + (ex ? '_' + ex : '') + '.js');
			})(document, 'script');
		})('lYNOR8xYebO7WQJZ');
	</script>
	<!-- SalesFeed tracking code -->
	<script type="text/javascript" async src="https://searchxrecruitment.stackbase.nl/"></script>
	<!-- Leadinfo tracking code -->
	<script>
		(function(l, e, a, d, i, n, f, o) {
			if (!l[i]) {
				l.GlobalLeadinfoNamespace = l.GlobalLeadinfoNamespace || [];
				l.GlobalLeadinfoNamespace.push(i);
				l[i] = function() {
					(l[i].q = l[i].q || []).push(arguments)
				};
				l[i].t = l[i].t || n;
				l[i].q = l[i].q || [];
				o = e.createElement(a);
				f = e.getElementsByTagName(a)[0];
				o.async = 1;
				o.src = d;
				f.parentNode.insertBefore(o, f);
			}
		}(window, document, "script", "https://cdn.leadinfo.net/ping.js", "leadinfo", "LI-646B3FAFB71E7"));
	</script>
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
	<!-- Google Tag Manager (noscript) -->
	<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PMG8TTV" height="0" width="0"></iframe></noscript>
	<!-- /Google Tag Manager (noscript) -->
	<div id="wrapper">
		<?php get_template_part('template-parts/nav'); ?>
		<?php get_template_part('template-parts/breadcrumbs'); ?>