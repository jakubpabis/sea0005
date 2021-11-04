<?php $lang = pll_current_language(); ?>
<?php get_template_part('template-parts/chat'); ?>
<footer class="footer">
	<div class="container-lg">
		<div class="row footer__upper">
			<div class="col">
				<a href="/" class="d-flex no-hover footer__upper-logo">
					<span class="display-3 text700">
						Search
					</span>
					<svg class="mx-sm-3 mx-2" width="50" height="50" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M13.365 15L9 10.64 4.635 15 3 13.367l4.365-4.36L7.36 9l.006-.006L3 4.633 4.635 3 9 7.36 13.365 3 15 4.633l-4.365 4.36.006.007-.006.006L15 13.367 13.365 15zM0 18h18V0H0v18z" fill="#FFFFFF" />
					</svg>
					<span class="display-3 text700">
						Recruitment
					</span>
				</a>
			</div>
		</div>
		<hr>
		<div class="row footer__middle justify-content-between">
			<div class="col-md-4 mb-5 order-sm-1 order-6">
				<?php if (get_field('contact_title_' . $lang, 'option')) : ?>
					<h5 class="text-uppercase">
						<?php echo get_field('contact_title_' . $lang, 'option'); ?>
					</h5>
				<?php endif; ?>
				<?php if (get_field('contact_text_' . $lang, 'option')) : ?>
					<div class="row">
						<div class="col-auto">
							<i class="fal fa-map-marker-alt"></i>
						</div>
						<div class="col pl-0">
							<?php echo get_field('contact_text_' . $lang, 'option'); ?>
						</div>
					</div>
				<?php endif; ?>
				<?php if (get_field('contact_text2_' . $lang, 'option')) : ?>
					<div class="row">
						<div class="col-auto">
							<i class="fal fa-map-marker-alt"></i>
						</div>
						<div class="col pl-0">
							<?php echo get_field('contact_text2_' . $lang, 'option'); ?>
						</div>
					</div>
				<?php endif; ?>
				<div class="mb-4 ml-4 pl-1 pt-3">
					<a href="https://www.facebook.com/searchxrecruitment" class="btn btn__social notched sea" target="_blank">
						<i class="fab fa-facebook-f"></i>
					</a>
					<a href="https://www.instagram.com/searchxrecruitment/" class="btn btn__social notched sea" target="_blank">
						<i class="fab fa-instagram"></i>
					</a>
					<a href="https://www.linkedin.com/company/search-x-recruitment" class="btn btn__social notched sea" target="_blank">
						<i class="fab fa-linkedin-in"></i>
					</a>
					<a href="https://twitter.com/searchxjobs" class="btn btn__social notched sea" target="_blank">
						<i class="fab fa-twitter"></i>
					</a>
				</div>
				<a href="/" class="mt-4 d-none">
					<svg width="205" viewBox="0 0 587.71 172.93" xmlns="http://www.w3.org/2000/svg">
						<g fill="#fff">
							<path d="m129.47 138.42v7.45c-6.42 0-10.19 3.94-10.19 10.1v16.19h-7.28v-33.23h7.28v5.4c2.4-3.68 5.91-5.91 10.19-5.91" />
							<path d="m139.66 152.38h19.7a10.18 10.18 0 0 0 -19.7 0zm27.4 5.91h-27.48a9.86 9.86 0 0 0 9.93 8c4.19 0 7.71-2 9.08-4.71h8c-2.4 6.68-8.91 11.3-17.13 11.3-10.1 0-17.72-7.45-17.72-17.38s7.62-17.38 17.72-17.38 17.81 7.45 17.81 17.47a14.84 14.84 0 0 1 -.17 2.74" />
							<path d="m171.6 155.55c0-9.85 7.62-17.39 17.81-17.39 8.74 0 15.67 5.57 17.3 13.53h-7.71a10.37 10.37 0 1 0 0 7.71h7.71c-1.63 8-8.56 13.53-17.3 13.53-10.19 0-17.81-7.54-17.81-17.38" />
							<path d="m230.6 138.42v7.45c-6.42 0-10.19 3.94-10.19 10.1v16.19h-7.28v-33.23h7.28v5.4c2.4-3.68 5.91-5.91 10.19-5.91" />
							<path d="m266.56 138.93v33.23h-7.27v-4.45a12.49 12.49 0 0 1 -10.62 5.22c-7.62 0-12.68-5.05-12.68-12.85v-21.15h7.28v19c0 4.71 3.09 8 7.71 8 5 0 8.31-3.26 8.31-8v-19z" />
							<path d="m275.21 138.93h7.28v33.23h-7.28zm-.94-10.19a4.67 4.67 0 0 1 9.33 0 4.62 4.62 0 0 1 -4.7 4.63 4.56 4.56 0 0 1 -4.63-4.63" />
							<path d="m302.19 145.61v19.87h8.65v6.68h-15.93v-26.55h-6.17v-6.68h6.17v-9.76h7.28v9.76h8.65v6.68z" />
							<path d="m369.64 150.57v21.51h-7.29v-19.4c0-4.56-2.9-7.55-7.37-7.55-4.66 0-7.91 3.07-7.91 7.64v19.23h-7.28v-19.41c0-4.56-2.9-7.55-7.38-7.55-4.65 0-7.9 3.07-7.9 7.64v19.23h-7.29v-33.19h7.29v4.28a12.12 12.12 0 0 1 10.27-5.09c5.18 0 9 2.37 11 6.41a12.77 12.77 0 0 1 11.59-6.41c7.46.18 12.29 5.18 12.29 12.64" />
							<path d="m383.67 152.34h19.74a10.2 10.2 0 0 0 -19.74 0zm27.36 6h-27.45a9.87 9.87 0 0 0 10 8c4.22 0 7.71-2 9.06-4.75h8c-2.42 6.72-8.88 11.3-17.13 11.3-10.05 0-17.67-7.45-17.67-17.4s7.62-17.41 17.67-17.41 17.76 7.45 17.76 17.49a15 15 0 0 1 -.18 2.79" />
							<path d="m449.21 151.21v20.95h-7.31v-18.48c0-5.12-3.3-8.5-8.23-8.5-5.31 0-8.79 3.47-8.79 8.6v18.38h-7.31v-33.16h7.31v4.66a13.44 13.44 0 0 1 11.12-5.43c8-.09 13.17 5.12 13.17 13" />
							<path d="m467.08 145.57v19.83h8.62v6.68h-15.95v-26.6h-6.2v-6.68h6.2v-9.73h7.33v9.73h8.62v6.68h-8.62" />
							<path d="m3.94 116.41v-11.56h43.76l7.45-7.62v-9.93l-7.88-7.88h-32.71l-14.56-14.21v-16.79l14.56-14.72h46.67v11.73h-40l-7.23 7.1v8l7.62 7.62h33.01l14.56 14.27v19.44l-14.39 14.55z" />
							<path d="m97.28 69.15h42.21v-15.67l-8.73-8.65h-24.84l-8.73 8.65v15.67zm2.72 47.26-16.6-16.61v-49.49l16.6-16.61h36.82l16.61 16.61v29.88h-56.07v15.93l8.73 8.73h46v11.56z" />
							<path d="m188.64 105.37h19.61l16.27-16.1v-14l-35.88.17-8.73 8.57v12.71zm-6.16 11-16.48-16.57v-18.8l16.44-16.61h42v-10.31l-8.44-8.65h-39.26v-11.73h45.26l16.44 16.61v66.1h-13.92v-12.76l-12.84 12.76h-29.2" />
							<path d="m256 116.41v-82.63h13.87v14.9l14.38-14.9h21.15v14h-20.6l-15 15.5v53.22z" />
							<path d="m332.77 116.45-16.64-16.55v-49.48l16.64-16.55h37.8l14.51 14.34v13.1h-13.89v-8.5l-7.88-7.87h-24.52l-8.67 8.67v42.49l8.67 8.85h45.5v11.5z" />
							<path d="m400 116.46v-116.46h13.88v46.94l12.69-13.15h30.43l16.48 16.57v66.1h-13.9v-62.58l-8.34-9h-21l-16.3 16.59v55h-13.94" />
							<path d="m567.75 104.47-21.91-21.91-21.92 21.91-8.22-8.22 21.92-21.91-21.92-21.92 8.22-8.22 21.92 21.92 21.91-21.92 8.25 8.22-21.95 21.92 21.95 21.91zm-63.89-72.1v83.84h83.85v-83.84z" />
						</g>
					</svg>
				</a>
			</div>
			<div class="col-md-4 col-sm-6 mb-5 px-xl-3 px-md-4 order-sm-6 order-1">
				<h5 class="text-uppercase">
					<?php echo get_field('job_categories_title_' . $lang, 'option'); ?>
				</h5>
				<ul class="footer__middle-ul">
					<?php foreach (get_field('job_categories_links_' . $lang, 'option') as $item) : ?>
						<li>
							<a href="<?php echo $item['link']['url']; ?>">
								<?php echo $item['link']['title']; ?>
								<svg viewbox="0 0 14 27" xmlns="http://www.w3.org/2000/svg">
									<path d="M25.885.278l7.844 8.051a.947.947 0 01.078.091l-.078-.09a.95.95 0 01.236.412l.006.023A.895.895 0 0134 9l-.006.11-.002.011a.974.974 0 01-.02.114c-.003.007-.004.014-.006.022a.91.91 0 01-.159.323l-.01.013-.068.078-7.844 8.051a.91.91 0 01-1.307 0 .966.966 0 010-1.342l6.265-6.432H.924C.414 9.949 0 9.525 0 9s.414-.949.924-.949h29.92L24.578 1.62a.966.966 0 010-1.342.908.908 0 011.307 0z" fill="#FFFFFF" />
								</svg>
							</a>
						</li>
					<?php endforeach; ?>
				</ul>
			</div>
			<div class="col-lg-3 col-md-4 col-sm-6 mb-5 pl-md-3 pl-sm-4 order-12">
				<h5 class="text-uppercase">
					<?php echo get_field('recent_title_' . $lang, 'option'); ?>
				</h5>
				<?php
				wp_reset_postdata();
				$args = array(
					'post_type' => 'jobs',
					'post_status' => 'publish',
					'posts_per_page' => 9
				);
				$query = new WP_Query($args);
				?>
				<?php if ($query->have_posts()) : ?>
					<ul>
						<?php while ($query->have_posts()) : $query->the_post(); ?>
							<li>
								<a href="<?php echo get_the_permalink(); ?>"><?php echo get_the_title(); ?></a>
							</li>
						<?php endwhile; ?>
					</ul>
				<?php endif; ?>
			</div>
		</div>
	</div>
	<div class="footer__lower">
		<div class="container-lg">
			<div class="row justify-content-sm-between justify-content-center">
				<div class="col-auto">
					<span>© Search X Recruitment - <?php echo date("Y"); ?></span> |
					<a href="/sitemap_index.xml"> Sitemap</a> |
					<a href="/<?php echo $lang; ?>/<?php pll_e('fulfilled-jobs'); ?>"> <?php pll_e('Fulfilled jobs'); ?></a>
				</div>
				<div class="col-auto mt-sm-0 mt-2">
					<span>
						Design by <a href="https://sumedia.nl/" target="blank"><strong>sumedia</strong></a>
					</span>
					<span class="sative">
						<a href="https://www.sative.co.uk" target="_blank">Made with <i class="fas fa-heart"></i> by <span>sative</span></a>
					</span>
				</div>
			</div>
		</div>
	</div>
</footer>