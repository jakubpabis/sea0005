<?php if (!empty(get_sub_field('images'))) : ?>
	<section class="flex_content flex-section py-5">
		<div class="container" style="z-index:9;">
			<div class="row">
				<?php if (!empty(get_sub_field('title'))) : ?>
					<div class="col-lg-6">
						<span class="display-3 d-block text700 mb-5">
							<?php echo get_sub_field('title'); ?>
						</span>
					</div>
				<?php endif; ?>
			</div>
		</div>
		<div class="container-fluid">
			<div class="row">
				<div class="col-lg-5 col-6 position-absolute px-0 right-0 h-100">
					<div class="flex_content-cta-bg slider right bg-yellow w-100"></div>
				</div>
				<div class="col-12">
					<!-- Slider main container -->
					<div class="swiper">
						<!-- Additional required wrapper -->
						<div class="swiper-wrapper">
							<!-- Slides -->
							<?php foreach (get_sub_field('images') as $item) : ?>
								<div class="swiper-slide"><img src="<?php echo $item['url']; ?>" alt="<?php echo $item['title']; ?>" loading="lazy"></div>
							<?php endforeach; ?>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-12 d-flex align-items-center justify-content-between mt-3 pb-5">
					<!-- If we need navigation buttons -->
					<div class="swiper-button-prev">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 18">
							<path fill="#183153" d="M8.115.278.271 8.329a.948.948 0 0 0-.078.091l.078-.09a.95.95 0 0 0-.236.412l-.006.023A.898.898 0 0 0 0 9l.006.11.002.011a.976.976 0 0 0 .02.114c.003.007.004.014.006.022a.911.911 0 0 0 .159.323l.01.013.068.078 7.844 8.051a.91.91 0 0 0 1.307 0 .966.966 0 0 0 0-1.342L3.157 9.948h29.919c.51 0 .924-.424.924-.948a.937.937 0 0 0-.924-.949H3.156L9.422 1.62a.966.966 0 0 0 0-1.342.908.908 0 0 0-1.307 0z" />
						</svg>
					</div>
					<div class="swiper-button-next">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 18">
							<path fill="#183153" d="m25.885.278 7.844 8.051a.947.947 0 0 1 .078.091l-.078-.09a.95.95 0 0 1 .236.412l.006.023A.895.895 0 0 1 34 9l-.006.11-.002.011a.974.974 0 0 1-.02.114c-.003.007-.004.014-.006.022a.91.91 0 0 1-.159.323l-.01.013-.068.078-7.844 8.051a.91.91 0 0 1-1.307 0 .966.966 0 0 1 0-1.342l6.265-6.432H.924C.414 9.949 0 9.525 0 9s.414-.949.924-.949h29.92L24.578 1.62a.966.966 0 0 1 0-1.342.908.908 0 0 1 1.307 0z" />
						</svg>
					</div>
				</div>
			</div>
		</div>
	</section>
<?php endif; ?>