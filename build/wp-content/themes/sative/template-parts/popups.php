<?php
global $post;
$id = $post->ID;
$sub_pages = get_field('subscribe_popup_on_pages', 'option');
$con_pages = get_field('contact_popup_on_pages', 'option');
$lang = pll_current_language();
$type = false;
if (!empty($sub_pages) && in_array($id, $sub_pages)) {
	$type = 'subscribe';
}
if (!empty($con_pages) && in_array($id, $con_pages)) {
	$type = 'contact';
}
?>

<?php if ($type) : ?>
	<?php if ($type === 'contact') : ?>
		<div id="<?php echo $type; ?>PopupModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="<?php echo $type; ?>PopupModalTitle" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered" role="document">
				<div class="modal-content py-5">
					<div class="modal-header d-flex">
						<?php if (get_field($type . '_popup_title_' . $lang, 'option')) : ?>
							<span class="display-4 text700 pr-4 lh-1" id="<?php echo $type; ?>PopupModalTitle">
								<?php echo get_field($type . '_popup_title_' . $lang, 'option'); ?>
							</span>
						<?php endif; ?>
						<button type="button" class="close d-flex align-items-center" data-dismiss="modal" aria-label="Close">
							<span class="text700 text-uppercase text-size-normal mr-2 font-primary">
								<?php pll_e('Sluiten'); ?>
							</span>
							<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M30.3884 34.2353L20.1176 23.9745L9.84745 34.2353L6 30.3939L16.2713 20.1321L16.2568 20.1171L16.2713 20.1027L6.00107 9.84138L9.84638 6L20.1176 16.2597L30.3889 6L34.2348 9.84138L23.964 20.1027L23.979 20.1171L23.964 20.1321L34.2353 30.3939L30.3884 34.2353ZM0 40H40V0H0V40Z" fill="#183153" />
							</svg>
						</button>
					</div>

					<div class="modal-body pt-3">
						<?php if (get_field($type . '_popup_text_' . $lang, 'option')) : ?>
							<p class="mt-0 mb-2">
								<?php echo get_field($type . '_popup_text_' . $lang, 'option'); ?>
							</p>
						<?php endif; ?>
						<?php if (get_field($type . '_popup_form_' . $lang, 'option')) : ?>
							<?php echo get_field($type . '_popup_form_' . $lang, 'option'); ?>
						<?php else : ?>
							<form method="POST" action="<?php echo esc_url(admin_url('admin-post.php')); ?>" accept-charset="UTF-8" role="form" id="<?php echo $type; ?>-popup-form" enctype="multipart/form-data">
								<div class="row align-items-center">
									<div class="col-md-6 ugly pt-2 pb-3">
										<input class="required" type="text" name="<?php echo $type; ?>_name" minlength="2" required>
										<label class="ugly-label" for="<?php echo $type; ?>_name"><?php echo pll_e('Name'); ?> <span>*</span></label>
									</div>
									<div class="col-md-6 ugly pt-2 pb-3">
										<input type="text" name="<?php echo $type; ?>_company" minlength="1">
										<label class="ugly-label" for="<?php echo $type; ?>_company"><?php echo pll_e('Company'); ?></label>
									</div>
									<div class="col-md-6 ugly pt-2 pb-3">
										<input class="required" type="email" name="<?php echo $type; ?>_email" minlength="4" required>
										<label class="ugly-label" for="<?php echo $type; ?>_email"><?php echo pll_e('Email address'); ?> <span>*</span></label>
									</div>
									<div class="col-md-6 ugly pt-2 pb-3">
										<input type="tel" name="<?php echo $type; ?>_phone" minlength="6">
										<label class="ugly-label" for="<?php echo $type; ?>_phone"><?php echo pll_e('Phone'); ?></label>
									</div>
									<div class="col-12 ugly pt-2 pb-3">
										<textarea class="required" name="<?php echo $type; ?>_message" minlength="10" rows="6" required></textarea>
										<label class="ugly-label" for="<?php echo $type; ?>_message"><?php echo pll_e('Message'); ?> <span>*</span></label>
									</div>
									<div class="col-12 pt-1">
										<input type="hidden" name="lang" value="<?php echo pll_current_language(); ?>">
										<input type="hidden" name="action" value="<?php echo $type; ?>_form">
										<?php wp_nonce_field('<?php echo $type; ?>_form', '<?php echo $type; ?>_form_nonce'); ?>
										<input type="hidden" name="contactHash" id="contactHash" value="<?php global $hashesForLashes;
																																										echo $hashesForLashes['contactHash']; ?>">
										<button type="button" disabled class="fake_btn_<?php echo $type; ?>_loading btn btn__default pink d-none disabled"><?php echo pll_e('Sending, please wait...'); ?></button>
										<button type="button" class="fake_btn_<?php echo $type; ?> btn btn__default yellow"><?php echo pll_e('Send message'); ?></button>
										<button class="g-recaptcha contactF btn btn__default yellow d-none" data-sitekey="6LeA-gUaAAAAAE0620g-jcBqsq67NPiBtcj0NrCf" data-callback="onContactSubmit"><?php echo pll_e('Send message'); ?></button>
									</div>
								</div>
							</form>
						<?php endif; ?>
					</div>

				</div>
			</div>
		</div>
		<script>
			document.addEventListener('DOMContentLoaded', function() {
				if (!getCookie('contactPopup') || getCookie('contactPopup') === false) {
					setTimeout(function() {
						jQuery('#<?php echo $type; ?>PopupModal').modal({
								backdrop: 'static',
								keyboard: false
							},
							'show'
						);
						setCookie('contactPopup', true, 365);
					}, parseInt(<?php echo get_field($type . '_popup_timeout', 'option'); ?>));
				}
			});
		</script>
	<?php endif; ?>
<?php endif; ?>

<?php
$type = 'subscribe';
$api_key_groups = '6KlPHA3GzUs0Mt5ZMzIA7fBJKhvXsF37IQd3zaBj&include=groups';

$board = getRequestToken('v2/job_boards/categories', $api_key_groups);
$groups = [];
foreach ($board->groups as $group) {
	if ($group->name !== '#2 Skill Area' && $group->name !== '#1 Availability') {
		$groups[] = ['id' => $group->id, 'name' => explode('Skill', $group->name)[1] ?? '', 'categories' => []];
	}
}

foreach ($board->categories as $category) {
	foreach ($groups as $key => $group) {
		if ($category->parent_category_id == $group['id']) {
			// NOTE: Assuming that $category is also an object. If it's an array, this line doesn't need modification.
			$groups[$key]['categories'][] = $category;
		}
	}
}

usort($groups, function ($a, $b) {
	return strcmp($a['name'], $b['name']);
});

// Sorting inner categories
foreach ($groups as $key => &$group) {  // using & for reference
	usort($group['categories'], function ($a, $b) {
		// NOTE: Assuming that category_name is a property of $category. Adjust if this isn't correct.
		return strcmp($a->name, $b->name);
	});
}
unset($group);
?>
<div id="<?php echo $type; ?>PopupModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="<?php echo $type; ?>PopupModalTitle" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered" role="document">
		<div class="modal-content py-5">
			<div class="modal-header d-flex">
				<?php if (get_field($type . '_popup_title_' . $lang, 'option')) : ?>
					<span class="display-4 text700 pr-4 lh-1" id="<?php echo $type; ?>PopupModalTitle">
						<?php echo get_field($type . '_popup_title_' . $lang, 'option'); ?>
					</span>
				<?php endif; ?>
				<button type="button" class="close d-flex align-items-center" data-dismiss="modal" aria-label="Close">
					<span class="text700 text-uppercase text-size-normal mr-2 font-primary">
						<?php pll_e('Sluiten'); ?>
					</span>
					<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M30.3884 34.2353L20.1176 23.9745L9.84745 34.2353L6 30.3939L16.2713 20.1321L16.2568 20.1171L16.2713 20.1027L6.00107 9.84138L9.84638 6L20.1176 16.2597L30.3889 6L34.2348 9.84138L23.964 20.1027L23.979 20.1171L23.964 20.1321L34.2353 30.3939L30.3884 34.2353ZM0 40H40V0H0V40Z" fill="#183153" />
					</svg>
				</button>
			</div>
			<div class="modal-body pt-3">
				<?php if (get_field($type . '_popup_text_' . $lang, 'option')) : ?>
					<p class="mt-0 mb-2">
						<?php echo get_field($type . '_popup_text_' . $lang, 'option'); ?>
					</p>
				<?php endif; ?>
				<form method="POST" action="<?php echo esc_url(admin_url('admin-post.php')); ?>" accept-charset="UTF-8" role="form" id="<?php echo $type; ?>-popup-form" enctype="multipart/form-data">
					<div class="row align-items-center">
						<?php if ($type === 'subscribe') : ?>
							<div class="col-12">
								<div class="ugly pb-2">
									<input class="required" type="email" name="<?php echo $type; ?>_email" minlength="4" required>
									<label class="ugly-label" for="<?php echo $type; ?>_email"><?php echo pll_e('Email address'); ?> <span>*</span></label>
								</div>
							</div>
							<div class="col-12 pt-2">
								<h5><?php echo pll_e('Choose your interest'); ?></h5>
							</div>
							<div class="col-12 pb-3">
								<select class="w-100 required" multiple required name="<?php echo $type; ?>_checkbox[]">
									<?php foreach ($groups as $group) : ?>
										<optgroup label="<?php echo $group['name']; ?>">
											<?php foreach ($group['categories'] as $cat) : ?>
												<option value="<?php echo $cat->id; ?>"><?php echo $cat->name; ?></option>
											<?php endforeach; ?>
										</optgroup>
									<?php endforeach; ?>
								</select>
							</div>
						<?php endif; ?>
						<div class="col-12 pt-1">
							<input type="hidden" name="lang" value="<?php echo pll_current_language(); ?>">
							<input type="hidden" name="action" value="<?php echo $type; ?>_form">
							<?php wp_nonce_field('<?php echo $type; ?>_form', '<?php echo $type; ?>_form_nonce'); ?>
							<input type="hidden" name="subscribeHash" id="subscribeHash" value="<?php global $hashesForLashes;
																																									echo $hashesForLashes['subscribeHash']; ?>">
							<button type="button" disabled class="fake_btn_<?php echo $type; ?>_loading btn btn__default pink d-none disabled"><?php echo pll_e('Subscribing, please wait...'); ?></button>
							<button type="button" class="fake_btn_<?php echo $type; ?> btn btn__default yellow"><?php echo pll_e('Subscribe now'); ?></button>
							<button class="g-recaptcha <?php echo $type; ?> btn btn__default yellow d-none" data-sitekey="6LdyeiQhAAAAAMsMwMmCkriZI74RsG7oPP5nqWoV" data-callback="onSubscribeSubmit"><?php echo pll_e('Subscribe now'); ?></button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>

<div id="pleaseAddCookiesScriptForPopups" data-popupName="<?php echo $type; ?>" data-popupCookie="<?php echo get_field($type . '_popup_cookie', 'option'); ?>" data-popupCookieTime="<?php echo get_field($type . '_popup_timeout', 'option'); ?>" class="d-none">

	<script>
		document.addEventListener('DOMContentLoaded', function() {
			var form = document.getElementById('<?php echo $type; ?>-popup-form');
			form.addEventListener('submit', function(event) {
				event.preventDefault(); // This prevents the form from submitting
			});
			if (getCookie('jobsAlertPopup') && parseInt(getCookie('jobsAlertPopup')) >= 3) {
				setTimeout(function() {
					jQuery('#subscribePopupModal').modal({
							backdrop: 'static',
							keyboard: false
						},
						'show'
					);
					setCookie('jobsAlertPopup', false, 365);
				}, 5000);
			}
		});
	</script>
</div>