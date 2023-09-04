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
	<!-- Begin http://Werkzoeken.nl tracking code -->
	<script>
	/* <![CDATA[ */
	var conversion_key_wz = "cb4b5c2fe9459552bcbb55bfed624f6a";
	var conversion_key_ict = "";
	var conversion_key_tec = "";
	var conversion_ref_id = "";
	var conversion_candidate_id = "";
	/* ]]> */
	</script>
	<script src="https://click.werkzoeken.nl/conversion/conversion.js"></script>
	<!-- End http://Werkzoeken.nl tracking code -->

	<?php wp_head(); ?>
	<?php
	$google_job = false;
	$xml = simplexml_load_file('https://jobs.searchsoftware.nl/searchit.xml') or die("Error: Cannot create object");
	foreach ($xml->vacancy as $job) {
		if (intval($job->id) === intval(get_field('job_id'))) {
			$google_job = $job;
			break;
		}
	}
	?>
	<?php if ($google_job) : ?>
		<script type="application/ld+json">
			{
				"@context": "https://schema.org/",
				"@type": "JobPosting",
				"title": "<?php echo get_the_title(); ?>",
				"description": "<?php echo get_the_content(); ?>",
				"identifier": {
					"@type": "PropertyValue",
					"name": "SearchXRecruitment",
					<?php
					global $post;
					$post_slug = $post->post_name;
					?> "value": "<?php echo $post_slug; ?>"
				},
				"datePosted": "<?php echo get_the_date('Y-m-d'); ?>",
				<?php
				$date = strtotime($google_job->date_due);
				$valid = date('Y-m-d', $date);
				?> "validThrough": "<?php echo $valid; ?>",
				<?php
				$helper = jobDisplayHelper();
				if ($helper['type']) {
					if ($helper['type'] === 'Fulltime employee') {
						echo '"employmentType" : "FULL_TIME",';
					} elseif ($helper['type'] === 'Parttime employee') {
						echo '"employmentType" : "PART_TIME",';
					} elseif ($helper['type'] === 'Freelance / Interim / Contractor') {
						echo 'employmentType": ["CONTRACTOR", "OTHER"],';
					} elseif ($helper['type'] === 'Intern / Study / Sponsor') {
						echo '"employmentType": ["INTERN", "OTHER"],';
					}
				}
				?> "hiringOrganization": {
					"@type": "Organization",
					"name": "Search X Recruitment",
					"sameAs": "https://www.searchxrecruitment.com/",
					"logo": "https://www.searchxrecruitment.com/wp-content/uploads/2020/12/cubecross512.png"
				},
				"jobLocation": {
					"@type": "Place",
					"address": {
						"@type": "PostalAddress",
						"streetAddress": "<?php echo $google_job->address_street; ?>",
						"addressLocality": "<?php echo $google_job->address_city; ?>",
						"addressRegion": "",
						"postalCode": "<?php echo $google_job->address_zip; ?>",
						"addressCountry": "<?php echo $google_job->address_country == 'The Netherlands' ? 'NL' : $google_job->address_country; ?>"
					}
				},
				"baseSalary": {
					"@type": "MonetaryAmount",
					"currency": "EUR",
					"value": {
						"@type": "QuantitativeValue",
						<?php if (get_field('salary_min') && get_field('salary_max')) : ?>
							<?php echo '"minValue": ' . (int)get_field("salary_min") . ','; ?>
							<?php echo '"maxValue": ' . (int)get_field("salary_max") . ','; ?>
						<?php else : ?>
							<?php echo '"value": ' . (int)get_field("salary_min") . ','; ?>
						<?php endif; ?> "unitText": "<?php echo $google_job->contract_hours; ?>"
					}
				}
			}
		</script>
	<?php endif; ?>
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<script type="text/javascript">
		function setCookie(cname, cvalue, exdays) {
			var d = new Date();
			d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
			var expires = "expires=" + d.toUTCString();
			document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
		}

		function getCookie(cname) {
			var name = cname + "=";
			var decodedCookie = decodeURIComponent(document.cookie);
			var ca = decodedCookie.split(";");
			for (var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == " ") {
					c = c.substring(1);
				}
				if (c.indexOf(name) == 0) {
					return c.substring(name.length, c.length);
				}
			}
			return "";
		}
	</script>
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