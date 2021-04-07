<section class="flex_content-copy_section">
    <div class="container">
        <div class="row mb-5">
            <div class="col-lg-8">
                <h5 class="text-uppercase text700">
                    <?php echo get_sub_field('sub_title'); ?>
                </h5>
                <span class="display-3 text900">
                    <?php echo get_sub_field('title'); ?>
                </span>
            </div>
        </div>
        <div class="row justify-content-between flex_content-copy_section-dogs align-items-end flex-nowrap mb-5 pb-5">
            <div class="col">
                <img class="lazy img-fluid" data-src="<?php echo get_template_directory_uri(); ?>/assets/img/start-up.svg" alt="">
            </div>
            <div class="col">
                <img class="lazy img-fluid" data-src="<?php echo get_template_directory_uri(); ?>/assets/img/scale-up.svg" alt="">
            </div>
            <div class="col-auto">
                <img class="lazy img-fluid" data-src="<?php echo get_template_directory_uri(); ?>/assets/img/grown-up.svg" alt="">
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <?php echo get_sub_field('first_column'); ?>
            </div>
            <div class="col-lg-6">
                <?php echo get_sub_field('second_column'); ?>
            </div>
        </div>
    </div>
</section>