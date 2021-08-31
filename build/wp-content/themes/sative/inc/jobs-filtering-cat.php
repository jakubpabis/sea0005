<?php

$the_category = get_queried_object();
var_dump($the_category);

if (isset($_GET['job-title']) && $_GET['job-title']) {
	$search = $_GET['job-title'];
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
		array(
			'taxonomy' => 'job-category',
			'field' => 'term_id',
			'terms' => $the_category->term_id,
			'operator' => 'IN'
		),
	),
	'meta_query' => array(
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
	if (isset($_GET[$taxF]) && !empty($_GET[$taxF]) && $_GET[$taxF] !== null) {
		if (count($_GET[$taxF]) > 1) {
			foreach (filterHelper($_GET[$taxF], $taxF) as $termID) {
				$arr = array(
					'taxonomy' => $taxF,
					'field' => 'slug',
					'terms' => $termID,
				);
				array_push($args['tax_query'], $arr);
			}
		} elseif (count($_GET[$taxF]) > 0) {
			$args['tax_query'][] = array(
				'taxonomy' => $taxF,
				'field' => 'slug',
				'terms' => $_GET[$taxF],
			);
		}
	}
}

if (isset($_GET['salary_min']) && !empty($_GET['salary_min']) && $_GET['salary_min'] !== null) {
	$args['meta_query'][] = array(
		'key' => 'salary_min',
		'value' => $_GET['salary_min'],
		'compare' => '>='
	);
}
if (isset($_GET['salary_max']) && !empty($_GET['salary_max']) && $_GET['salary_max'] !== null) {
	$args['meta_query'][] = array(
		'key' => 'salary_max',
		'value' => $_GET['salary_max'],
		'compare' => '<='
	);
}
if (isset($_GET['location_s']) && !empty($_GET['location_s']) && $_GET['location_s'] !== null) {
	$args['meta_query'][] = array(
		'key' => 'location',
		'value' => $_GET['location_s'],
		'compare' => 'LIKE'
	);
}

//var_dump($args);
$query = new WP_Query($args);
$post_no = $query->found_posts;

$big = 999999999; // need an unlikely integer
$pagination = paginate_links(array(
	'format' => '?paged=%#%',
	'current' => max(1, get_query_var('paged')),
	'total' => $query->max_num_pages,
	'show_all' => false,
	'add_args' => true,
	'next_text' => '<svg height="18" width="34" xmlns="http://www.w3.org/2000/svg"><path d="M25.885.278l7.844 8.051a.947.947 0 01.078.091l-.078-.09a.95.95 0 01.236.412l.006.023A.895.895 0 0134 9l-.006.11-.002.011a.974.974 0 01-.02.114c-.003.007-.004.014-.006.022a.91.91 0 01-.159.323l-.01.013-.068.078-7.844 8.051a.91.91 0 01-1.307 0 .966.966 0 010-1.342l6.265-6.432H.924C.414 9.949 0 9.525 0 9s.414-.949.924-.949h29.92L24.578 1.62a.966.966 0 010-1.342.908.908 0 011.307 0z" fill="#183153"/></svg>',
	'prev_text' => '<svg height="18" width="34" xmlns="http://www.w3.org/2000/svg"><path d="M8.115.278L.271 8.329a.948.948 0 00-.078.091l.078-.09a.95.95 0 00-.236.412l-.006.023A.898.898 0 000 9l.006.11.002.011a.976.976 0 00.02.114c.003.007.004.014.006.022a.911.911 0 00.159.323l.01.013.068.078 7.844 8.051a.91.91 0 001.307 0 .966.966 0 000-1.342L3.157 9.948h29.919c.51 0 .924-.424.924-.948s-.414-.949-.924-.949H3.156L9.422 1.62a.966.966 0 000-1.342.908.908 0 00-1.307 0z" fill="#183153"/></svg>'
));
