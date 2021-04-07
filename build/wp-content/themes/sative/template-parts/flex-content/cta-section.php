<section class="flex_content-cta">
    <div class="container position-absolute h-100 left-0">
        <div class="row">
            <div class="col-lg-10 position-absolute h-100 p-0 left-0">
                <div class="flex_content-cta-bg right bg-yellow w-100 h-100"></div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-5 ml-lg-n5">
                <img src="<?php echo get_sub_field('image')['url']; ?>" alt="<?php echo get_sub_field('image')['title']; ?>" class="lazy img-fluid">
            </div>
            <div class="col-lg-7 pt-5 mt-5">
                <h5 class="text-uppercase">
                    <?php echo get_sub_field('sub_title'); ?>
                </h5>
                <span class="display-3 d-block text700 mb-5">
                    <?php echo get_sub_field('title'); ?>
                </span>
                <a href="<?php echo get_sub_field('link')['url']; ?>" class="btn btn__default pink bg-pink color-white">
                    <?php echo get_sub_field('link')['title']; ?>
                </a>
            </div>
        </div>
    </div>
</section>

<section class="flex_content-bubbles">
    <div class="container">
        <div class="row align-items-end">
            <div class="col-lg-auto">
                <span class="d-block display-3 text700">
                    <?php echo get_sub_field('contact_title'); ?> 
                </span>
            </div>
            <div class="offset-lg-1 col-lg-5">
                <h2 class="m-0">
                    <?php echo get_sub_field('contact_sub_title'); ?> 
                    <svg class="position-absolute ml-4 mt-3" width="118" height="445" xmlns="http://www.w3.org/2000/svg"><g stroke="#183153" stroke-width="5" fill="none" fill-rule="evenodd"><path d="M86 431.28l15 9.867 15-9.867"/><path d="M101.492 441.347V26.505L77.72 3.048H0"/></g></svg>
                </h2>
            </div>
        </div>
        <div class="row pt-5 mt-4 pb-5">
            <?php $i = 1; foreach( get_sub_field('bubbles') as $item ): ?>
            <?php
                switch($i) {
                    case 1:
                        $color = 'bg-sea';
                        break;
                    case 2:
                        $color = 'bg-yellow';
                        break;
                    case 3:
                        $color = 'bg-pink';
                        break;
                }    
            ?>
            <div class="col-lg-4 d-flex flex_content-bubbles-bubble-cont">
                <div class="flex_content-bubbles-bubble">
                    <h2 class="<?php echo $color; ?> px-2 d-inline-block my-0">
                        <?php echo $item['title']; ?>
                    </h2>
                    <?php echo $item['text']; ?>
                </div>
                <div class="triangle"></div>
            </div>
            <?php $i++; endforeach; ?>
        </div>
    </div>
</section>

<section class="flex_content-contact">
    <div class="container">
        <div class="row justify-content-end">
            <div class="col-lg-10 flex_content-contact-dog">
                <svg viewBox="0 0 650.13 306.3" xmlns="http://www.w3.org/2000/svg"><path d="M484.68 0l-28.1 28.1v138.58h41.54l25.3-25.31v-62h-10.29v57.77l-19.38 19.38h-26.88V32.46l22-22.16H640v42.76l-26.18 26h-79.23v99H171.22L63.53 285.54H0v10.29h67.72l107.69-107.51h359.18v69.29h73v19.55L591 295.83h-95.15v-64.92l-21.3-21.3-7.33 7.33 18.33 18.33v47H215l-10.1-10.7 38.22-35.08-35.25-34.21-7.16 7.33 27.4 26.71-37.87 34.73 23.56 24.61h-64.4v-60.22h-10.3V306h98.79L225 292.52h260.55v13.78h110.13l22.17-25.13v-33.68h-73V89.54H618l32.11-32.12V0z" fill="#173751"/><g fill="#ffffff"><path d="M556 206.6l-23.4-23.41 23.4-23.4 7.2 7.21-16.2 16.19 16.22 16.22z"/><path d="M523.74 206.6l-7.18-7.19 16.21-16.22L516.56 167l7.18-7.19 23.41 23.4z"/></g></svg>
            </div>
            <div class="col-lg-6">
                Contact form will be here
            </div>
        </div>
    </div>
</section>