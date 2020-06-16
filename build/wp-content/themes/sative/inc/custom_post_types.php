<?php

 
function custom_post_type_jobs() 
{
 
// Set UI labels for Custom Post Type
$labels = array(
    'name'                => _x( 'Jobs', 'Post Type General Name', 'sative' ),
    'singular_name'       => _x( 'Job', 'Post Type Singular Name', 'sative' ),
    'menu_name'           => __( 'Jobs', 'sative' ),
    'parent_item_colon'   => __( 'Parent Job', 'sative' ),
    'all_items'           => __( 'All Jobs', 'sative' ),
    'view_item'           => __( 'View Job', 'sative' ),
    'add_new_item'        => __( 'Add New Job', 'sative' ),
    'add_new'             => __( 'Add New', 'sative' ),
    'edit_item'           => __( 'Edit Job', 'sative' ),
    'update_item'         => __( 'Update Job', 'sative' ),
    'search_items'        => __( 'Search Job', 'sative' ),
    'not_found'           => __( 'Not Found', 'sative' ),
    'not_found_in_trash'  => __( 'Not found in Trash', 'sative' ),
);
    
// Set other options for Custom Post Type
$args = array(
    'label'               => __( 'jobs', 'sative' ),
    'description'         => __( 'Jobs', 'sative' ),
    'labels'              => $labels,
    // Features this CPT supports in Post Editor
    'supports'            => array( 'title', 'editor', 'revisions', 'custom-fields' ),
    // You can associate this CPT with a taxonomy or custom taxonomy. 
    'taxonomies'          => array( 'job-category', 'job-type', 'job-location' ),
    /* A hierarchical CPT is like Pages and can have
    * Parent and child items. A non-hierarchical CPT
    * is like Posts.
    */ 
    'hierarchical'        => false,
    'query_var'           => true,
    'public'              => true,
    'show_ui'             => true,
    'show_in_menu'        => true,
    'show_in_nav_menus'   => true,
    'show_in_admin_bar'   => true,
    'menu_position'       => 1,
    'menu_icon'           => 'dashicons-media-document',
    'can_export'          => true,
    'has_archive'         => true,
    'exclude_from_search' => false,
    'publicly_queryable'  => true,
    'capability_type'     => 'post',
);   
// Registering your Custom Post Type
register_post_type( 'jobs', $args );
}
/* Hook into the 'init' action so that the function
* Containing our post type registration is not 
* unnecessarily executed. 
*/
add_action( 'init', 'custom_post_type_jobs', 25 );




function custom_post_type_jobs_fulfilled() 
{
 
// Set UI labels for Custom Post Type
$labels = array(
    'name'                => _x( 'Fulfilled Jobs', 'Post Type General Name', 'sative' ),
    'singular_name'       => _x( 'Fulfilled Job', 'Post Type Singular Name', 'sative' ),
    'menu_name'           => __( 'Fulfilled Jobs', 'sative' ),
    'parent_item_colon'   => __( 'Parent Fulfilled Job', 'sative' ),
    'all_items'           => __( 'All Fulfilled Jobs', 'sative' ),
    'view_item'           => __( 'View Fulfilled Job', 'sative' ),
    'add_new_item'        => __( 'Add New Fulfilled Job', 'sative' ),
    'add_new'             => __( 'Add New', 'sative' ),
    'edit_item'           => __( 'Edit Fulfilled Job', 'sative' ),
    'update_item'         => __( 'Update Fulfilled Job', 'sative' ),
    'search_items'        => __( 'Search Fulfilled Job', 'sative' ),
    'not_found'           => __( 'Not Found', 'sative' ),
    'not_found_in_trash'  => __( 'Not found in Trash', 'sative' ),
);
    
// Set other options for Custom Post Type
$args = array(
    'label'               => __( 'jobs-fulfilled', 'sative' ),
    'description'         => __( 'Jobs Fulfilled', 'sative' ),
    'labels'              => $labels,
    // Features this CPT supports in Post Editor
    'supports'            => array( 'title', 'editor', 'revisions', 'custom-fields' ),
    // You can associate this CPT with a taxonomy or custom taxonomy. 
    'taxonomies'          => array(),
    /* A hierarchical CPT is like Pages and can have
    * Parent and child items. A non-hierarchical CPT
    * is like Posts.
    */ 
    'hierarchical'        => false,
    'query_var'           => true,
    'public'              => true,
    'show_ui'             => true,
    'show_in_menu'        => true,
    'show_in_nav_menus'   => true,
    'show_in_admin_bar'   => true,
    'menu_position'       => 1,
    'menu_icon'           => 'dashicons-media-document',
    'can_export'          => true,
    'has_archive'         => true,
    'exclude_from_search' => true,
    'publicly_queryable'  => true,
    'capability_type'     => 'post',
);   
// Registering your Custom Post Type
register_post_type( 'jobs-fulfilled', $args );
}
/* Hook into the 'init' action so that the function
* Containing our post type registration is not 
* unnecessarily executed. 
*/
add_action( 'init', 'custom_post_type_jobs_fulfilled', 25 );


/**
 * Add job category taxonomies
 *
 * Additional custom taxonomies can be defined here
 * http://codex.wordpress.org/Function_Reference/register_taxonomy
 */
function add_job_category_taxonomies() 
{
    // Hierarchical taxonomy (like categories)
    register_taxonomy('job-category', 'jobs', 
        array(
            'hierarchical' => true,
            // This array of options controls the labels displayed in the WordPress Admin UI
            'labels' => array(
            'name' => _x( 'Categories', 'taxonomy general name', 'sative' ),
            'singular_name' => _x( 'Category', 'taxonomy singular name', 'sative' ),
            'search_items' =>  __( 'Search Categories', 'sative' ),
            'all_items' => __( 'All Categories', 'sative' ),
            'parent_item' => __( 'Parent Category', 'sative' ),
            'parent_item_colon' => __( 'Parent Category:', 'sative' ),
            'edit_item' => __( 'Edit Category', 'sative' ),
            'update_item' => __( 'Update Category', 'sative' ),
            'add_new_item' => __( 'Add New Category', 'sative' ),
            'new_item_name' => __( 'New Category Name', 'sative' ),
            'menu_name' => __( 'Categories', 'sative' ),
        ),
        // Control the slugs used for this taxonomy
        'rewrite' => array(
            'slug' => 'jobs/category', // This controls the base slug that will display before each term
            'with_front' => true, // Don't display the category base before "/locations/"
            'hierarchical' => true // This will allow URL's like "/locations/boston/cambridge/"
        ),
        'query_var'    => true,
        'hierarchical' => true,
        'has_archive' => true
    ));
}
add_action( 'init', 'add_job_category_taxonomies', 10 );


/**
 * Add job type taxonomies
 *
 * Additional custom taxonomies can be defined here
 * http://codex.wordpress.org/Function_Reference/register_taxonomy
 */
function add_job_type_taxonomies() 
{
    // Add new "Locations" taxonomy to Posts
    // Hierarchical taxonomy (like categories)
    register_taxonomy('job-type', 'jobs', 
        array(
            'hierarchical' => true,
            // This array of options controls the labels displayed in the WordPress Admin UI
            'labels' => array(
            'name' => _x( 'Types', 'taxonomy general name' ),
            'singular_name' => _x( 'Type', 'taxonomy singular name' ),
            'search_items' =>  __( 'Search Types' ),
            'all_items' => __( 'All Types' ),
            'parent_item' => __( 'Parent Type' ),
            'parent_item_colon' => __( 'Parent Type:' ),
            'edit_item' => __( 'Edit Type' ),
            'update_item' => __( 'Update Type' ),
            'add_new_item' => __( 'Add New Type' ),
            'new_item_name' => __( 'New Type Name' ),
            'menu_name' => __( 'Types' ),
        ),
        // Control the slugs used for this taxonomy
        'rewrite' => array(
            'slug' => 'jobs/type', // This controls the base slug that will display before each term
            'with_front' => true, // Don't display the category base before "/locations/"
            'hierarchical' => true // This will allow URL's like "/locations/boston/cambridge/"
        ),
        'query_var'    => true,
        'hierarchical' => true,
        'has_archive' => true
    ));
}
add_action( 'init', 'add_job_type_taxonomies', 10 );

function add_job_location_taxonomies() 
{
    // Add new "Locations" taxonomy to Posts
    // Hierarchical taxonomy (like categories)
    register_taxonomy('job-location', 'jobs', 
        array(
            'hierarchical' => true,
            // This array of options controls the labels displayed in the WordPress Admin UI
            'labels' => array(
            'name' => _x( 'Locations', 'taxonomy general name' ),
            'singular_name' => _x( 'Location', 'taxonomy singular name' ),
            'search_items' =>  __( 'Search Locations' ),
            'all_items' => __( 'All Locations' ),
            'parent_item' => __( 'Parent Location' ),
            'parent_item_colon' => __( 'Parent Location:' ),
            'edit_item' => __( 'Edit Location' ),
            'update_item' => __( 'Update Location' ),
            'add_new_item' => __( 'Add New Location' ),
            'new_item_name' => __( 'New Location Name' ),
            'menu_name' => __( 'Locations' ),
        ),
        // Control the slugs used for this taxonomy
        'rewrite' => array(
            'slug' => 'jobs/location', // This controls the base slug that will display before each term
            'with_front' => true, // Don't display the category base before "/locations/"
            'hierarchical' => true // This will allow URL's like "/locations/boston/cambridge/"
        ),
        'query_var'    => true,
        'hierarchical' => true,
        'has_archive' => true
    ));
}
add_action( 'init', 'add_job_location_taxonomies', 10 );

/**
 * Add job industry taxonomies
 *
 * Additional custom taxonomies can be defined here
 * http://codex.wordpress.org/Function_Reference/register_taxonomy
 */
function add_job_industry_taxonomies() 
{
    // Add new "Industry" taxonomy to Posts
    // Hierarchical taxonomy (like categories)
    register_taxonomy('job-industry', 'jobs', 
        array(
            'hierarchical' => true,
            // This array of options controls the labels displayed in the WordPress Admin UI
            'labels' => array(
            'name' => _x( 'Industries', 'taxonomy general name' ),
            'singular_name' => _x( 'Industry', 'taxonomy singular name' ),
            'search_items' =>  __( 'Search Industries' ),
            'all_items' => __( 'All Industries' ),
            'parent_item' => __( 'Parent Industry' ),
            'parent_item_colon' => __( 'Parent Industry:' ),
            'edit_item' => __( 'Edit Industry' ),
            'update_item' => __( 'Update Industry' ),
            'add_new_item' => __( 'Add New Industry' ),
            'new_item_name' => __( 'New Industry Name' ),
            'menu_name' => __( 'Industries' ),
        ),
        // Control the slugs used for this taxonomy
        'rewrite' => array(
            'slug' => 'jobs/industry', // This controls the base slug that will display before each term
            'with_front' => true, // Don't display the category base before "/locations/"
            'hierarchical' => true // This will allow URL's like "/locations/boston/cambridge/"
        ),
        'query_var'    => true,
        'hierarchical' => true,
        'has_archive' => true
    ));
}
add_action( 'init', 'add_job_industry_taxonomies', 10 );

function custom_post_type_team() 
{
 
// Set UI labels for Custom Post Type
$labels = array(
    'name'                => _x( 'Team', 'Post Type General Name', 'sative' ),
    'singular_name'       => _x( 'Team', 'Post Type Singular Name', 'sative' ),
    'menu_name'           => __( 'Team', 'sative' ),
    'parent_item_colon'   => __( 'Parent Team', 'sative' ),
    'all_items'           => __( 'All Team', 'sative' ),
    'view_item'           => __( 'View Team', 'sative' ),
    'add_new_item'        => __( 'Add New Team', 'sative' ),
    'add_new'             => __( 'Add New', 'sative' ),
    'edit_item'           => __( 'Edit Team', 'sative' ),
    'update_item'         => __( 'Update Team', 'sative' ),
    'search_items'        => __( 'Search Team', 'sative' ),
    'not_found'           => __( 'Not Found', 'sative' ),
    'not_found_in_trash'  => __( 'Not found in Trash', 'sative' ),
);
    
// Set other options for Custom Post Type
$args = array(
    'label'               => __( 'team', 'sative' ),
    'description'         => __( 'Team', 'sative' ),
    'labels'              => $labels,
    // Features this CPT supports in Post Editor
    'supports'            => array( 'title', 'editor', 'custom-fields', 'thumbnail' ),
    // You can associate this CPT with a taxonomy or custom taxonomy. 
    'taxonomies'          => array(),
    /* A hierarchical CPT is like Pages and can have
    * Parent and child items. A non-hierarchical CPT
    * is like Posts.
    */ 
    'hierarchical'        => false,
    'public'              => true,
    'show_ui'             => true,
    'show_in_menu'        => true,
    'show_in_nav_menus'   => true,
    'show_in_admin_bar'   => true,
    'menu_position'       => 20,
    'menu_icon'           => 'dashicons-groups',
    'can_export'          => true,
    'has_archive'         => false,
    'exclude_from_search' => true,
    'publicly_queryable'  => true,
    'capability_type'     => 'post',
);   
// Registering your Custom Post Type
register_post_type( 'team', $args );
}
/* Hook into the 'init' action so that the function
* Containing our post type registration is not 
* unnecessarily executed. 
*/
add_action( 'init', 'custom_post_type_team', 0 );

function custom_post_type_testimonials() 
{
 
// Set UI labels for Custom Post Type
$labels = array(
    'name'                => _x( 'Testimonials', 'Post Type General Name', 'sative' ),
    'singular_name'       => _x( 'Testimonial', 'Post Type Singular Name', 'sative' ),
    'menu_name'           => __( 'Testimonials', 'sative' ),
    'parent_item_colon'   => __( 'Parent Testimonial', 'sative' ),
    'all_items'           => __( 'All Testimonials', 'sative' ),
    'view_item'           => __( 'View Testimonials', 'sative' ),
    'add_new_item'        => __( 'Add New Testimonial', 'sative' ),
    'add_new'             => __( 'Add New', 'sative' ),
    'edit_item'           => __( 'Edit Testimonial', 'sative' ),
    'update_item'         => __( 'Update Testimonial', 'sative' ),
    'search_items'        => __( 'Search Testimonials', 'sative' ),
    'not_found'           => __( 'Not Found', 'sative' ),
    'not_found_in_trash'  => __( 'Not found in Trash', 'sative' ),
);
    
// Set other options for Custom Post Type
$args = array(
    'label'               => __( 'testimonials', 'sative' ),
    'description'         => __( 'Testimonials', 'sative' ),
    'labels'              => $labels,
    // Features this CPT supports in Post Editor
    'supports'            => array( 'title', 'editor', 'custom-fields', 'thumbnail' ),
    // You can associate this CPT with a taxonomy or custom taxonomy. 
    'taxonomies'          => array(),
    /* A hierarchical CPT is like Pages and can have
    * Parent and child items. A non-hierarchical CPT
    * is like Posts.
    */ 
    'hierarchical'        => false,
    'public'              => true,
    'show_ui'             => true,
    'show_in_menu'        => true,
    'show_in_nav_menus'   => true,
    'show_in_admin_bar'   => true,
    'menu_position'       => 25,
    'menu_icon'           => 'dashicons-format-chat',
    'can_export'          => true,
    'has_archive'         => false,
    'exclude_from_search' => true,
    'publicly_queryable'  => true,
    'capability_type'     => 'post',
);   
// Registering your Custom Post Type
register_post_type( 'testimonials', $args );
}
/* Hook into the 'init' action so that the function
* Containing our post type registration is not 
* unnecessarily executed. 
*/

/**
 * Add job category taxonomies
 *
 * Additional custom taxonomies can be defined here
 * http://codex.wordpress.org/Function_Reference/register_taxonomy
 */
function add_testimonial_taxonomies() 
{
    // Hierarchical taxonomy (like categories)
    register_taxonomy('testimonial-type', 'testimonials', 
        array(
            'hierarchical' => true,
            // This array of options controls the labels displayed in the WordPress Admin UI
            'labels' => array(
            'name' => _x( 'Testimonial types', 'taxonomy general name' ),
            'singular_name' => _x( 'Testimonial type', 'taxonomy singular name' ),
            'search_items' =>  __( 'Search Testimonial types' ),
            'all_items' => __( 'All Testimonial types' ),
            'parent_item' => __( 'Parent Testimonial type' ),
            'parent_item_colon' => __( 'Parent Testimonial type:' ),
            'edit_item' => __( 'Edit Testimonial type' ),
            'update_item' => __( 'Update Testimonial type' ),
            'add_new_item' => __( 'Add New Testimonial type' ),
            'new_item_name' => __( 'New Testimonial type Name' ),
            'menu_name' => __( 'Testimonial types' ),
        ),
        // Control the slugs used for this taxonomy
        'rewrite' => array(
            'slug' => 'testimonial-type', // This controls the base slug that will display before each term
            'with_front' => false, // Don't display the category base before "/locations/"
            'hierarchical' => false // This will allow URL's like "/locations/boston/cambridge/"
        ),
    ));
}
add_action( 'init', 'add_testimonial_taxonomies', 0 );
add_action( 'init', 'custom_post_type_testimonials', 0 );