<?php

/**
 * Adding/updating jobs from XML
 *
 * @return void
 */
function xmlRead()
{
    $postsArr = jobList();
    $job_ids = array();
    $xml = simplexml_load_file('https://jobs.searchsoftware.nl/searchit.xml') or die("Error: Cannot create object");

    foreach($xml->vacancy as $job) {

        array_push($job_ids, $job->id);

        $date = date("Y-m-d H:i:s", strtotime($job->publish_date));

        if(!empty($job->url_title)) {
            $slug = strval($job->url_title);
        } else {
            $slug = slugify( $job->title.'-'.$job->id );
        }

        if(!empty($job->salary_fixed)){
            $salary_min = preg_replace("/\./", "", $job->salary_fixed);
        } else {
            $salary_min = 0;
        }
        if(!empty($job->salary_bonus)){
            $salary_max = preg_replace("/\./", "", $job->salary_bonus);
        } else {
            $salary_max = 0;
        }

        if($job->meta) {
            $meta_title = strval($job->meta);
        } else {
            $meta_title = null;
        }
        if($job->custom_apply_text) {
            $meta_keywords = strval($job->custom_apply_text);
        } else {
            $meta_keywords = null;
        }
        if($job->custom_callback_button) {
            $meta_description = strval($job->custom_callback_button);
        } else {
            $meta_description = null;
        }

        if($job->contact_first_name && $job->contact_last_name) {
            $recruiter = strval($job->contact_first_name).' '.strval($job->contact_last_name);
        } else if($job->contact) {
            $recruiter = strval($job->contact);
        }

        if($recruiter) {
            $recruiter_related = get_page_by_title($recruiter, OBJECT, 'team');
        }

        $job_categories = $job->categories->category;

        $jobArray = array(
            'post_type'     => 'jobs',
            'post_status'   => 'publish',
            'post_title'    => $job->title,
            'post_content'  => $job->description,
            'post_date'     => $date,
            'post_modified' => $date,
            'post_name'     => $slug,
        );

        if( in_array( $slug, $postsArr ) ) {
            //var_dump('check');
            wp_reset_query();
            $args = array(
                'name'        => $slug,
                'post_type'   => 'jobs',
                'post_status' => 'publish',
                'numberposts' => 1
            );
            $my_posts = get_posts($args);
            if( $my_posts ) {
                $postDate = $my_posts[0]->post_date;
                $postID = $my_posts[0]->ID;
            }

            if( isset( $_GET['force'] ) ) {
                $force = true;
            } else {
                $force = false;
            }

            if( strval($postDate) !== strval($date) || $force) {

                unset($jobArray['post_name']);
                unset($jobArray['post_type']);
                unset($jobArray['post_status']);
                $jobArray['ID'] = $postID;

                wp_update_post( $jobArray, true );

                update_field( 'salary_min', $salary_min, $postID );
                update_field( 'salary_max', $salary_max, $postID );
                update_field( 'location', strval($job->address), $postID );
                update_field( 'latitude', floatval($job->lat), $postID );
                update_field( 'longitude', floatval($job->lng), $postID );
                update_field( 'recruiter', $recruiter, $postID );
                if($recruiter_related !== null) {
                    update_field( 'recruiter_related', $recruiter_related, $postID );   
                }
                update_field( 'meta_title', $meta_title, $postID );
                update_field( 'meta_description', $meta_description, $postID );
                update_field( 'meta_keywords', $meta_keywords, $postID );
                update_post_meta( 1, '_yoast_wpseo_title', $meta_title);
                update_post_meta( 1, '_yoast_wpseo_metadesc', $meta_description);
                update_post_meta( 1, '_yoast_wpseo_metakeywords', $meta_keywords);

            }

            /**
             * Categories insert
             */
            insertCategories($job_categories, $postID);

            /**
             * Location insert
             */
            insertLocation($job, $postID);

            wp_reset_query();

        } else {

            /**
             * General fields insert
             */
            $postID = wp_insert_post( $jobArray, true );
            update_field( 'salary_min', $salary_min, $postID );
            update_field( 'salary_max', $salary_max, $postID );
            update_field( 'location', strval($job->address), $postID );
            update_field( 'latitude', floatval($job->lat), $postID );
            update_field( 'longitude', floatval($job->lng), $postID );
            update_field( 'recruiter', $recruiter, $postID );
            if($recruiter_related !== null) {
                update_field( 'recruiter_related', $recruiter_related, $postID );   
            }
            update_field( 'meta_title', $meta_title, $postID );
            update_field( 'meta_description', $meta_description, $postID );
            update_field( 'meta_keywords', $meta_keywords, $postID );
            update_post_meta( 1, '_yoast_wpseo_title', $meta_title);
            update_post_meta( 1, '_yoast_wpseo_metadesc', $meta_description);
            update_post_meta( 1, '_yoast_wpseo_metakeywords', $meta_keywords);

            /**
             * Categories insert
             */
            insertCategories($job_categories, $postID);

            /**
             * Location insert
             */
            insertLocation($job, $postID);

        }

    }
    //var_dump($job_ids);
}

/**
 * Getting all the jobs
 *
 * @return array
 */
function jobList()
{
    $postsArr = array();
    wp_reset_query();
    $args = array(
        'post_type'      => 'jobs',
        'post_status'    => 'publish',
        'posts_per_page' => -1
    );
    $posts = new WP_Query( $args );

    if ( $posts->have_posts() ) :
        while ( $posts->have_posts() ) : $posts->the_post();
            //var_dump(get_post_field( 'post_name', get_the_ID()) );
            array_push($postsArr, get_post_field( 'post_name', get_the_ID() ));
        endwhile;
    endif;

    wp_reset_query();
    return $postsArr;
}

function jobAdd()
{

}

function jobFulfilled()
{

}

function jobUpdate()
{

}

function slugify($text)
{
    // replace non letter or digits by -
    $text = preg_replace('~[^\pL\d]+~u', '-', $text);
    // transliterate
    $text = iconv('utf-8', 'us-ascii//TRANSLIT', $text);
    // remove unwanted characters
    $text = preg_replace('~[^-\w]+~', '', $text);
    // trim
    $text = trim($text, '-');
    // remove duplicate -
    $text = preg_replace('~-+~', '-', $text);
    // lowercase
    $text = strtolower($text);
    if (empty($text)) {
        return 'n-a';
    }
    return $text;
}

function insertCategories($job_categories, $postID) 
{

    foreach($job_categories as $category) {
        if($category['group'] == '#2 Skill Area') {
            
            $term = get_term_by('name', strval($category), 'job-category');
            if(!$term) {
                wp_insert_term(strval($category), 'job-category');
                $term = get_term_by('name', strval($category), 'job-category');
            }
            $termID = $term->term_id;
            wp_set_post_terms($postID, $termID, 'job-category', true);

        } else if($category['group'] == '#3 Skill IT') {

            $parent = get_term_by('slug', 'it', 'job-category');
            $parentID = $parent->term_id;
            $term = get_term_by('name', strval($category), 'job-category');
            if(!$term) {
                wp_insert_term(strval($category), 'job-category', array('parent' => $parentID));
                $term = get_term_by('name', strval($category), 'job-category');
            }
            $termID = $term->term_id;
            wp_set_post_terms($postID, $termID, 'job-category', true);

        } else if( $category['group'] == '#6 Skills Sales' || $category['group'] == '#6 Skill Sales' ) {

            $parent = get_term_by('slug', 'sales', 'job-category');
            $parentID = $parent->term_id;
            $term = get_term_by('name', strval($category), 'job-category');
            if(!$term) {
                wp_insert_term(strval($category), 'job-category', array('parent' => $parentID));
                $term = get_term_by('name', strval($category), 'job-category');
            }
            $termID = $term->term_id;
            wp_set_post_terms($postID, $termID, 'job-category', true);

        } else if($category['group'] == '#1 Availability') {

            $term = get_term_by('name', strval($category), 'job-type');
            if(!$term) {
                wp_insert_term(strval($category), 'job-type');
                $term = get_term_by('name', strval($category), 'job-type');
            }
            $termID = $term->term_id;
            wp_set_post_terms($postID, $termID, 'job-type', true);

        }

    }

}

function insertLocation($job, $postID)
{
    if( !empty($job->address_country) && !empty($job->address_city) ) {
        $country = strval( $job->address_country );
        $city = strval( $job->address_city );
    } else if(!empty($job->address)) {
        $split = explode( ",", strval($job->address) );
        $city = $split[0];
        $country = $split[1];
    } else {
        return false;
    }
    $term_type = 'job-location';

    if($country) {
        $term = get_term_by('name', $country, $term_type);
        if(!$term) {
            wp_insert_term($country, $term_type);
            $term = get_term_by('name', $country, $term_type);
        }
        $termID = $term->term_id;
        wp_set_post_terms($postID, $termID, $term_type, true);
    }
    if($city) {
        $parent = get_term_by('name', $country, $term_type);
        $parentID = $parent->term_id;
        $term = get_term_by('name', $city, $term_type);
        if(!$term) {
            wp_insert_term($city, $term_type, array('parent' => $parentID));
            $term = get_term_by('name', $city, $term_type);
        }
        $termID = $term->term_id;
        wp_set_post_terms($postID, $termID, $term_type, true);
    }
}