<?php if ( function_exists('yoast_breadcrumb') ) : ?>
<aside class="breadcrumbs">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-auto">
                <object type="image/svg+xml" data="<?= get_template_directory_uri(); ?>/assets/img/cubecross-it.svg">
                    <img src="<?= get_template_directory_uri(); ?>/assets/img/cubecross-it.svg" alt="" width="18" height="18">
                </object>
            </div>
            <div class="col-auto">
                <div class="breadcrumbs__items">
                <?php $breadcrumbs = yoast_breadcrumb('','',false); 
                    $breadcrumbs = str_replace("<span>","",$breadcrumbs);
                    $breadcrumbs = str_replace("</span>","",$breadcrumbs);
                    echo $breadcrumbs;
                ?>
                </div>
            </div>
        </div>
    </div>
</aside>
<?php endif; ?>