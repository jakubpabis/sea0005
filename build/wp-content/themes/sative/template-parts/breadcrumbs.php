<?php if (function_exists('bcn_display') && !is_home() && !is_front_page()) : ?>
	<aside class="breadcrumbs">
		<div class="container">
			<div class="row align-items-lg-center">
				<div class="col-auto pr-1">
					<a href="/"><i class="fal fa-home-lg-alt"></i></a>
				</div>
				<div class="col-auto breadcrumbs__list">
					<div class="breadcrumbs__items d-flex align-items-center">
						<i class="far fa-chevron-right"></i>
						<?php bcn_display(false, true, false, false); ?>
					</div>
				</div>
			</div>
		</div>
	</aside>
<?php endif; ?>
<?php if (isset($_GET['messagecv'])) : ?>
	<section id="messageAfterCvUpload" class="py-4 position-fixed" style="z-index:99;">
		<div class="container">
			<div class="row mb-5 mt-5">
				<div class="col-12 text-center">
					<button type="button" class="close position-absolute bg-white" aria-label="Close" style="z-index:99; opacity:1; right:15px; top:0;" onclick="document.getElementById('messageAfterCvUpload').remove();">
						<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M30.3884 34.2353L20.1176 23.9745L9.84745 34.2353L6 30.3939L16.2713 20.1321L16.2568 20.1171L16.2713 20.1027L6.00107 9.84138L9.84638 6L20.1176 16.2597L30.3889 6L34.2348 9.84138L23.964 20.1027L23.979 20.1171L23.964 20.1321L34.2353 30.3939L30.3884 34.2353ZM0 40H40V0H0V40Z" fill="#183153" />
						</svg>
					</button>
					<?php if ($_GET['messagecv'] === 'success') : ?>
						<div class="info card bg-yellow">
							<h2 class="color-navy">
								<?php echo pll_e('Congratulations! Your CV was successfully submitted!'); ?>
							</h2>
							<h3><?php pll_e('Get instant updates on the latest job openings?'); ?></h3>
							<div>
								<button type="button" class="btn btn__default btn__notched navy pleaseOpenSubscribeModalPopup"><?php pll_e('Sign up for the job alert'); ?></button>
							</div>
						</div>
					<?php else : ?>
						<div class="info card bg-pink">
							<h2 class="color-navy">
								<?php echo pll_e('Sorry, there was a problem with your application, please try again later...'); ?>
							</h2>
						</div>
					<?php endif; ?>
				</div>
			</div>
		</div>
	</section>
<?php endif; ?>
<?php if (isset($_GET['messagesb'])) : ?>
	<section id="messageAfterSubscribeForm" class="py-4 position-fixed" style="z-index:99;">
		<div class="container">
			<div class="row mb-5 mt-5">
				<div class="col-12 text-center">
					<button type="button" class="close position-absolute bg-white" aria-label="Close" style="z-index:99; opacity:1; right:15px; top:0;" onclick="document.getElementById('messageAfterSubscribeForm').remove();">
						<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M30.3884 34.2353L20.1176 23.9745L9.84745 34.2353L6 30.3939L16.2713 20.1321L16.2568 20.1171L16.2713 20.1027L6.00107 9.84138L9.84638 6L20.1176 16.2597L30.3889 6L34.2348 9.84138L23.964 20.1027L23.979 20.1171L23.964 20.1321L34.2353 30.3939L30.3884 34.2353ZM0 40H40V0H0V40Z" fill="#183153" />
						</svg>
					</button>
					<?php if ($_GET['messagesb'] === 'success') : ?>
						<div class="info card bg-yellow">
							<h2 class="color-navy">
								<?php echo pll_e('Congratulations! You subscribed to our job alert!'); ?>
							</h2>
							<?php setcookie('subscribe_popup', true, get_field('subscribe_popup_cookie', 'option'), '/'); ?>
						</div>
					<?php else : ?>
						<div class="info card bg-pink">
							<h2 class="color-navy">
								<?php echo pll_e('Sorry, there was a problem with your subscribtion, please try again later...'); ?>
							</h2>
						</div>
					<?php endif; ?>
				</div>
			</div>
		</div>
	</section>
<?php endif; ?>
<?php if (isset($_GET['messagect'])) : ?>
	<section id="messageAfterContactForm" class="py-4 position-fixed" style="z-index:99;">
		<div class="container">
			<div class="row">
				<div class="col-12 text-center">
					<button type="button" class="close position-absolute bg-white" aria-label="Close" style="z-index:99; opacity:1; right:15px; top:0;" onclick="document.getElementById('messageAfterContactForm').remove();">
						<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M30.3884 34.2353L20.1176 23.9745L9.84745 34.2353L6 30.3939L16.2713 20.1321L16.2568 20.1171L16.2713 20.1027L6.00107 9.84138L9.84638 6L20.1176 16.2597L30.3889 6L34.2348 9.84138L23.964 20.1027L23.979 20.1171L23.964 20.1321L34.2353 30.3939L30.3884 34.2353ZM0 40H40V0H0V40Z" fill="#183153" />
						</svg>
					</button>
					<?php if ($_GET['messagect'] === 'robot') : ?>
						<div class="info card bg-yellow">
							<h2 class="color-navy">
								<?php echo pll_e('Sorry, it looks like you’re a robot...'); ?>
							</h2>
						</div>
					<?php elseif ($_GET['messagect'] === 'success') : ?>
						<div class="info card bg-yellow">
							<h2 class="color-navy">
								<?php echo pll_e('Thank you! You’re message was sent successfully!'); ?>
							</h2>
						</div>
					<?php else : ?>
						<div class="info card bg-pink">
							<h2 class="color-navy">
								<?php echo pll_e('Sorry, there was a problem with your message, please try again later...'); ?>
							</h2>
						</div>
					<?php endif; ?>
				</div>
			</div>
		</div>
	</section>
<?php endif; ?>