<?php
/**
 * Template Name: Knowledge
 */

get_header();

get_template_part( 'template-parts/breadcrumbs' ); ?>


<header class="header__generic">
    <div class="container">
        <?php if(get_field('knowledge_title')): ?>
        <div class="row">
            <div class="col">
                <h1 class="text-size-xxxxlarge">
                    <?= get_field('knowledge_title'); ?>
                </h1>
            </div>
        </div>
        <?php endif; ?>
        <div class="row align-items-center justify-content-between header__jobs-search knowledge">
            <div class="header__jobs-dog">
                <svg viewBox="0 0 649.89 364.92" xmlns="http://www.w3.org/2000/svg"><path d="M484.2 0l-28 28.09v138.59h41.45l25.37-25.37v-62h-10.23v57.79l-19.43 19.42h-27v-124l22-22.15H639.5v42.84l-26.11 26.11H534.2v99H170.76L63.11 285.84H0v10.28h67.44L175.1 188.58h359.1v91.94l-37.87 46.28 26.85 27.72h-56.8v-72.26H233.13l-46.53 44.42 26.73 27.72h-64.22V237h-10.27v127.79h98.75l-36.39-37.74 36-34.4h218.9v72.27h91.33l-37.25-38.49 34.4-41.95V89.84h73.13l32.17-32.05V.49H484.2" fill="#173751"/><g class="bowtie" fill="#88d8e5"><path d="M555.61 206.72l-23.4-23.39 23.4-23.4 7.22 7.22-16.18 16.18 16.18 16.17z"/><path d="M523.25 206.72L516 199.5l16.17-16.17L516 167.15l7.21-7.22 23.4 23.4-23.4 23.39"/></g></svg>
            </div>
            <div class="offset-lg-1 col-lg-11">
                <div class="triangle-left"></div>
                <input type="text" placeholder="<?php pll_e('Search our knowledge base. We have tons of useful articles for you!'); ?>">
                <button type="submit" class="btn btn__notched knowledge"><i class="far fa-search"></i></button>
            </div>
            <div class="col-12 text-right">
                <p class="text-size-small font-primary">
                    <span class="jobsno">150</span> <?php pll_e( 'articles found' ); ?>
                </p>
            </div>
        </div>
    </div>
</header>

<?php
wp_reset_postdata();
$args = array( 
    'post_type' => 'post',
    'post_status' => 'publish',
    'posts_per_page' => 10,
    'category_name' => 'knowledge',
    'paged' => get_query_var('paged') ? get_query_var('paged') : 1
);
$query = new WP_Query( $args );
?>

<main class="knowledge">
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
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
                    <?php if(!empty(get_categories())): ?>
                        <h4>
                        <?php 
                        if(pll_current_language() == 'en'): 
                            $know = get_category_by_slug('knowledge'); 
                        else:
                            $know = get_category_by_slug('kennis'); 
                        endif;
                        ?>
                        <?php $i = 0; foreach(get_categories() as $cat): ?>
                            <?php if($cat->parent === $know->term_id): ?>
                                <?= $i === 0 ? null : '&nbsp;|&nbsp;' ?><a href=""><?= $cat->name; ?></a>
                            <?php $i++; endif; ?>
                        <?php endforeach; ?>
                        </h4>
                    <?php endif; ?>
                    <?php if(has_excerpt()):
                        the_excerpt();
                    else:
                        wp_trim_excerpt(get_the_content());
                    endif; ?>
                    <a href="<?= get_the_permalink(); ?>" class="btn btn__medium navy"><?php pll_e( 'Read more' ); ?></a>
                    <?php if(has_post_thumbnail()): ?>
                            </div>
                        </div>
                    <?php endif; ?>
                </article>
                <?php endwhile; endif; ?>
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
            </div>
            <div class="col-lg-4 knowledge__filters">
                <div class="card bg-sea">
                    <h3 class="title">
                        <i class="fas fa-filter"></i>
                        <?php pll_e( 'Filter by topic' ); ?>
                    </h3>
                    <form action="" method="GET" id="filter">
                    <?php foreach(get_categories() as $cat): ?>
                        <?php if($cat->parent === $know->term_id): ?>
                        <div class="filter-group">
                            <span class="filter-title">
                                <?= $cat->name; ?>
                                <i class="fas fa-plus"></i>
                                <i class="fas fa-minus"></i>
                                <input style="opacity: 0; position: absolute; top: 0; right: 0; bottom: 0; left: 0; z-index: 9;" type="checkbox" name="category[]" value="<?= $cat->term_id; ?>">
                            </span>
                        </div>
                        <?php endif; ?>
                    <?php endforeach; ?>
                    <button type="submit" class="btn btn__default yellow"><?php pll_e('Filter'); ?></button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</main>


<?php get_footer();