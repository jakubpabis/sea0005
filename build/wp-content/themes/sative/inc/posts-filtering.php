<?php

wp_reset_postdata();

if (pll_current_language() == 'en') :
	$topTerm = 'knowledge';
	$know = get_category_by_slug('knowledge');
else :
	$topTerm = 'kennis';
	$know = get_category_by_slug('kennis');
endif;

if (isset($_GET['k-title']) && $_GET['k-title']) {
	$search = $_GET['k-title'];
} else {
	$search = null;
}

//var_dump($know);

$args = array(
	'post_type' => 'post',
	'post_status' => 'publish',
	'posts_per_page' => 10,
	's' => $search,
	'paged' => get_query_var('paged') ? get_query_var('paged') : 1,
	'tax_query' => array(
		'relation' => 'AND',
		'taxonomy' => 'category',
		'field'    => 'name',
		'terms'    => $topTerm,
	)
);

if (isset($_GET['category'])) {
	$args['tax_query'][] = array(
		'taxonomy' => 'category',
		'field' => 'name',
		'terms' => $_GET['category'],
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
