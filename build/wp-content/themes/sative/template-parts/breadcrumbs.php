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
	<section class="bg-sea py-4">
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
		</div>
	</section>
<?php endif; ?>
<?php if (isset($_GET['messagesb'])) : ?>
	<section class="bg-sea py-4">
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
		</div>
	</section>
<?php endif; ?>
<?php if (isset($_GET['messagect'])) : ?>
	<section class="bg-sea py-4">
		<div class="container">
			<div class="row">
				<div class="col-12 text-center">
					<?php if ($_GET['messagect'] === 'robot') : ?>
						<div class="info card bg-yellow">
							<h2 class="color-navy">
								<?= pll_e('Sorry, it looks like you’re a robot...'); ?>
							</h2>
						</div>
					<?php elseif ($_GET['messagect'] === 'success') : ?>
						<div class="info card bg-yellow">
							<h2 class="color-navy">
								<?= pll_e('Thank you! You’re message was sent successfully!'); ?>
							</h2>
						</div>
					<?php else : ?>
						<div class="info card bg-pink">
							<h2 class="color-navy">
								<?= pll_e('Sorry, there was a problem with your message, please try again later...'); ?>
							</h2>
						</div>
					<?php endif; ?>
				</div>
			</div>
		</div>
	</section>
<?php endif; ?>