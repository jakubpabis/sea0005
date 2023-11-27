<section class="flex_content-video_section mt-5">
	<div class="container position-absolute h-100 right-0">
		<div class="row">
			<div class="col-lg-11 position-absolute h-100 p-0 right-0">
				<div class="flex_content-video_section-dog right bg-yellow w-100 h-100">
					<svg class="flip-vertical" viewBox="0 0 649.89 364.92" xmlns="http://www.w3.org/2000/svg">
						<path d="m484.2 0-28 28.09v138.59h41.45l25.37-25.37v-62h-10.23v57.79l-19.43 19.42h-27v-124l22-22.15h151.14v42.84l-26.11 26.11h-79.19v99h-363.44l-107.65 107.52h-63.11v10.28h67.44l107.66-107.54h359.1v91.94l-37.87 46.28 26.85 27.72h-56.8v-72.26h-233.25l-46.53 44.42 26.73 27.72h-64.22v-117.4h-10.27v127.79h98.75l-36.39-37.74 36-34.4h218.9v72.27h91.33l-37.25-38.49 34.4-41.95v-194.64h73.13l32.17-32.05v-57.3h-165.68" fill="#FFFFFF" />
						<g class="bowtie" fill="#EC6278">
							<path d="m555.61 206.72-23.4-23.39 23.4-23.4 7.22 7.22-16.18 16.18 16.18 16.17z" />
							<path d="m523.25 206.72-7.25-7.22 16.17-16.17-16.17-16.18 7.21-7.22 23.4 23.4-23.4 23.39" />
						</g>
					</svg>
				</div>
			</div>
		</div>
	</div>
	<div class="container">
		<div class="row">
			<div class="col-12 pb-xl-4 pb-lg-3 pb-md-2 pt-5">
				<span class="display-2 text700">
					<?php echo get_sub_field('title'); ?>
				</span>
			</div>
			<div class="offset-lg-1 col-lg-9">
				<h2>
					<?php echo get_sub_field('sub_title'); ?>
				</h2>
			</div>
			<?php if (!empty(get_sub_field('links'))) : ?>
				<div class="offset-lg-1 col-lg-9 pt-5 pb-5">
					<div class="row pb-5">
						<?php foreach (get_sub_field('links') as $item) : ?>
							<div class="col-lg-4 mb-4">
								<div class="card-notched d-flex flex-column justify-content-between align-items-stretch h-100">
									<h3 class="font-primary text700 mt-0 d-block mx-0">
										<?php echo $item['link']['title']; ?>
									</h3>
									<svg height="18" width="34" xmlns="http://www.w3.org/2000/svg">
										<path d="M25.885.278l7.844 8.051a.947.947 0 01.078.091l-.078-.09a.95.95 0 01.236.412l.006.023A.895.895 0 0134 9l-.006.11-.002.011a.974.974 0 01-.02.114c-.003.007-.004.014-.006.022a.91.91 0 01-.159.323l-.01.013-.068.078-7.844 8.051a.91.91 0 01-1.307 0 .966.966 0 010-1.342l6.265-6.432H.924C.414 9.949 0 9.525 0 9s.414-.949.924-.949h29.92L24.578 1.62a.966.966 0 010-1.342.908.908 0 011.307 0z" fill="#183153" />
									</svg>
									<a href="<?php echo $item['link']['url']; ?>" class="whole-element-link"></a>
								</div>
							</div>
						<?php endforeach; ?>
					</div>
				</div>
			<?php endif; ?>
		</div>
	</div>
</section>