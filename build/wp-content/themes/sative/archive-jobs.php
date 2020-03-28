<?php
/**
 * Template for displaying jobs
 */

get_header();

?>

<?php 
    $args = array( 
        'post_type' => 'jobs',
        'post_status' => 'publish',
        'posts_per_page' => 10,
        'paged' => get_query_var('paged') ? get_query_var('paged') : 1
    );
    // for taxonomies / categories
    if( isset( $_GET['job-category'] ) ) {
            
        if(count($_GET['job-category']) > 1) {
            $args['tax_query'] = array(
                'relation' => 'OR',
            );
            foreach(filterHelper($_GET['job-category'], 'job-category') as $termID) {
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
                    'terms' => $_GET['job-category'],
                )
            );
        }
        //var_dump($args['tax_query']);
    }
    $query = new WP_Query( $args );
    $post_no = $query->found_posts;
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
        <form action="" id="search-filter" method="GET" class="row align-items-center justify-content-between header__jobs-search">
            <div class="header__jobs-dog">
                <svg viewBox="0 0 649.89 364.92" xmlns="http://www.w3.org/2000/svg"><path d="M484.2 0l-28 28.09v138.59h41.45l25.37-25.37v-62h-10.23v57.79l-19.43 19.42h-27v-124l22-22.15H639.5v42.84l-26.11 26.11H534.2v99H170.76L63.11 285.84H0v10.28h67.44L175.1 188.58h359.1v91.94l-37.87 46.28 26.85 27.72h-56.8v-72.26H233.13l-46.53 44.42 26.73 27.72h-64.22V237h-10.27v127.79h98.75l-36.39-37.74 36-34.4h218.9v72.27h91.33l-37.25-38.49 34.4-41.95V89.84h73.13l32.17-32.05V.49H484.2" fill="#173751"/><g class="bowtie" fill="#88d8e5"><path d="M555.61 206.72l-23.4-23.39 23.4-23.4 7.22 7.22-16.18 16.18 16.18 16.17z"/><path d="M523.25 206.72L516 199.5l16.17-16.17L516 167.15l7.21-7.22 23.4 23.4-23.4 23.39"/></g></svg>
            </div>
            <div class="offset-lg-1 col-lg-5">
                <div class="triangle-left"></div>
                <input type="text" name="s" placeholder="<?php pll_e('Enter job title here'); ?>">
            </div>
            <div class="col-lg-6">
                <input class="location" type="text" placeholder="<?php pll_e('Enter job location'); ?>">
                <button type="submit" class="btn btn__notched"><i class="far fa-search"></i></button>
            </div>
            <div class="col-12 text-right">
                <p class="text-size-small font-primary">
                    <span class="jobsno"><?= $post_no; ?></span> <?php pll_e( 'jobs found' ); ?>
                </p>
            </div>
        </form>
    </div>
</header>

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