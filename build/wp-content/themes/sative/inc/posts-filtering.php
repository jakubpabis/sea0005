<?php

wp_reset_postdata();

if(pll_current_language() == 'en'): 
    $topTerm = 'knowledge';
    $know = get_category_by_slug('knowledge'); 
else:
    $topTerm = 'kennis';
    $know = get_category_by_slug('kennis'); 
endif;

if( isset($_GET['k-title']) && $_GET['k-title'] ) {
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

if( isset( $_GET['category'] ) ) {
    $args['tax_query'][] = array(
        'taxonomy' => 'category',
        'field' => 'id',
        'terms' => $_GET['category'],
    );
}

//var_dump($args);

$query = new WP_Query( $args );
$post_no = $query->found_posts;

$big = 999999999; // need an unlikely integer
$pagination = paginate_links( array(
    'format' => '?paged=%#%',
    'current' => max( 1, get_query_var('paged') ),
    'total' => $query->max_num_pages,
    'show_all' => true,
    'add_args' => false,
) ); 