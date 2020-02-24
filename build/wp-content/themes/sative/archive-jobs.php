<?php
/**
 * Template for displaying jobs
 */

get_header();

$args = array( 
    'post_type' => 'jobs',
    'post_status' => 'publish',
    'posts_per_page' => -1
);
$query = new WP_Query( $args );
$post_no = $query->post_count;
// $script = 'var $jobs = {'; 
// if($query->have_posts()) : while($query->have_posts()) : $query->the_post(); $helper = jobDisplayHelper(); 
//     $script .= get_the_ID().':{'; 
//     $script .= 'slug: "'.get_post_field('post_name', get_the_ID()).'", '; 
//     $script .= 'name: "'.get_the_title().'", '; 
//     $script .= 'link: "'.get_the_permalink().'", '; 
//     $script .= '},'; 
// endwhile; endif; 
// $script .= '};'; 
// file_put_contents( get_template_directory().'/inc/assets/js/jobs.js', $script);  
// $output = \JShrink\Minifier::minify(file_get_contents(get_template_directory().'/inc/assets/js/jobs.js'));
// file_put_contents(get_template_directory().'/inc/assets/js/jobs.min.js', $output); 
wp_reset_postdata();
?>


<header class="header__jobs">
    <div class="container">
        <div class="dog"></div>
        <div class="row align-items-center justify-content-between">
            <div class="col-lg-auto">
                <h1>
                    <span class="header__jobs-jobsno"><?= $post_no; ?></span> <?php pll_e( 'open jobs' ); ?>
                </h1>
            </div>
            <div class="col-lg-auto header__jobs-cats">
                <a href="#it" class="btn btn__medium lgrey icon">
                    <span>IT</span> <i class="far fa-plus"></i>
                </a>
                <a href="#sales" class="btn btn__medium lgrey icon">
                    <span>Sales</span> <i class="far fa-plus"></i>
                </a>
                <a href="#executive" class="btn btn__medium lgrey icon">
                    <span>Executive</span> <i class="far fa-plus"></i>
                </a>
                <a href="#freelance" class="btn btn__medium lgrey icon">
                    <span>Freelance</span> <i class="far fa-plus"></i>
                </a>
            </div>
        </div>
        <div class="row align-items-center justify-content-between header__jobs-search">
            <div class="dog">
                <object type="image/svg+xml" data="<?= get_template_directory_uri(); ?>/assets/img/dog.svg">
                    <img src="<?= get_template_directory_uri(); ?>/assets/img/dog.svg" alt="">
                </object>
            </div>
            <div class="offset-lg-1 col-lg-5">
                <div class="triangle-left"></div>
                <input type="text" placeholder="Enter job title here">
            </div>
            <div class="col-lg-6">
                <input class="location" type="text" placeholder="Enter job location">
                <button type="submit" class="btn btn__notched"><i class="far fa-search"></i></button>
            </div>
            <div class="col-12 text-right">
                <p class="text-size-small font-primary">
                    <span class="jobsno">150</span> <?php pll_e( 'jobs found' ); ?>
                </p>
            </div>
        </div>
    </div>
</header>

<?php 
    $args = array( 
        'post_type' => 'jobs',
        'post_status' => 'publish',
        'posts_per_page' => 10
    );
    $query = new WP_Query( $args );
?>

<section class="jobs__list">
    <div class="container">
        <div class="row">
            <div class="col-lg-4">
                <?php get_template_part( 'template-parts/job-filters' ); ?>
            </div>
            <div id="jobs__list-cont" class="col-lg-8">
                <main class="jobs__list-items">
                    <?php if($query->have_posts()) : while($query->have_posts()) : $query->the_post(); $helper = jobDisplayHelper(); ?>
                    <article class="card bg-lgrey jobs__list-item">
                        <div class="job-title">
                            <?php if(strlen($helper['supCatName']) > 0) : ?>
                                <span class="icon" data-type="<?= $helper['supCatName']; ?>"></span>
                            <?php endif; ?>
                            <h3 class="title"><a href="<?= get_the_permalink(); ?>"><?= get_the_title(); ?></a></h3>
                        </div>
                        <div class="info">
                            <div class="info__item">
                                <i class="far fa-map-marker-alt"></i>
                                <span class="text-size-medium location"><?= get_field('location'); ?></span>
                            </div>
                            <div class="info__item">
                                <i class="far fa-clock"></i>
                                <span class="text-size-medium type"><?= $helper['type']; ?></span>
                            </div>
                            <div class="info__item">
                                <i class="far fa-euro-sign"></i>
                                <span class="text-size-medium">
                                    <number class="salarymin"><?= number_format(get_field('salary_min'), 0, ".", "."); ?></number> - <number class="salarymax"><?= number_format(get_field('salary_max'), 0, ".", "."); ?></number>
                                </span>
                            </div>
                            <div class="info__item">
                                <i class="far fa-industry"></i>
                                <span class="text-size-medium industry"></span>
                            </div>
                        </div>
                        <p class="text-size-small excerpt">
                            <?= get_the_excerpt(); ?>
                        </p>
                        <a href="<?= get_the_permalink(); ?>" class="btn btn__small navy"><?php pll_e( 'More info' ); ?></a>
                    </article>
                    <?php endwhile; endif; ?>
                    <nav class="pagination">
                    <?php next_posts_link( 'Load more' ); ?>
                    </nav>
                </main>
            </div>
        </div>
    </div>
</section>

<?php get_footer('jobs');