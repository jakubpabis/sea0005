<?php /*if ( function_exists('yoast_breadcrumb') ) : ?>
<aside class="breadcrumbs">
    <div class="container">
        <div class="row align-items-lg-center">
            <div class="col-auto">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3651 15L9 10.6392L4.63516 15L3 13.3674L7.36529 9.00613L7.35915 8.99977L7.36529 8.99364L3.00045 4.63259L4.63471 3L9 7.36037L13.3653 3L14.9998 4.63259L10.6347 8.99364L10.6411 8.99977L10.6347 9.00613L15 13.3674L13.3651 15ZM0 18H18V0H0V18Z" fill="#94D4E9"/>
                </svg>
            </div>
            <div class="col-auto breadcrumbs__list">
                <div class="breadcrumbs__items">
                <?php //bcn_display(false, true, false, false); ?>
                <?php  $breadcrumbs = yoast_breadcrumb('','',false); 
                    $breadcrumbs = str_replace("<span>","",$breadcrumbs);
                    $breadcrumbs = str_replace("</span>","",$breadcrumbs);
                    echo $breadcrumbs;
                ?>
                </div>
            </div>
        </div>
    </div>
</aside>
<?php endif; */ ?>
<?php if( isset( $_GET['messagecv'] ) ): ?>
    <div class="container">
        <div class="row mb-5 mt-5">
            <div class="col-12 text-center">
                <?php if( $_GET['messagecv'] === 'success' ): ?>
                <div class="info card bg-yellow">
                    <h2 class="color-navy">
                        <?= pll_e('Congratulations! Your CV was successfully submitted!'); ?>
                    </h2>
                <?php else: ?>
                <div class="info card bg-pink">
                    <h2 class="color-navy">
                        <?= pll_e('Sorry, there was a problem with your application, please try again later...'); ?>
                    </h2>
                <?php endif; ?>
                </div>
            </div>
        </div>
    </div>
<?php endif; ?>