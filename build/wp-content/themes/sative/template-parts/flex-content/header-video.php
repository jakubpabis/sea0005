<header class="header__video bg-sea">
    <div class="container-fluid px-0 justify-content-center d-flex">
        <video muted autoplay preload="true" loop>
            <source src="<?php echo get_sub_field('video_file'); ?>" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
    <div class="container">
        <div class="row position-absolute bottom-8vh justify-content-center w-100">
            <div class="col-lg-7 px-0 text-center">
                <span class="text-size-xxxxlarge d-block mb-0">
                    <?php echo get_sub_field('title'); ?>
                </span>
                <span class="mt-0 text-size-large d-block text400 font-secondary">
                    <?php echo get_sub_field('sub_title'); ?>
                </span>
                <?php if( get_sub_field('button_first') || get_sub_field('button_second') ): ?>
                    <div class="card notched bg-white d-flex align-items-center mt-4 py-4 px-3 flex-row">
                        <?php if( get_sub_field('button_first') ): ?>
                            <a href="<?php echo get_sub_field('button_first')['url']; ?>" class="btn btn__default yellow mx-2 w-50">
                                <?php echo get_sub_field('button_first')['title']; ?>
                            </a>
                        <?php endif; ?>
                        <?php if( get_sub_field('button_second') ): ?>
                            <a href="<?php echo get_sub_field('button_second')['url']; ?>" class="btn btn__default navy mx-2 w-50">
                                <?php echo get_sub_field('button_second')['title']; ?>
                            </a>
                        <?php endif; ?>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
</header>