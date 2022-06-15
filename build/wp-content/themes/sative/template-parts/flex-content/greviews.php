<?php if (!empty(get_sub_field('testimonials'))) : ?>
	<section class="flex_content-reviews flex-section">
		<div class="container">
			<div class="row mb-5">
				<div class="col-lg-8">
					<h5 class="text-uppercase text700">
						<?php if (!empty(get_sub_field('sub_title'))) : ?>
							<?php echo get_sub_field('sub_title'); ?>
						<?php endif; ?>
					</h5>
					<span class="display-3 text900">
						<?php if (!empty(get_sub_field('title'))) : ?>
							<?php echo get_sub_field('title'); ?>
						<?php endif; ?>
					</span>
				</div>
			</div>

			<?php if (!empty(get_sub_field('testimonials'))) : ?>
				<div class="quote-arrows">
					<div class="custom-owl-prev-quote" role="button">
						<svg width="34" height="18" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.115.278L.271 8.329a.948.948 0 00-.078.091l.078-.09a.95.95 0 00-.236.412l-.006.023A.898.898 0 000 9l.006.11.002.011a.976.976 0 00.02.114c.003.007.004.014.006.022a.911.911 0 00.159.323l.01.013.068.078 7.844 8.051a.91.91 0 001.307 0 .966.966 0 000-1.342L3.157 9.948h29.919c.51 0 .924-.424.924-.948a.937.937 0 00-.924-.949H3.156L9.422 1.62a.966.966 0 000-1.342.908.908 0 00-1.307 0z" fill="#183153" />
						</svg>
						<span class="sr-only">Previous</span>
					</div>
					<div class="custom-owl-next-quote" role="button">
						<svg width="34" height="18" xmlns="http://www.w3.org/2000/svg">
							<path d="M25.885.278l7.844 8.051a.947.947 0 01.078.091l-.078-.09a.95.95 0 01.236.412l.006.023A.895.895 0 0134 9l-.006.11-.002.011a.974.974 0 01-.02.114c-.003.007-.004.014-.006.022a.91.91 0 01-.159.323l-.01.013-.068.078-7.844 8.051a.91.91 0 01-1.307 0 .966.966 0 010-1.342l6.265-6.432H.924A.937.937 0 010 9c0-.524.414-.949.924-.949h29.92L24.578 1.62a.966.966 0 010-1.342.908.908 0 011.307 0z" fill="#183153" />
						</svg>
						<span class="sr-only">Next</span>
					</div>
				</div>

				<div class="owl-carousel owl-center owl-theme quote-carousel">

					<?php foreach (get_sub_field('testimonials') as $item) : ?>
						<div class="quote">
							<div class="row">
								<div class="col-lg-2">
									<svg width="58" height="35" xmlns="http://www.w3.org/2000/svg">
										<path d="M20.52 34.32L28.92 0h-15L0 34.32h20.52zm28.92 0L57.84 0h-15l-13.8 34.32h20.4z" fill="#EC6278" />
									</svg>
								</div>
								<div class="col-lg-10">
									<div class="h3 font-primary text400">
										<?php echo $item['testimonial']; ?>
									</div>
									<p class="h4 font-primary text700">
										<?php echo $item['testimonial_author']; ?>
									</p>
								</div>
							</div>
						</div>
					<?php endforeach; ?>
				</div>
			<?php endif; ?>

			<img class="dog d-none d-md-block" src="<?php echo get_template_directory_uri(); ?>/assets/img/down-dog.png" alt="">
		</div>
	</section>
<?php else : ?>
	<section class="flex_content-reviews flex-section">
		<div class="container">
			<div class="row mb-5">
				<?php if (get_sub_field('image') && get_sub_field('image')['url']) : ?>
					<div class="col text-right d-block d-lg-none">
						<a href="https://goo.gl/maps/HFFmkqwHAdMfu4iG8" target="_blank">
							<img class="lazy" data-src="<?php echo get_sub_field('image')['url']; ?>" alt="<?php echo get_sub_field('image')['title']; ?>">
						</a>
					</div>
				<?php endif; ?>
				<div class="col-lg-8">
					<h5 class="text-uppercase text700">
						<?php echo get_sub_field('sub_title'); ?>
					</h5>
					<span class="display-3 text900">
						<?php echo get_sub_field('title'); ?>
					</span>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-1">
					<svg width="58" height="35" xmlns="http://www.w3.org/2000/svg">
						<path d="M20.52 34.32L28.92 0h-15L0 34.32h20.52zm28.92 0L57.84 0h-15l-13.8 34.32h20.4z" fill="#EC6278" />
					</svg>
				</div>
				<div class="col-lg-6">
					<div class="h3 font-primary text400">
						<?php echo get_sub_field('testimonial'); ?>
					</div>
					<p class="h4 font-primary text700">
						<?php echo get_sub_field('testimonial_author'); ?>
					</p>
				</div>
				<?php if (get_sub_field('image') && get_sub_field('image')['url']) : ?>
					<div class="col-lg-4 offset-lg-1 d-lg-block d-none">
						<a href="https://goo.gl/maps/HFFmkqwHAdMfu4iG8" target="_blank">
							<img class="lazy" data-src="<?php echo get_sub_field('image')['url']; ?>" alt="<?php echo get_sub_field('image')['title']; ?>">
						</a>
					</div>
				<?php endif; ?>
			</div>
		</div>
	</section>
<?php endif; ?>


<?php if (!empty(get_sub_field('logotypes'))) : ?>
	<section class="flex_content-carousel">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="owl-carousel owl-center owl-theme">
						<?php foreach (get_sub_field('logotypes') as $item) : ?>
							<img class="owl-lazy" data-src="<?php echo $item['image']['url']; ?>" alt="<?php echo $item['image']['title']; ?>">
						<?php endforeach; ?>
					</div>
					<div class="custom-owl-prev" role="button">
						<svg width="34" height="18" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.115.278L.271 8.329a.948.948 0 00-.078.091l.078-.09a.95.95 0 00-.236.412l-.006.023A.898.898 0 000 9l.006.11.002.011a.976.976 0 00.02.114c.003.007.004.014.006.022a.911.911 0 00.159.323l.01.013.068.078 7.844 8.051a.91.91 0 001.307 0 .966.966 0 000-1.342L3.157 9.948h29.919c.51 0 .924-.424.924-.948a.937.937 0 00-.924-.949H3.156L9.422 1.62a.966.966 0 000-1.342.908.908 0 00-1.307 0z" fill="#183153" />
						</svg>
						<span class="sr-only">Previous</span>
					</div>
					<div class="custom-owl-next" role="button">
						<svg width="34" height="18" xmlns="http://www.w3.org/2000/svg">
							<path d="M25.885.278l7.844 8.051a.947.947 0 01.078.091l-.078-.09a.95.95 0 01.236.412l.006.023A.895.895 0 0134 9l-.006.11-.002.011a.974.974 0 01-.02.114c-.003.007-.004.014-.006.022a.91.91 0 01-.159.323l-.01.013-.068.078-7.844 8.051a.91.91 0 01-1.307 0 .966.966 0 010-1.342l6.265-6.432H.924A.937.937 0 010 9c0-.524.414-.949.924-.949h29.92L24.578 1.62a.966.966 0 010-1.342.908.908 0 011.307 0z" fill="#183153" />
						</svg>
						<span class="sr-only">Next</span>
					</div>
				</div>
			</div>
		</div>
	</section>
<?php endif; ?>