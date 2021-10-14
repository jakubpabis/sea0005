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

	<!-- Bing Webmaster Tools -->
	<meta name="msvalidate.01" content="DB26E7D9A02A63952EAC119AC5AB03FC" />
	<!-- /Bing Webmaster Tools -->
	<meta name="p:domain_verify" content="40be4aba9dc0f75fdd75d97b0a233017" />

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
</head>

<body <?php body_class(); ?>>
	<!--[if lt IE 7]>
        <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->
	<?php if (isset($_COOKIE["cookies-accepted"]) && $_COOKIE["cookies-accepted"] === "accepted") : ?>
		<!-- Google Tag Manager (noscript) -->
		<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PMG8TTV" height="0" width="0"></iframe></noscript>
		<!-- /Google Tag Manager (noscript) -->
	<?php endif; ?>
	<div id="wrapper">
		<?php get_template_part('template-parts/nav'); ?>
		<?php get_template_part('template-parts/cookies'); ?>