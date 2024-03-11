<section class="flex-section articles-slider articles-slider--videos ">

	<div class="container">
		<div class="row justify-content-center">
			<div class="col-lg-10">
				<div class="video-arrows">
					<div class="custom-owl-prev-video" role="button">
						<svg width="34" height="18" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.115.278L.271 8.329a.948.948 0 00-.078.091l.078-.09a.95.95 0 00-.236.412l-.006.023A.898.898 0 000 9l.006.11.002.011a.976.976 0 00.02.114c.003.007.004.014.006.022a.911.911 0 00.159.323l.01.013.068.078 7.844 8.051a.91.91 0 001.307 0 .966.966 0 000-1.342L3.157 9.948h29.919c.51 0 .924-.424.924-.948a.937.937 0 00-.924-.949H3.156L9.422 1.62a.966.966 0 000-1.342.908.908 0 00-1.307 0z" fill="#183153" />
						</svg>
						<span class="sr-only">Previous</span>
					</div>
					<div class="custom-owl-next-video" role="button">
						<svg width="34" height="18" xmlns="http://www.w3.org/2000/svg">
							<path d="M25.885.278l7.844 8.051a.947.947 0 01.078.091l-.078-.09a.95.95 0 01.236.412l.006.023A.895.895 0 0134 9l-.006.11-.002.011a.974.974 0 01-.02.114c-.003.007-.004.014-.006.022a.91.91 0 01-.159.323l-.01.013-.068.078-7.844 8.051a.91.91 0 01-1.307 0 .966.966 0 010-1.342l6.265-6.432H.924A.937.937 0 010 9c0-.524.414-.949.924-.949h29.92L24.578 1.62a.966.966 0 010-1.342.908.908 0 011.307 0z" fill="#183153" />
						</svg>
						<span class="sr-only">Next</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="owl-carousel owl-theme video-cards">
		<?php foreach (get_sub_field('videos') as $item) : ?>
			<div class="item d-flex h-100 w-100">

				<div class="card nothed w-100">

					<div class="caption" style="background-color: <?= $item['slide_color'] ?>;">
						<h3><?= $item['text'] ?></h3>
					</div>

					<div class="card-body p-lg-4 p-md-2 p-0">
						<div class="overlay"></div>

						<span class="border" style="background-color: <?= $item['slide_color'] ?>;"></span>

						<img class="video-placeholder" src="<?php echo $item['video_placeholder']['url']; ?>" alt="<?php echo $item['video_placeholder']['title']; ?>" loading="lazy">

						<video class="video" controls src="<?php echo $item['video']['url']; ?>"></video>

						<img class="play-video" src="<?php echo get_template_directory_uri(); ?>/assets/img/play-video.svg" alt="" loading="lazy">
					</div>
				</div>

				<div class="triangle"></div>
			</div>
		<?php endforeach; ?>
	</div>
	<div class="row d-block d-lg-none mt-5 pt-4">
		<div class="col-auto">
			<?php if (get_sub_field('link')) : ?>
				<a href="<?php echo get_sub_field('link')['url']; ?>" class="btn btn__default navy">
					<?php echo get_sub_field('link')['title']; ?>
				</a>
			<?php endif; ?>
		</div>
	</div>
</section>