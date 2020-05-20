<div class="card bg-sea">
    <h3>
        <?php pll_e( 'Topics' ); ?>
    </h3>
    <ul>
        <?php if($query->have_posts()) : while($query->have_posts()) : $query->the_post(); ?>
            <li>
                <a href=""><?= get_the_title(); ?></a>
            </li>
        <?php endwhile; endif; ?>
    </ul>
</div>

<?php if ( is_active_sidebar( 'sidebar-1' ) ) : ?>
<div class="card bg-yellow mt-5">
    <?php dynamic_sidebar( 'sidebar-1' ); ?>
</div>
<?php endif; ?>

<div class="share">
    <h5 class="text500"><?php pll_e( 'Share this content' ); ?></h5>
    <div class="btns">
        <?php 
            global $wp;
            $current_url = home_url( add_query_arg( array(), $wp->request ) );
        ?>
        <a class="btn btn__social notched navy" href="https://www.facebook.com/sharer/sharer.php?u=<?= $current_url; ?>&t=<?= get_the_title(); ?>" target="_blank">
            <i class="fab fa-facebook-f"></i>
        </a>
        <a class="btn btn__social notched navy" href="https://twitter.com/intent/tweet?source=<?= $current_url; ?>&text=<?= $current_url; ?> - <?= get_the_title(); ?>" target="_blank">
            <i class="fab fa-twitter"></i>
        </a>
        <a class="btn btn__social notched navy" href="http://www.linkedin.com/shareArticle?mini=true&url=<?= $current_url; ?>&title=<?= get_the_title(); ?>&summary=Checkout%20this%20job%20offer!&source=<?= $current_url; ?>" target="_blank">
            <i class="fab fa-linkedin-in"></i>
        </a>
        <a class="btn btn__social notched navy" href="https://getpocket.com/save?url=<?= $current_url; ?>&title=<?= get_the_title(); ?>" target="_blank">
            <i class="fab fa-get-pocket"></i>
        </a>
        <a class="btn btn__social notched navy" href="whatsapp://send?text=<?= get_the_title(); ?>&nbsp;&nbsp;<?= $current_url; ?>" target="_blank">
            <i class="fab fa-whatsapp"></i>
        </a>
        <a class="btn btn__social notched navy" href="mailto:?subject=<?= get_the_title(); ?>&body=Checkout%20this%20job%20offer: <?= $current_url; ?>" target="_blank">
            <i class="far fa-envelope"></i>
        </a>
    </div>
</div>