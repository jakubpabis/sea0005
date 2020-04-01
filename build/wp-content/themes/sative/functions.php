<?php
/**
 * WP Bootstrap Starter functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WP_Bootstrap_Starter
 */

//require_once get_template_directory() . '/inc/jshrink.php';
require_once get_template_directory() . '/inc/htmlcompress.php';

function wp_html_compression_finish($html)
{
    return new WP_HTML_Compression($html);
}

function wp_html_compression_start()
{
    ob_start('wp_html_compression_finish');
}
add_action('get_header', 'wp_html_compression_start');

if ( ! function_exists( 'sative_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function sative_setup() {
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on WP Bootstrap Starter, use a find and replace
	 * to change 'sative' to the name of your theme in all the template files.
	 */
	load_theme_textdomain( 'sative', get_template_directory() . '/languages' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'primary' => esc_html__( 'Primary', 'sative' ),
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'comment-form',
		'comment-list',
		'caption',
	) );

	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );

    function sative_add_editor_styles() {
        add_editor_style( 'custom-editor-style.css' );
    }
    add_action( 'admin_init', 'sative_add_editor_styles' );
}
endif;
add_action( 'after_setup_theme', 'sative_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function sative_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'sative_content_width', 1170 );
}
add_action( 'after_setup_theme', 'sative_content_width', 0 );

show_admin_bar(false);

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function sative_widgets_init() {
    register_sidebar( array(
        'name'          => esc_html__( 'Sidebar', 'sative' ),
        'id'            => 'sidebar-1',
        'description'   => esc_html__( 'Add widgets here.', 'sative' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ) );
    register_sidebar( array(
        'name'          => esc_html__( 'Footer 1', 'sative' ),
        'id'            => 'footer-1',
        'description'   => esc_html__( 'Add widgets here.', 'sative' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ) );
    register_sidebar( array(
        'name'          => esc_html__( 'Footer 2', 'sative' ),
        'id'            => 'footer-2',
        'description'   => esc_html__( 'Add widgets here.', 'sative' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ) );
    register_sidebar( array(
        'name'          => esc_html__( 'Footer 3', 'sative' ),
        'id'            => 'footer-3',
        'description'   => esc_html__( 'Add widgets here.', 'sative' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ) );
}
add_action( 'widgets_init', 'sative_widgets_init' );

//Remove Gutenberg Block Library CSS from loading on the frontend
function smartwp_remove_wp_block_library_css()
{
	wp_dequeue_style( 'wp-block-library' );
	wp_dequeue_style( 'wp-block-library-theme' );
}
add_action( 'wp_enqueue_scripts', 'smartwp_remove_wp_block_library_css' );

add_action('wp_enqueue_scripts', function(){
	if (!is_admin()) {
		wp_deregister_script('jquery');
		wp_deregister_script('wp-embed');
		wp_deregister_script('wp-emoji');
	}
});

remove_action( 'wp_head', 'print_emoji_detection_script', 7 ); 
remove_action( 'admin_print_scripts', 'print_emoji_detection_script' ); 
remove_action( 'wp_print_styles', 'print_emoji_styles' ); 
remove_action( 'admin_print_styles', 'print_emoji_styles' );

/**
 * Enqueue scripts and styles.
 */
function sative_scripts() {
    // load bootstrap css
	wp_enqueue_style( 'sative-bootstrap-css', 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css' );
	wp_enqueue_style( 'sative-gfonts', 'https://fonts.googleapis.com/css?family=Roboto:300,300i,500,500i&display=swap' );

	wp_enqueue_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js', array(), '', false );
	wp_enqueue_script('sative-popper', 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js', array(), '', true );
	wp_enqueue_script('sative-bootstrap', 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js', array(), '', true );
	wp_enqueue_script('sative-app', get_template_directory_uri() . '/assets/js/main.min.js', array(), '', true );
	// Internet Explorer HTML5 support
    wp_enqueue_script( 'html5hiv',get_template_directory_uri().'/inc/assets/js/html5.js', array(), '3.7.0', false );
    wp_script_add_data( 'html5hiv', 'conditional', 'lt IE 9' );
}
add_action( 'wp_enqueue_scripts', 'sative_scripts' );

function sative_password_form() {
    global $post;
    $label = 'pwbox-'.( empty( $post->ID ) ? rand() : $post->ID );
    $o = '<form action="' . esc_url( site_url( 'wp-login.php?action=postpass', 'login_post' ) ) . '" method="post">
    <div class="d-block mb-3">' . __( "To view this protected post, enter the password below:", "sative" ) . '</div>
    <div class="form-group form-inline"><label for="' . $label . '" class="mr-2">' . __( "Password:", "sative" ) . ' </label><input name="post_password" id="' . $label . '" type="password" size="20" maxlength="20" class="form-control mr-2" /> <input type="submit" name="Submit" value="' . esc_attr__( "Submit", "sative" ) . '" class="btn btn-primary"/></div>
    </form>';
    return $o;
}
add_filter( 'the_password_form', 'sative_password_form' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';
/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';
/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';
/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';
/**
 * Load plugin compatibility file.
 */
require get_template_directory() . '/inc/plugin-compatibility/plugin-compatibility.php';
/**
 * Load custom WordPress nav walker.
 */
if ( ! class_exists( 'wp_bootstrap_navwalker' )) {
    require_once(get_template_directory() . '/inc/wp_bootstrap_navwalker.php');
}

 
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
            'name' => _x( 'Categories', 'taxonomy general name' ),
            'singular_name' => _x( 'Category', 'taxonomy singular name' ),
            'search_items' =>  __( 'Search Categories' ),
            'all_items' => __( 'All Categories' ),
            'parent_item' => __( 'Parent Category' ),
            'parent_item_colon' => __( 'Parent Category:' ),
            'edit_item' => __( 'Edit Category' ),
            'update_item' => __( 'Update Category' ),
            'add_new_item' => __( 'Add New Category' ),
            'new_item_name' => __( 'New Category Name' ),
            'menu_name' => __( 'Categories' ),
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


function term_has_parent($termid, $tax){
    $term = get_term($termid, $tax);
    if ($term->parent > 0){
        return $term->parent;
    }
    return false;
}

/**
 * Getting top level job categories and job types
 *
 * @return array
 */
function jobDisplayHelper()
{
    $helper = array(
        'supCatName' => '',
        'type' => '',
    );
    
    $categories = get_the_terms(get_the_ID(), 'job-category');
    if(is_array($categories)) {
        foreach($categories as $category) {
            if($category->parent == 0) {
                $helper['supCatName'] = $category->slug;
                break;
            }
        }
    }

    $types = get_the_terms(get_the_ID(), 'job-type');
    if(is_array($types)) {
        foreach($types as $type) {
            if($type->parent == 0) {
                $helper['type'] = $type->name;
                break;
            }
        }
    }

    return $helper;
}

function add_to_yoast_seo($post_id, $metatitle, $metadesc, $metakeywords)
{
    try {
        
    }
    catch (Exception $e) {
        echo $e->getMessage();
    }
    catch (InvalidArgumentException $e) {
        echo $e->getMessage();
    }
}

function hierarchical_tax_tree( $cat, $tax, $active = [] ) {
    $next = get_categories('taxonomy=' . $tax . '&hide_empty=false&parent=' . $cat);
    if( $next ) :    
        echo '<ul>';
        foreach( $next as $cat ) :
            if(get_query_var('term') == $cat->category_nicename || in_array($cat->term_id, $active)) {
                echo '<li class="active">';
                $checked = 'checked';
            } else {
                echo '<li>';
                $checked = null;
            }
            echo '<a href="' . get_category_link( $cat->term_id ) . '">' . $cat->name . '&nbsp;<small>('. $cat->count . ')</small><i class="far fa-times"></i></a>'; 
            hierarchical_tax_tree( $cat->term_id, $tax, $active = [] );
            echo '</li>';
        endforeach;   
        echo '</ul>'; 
    endif;    
}  


function hierarchical_tax_tree_filter( $cat, $tax, $active) {
    $next = get_categories('taxonomy=' . $tax . '&hide_empty=false&parent=' . $cat);
    if( $next ) :    
        echo '<ul>';
        foreach( $next as $cat ) :
            if($active === null) {
                $active = [];
            }
            if(get_query_var('term') == $cat->category_nicename || in_array($cat->term_id, $active)) {
                echo '<li class="active">';
                $checked = 'checked';
            } else {
                echo '<li>';
                $checked = null;
            }
            echo '<span>' . $cat->name . '&nbsp;<small>('. $cat->count . ')</small><i class="far fa-times"></i><input type="checkbox" ' . $checked . ' name="' . $tax . '[]" value="' . $cat->term_id . '"></span>'; 
            hierarchical_tax_tree_filter( $cat->term_id, $tax, $active);
            echo '</li>';
        endforeach;   
        echo '</ul>'; 
    endif;    
}


// add_action('wp_ajax_myfilter', 'jobs_filter_function'); // wp_ajax_{ACTION HERE} 
// add_action('wp_ajax_nopriv_myfilter', 'jobs_filter_function');
 

function filterHelper($els, $tax)
{
    $arr = $els;
    foreach($arr as $el) {
        if(term_has_parent($el, $tax) !== false) {
            $needle = term_has_parent($el, $tax);
            $stack = array_search($needle, $arr);
            if($stack !== false) {
                array_splice($arr, $stack, 1);
            }
        }
    }
    return $arr;
}

/*
function jobs_filter_function()
{
	$args = array(
		'post_type' => 'jobs',
        'post_status' => 'publish',
        'posts_per_page' => 10,
        'paged' => get_query_var('paged') ? get_query_var('paged') : 1
    );
    
	// for taxonomies / categories
    if( isset( $_POST['job-category'] ) ) {
        
        if(count($_POST['job-category']) > 1) {
            $args['tax_query'] = array(
                'relation' => 'OR',
            );
            foreach(filterHelper($_POST['job-category'], 'job-category') as $termID) {
                $arr = array(
                    'taxonomy' => 'job-category',
                    'field' => 'id',
                    'terms' => $termID,
                );
                array_push($args['tax_query'], $arr);
            }
        } else {
            $args['tax_query'] = array(
                array(
                    'taxonomy' => 'job-category',
                    'field' => 'id',
                    'terms' => $_POST['job-category'],
                )
            );
        }
        //var_dump($args['tax_query']);
    }
 
	// create $args['meta_query'] array if one of the following fields is filled
	if( isset( $_POST['salary_min'] ) && $_POST['salary_min'] || isset( $_POST['salary_max'] ) && $_POST['salary_max'] || isset( $_POST['featured_image'] ) && $_POST['featured_image'] == 'on' )
		$args['meta_query'] = array( 'relation'=>'AND' ); // AND means that all conditions of meta_query should be true
 
	// if both minimum salary and maximum salary are specified we will use BETWEEN comparison
	if( isset( $_POST['salary_min'] ) && $_POST['salary_min'] && isset( $_POST['salary_max'] ) && $_POST['salary_max'] ) {
		$args['meta_query'][] = array(
			'key' => '_salary',
			'value' => array( $_POST['salary_min'], $_POST['salary_max'] ),
			'type' => 'numeric',
			'compare' => 'between'
		);
	} else {
		// if only min salary is set
		if( isset( $_POST['salary_min'] ) && $_POST['salary_min'] )
			$args['meta_query'][] = array(
				'key' => '_salary',
				'value' => $_POST['salary_min'],
				'type' => 'numeric',
				'compare' => '>'
			);
 
		// if only max salary is set
		if( isset( $_POST['salary_max'] ) && $_POST['salary_max'] )
			$args['meta_query'][] = array(
				'key' => '_salary',
				'value' => $_POST['salary_max'],
				'type' => 'numeric',
				'compare' => '<'
			);
	}

	$query = new WP_Query( $args );
	if( $query->have_posts() ) :
		while( $query->have_posts() ): $query->the_post(); $helper = jobDisplayHelper(); ?>
			<article class="card bg-lgrey jobs__list-item">
                <div class="job-title">
                    <?php if(strlen($helper['supCatName']) > 0) : ?>
                        <span class="icon" data-type="<?= $helper['supCatName']; ?>"></span>
                    <?php endif; ?>
                    <h3 class="title"><a href="<?= get_the_permalink(); ?>"><?= get_the_title(); ?></a></h3>
                </div>
                <div class="info">
                    <?php if(get_field('location')): ?>
                    <div class="info__item">
                        <i class="far fa-map-marker-alt"></i>
                        <span class="text-size-medium location"><?= get_field('location'); ?></span>
                    </div>
                    <?php endif; ?>
                    <?php if($helper['type']): ?>
                    <div class="info__item">
                        <i class="far fa-clock"></i>
                        <span class="text-size-medium type"><?= $helper['type']; ?></span>
                    </div>
                    <?php endif; ?>
                    <?php if(get_field('salary_min') || get_field('salary_max')): ?>
                    <div class="info__item">
                        <i class="far fa-euro-sign"></i>
                        <span class="text-size-medium">
                            <number class="salarymin">
                                <?= number_format((int)get_field('salary_min'), 0, ".", "."); ?>
                            </number>
                            <?= get_field('salary_min') && get_field('salary_max') ? '&nbsp;-&nbsp;' : null ?>
                            <number class="salarymax">
                                <?= number_format((int)get_field('salary_max'), 0, ".", "."); ?>
                            </number>
                        </span>
                    </div>
                    <?php endif; ?>
                    <?php if(get_field('industry')): ?>
                    <div class="info__item">
                        <i class="far fa-industry"></i>
                        <span class="text-size-medium industry"></span>
                    </div>
                    <?php endif; ?>
                </div>
                <p class="text-size-small excerpt">
                    <?= get_the_excerpt(); ?>
                </p>
                <a href="<?= get_the_permalink(); ?>" class="btn btn__small navy"><?php pll_e( 'More info' ); ?></a>
            </article>
        <?php endwhile; ?>
        <nav class="pagination">
        <?php 
        $big = 999999999; // need an unlikely integer
        echo paginate_links( array(
            'base' => str_replace( $big, '%#%', get_pagenum_link( $big ) ),
            'format' => '?paged=%#%',
            'current' => max( 1, get_query_var('paged') ),
            'total' => $query->max_num_pages
        ) ); 
        ?>
        </nav>
		<?php wp_reset_postdata();
	else :
		pll_e('No jobs found...');
	endif;
 
	die();
} */


$toTranslate = array(
    'Contact',
    'Get in touch',
    'Share this content',
    'Filter jobs',
    'Categories',
    'Salary range',
    'Location',
    'Industry type',
    'Job type',
    'Hot skills',
    'Open in maps',
    'Filter',
    'open jobs',
    'open job',
    'jobs found',
    'job found',
    'jobs showing',
    'job showing',
    'More info',
    'Read more',
    'Topics',
    'Contact us!',
    'Apply here',
    'Apply with:',
    'Male',
    'Female',
    'Name',
    'Email',
    'Phone',
    'Date of birth',
    'City',
    'CV',
    'Upload',
    'Upload CV',
    'Motivation',
    'Send application',
    'I hereby agree with the',
    'Privacy Policy',
    'Back',
    'Executive search consultant',
    'Show all jobs',
    'No jobs found...',
    'Schedule a call or meeting',
    'Search our knowledge base. We have tons of useful articles for you!',
    'articles found',
    'Enter job title here',
    'Enter job location',
    'Filter by topic',
    'Contact',
    'Recent jobs',
    'Hot skills',
    'Subscribe to our newsletter',
    'Interested in instantly receiving the latest Search X Recruitment jobs within your area of expertise?'
);

foreach($toTranslate as $string) {
    pll_register_string('sative', $string);
}

add_action( 'admin_init', 'my_remove_admin_menus' );
function my_remove_admin_menus() {
    remove_menu_page( 'edit-comments.php' );
}

// add_filter( 'jobs_post_type_args', '_my_rewrite_slug' );
// function _my_rewrite_slug( $args ) 
// {
//     if(pll_current_language() == 'nl') {
//         $args['rewrite']['slug'] = 'vacatures';
//         return $args;
//     }
// }

// function taxonomy_slug_rewrite($wp_rewrite) {
//     $rules = array();
//     // get all custom taxonomies
//     $taxonomies = get_taxonomies(array('_builtin' => false), 'objects');
//     // get all custom post types
//     $post_types = get_post_types(array('public' => true, '_builtin' => false), 'objects');

//     foreach ($post_types as $post_type) {
//         foreach ($taxonomies as $taxonomy) {

//             // go through all post types which this taxonomy is assigned to
//             foreach ($taxonomy->object_type as $object_type) {

//                 // check if taxonomy is registered for this custom type
//                 if ($object_type == $post_type->rewrite['slug']) {

//                     // get category objects
//                     $terms = get_categories(array('type' => $object_type, 'taxonomy' => $taxonomy->name, 'hide_empty' => 0));

//                     // make rules
//                     foreach ($terms as $term) {
//                         $rules[$object_type . '/' . $term->slug . '/?$'] = 'index.php?' . $term->taxonomy . '=' . $term->slug;
//                     }
//                 }
//             }
//         }
//     }
//     // merge with global rules
//     $wp_rewrite->rules = $rules + $wp_rewrite->rules;
// }
// add_filter('generate_rewrite_rules', 'taxonomy_slug_rewrite');


function resources_cpt_generating_rule($wp_rewrite) 
{
    $rules = array();
    $terms = get_terms( array(
        'taxonomy' => 'job-category',
        'hide_empty' => false,
    ) );
    $post_type = 'jobs';
    foreach ($terms as $term) {    
        $rules['vacatures/' . $term->slug . '/([^/]*)$'] = 'index.php?post_type=' . $post_type. '&job-category=$matches[1]&name=$matches[1]';
        $rules['nl/vacatures/' . $term->slug . '/([^/]*)$'] = 'index.php?post_type=' . $post_type. '&job-category=$matches[1]&name=$matches[1]';
        $rules['jobs/' . $term->slug . '/([^/]*)$'] = 'index.php?post_type=' . $post_type. '&job-category=$matches[1]&name=$matches[1]';
        $rules['en/jobs/' . $term->slug . '/([^/]*)$'] = 'index.php?post_type=' . $post_type. '&job-category=$matches[1]&name=$matches[1]';
    }
    // merge with global rules
    $wp_rewrite->rules = $rules + $wp_rewrite->rules;
}
add_filter('generate_rewrite_rules', 'resources_cpt_generating_rule');

function change_link( $permalink, $post ) 
{
    if( $post->post_type == 'jobs' ) {
        $resource_terms = get_the_terms( $post, 'job-category' );
        $term_slug = '';
        if( ! empty( $resource_terms ) ) {
            foreach ( $resource_terms as $term ) {
                // The featured resource will have another category which is the main one
                if( $term->slug == 'featured' ) {
                    continue;
                }
                $term_slug = $term->slug;
                break;
            }
        }
        if(pll_current_language() == 'nl') {
            $permalink = "/nl/vacatures/" . $term_slug . '/' . $post->post_name;
        } else {
            $permalink = "/en/jobs/" . $term_slug . '/' . $post->post_name;
        }
    }
    return $permalink;
}
add_filter('post_type_link', 'change_link', 10, 2);

// function change_link2( $permalink, $post ) 
// {
//     if( is_tax() ) {
//         $resource_terms = get_the_terms( $post, 'job-category' );
//         $term_slug = '';
//         if( ! empty( $resource_terms ) ) {
//             foreach ( $resource_terms as $term ) {
//                 // The featured resource will have another category which is the main one
//                 if( $term->slug == 'featured' ) {
//                     continue;
//                 }
//                 $term_slug = $term->slug;
//                 break;
//             }
//         }
//         if(pll_current_language() == 'nl') {
//             $permalink = "/nl/vacatures/category" . $term_slug;
//         } else {
//             $permalink = "/en/jobs/category" . $term_slug;
//         }
//     }
//     return $permalink;
// }
// add_filter('post_link_category', 'change_link2', 10, 2);

require_once get_template_directory() . '/inc/cronjob.php';