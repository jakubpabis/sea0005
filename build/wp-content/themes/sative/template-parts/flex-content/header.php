<header class="header flex_content-header bg-sea py-5">
    <div class="container">
        <?php if( get_sub_field( 'image_position' ) === 'top' ): ?>
        <div class="row">
            <div class="col-12">
                <img src="<?php echo get_sub_field('image')['url']; ?>" alt="<?php echo get_sub_field('image')['title']; ?>" class="lazy img-fluid">
            </div>
        </div>
        <div class="row justify-content-between align-items-end">
            <div class="col-lg-9">
                <h4 class="text-uppercase mb-3 text700">
                    <?php echo get_sub_field('sub_title'); ?>
                </h4>
                <span class="display-3 text700">
                    <?php echo get_sub_field('title'); ?>
                </span>
            </div>
        </div>
        <?php else: ?>
        <?php endif; ?>
    </div>
</header>