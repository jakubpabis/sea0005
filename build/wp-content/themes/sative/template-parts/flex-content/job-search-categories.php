<section class="flex_content-cta job-search-categories flex-section">
	<div class="container-fluid position-absolute h-100 left-0 d-none d-md-block">
		<div class="row">
			<div class="col-md-7 position-absolute h-100 p-0 left-0">
				<div class="flex_content-cta-bg left bg-yellow w-100 h-100"></div>
			</div>
		</div>
	</div>
	<div class="container py-md-5 py-sm-4 pt-4 pb-3">
		<div class="row align-items-center justify-content-between py-sm-5 pt-5 pb-3">
			<div class="col-md-7 col-11 px-lg-3 px-md-0">
				<div class="flex_content-cta-bg flex_content-cta-bg-inner left bg-yellow position-absolute d-block d-md-none"></div>
				<h5 class="text-uppercase position-relative">
					<?php echo get_sub_field('sub_title'); ?>
				</h5>
				<span class="display-3 d-block text700 mb-5 position-relative">
					<?php echo get_sub_field('title'); ?>
				</span>
				<div class="row">
					<div class="col-lg-9">
						<?php $lang = pll_current_language(); ?>
						<form action="<?php echo $lang === 'nl' ? '/nl/vacatures' : '/en/jobs'; ?>" method="GET" class="pb-3">
							<input class="mb-3 job-search-nice" type="search" name="job-title" placeholder="<?php pll_e('Waar ben jij naar op zoek?'); ?>">
							<?php if (!empty(get_sub_field('tags'))) : ?>
								<div class="mega-menu__hashtags">
									<?php foreach (get_sub_field('tags') as $item) : ?>
										<a href="<?php echo $item['link']['url']; ?>" class="font-primary pr-2 pb-2 d-inline-block text-italic text600">
											<?php echo $item['link']['title']; ?>
										</a>
									<?php endforeach; ?>
								</div>
							<?php endif; ?>
						</form>
						<a href="<?php echo get_sub_field('button')['url']; ?>" class="btn btn__default navy">
							<?php echo get_sub_field('button')['title']; ?>
						</a>
					</div>
				</div>
			</div>
			<div class="col-xl-4 col-md-5 pl-xl-3 pl-md-5 mt-5 mt-md-0 pt-4 pt-md-0">
				<h5 class="text-uppercase mb-md-5 mb-4">
					<?php echo get_sub_field('menu_title'); ?>
				</h5>
				<ul>
					<?php foreach (get_sub_field('menu_items') as $link) : ?>
						<li>
							<a href="<?php echo $link['link']['url']; ?>" class="h3 font-primary text500">
								<?php echo $link['link']['title']; ?>
								<svg height="18" width="34" xmlns="http://www.w3.org/2000/svg">
									<path d="M25.885.278l7.844 8.051a.947.947 0 01.078.091l-.078-.09a.95.95 0 01.236.412l.006.023A.895.895 0 0134 9l-.006.11-.002.011a.974.974 0 01-.02.114c-.003.007-.004.014-.006.022a.91.91 0 01-.159.323l-.01.013-.068.078-7.844 8.051a.91.91 0 01-1.307 0 .966.966 0 010-1.342l6.265-6.432H.924C.414 9.949 0 9.525 0 9s.414-.949.924-.949h29.92L24.578 1.62a.966.966 0 010-1.342.908.908 0 011.307 0z" fill="#183153" />
								</svg>
							</a>
						</li>
					<?php endforeach; ?>
				</ul>
			</div>
		</div>
	</div>
</section>