<section class="flex-section articles-slider articles-slider--videos">
    <div class="owl-carousel owl-theme video-cards">
        <?php foreach (get_sub_field('videos') as $item) : ?>
            <div class="item d-flex h-100 w-100">
              
                <div class="card nothed w-100">
                    
                    <div class="caption" style="background-color: <?= $item['slide_color'] ?>;">
                        <h3><?= $item['text'] ?></h3>
                    </div>
                    
                    <div class="card-body p-lg-4 p-md-2 p-0">
                        <div class="overlay"></div>
                        
                        <span class="border" style="background-color: <?= $item['slide_color'] ?>;"></span>
                        
                        <img class="video-placeholder" src="<?php echo $item['video_placeholder']['url']; ?>" alt="<?php echo $item['video_placeholder']['title']; ?>">
                        
                        <video class="video" controls src="<?php echo $item['video']['url']; ?>"></video>

                        <img class="play-video" src="<?php echo get_template_directory_uri(); ?>/assets/img/play-video.svg" alt="">
                    </div>
                </div>
                
                <div class="triangle"></div>
            </div>
        <?php endforeach; ?>
    </div>
    <div class="row d-block d-lg-none mt-5 pt-4">
        <div class="col-auto">
            <?php if (get_sub_field('link')) : ?>
                <a href="<?php echo get_sub_field('link')['url']; ?>" class="btn btn__default navy">
                    <?php echo get_sub_field('link')['title']; ?>
                </a>
            <?php endif; ?>
        </div>
    </div>
</section>
