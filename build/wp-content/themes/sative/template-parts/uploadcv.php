<?php if( isset($_GET['uploadcv']) ) : ?>
    <script defer>
        $(window).on('load', function() {
            $('#uploadCVModal').modal('show');
        });
    </script>
<?php endif; ?>
<div id="uploadCVModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="uploadCVModalTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.3884 34.2353L20.1176 23.9745L9.84745 34.2353L6 30.3939L16.2713 20.1321L16.2568 20.1171L16.2713 20.1027L6.00107 9.84138L9.84638 6L20.1176 16.2597L30.3889 6L34.2348 9.84138L23.964 20.1027L23.979 20.1171L23.964 20.1321L34.2353 30.3939L30.3884 34.2353ZM0 40H40V0H0V40Z" fill="#EC6278"/>
                </svg>
            </button>
            <div class="modal-container">
                <div class="modal-header">
                    <h3 class="modal-title" id="uploadCVModalTitle"><?= pll_e( 'Upload CV here' ); ?></h3>
                </div>
                <div class="modal-body pt-3">
                    <span class="text-size-small text500">
                        <?= pll_e( 'Apply with:' ); ?>
                    </span>
                    <div class="row justify-content-between align-items-center">
                        <?php global $wp; ?>
                            <button type="button" class="btn btn__small navy icon full m-2 px-3" onclick="myFacebookLogin()">
                                <i class="fab fa-facebook-square"></i>
                                <span>Facebook</span>
                            </button>
                            <button type="button" class="btn btn__small navy icon full m-2 px-3" onclick="myLinkedinLogin( '<?= siteURL().'userdatafetch'; ?>', '<?= home_url( $wp->request ) ?>' )">
                                <i class="fab fa-linkedin"></i>
                                <span>LinkedIn</span>
                            </button>
                            <button type="button" class="btn btn__small navy icon full m-2 px-3">
                                <div class="g-signin2" data-onsuccess="onSignIn"></div>
                                <i class="fab fa-google"></i>
                                <span>Google</span>
                            </button>
                            <button type="button" class="btn btn__small navy icon full m-2 px-3" onclick="myGithubLogin('<?= home_url( $wp->request ) ?>')">
                                <i class="fab fa-github"></i>
                                <span>Github</span>
                            </button>
                        </div>
                    </div>
                    <form method="POST" action="<?php echo esc_url( admin_url('admin-post.php') ); ?>" accept-charset="UTF-8" role="form" class="pt-5" id="cv-upload-form" enctype="multipart/form-data">
                        <div class="row align-items-center">
                            <div class="col-12 pb-2">
                                <div class="pretty p-icon p-round p-plain p-jelly">
                                    <input type="radio" value="Male" name="cv-gender">
                                    <div class="state">
                                        <i class="icon fas fa-mars"></i>
                                        <label><?= pll_e( 'Male' ); ?></label>
                                    </div>
                                </div>
                                <div class="pretty p-icon p-round p-plain p-jelly">
                                    <input type="radio" value="Female" name="cv-gender">
                                    <div class="state">
                                        <i class="icon fas fa-venus"></i>
                                        <label><?= pll_e( 'Female' ); ?></label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 ugly pt-2 pb-3">
                                <input type="text" name="cv-name" required>
                                <label for="cv-name"><?= pll_e( 'Name' ); ?> <span>*</span></label>
                            </div>
                            <div class="col-lg-6 ugly pt-2 pb-3">
                                <input type="email" name="cv-email" required>
                                <label for="cv-email"><?= pll_e( 'Email' ); ?> <span>*</span></label>
                            </div>
                            <div class="col-lg-6 ugly pt-2 pb-3">
                                <input type="text" name="cv-phone">
                                <label for="cv-phone"><?= pll_e( 'Phone' ); ?></label>
                            </div>
                            <div class="col-lg-6 ugly pt-2 pb-3">
                                <input type="text" name="cv-dob">
                                <label for="cv-dob"><?= pll_e( 'Date of birth' ); ?></label>
                            </div>
                            <div class="col-lg-6 ugly pt-2 pb-3">
                                <input type="text" name="cv-city">
                                <label for="cv-city"><?= pll_e( 'City' ); ?></label>
                            </div>
                            <div class="col-lg-6 ugly pt-2 pb-3">
                                <label class="full bg-white" for="cv-cv"><?php pll_e( 'CV' ); ?><span><?= pll_e( 'Upload' ); ?></span></label>
                                <input type="file" name="cv-cv">
                            </div>
                            <div class="col-12 ugly pt-2 pb-3">
                                <textarea name="cv-motivation"></textarea>
                                <label for="cv-motivation"><?= pll_e( 'Motivation' ); ?></label>
                            </div>
                            <div class="col-12 pb-3">
                                <div class="pretty p-icon p-plain p-jelly">
                                    <input type="checkbox" name="cv-pp">
                                    <div class="state">
                                        <i class="icon fal fa-times"></i>
                                        <label><?php pll_e( 'I hereby agree with the' ); ?> <a href="<?php if( pll_current_language() === 'en' ) : ?>/privacy-policy<?php else: ?>/privacyverklaring<?php endif; ?>" style="position: relative; z-index: 9999;"><u><?php pll_e( 'Privacy Policy' ); ?></u></a> <span class="color-pink text-size-small text600">*</span></label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 pt-1">
                                <input type="hidden" name="cv-jobid" value="188">
                                <input type="hidden" name="action" value="cv_form">
                                <?php wp_nonce_field( 'cv_form', 'cv_form_nonce' ); ?>
                                <button type="submit" class="btn btn__default yellow"><?= pll_e( 'Send application' ); ?></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>