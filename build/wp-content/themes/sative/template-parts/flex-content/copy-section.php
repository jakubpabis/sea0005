<section class="flex_content">
    <?php if( get_sub_field('type') === 'default' ): ?>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <?php echo get_sub_field('text'); ?>
            </div>
        </div>
    </div>
    <?php elseif( get_sub_field('type') === 'dog' ): ?>
    <?php elseif( get_sub_field('type') === 'columns' ): ?>
    <?php endif; ?>
</section>