<?php if (function_exists('bcn_display') && !is_home()) : ?>
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
						<?php /* $breadcrumbs = yoast_breadcrumb('','',false); 
                    $breadcrumbs = str_replace("<span>","",$breadcrumbs);
                    $breadcrumbs = str_replace("</span>","",$breadcrumbs);
                    echo $breadcrumbs;
               */ ?>
					</div>
				</div>
			</div>
		</div>
	</aside>
<?php endif; ?>
<?php if (isset($_GET['messagecv'])) : ?>
	<div class="container">
		<div class="row mb-5 mt-5">
			<div class="col-12 text-center">
				<?php if ($_GET['messagecv'] === 'success') : ?>
					<div class="info card bg-yellow">
						<h2 class="color-navy">
							<?= pll_e('Congratulations! Your CV was successfully submitted!'); ?>
						</h2>
					<?php else : ?>
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
	<?php if (isset($_GET['messagesb'])) : ?>
		<div class="container">
			<div class="row mb-5 mt-5">
				<div class="col-12 text-center">
					<?php if ($_GET['messagesb'] === 'success') : ?>
						<div class="info card bg-yellow">
							<h2 class="color-navy">
								<?= pll_e('Congratulations! You subscribe to our newsletter!'); ?>
							</h2>
							<?php setcookie('subscribe_popup', true, get_field('subscribe_popup_cookie', 'option'), '/'); ?>
						<?php else : ?>
							<div class="info card bg-pink">
								<h2 class="color-navy">
									<?= pll_e('Sorry, there was a problem with your subscribtion, please try again later...'); ?>
								</h2>
							<?php endif; ?>
							</div>
						</div>
				</div>
			</div>
		<?php endif; ?>
		<?php if (isset($_GET['messagect'])) : ?>
			<div class="container">
				<div class="row mb-5 mt-5">
					<div class="col-12 text-center">
						<?php if ($_GET['messagect'] === 'success') : ?>
							<div class="info card bg-yellow">
								<h2 class="color-navy">
									<?= pll_e('Thank you! You’re message was sent successfully!'); ?>
								</h2>
								<?php setcookie('contact_popup', true, get_field('contact_popup_cookie', 'option'), '/'); ?>
							<?php else : ?>
								<div class="info card bg-pink">
									<h2 class="color-navy">
										<?= pll_e('Sorry, there was a problem with your message, please try again later...'); ?>
									</h2>
								<?php endif; ?>
								</div>
							</div>
					</div>
				</div>
			<?php endif; ?>