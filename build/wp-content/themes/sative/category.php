<?php

get_header();

get_template_part( 'template-parts/breadcrumbs' ); ?>

<?php
wp_reset_postdata();

$know = get_queried_object();
$args = array( 
    'post_type' => 'post',
    'post_status' => 'publish',
    'posts_per_page' => 10,
    'category_name' => $know->slug,
    'paged' => get_query_var('paged') ? get_query_var('paged') : 1,
    'tax_query' => array(
        'relation' => 'AND',
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

?>

<header class="header__generic">
    <div class="container">
        <div class="row">
            <div class="col">
                <h1 class="text-size-xxxxlarge">
                    <?= pll_e('Category'); ?>: <?= single_cat_title(); ?>
                </h1>
            </div>
        </div>
        <div class="row align-items-center justify-content-between header__jobs-search knowledge">
            <div class="header__jobs-dog">
                <svg viewBox="0 0 649.89 364.92" xmlns="http://www.w3.org/2000/svg"><path d="M484.2 0l-28 28.09v138.59h41.45l25.37-25.37v-62h-10.23v57.79l-19.43 19.42h-27v-124l22-22.15H639.5v42.84l-26.11 26.11H534.2v99H170.76L63.11 285.84H0v10.28h67.44L175.1 188.58h359.1v91.94l-37.87 46.28 26.85 27.72h-56.8v-72.26H233.13l-46.53 44.42 26.73 27.72h-64.22V237h-10.27v127.79h98.75l-36.39-37.74 36-34.4h218.9v72.27h91.33l-37.25-38.49 34.4-41.95V89.84h73.13l32.17-32.05V.49H484.2" fill="#173751"/><g class="bowtie" fill="#88d8e5"><path d="M555.61 206.72l-23.4-23.39 23.4-23.4 7.22 7.22-16.18 16.18 16.18 16.17z"/><path d="M523.25 206.72L516 199.5l16.17-16.17L516 167.15l7.21-7.22 23.4 23.4-23.4 23.39"/></g></svg>
            </div>
            <div class="offset-md-1 col-md-11 offset-sm-2 col-sm-10">
                <div class="triangle-left"></div>
                <input type="text" placeholder="<?php pll_e('Search our knowledge base. We have tons of useful articles for you!'); ?>">
                <button type="submit" class="btn btn__notched knowledge"><i class="far fa-search"></i></button>
            </div>
            <div class="col-12 text-right">
                <p class="text-size-small font-primary">
                    <span class="jobsno"><?= $post_no; ?></span> 
                    <?php
                        if($post_no > 1 || $post_no === 0) {
                            pll_e( 'articles found' );
                        } else if($post_no > 0) {
                            pll_e( 'article found' );
                        }
                    ?>
                </p>
            </div>
        </div>
    </div>
</header>

<main class="knowledge">
    <div class="container">
        <div class="row">
            <main class="col-lg-8 order-lg-1 order-12">
                <?php if($query->have_posts()) : while($query->have_posts()) : $query->the_post(); ?>
                <article class="card bg-lgrey knowledge__article d-block">
                    <?php if(has_post_thumbnail()): ?>
                        <div class="row">
                            <div class="col-lg-5 knowledge__article-img">
                                <img data-src="<?= get_the_post_thumbnail_url(); ?>" alt="" class="bg-cover lazy">
                            </div>
                            <div class="col-lg-7">
                    <?php endif; ?>
                    <h3 class="title"><a href="<?= get_the_permalink(); ?>"><?= get_the_title(); ?></a></h3>
                    <?php 
                        $args = array(
                            'child_of' => $know->term_id,
                            'fields'   => 'all'
                        );
                        $cats = wp_get_post_categories( get_the_ID(), $args );
                    ?>
                    <?php if( !empty( $cats ) ): ?>
                        <h4>
                        <?php $i = 0; foreach($cats as $cat): ?>
                            <?= $i === 0 ? null : '&nbsp;|&nbsp;' ?><a href=""><?= $cat->name; ?></a>
                        <?php $i++; endforeach; ?>
                        </h4>
                    <?php endif; ?>
                    <?php if(has_excerpt()):
                        the_excerpt();
                    else:
                        echo '<p>'.wp_trim_excerpt().'</p>';
                    endif; ?>
                    <a href="<?= get_the_permalink(); ?>" class="btn btn__medium navy"><?php pll_e( 'Read more' ); ?></a>
                    <?php if(has_post_thumbnail()): ?>
                            </div>
                        </div>
                    <?php endif; ?>
                </article>
                <?php endwhile; endif; ?>
                <nav class="pagination">
                    <?= $pagination; ?>
                </nav>
            </main>
            <aside class="col-lg-4 order-lg-12 order-1 knowledge__filters not-opened">
                <div class="closethis">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M30.3884 34.2353L20.1176 23.9745L9.84745 34.2353L6 30.3939L16.2713 20.1321L16.2568 20.1171L16.2713 20.1027L6.00107 9.84138L9.84638 6L20.1176 16.2597L30.3889 6L34.2348 9.84138L23.964 20.1027L23.979 20.1171L23.964 20.1321L34.2353 30.3939L30.3884 34.2353ZM0 40H40V0H0V40Z" fill="#EC6278"/>
                    </svg>
                </div>
                <div class="card bg-sea">
                    <h3 class="title">
                        <i class="fas fa-filter"></i>
                        <?php pll_e( 'Filter by topic' ); ?>
                    </h3>
                    <form action="" method="GET" id="filter">
                        <?php $categories = get_categories('taxonomy=category&hide_empty=false'); ?>
                        <?php foreach($categories as $cat): ?>
                            <?php if($cat->parent === $know->term_id): ?>
                            <?php 
                                if( isset($_GET['category']) && !empty($_GET['category']) ) {
                                    $activeCats = $_GET['category'];
                                    if( in_array( $cat->term_id, $activeCats ) ) {
                                        $active = 'active';
                                        $checked = 'checked';
                                    } else {
                                        $active = null;
                                        $checked = null;
                                    }
                                } else {
                                    $active = null;
                                    $checked = null;
                                }
                            ?>
                            <div class="filter-group <?= $active ?>">
                                <span class="filter-title <?= $active ?>">
                                    <?= $cat->name; ?>
                                    <i class="fas fa-plus"></i>
                                    <i class="fas fa-minus"></i>
                                    <input type="checkbox" name="category[]" value="<?= $cat->term_id; ?>" <?= $checked; ?> />
                                </span>
                            </div>
                            <?php endif; ?>
                        <?php endforeach; ?>
                        <button type="submit" class="btn btn__default yellow"><?php pll_e('Filter'); ?></button>
                    </form>
                </div>
            </aside>
        </div>
    </div>
</main>


<?php get_footer();