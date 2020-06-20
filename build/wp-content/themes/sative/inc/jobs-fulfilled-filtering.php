<?php

if( isset($_GET['job-title']) && $_GET['job-title'] ) {
    $search = $_GET['job-title'];
} else {
    $search = null;
}

$args = array( 
    'post_type' => 'jobs-fulfilled',
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
foreach($taxonomyFilters as $taxF) {
    if( isset( $_GET[$taxF] ) ) {
        if(count($_GET[$taxF]) > 1) {
            foreach(filterHelper($_GET[$taxF], $taxF) as $termID) {
                $arr = array(
                    'taxonomy' => $taxF,
                    'field' => 'slug',
                    'terms' => $termID,
                );
                array_push($args['tax_query'], $arr);
            }
        } else {
            $args['tax_query'][] = array(
                'taxonomy' => $taxF,
                'field' => 'slug',
                'terms' => $_GET[$taxF],
            );
        }
    }
}

if( isset( $_GET['salary_min'] ) ) {
    $args['meta_query'][] = array(
        'key' => 'salary_min', 
        'value' => $_GET['salary_min'], 
        'compare' => '>='
    );
}
if( isset( $_GET['salary_max'] ) ) {
    $args['meta_query'][] = array(
        'key' => 'salary_max', 
        'value' => $_GET['salary_max'], 
        'compare' => '<='
    );
}
if( isset( $_GET['location_s'] ) ) {
    $args['meta_query'][] = array(
        'key' => 'location', 
        'value' => $_GET['location_s'], 
        'compare' => 'LIKE'
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