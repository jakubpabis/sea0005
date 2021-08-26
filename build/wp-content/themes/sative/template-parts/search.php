<div id="searchPopupModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="#searchPopupModalTitle" aria-hidden="true">
	<div class="modal-dialog modal-lg" role="document">
		<div class="modal-content py-5">
			<div class="modal-header d-flex">
				<span class="display-3 text700" id="uploadCVModalTitle"><?php pll_e('Search for a job!'); ?></span>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span class="text700 text-uppercase text-size-normal mr-2 font-primary">
						<?php pll_e('Sluiten'); ?>
					</span>
					<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M30.3884 34.2353L20.1176 23.9745L9.84745 34.2353L6 30.3939L16.2713 20.1321L16.2568 20.1171L16.2713 20.1027L6.00107 9.84138L9.84638 6L20.1176 16.2597L30.3889 6L34.2348 9.84138L23.964 20.1027L23.979 20.1171L23.964 20.1321L34.2353 30.3939L30.3884 34.2353ZM0 40H40V0H0V40Z" fill="#183153" />
					</svg>
				</button>
			</div>
			<div class="modal-container">
				<div class="modal-body pt-3">
					<div class="row justify-content-center">
						<div class="col-xl-8 col-lg-10">
							<form action="<?php echo getTplPageURL(); ?>" method="GET" class="pb-3">
								<input class="mb-3 job-search-nice" type="search" name="job-title" placeholder="<?php pll_e('Let me help you find the perfect job'); ?>">
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<script defer>
	jQuery(document).ready(function() {
		jQuery('#searchPopupModal').on('shown.bs.modal', function() {
			jQuery('#searchPopupModal').find('.job-search-nice').focus();
		});
	});
</script>