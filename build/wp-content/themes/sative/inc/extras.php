<?php

/**
 * Custom functions that act independently of the theme templates
 *
 * Eventually, some of the functionality here could be replaced by core features.
 *
 * @package WP_Bootstrap_Starter
 */

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function wp_bootstrap_starter_body_classes($classes)
{
	// Adds a class of group-blog to blogs with more than 1 published author.
	if (is_multi_author()) {
		$classes[] = 'group-blog';
	}

	// Adds a class of hfeed to non-singular pages.
	if (!is_singular()) {
		$classes[] = 'hfeed';
	}

	if (get_theme_mod('theme_option_setting') && get_theme_mod('theme_option_setting') !== 'default') {
		$classes[] = 'theme-preset-active';
	}

	return $classes;
}
add_filter('body_class', 'wp_bootstrap_starter_body_classes');

/**
 * Add a pingback url auto-discovery header for singularly identifiable articles.
 */
function wp_bootstrap_starter_pingback_header()
{
	echo '<link rel="pingback" href="', esc_url(get_bloginfo('pingback_url')), '">';
}
add_action('wp_head', 'wp_bootstrap_starter_pingback_header');


/**
 * Return the header class
 */
function wp_bootstrap_starter_bg_class()
{
	switch (get_theme_mod('theme_option_setting')) {
		case "cerulean":
			return 'navbar-dark bg-primary';
			break;
		case "cosmo":
			return 'navbar-dark bg-primary';
			break;
		case "cyborg":
			return 'navbar-dark bg-dark';
			break;
		case "darkly":
			return 'navbar-dark bg-primary';
			break;
		case "flatly":
			return 'navbar-dark bg-primary';
			break;
		case "journal":
			return 'navbar-light bg-light';
			break;
		case "litera":
			return 'navbar-light bg-light';
			break;
		case "lumen":
			return 'navbar-light bg-light';
			break;
		case "lux":
			return 'navbar-light bg-light';
			break;
		case "materia":
			return 'navbar-dark bg-primary';
			break;
		case "minty":
			return 'navbar-dark bg-primary';
			break;
		case "pulse":
			return 'navbar-dark bg-primary';
			break;
		case "sandstone":
			return 'navbar-dark bg-primary';
			break;
		case "simplex":
			return 'navbar-light bg-light';
			break;
		case "sketchy":
			return 'navbar-light bg-light';
			break;
		case "slate":
			return 'navbar-dark bg-primary';
			break;
		case "solar":
			return 'navbar-dark bg-dark';
			break;
		case "spacelab":
			return 'navbar-light bg-light';
			break;
		case "superhero":
			return 'navbar-dark bg-dark';
			break;
		case "united":
			return 'navbar-dark bg-primary';
			break;
		case "yeti":
			return 'navbar-dark bg-primary';
			break;
		default:
			return 'navbar-light';
	}
}

function is_theme_preset_active()
{
	if (get_theme_mod('theme_option_setting') && get_theme_mod('theme_option_setting') !== 'default') {
		return true;
	}
}

function jobs_ajax_filtering()
{
	if (isset($_POST['"job-title"']) && $_POST['"job-title"']) {
		$search = $_POST['"job-title"'];
	} else {
		$search = null;
	}

	$args = array(
		'post_type' => 'jobs',
		'post_status' => 'publish',
		'posts_per_page' => 10,
		'paged' => get_query_var('paged') ? get_query_var('paged') : 1,
		's' => $search,
		'tax_query' => array(
			'relation' => 'AND',
		),
		'meta_query'    => array(
			'relation' => 'AND',
		)
	);
	$taxonomyFilters = array(
		'job-category',
		'job-location',
		'job-industry',
		'job-type',
	);

	// for taxonomies
	foreach ($taxonomyFilters as $taxF) {
		if (isset($_POST['"' . $taxF . '"']) && !empty($_POST['"' . $taxF . '"']) && $_POST['"' . $taxF . '"'] !== null) {
			if (count($_POST['"' . $taxF . '"']) > 1) {
				foreach (filterHelper($_POST['"' . $taxF . '"'], $taxF) as $termID) {
					$arr = array(
						'taxonomy' => $taxF,
						'field' => 'slug',
						'terms' => $termID,
					);
					array_push($args['tax_query'], $arr);
				}
			} else if (count($_POST['"' . $taxF . '"']) > 0) {
				$args['tax_query'][] = array(
					'taxonomy' => $taxF,
					'field' => 'slug',
					'terms' => $_POST['"' . $taxF . '"'],
				);
			}
		}
	}

	if (isset($_POST['"salary_min"']) && !empty($_POST['"salary_min"']) && $_POST['"salary_min"'] !== null) {
		$args['meta_query'][] = array(
			'key' => 'salary_min',
			'value' => $_POST['"salary_min"'],
			'compare' => '>='
		);
	}
	if (isset($_POST['"salary_max"']) && !empty($_POST['"salary_max"']) && $_POST['"salary_max"'] !== null) {
		$args['meta_query'][] = array(
			'key' => 'salary_max',
			'value' => $_POST['"salary_max"'],
			'compare' => '<='
		);
	}
	if (isset($_POST['"location_s"']) && !empty($_POST['"location_s"']) && $_POST['"location_s"'] !== null) {
		$args['meta_query'][] = array(
			'key' => 'location',
			'value' => $_POST['"location_s"'],
			'compare' => 'LIKE'
		);
	}

	$query = new WP_Query($args);
	$post_no = $query->found_posts;

	if (isset($_POST["params"]) && $_POST["params"]) {
		$paginationParams = '&' . $_POST["params"];
	} else {
		$paginationParams = '';
	}

	$pagination = paginate_links(array(
		'base' => '%_%',
		'format' => '?paged=%#%' . $paginationParams,
		'current' => max(1, get_query_var('paged')),
		'total' => $query->max_num_pages,
		'show_all' => false,
		'add_args' => true,
		'next_text' => '<svg height="18" width="34" xmlns="http://www.w3.org/2000/svg"><path d="M25.885.278l7.844 8.051a.947.947 0 01.078.091l-.078-.09a.95.95 0 01.236.412l.006.023A.895.895 0 0134 9l-.006.11-.002.011a.974.974 0 01-.02.114c-.003.007-.004.014-.006.022a.91.91 0 01-.159.323l-.01.013-.068.078-7.844 8.051a.91.91 0 01-1.307 0 .966.966 0 010-1.342l6.265-6.432H.924C.414 9.949 0 9.525 0 9s.414-.949.924-.949h29.92L24.578 1.62a.966.966 0 010-1.342.908.908 0 011.307 0z" fill="#183153"/></svg>',
		'prev_text' => '<svg height="18" width="34" xmlns="http://www.w3.org/2000/svg"><path d="M8.115.278L.271 8.329a.948.948 0 00-.078.091l.078-.09a.95.95 0 00-.236.412l-.006.023A.898.898 0 000 9l.006.11.002.011a.976.976 0 00.02.114c.003.007.004.014.006.022a.911.911 0 00.159.323l.01.013.068.078 7.844 8.051a.91.91 0 001.307 0 .966.966 0 000-1.342L3.157 9.948h29.919c.51 0 .924-.424.924-.948s-.414-.949-.924-.949H3.156L9.422 1.62a.966.966 0 000-1.342.908.908 0 00-1.307 0z" fill="#183153"/></svg>'
	));

	$response = '';

	if ($query->have_posts()) {
		ob_start();
		$response .= include $_SERVER['DOCUMENT_ROOT'] . '/wp-content/themes/sative/template-parts/ajax/jobs-list-open.php';
		while ($query->have_posts()) : $query->the_post();
			$response .= include $_SERVER['DOCUMENT_ROOT'] . '/wp-content/themes/sative/template-parts/ajax/jobs-list.php';
		endwhile;
		$response .= include $_SERVER['DOCUMENT_ROOT'] . '/wp-content/themes/sative/template-parts/ajax/jobs-list-close.php';
		$output = ob_get_contents();
		ob_end_clean();
	} else {
		echo __('No products found');
	}

	$result = [
		'total' => $post_no,
		'html' => $output,
		'pagination' => $pagination
	];

	echo json_encode($result);
	wp_reset_postdata();
	exit;
}
add_action('wp_ajax_jobs_ajax_filtering', 'jobs_ajax_filtering');
add_action('wp_ajax_nopriv_jobs_ajax_filtering', 'jobs_ajax_filtering');

function post_ajax_filtering()
{
	if (isset($_POST['"k-title"']) && $_POST['"k-title"']) {
		$search = $_POST['"k-title"'];
	} else {
		$search = null;
	}

	$args = array(
		'post_type' => 'post',
		'post_status' => 'publish',
		'posts_per_page' => 10,
		'paged' => get_query_var('paged') ? get_query_var('paged') : 1,
		's' => $search
	);

	if (isset($_GET['category'])) {
		$catArr = [];
		foreach ($_GET['category'] as $cat) {
			$catArr[] = get_category_by_slug($cat)->term_id;
		}
		$args['category__and'] = $catArr;
	}

	$query = new WP_Query($args);
	$post_no = $query->found_posts;

	if (isset($_POST["params"]) && $_POST["params"]) {
		$paginationParams = '&' . $_POST["params"];
	} else {
		$paginationParams = '';
	}

	$pagination = paginate_links(array(
		'base' => '%_%',
		'format' => '?paged=%#%' . $paginationParams,
		'current' => max(1, get_query_var('paged')),
		'total' => $query->max_num_pages,
		'show_all' => false,
		'add_args' => true,
		'next_text' => '<svg height="18" width="34" xmlns="http://www.w3.org/2000/svg"><path d="M25.885.278l7.844 8.051a.947.947 0 01.078.091l-.078-.09a.95.95 0 01.236.412l.006.023A.895.895 0 0134 9l-.006.11-.002.011a.974.974 0 01-.02.114c-.003.007-.004.014-.006.022a.91.91 0 01-.159.323l-.01.013-.068.078-7.844 8.051a.91.91 0 01-1.307 0 .966.966 0 010-1.342l6.265-6.432H.924C.414 9.949 0 9.525 0 9s.414-.949.924-.949h29.92L24.578 1.62a.966.966 0 010-1.342.908.908 0 011.307 0z" fill="#183153"/></svg>',
		'prev_text' => '<svg height="18" width="34" xmlns="http://www.w3.org/2000/svg"><path d="M8.115.278L.271 8.329a.948.948 0 00-.078.091l.078-.09a.95.95 0 00-.236.412l-.006.023A.898.898 0 000 9l.006.11.002.011a.976.976 0 00.02.114c.003.007.004.014.006.022a.911.911 0 00.159.323l.01.013.068.078 7.844 8.051a.91.91 0 001.307 0 .966.966 0 000-1.342L3.157 9.948h29.919c.51 0 .924-.424.924-.948s-.414-.949-.924-.949H3.156L9.422 1.62a.966.966 0 000-1.342.908.908 0 00-1.307 0z" fill="#183153"/></svg>'
	));

	$response = '';

	if ($query->have_posts()) {
		ob_start();
		$response .= include $_SERVER['DOCUMENT_ROOT'] . '/wp-content/themes/sative/template-parts/ajax/post-list-open.php';
		while ($query->have_posts()) : $query->the_post();
			$response .= include $_SERVER['DOCUMENT_ROOT'] . '/wp-content/themes/sative/template-parts/ajax/post-list.php';
		endwhile;
		$response .= include $_SERVER['DOCUMENT_ROOT'] . '/wp-content/themes/sative/template-parts/ajax/post-list-close.php';
		$output = ob_get_contents();
		ob_end_clean();
	} else {
		echo __('No products found');
	}

	$result = [
		'total' => $post_no,
		'html' => $output,
		'pagination' => $pagination
	];

	echo json_encode($result);
	wp_reset_postdata();
	exit;
}
add_action('wp_ajax_post_ajax_filtering', 'post_ajax_filtering');
add_action('wp_ajax_nopriv_post_ajax_filtering', 'post_ajax_filtering');
