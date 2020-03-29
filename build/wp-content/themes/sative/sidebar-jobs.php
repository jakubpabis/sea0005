<div class="card bg-sea">
    <h3>
        <?php pll_e( 'Apply here' ); ?>
    </h3>
    <span class="text500 text-size-small"><?php pll_e( 'Apply with:' ); ?></span>
    <div class="social-login">
        <a href="" class="btn btn__small navy icon full">
            <i class="fab fa-facebook-square"></i>
            <span>Facebook</span>
        </a>
        <a href="" class="btn btn__small navy icon full">
            <i class="fab fa-linkedin"></i>
            <span>LinkedIn</span>
        </a>
        <a href="" class="btn btn__small navy icon full">
            <i class="fab fa-google"></i>
            <span>Google</span>
        </a>
        <a href="" class="btn btn__small navy icon full">
            <i class="fab fa-github"></i>
            <span>Github</span>
        </a>
    </div>
    <form class="pt-3" action="">
        <div class="row align-items-center jobs__single-sidebar-inputs">
            <div class="col-12 pb-1">
                <div class="pretty p-icon p-round p-plain p-jelly">
                    <input type="radio" name="gender">
                    <div class="state">
                        <i class="icon fas fa-mars"></i>
                        <label><?php pll_e( 'Male' ); ?></label>
                    </div>
                </div>
                <div class="pretty p-icon p-round p-plain p-jelly">
                    <input type="radio" name="gender">
                    <div class="state">
                        <i class="icon fas fa-venus"></i>
                        <label><?php pll_e( 'Female' ); ?></label>
                    </div>
                </div>
            </div>
            <div class="col-lg-12 col-sm-6 ugly pt-2">
                <input type="text" name="name" required>
                <label for="name"><?php pll_e( 'Name' ); ?> <span>*</span></label>
            </div>
            <div class="col-lg-12 col-sm-6 ugly pt-2">
                <input type="email" name="email" required>
                <label for="email"><?php pll_e( 'Email' ); ?> <span>*</span></label>
            </div>
            <div class="col-lg-12 col-sm-6 ugly pt-2">
                <input type="text" name="phone">
                <label for="phone"><?php pll_e( 'Phone' ); ?></label>
            </div>
            <div class="col-lg-12 col-sm-6 ugly pt-2">
                <input type="text" name="dob">
                <label for="dob"><?php pll_e( 'Date of birth' ); ?></label>
            </div>
            <div class="col-lg-12 col-sm-6 ugly pt-2">
                <input type="text" name="city">
                <label for="city"><?php pll_e( 'City' ); ?></label>
            </div>
            <div class="col-lg-12 col-sm-6 ugly pt-2">
                <label class="full bg-white" for="cv"><?php pll_e( 'CV' ); ?> <span><?= pll_e( 'Upload' ); ?></span></label>
                <input type="file" name="cv">
            </div>
            <div class="col-12 ugly pt-2">
                <textarea name="motivation"></textarea>
                <label for="motivation"><?php pll_e( 'Motivation' ); ?></label>
            </div>
            <div class="col-12 pt-1">
                <div class="pretty p-icon p-plain p-jelly">
                    <input type="checkbox" name="pp">
                    <div class="state">
                        <i class="icon fal fa-times"></i>
                        <label><?php pll_e( 'I hereby agree with the' ); ?> <a href=""><u><?php pll_e( 'Privacy Policy' ); ?></u></a> <span class="color-pink text-size-small text600">*</span></label>
                    </div>
                </div>
            </div>
            <div class="col-12 pt-4">
                <button type="submit" class="btn btn__default yellow"><?php pll_e( 'Send application' ); ?></button>
            </div>
        </div>
    </form>
</div>
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