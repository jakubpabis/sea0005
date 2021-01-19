<?php
    global $post;
    $id = $post->ID;
    $sub_pages = get_field( 'subscribe_popup_on_pages', 'option' );
    $con_pages = get_field( 'contact_popup_on_pages', 'option' );
    $type = false;
    if( !empty($sub_pages) && in_array( $id, $sub_pages ) ) {
        $type = 'subscribe';
    } elseif( !empty($con_pages) && in_array( $id, $con_pages ) ) {
        $type = 'contact';
    }
?>

<?php if( $type ): ?>
    <?php if( $type === 'contact' ): ?>
        <div id="<?php echo $type; ?>PopupModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="<?php echo $type; ?>PopupModalTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M30.3884 34.2353L20.1176 23.9745L9.84745 34.2353L6 30.3939L16.2713 20.1321L16.2568 20.1171L16.2713 20.1027L6.00107 9.84138L9.84638 6L20.1176 16.2597L30.3889 6L34.2348 9.84138L23.964 20.1027L23.979 20.1171L23.964 20.1321L34.2353 30.3939L30.3884 34.2353ZM0 40H40V0H0V40Z" fill="#EC6278"/>
                        </svg>
                    </button>
                    <div class="modal-container">
                        <div class="modal-header">
                            <h2 class="modal-title" id="<?php echo $type; ?>PopupModalTitle">
                                <?php echo get_field( $type.'_popup_title', 'option' ); ?>
                            </h2>
                        </div>
                        <div class="modal-body pt-3">
                            <?php if( get_field( $type.'_popup_text', 'option' ) ): ?>
                                <p class="mt-0 mb-2">
                                    <?php echo get_field( $type.'_popup_text', 'option' ); ?>
                                </p>
                            <?php endif; ?>
                            <form method="POST" action="<?php echo esc_url( admin_url('admin-post.php') ); ?>" accept-charset="UTF-8" role="form" id="<?php echo $type; ?>-popup-form" enctype="multipart/form-data">
                                <div class="row align-items-center">
                                    <div class="col-md-6 ugly pt-2 pb-3">
                                        <input class="required" type="text" name="<?php echo $type; ?>_name" minlength="2" required>
                                        <label class="ugly-label" for="<?php echo $type; ?>_name"><?= pll_e( 'Name' ); ?> <span>*</span></label>
                                    </div>
                                    <div class="col-md-6 ugly pt-2 pb-3">
                                        <input type="text" name="<?php echo $type; ?>_company" minlength="1">
                                        <label class="ugly-label" for="<?php echo $type; ?>_company"><?= pll_e( 'Company' ); ?></label>
                                    </div>
                                    <div class="col-md-6 ugly pt-2 pb-3">
                                        <input class="required" type="email" name="<?php echo $type; ?>_email" minlength="4" required>
                                        <label class="ugly-label" for="<?php echo $type; ?>_email"><?= pll_e( 'Email address' ); ?> <span>*</span></label>
                                    </div>
                                    <div class="col-md-6 ugly pt-2 pb-3">
                                        <input type="tel" name="<?php echo $type; ?>_phone" minlength="6">
                                        <label class="ugly-label" for="<?php echo $type; ?>_phone"><?= pll_e( 'Phone' ); ?></label>
                                    </div>
                                    <div class="col-12 ugly pt-2 pb-3">
                                        <textarea class="required" name="<?php echo $type; ?>_message" minlength="10" rows="6" required></textarea>
                                        <label class="ugly-label" for="<?php echo $type; ?>_message"><?= pll_e( 'Message' ); ?> <span>*</span></label>
                                    </div>
                                    <div class="col-12 pt-1">
                                        <input type="hidden" name="action" value="<?php echo $type; ?>_form">
                                        <?php wp_nonce_field( '<?php echo $type; ?>_form', '<?php echo $type; ?>_form_nonce' ); ?>
                                        <input type="hidden" name="contactHash" id="contactHash" value="<?php global $hashesForLashes; echo $hashesForLashes['contactHash']; ?>">
                                        <button type="button" disabled class="fake_btn_<?php echo $type; ?>_loading btn btn__default pink d-none disabled"><?= pll_e( 'Sending, please wait...' ); ?></button>
                                        <button type="button" class="fake_btn_<?php echo $type; ?> btn btn__default yellow"><?= pll_e( 'Send message' ); ?></button>
                                        <button class="g-recaptcha contact btn btn__default yellow d-none" data-sitekey="6LeA-gUaAAAAAE0620g-jcBqsq67NPiBtcj0NrCf" data-callback="onContactSubmit"><?= pll_e( 'Send message' ); ?></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <?php endif; ?>
	<script defer>
		jQuery(document).ready(function() {
			if( ! getCookie('<?php echo $type; ?>_popup') ) {
				setTimeout(function() {
					jQuery('#<?php echo $type; ?>PopupModal').modal('show');
				}, <?php echo get_field( $type.'_popup_timeout', 'option' ); ?>);
				jQuery('#<?php echo $type; ?>PopupModal').find('button.close').on('click', function() {
					setCookie( '<?php echo $type; ?>_popup' , true, <?php echo get_field( $type.'_popup_cookie', 'option' ); ?>);
				});
			}
		});
	</script>
<?php endif; ?>
<?php
	$type = 'subscribe';
	$api_key_groups = '6KlPHA3GzUs0Mt5ZMzIA7fBJKhvXsF37IQd3zaBj&include=groups';

	$board = getRequestToken('v2/job_boards/categories', $api_key_groups);
	$group_id = false;
	foreach( $board->groups as $group ) {
		if( $group->name === '#2 Skill Area' ) {
			$group_id = $group->id;
			break;
		}
	}

	if( $group_id ) {
		$cats = array();
		foreach( $board->categories as $category ) {
			if( $category->parent_category_id === $group_id ) {
				$cats[] = $category;
			}
		}
	}
?>
<div id="<?php echo $type; ?>PopupModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="<?php echo $type; ?>PopupModalTitle" aria-hidden="true">
	<div class="modal-dialog modal-sm modal-dialog-centered" role="document">
		<div class="modal-content">
			<button type="button" class="close" data-dismiss="modal" aria-label="Close">
				<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M30.3884 34.2353L20.1176 23.9745L9.84745 34.2353L6 30.3939L16.2713 20.1321L16.2568 20.1171L16.2713 20.1027L6.00107 9.84138L9.84638 6L20.1176 16.2597L30.3889 6L34.2348 9.84138L23.964 20.1027L23.979 20.1171L23.964 20.1321L34.2353 30.3939L30.3884 34.2353ZM0 40H40V0H0V40Z" fill="#EC6278"/>
				</svg>
			</button>
			<div class="modal-container">
				<div class="modal-header">
					<h2 class="modal-title" id="<?php echo $type; ?>PopupModalTitle">
						<?php echo get_field( $type.'_popup_title', 'option' ); ?>
					</h2>
				</div>
				<div class="modal-body pt-3">
					<?php if( get_field( $type.'_popup_text', 'option' ) ): ?>
						<p class="mt-0 mb-2">
							<?php echo get_field( $type.'_popup_text', 'option' ); ?>
						</p>
					<?php endif; ?>
					<form method="POST" action="<?php echo esc_url( admin_url('admin-post.php') ); ?>" accept-charset="UTF-8" role="form" id="<?php echo $type; ?>-popup-form" enctype="multipart/form-data">
						<div class="row align-items-center">
							<?php if( $type === 'subscribe' ): ?>
							<div class="col-12 ugly pt-2 pb-3">
								<input class="required" type="email" name="<?php echo $type; ?>_email" minlength="4" required>
								<label class="ugly-label" for="<?php echo $type; ?>_email"><?= pll_e( 'Email address' ); ?> <span>*</span></label>
							</div>
							<div class="col-12 pt-2">
								<h5><?php echo pll_e( 'Choose your interest' ); ?></h5>
							</div>
							<div class="col-12 pb-3 d-flex flex-wrap">
								<?php foreach( $cats as $cat ): ?>
								<div class="pretty p-icon p-plain p-jelly w-50 my-2 pr-3">
									<input class="required" type="checkbox" name="<?php echo $type; ?>_checkbox[]" value="<?php echo $cat->id; ?>">
									<div class="state">
										<i class="icon fal fa-times"></i>
										<label><?php echo $cat->name; ?></label>
									</div>
								</div>
								<?php endforeach; ?>
							</div>
							<?php else: ?>
							<?php endif; ?>
							<div class="col-12 pt-1">
								<input type="hidden" name="action" value="<?php echo $type; ?>_form">
								<?php wp_nonce_field( '<?php echo $type; ?>_form', '<?php echo $type; ?>_form_nonce' ); ?>
								<input type="hidden" name="subscribeHash" id="subscribeHash" value="<?php global $hashesForLashes; echo $hashesForLashes['subscribeHash']; ?>">
								<button type="button" disabled class="fake_btn_<?php echo $type; ?>_loading btn btn__default pink d-none disabled"><?= pll_e( 'Subscribing, please wait...' ); ?></button>
								<button type="button" class="fake_btn_<?php echo $type; ?> btn btn__default yellow"><?= pll_e( 'Subscribe now' ); ?></button>
								<button class="g-recaptcha <?php echo $type; ?> btn btn__default yellow d-none" data-sitekey="6LeA-gUaAAAAAE0620g-jcBqsq67NPiBtcj0NrCf" data-callback="onSubscribeSubmit"><?= pll_e( 'Subscribe now' ); ?></button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
