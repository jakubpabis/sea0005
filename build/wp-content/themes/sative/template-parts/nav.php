<?php $lang = pll_current_language();
if ($lang === 'en') {
	$menu_items = 'menu_items_en';
	$upper_item = 'upper_menu_en';
} else {
	$menu_items = 'menu_items';
	$upper_item = 'upper_menu';
}
?>
<nav class="navigation">
	<div class="navigation__upper">
		<div class="container-xl">
			<div class="row justify-content-between align-items-center">
				<div class="col-md-auto">
					<ul class="lang d-none d-md-flex">
						<?php
						pll_the_languages(array(
							'show_names' => 0,
							'display_names_as' => 'slug'
						));
						?>
					</ul>
				</div>
				<div class="col-md-10">
					<div class="row justify-content-end align-items-center">
						<?php if (get_field($upper_item, 'option')) : ?>
							<div class="col-lg-auto py-2">
								<a href="<?php echo get_field($upper_item, 'option')['url']; ?>">
									<?php echo get_field($upper_item, 'option')['title']; ?>
								</a>
							</div>
						<?php endif; ?>
						<div class="col-lg-auto py-2 pl-4">
							<a href="mailto:info@searchxrecruitment.com"><i class="far fa-envelope"></i>info@searchxrecruitment.com</a>
						</div>
						<div class="col-lg-auto py-2 pl-4">
							<a href="tel:+31207782393"><i class="far fa-phone-alt"></i>+31 (0)20 - 7782393</a>
						</div>
						<div class="col-lg-auto py-2 pl-4">
							<a href="https://wa.me/31207782393" target="_blank"><i class="fab fa-whatsapp"></i><?php /*<img src="<?= get_template_directory_uri(); ?>/assets/img/whatsapp.png" alt="" width="22" height="22">*/ ?>+31 (0)20 - 7782393</a>
						</div>
					</div>
				</div>
			</div>
			<a href="javascript:void(0)" class="btn btn__small yellow d-lg-none d-inline-block" data-toggle="modal" data-target="#uploadCVModal">
				<?php pll_e('Upload CV'); ?>
			</a>
			<div class="navigation__upper-contact d-lg-none d-flex">
				<a class="mb-1" href="tel:+31207782393"><i class="far fa-phone-alt"></i>+31 (0)20 - 7782393</a>
				<a href="mailto:info@searchxrecruitment.com"><i class="far fa-envelope"></i>info@searchxrecruitment.com</a>
			</div>
		</div>
	</div>
	<div class="navigation__lower">
		<div class="container-xl">
			<div class="row align-items-center">
				<div class="col-auto">
					<a href="/" class="navigation__lower-logo d-none d-lg-block">
						<svg viewBox="0 0 587.76 172.97" xmlns="http://www.w3.org/2000/svg">
							<g fill="#173751">
								<path d="m129.47 138.46v7.45c-6.42 0-10.19 3.94-10.19 10.11v16.18h-7.28v-33.2h7.28v5.39c2.4-3.68 5.91-5.91 10.19-5.91" />
								<path d="m139.66 152.42h19.7a10.18 10.18 0 0 0 -19.7 0zm27.4 5.91h-27.48a9.86 9.86 0 0 0 9.93 8c4.19 0 7.71-2 9.08-4.71h8c-2.4 6.68-8.91 11.31-17.13 11.31-10.1 0-17.72-7.45-17.72-17.39s7.62-17.38 17.72-17.38 17.81 7.45 17.81 17.47a14.84 14.84 0 0 1 -.17 2.74" />
								<path d="m171.6 155.59c0-9.85 7.62-17.38 17.81-17.38 8.74 0 15.67 5.56 17.3 13.53h-7.71a10 10 0 0 0 -9.59-6.51 10.36 10.36 0 1 0 9.59 14.21h7.71c-1.63 8-8.56 13.53-17.3 13.53-10.19 0-17.81-7.53-17.81-17.38" />
								<path d="m230.6 138.46v7.45c-6.42 0-10.19 3.94-10.19 10.11v16.18h-7.28v-33.2h7.28v5.39c2.4-3.68 5.91-5.91 10.19-5.91" />
								<path d="m266.56 139v33.2h-7.27v-4.45a12.49 12.49 0 0 1 -10.62 5.25c-7.62 0-12.68-5.05-12.68-12.84v-21.16h7.28v19c0 4.71 3.09 8 7.71 8 5 0 8.31-3.25 8.31-8v-19z" />
								<path d="m275.21 139h7.28v33.2h-7.28zm-.94-10.19a4.67 4.67 0 0 1 9.33 0 4.61 4.61 0 0 1 -4.7 4.62 4.55 4.55 0 0 1 -4.63-4.62" />
								<path d="m302.19 145.66v19.86h8.64v6.68h-15.92v-26.54h-6.17v-6.66h6.17v-9.77h7.28v9.77h8.64v6.68h-8.64" />
								<path d="m369.66 150.62v21.58h-7.28v-19.44c0-4.54-2.82-7.53-7.36-7.53-4.71 0-7.88 3.08-7.88 7.7v19.27h-7.28v-19.44c0-4.54-2.82-7.53-7.36-7.53-4.71 0-7.88 3.08-7.88 7.7v19.27h-7.28v-33.2h7.28v4.28a12 12 0 0 1 10.28-5c5.13 0 9.07 2.39 11 6.42a12.84 12.84 0 0 1 11.56-6.42c7.36 0 12.24 5 12.24 12.41" />
								<path d="m383.62 152.42h19.69a10.17 10.17 0 0 0 -19.69 0zm27.4 5.91h-27.4a9.88 9.88 0 0 0 9.93 8c4.2 0 7.71-2 9.08-4.71h8c-2.39 6.68-8.9 11.31-17.12 11.31-10.11 0-17.73-7.45-17.73-17.39s7.62-17.38 17.73-17.38 17.81 7.45 17.81 17.47a15 15 0 0 1 -.26 2.74" />
								<path d="m449.21 151.31v20.89h-7.28v-18.5c0-5-3.25-8.47-8.3-8.47-5.31 0-8.82 3.42-8.82 8.56v18.33h-7.28v-33.23h7.28v4.62a13.27 13.27 0 0 1 11.19-5.39c8 .09 13.18 5.31 13.18 13.19" />
								<path d="m467.11 145.66v19.86h8.65v6.68h-15.93v-26.54h-6.17v-6.66h6.17v-9.77h7.28v9.77h8.65v6.68h-8.65" />
								<path d="m3.94 116.46v-11.56h43.76l7.45-7.62v-9.94l-7.88-7.88h-32.71l-14.56-14.21v-16.78l14.56-14.73h46.67v11.73h-40.08l-7.28 7.11v8.05l7.62 7.62h33.06l14.55 14.21v19.44l-14.38 14.56z" />
								<path d="m97.28 69.19h42.21v-15.67l-8.73-8.65h-24.84l-8.73 8.65zm2.72 47.27-16.6-16.62v-49.49l16.6-16.61h36.82l16.61 16.61v29.88h-56.07v15.93l8.73 8.74h46v11.56z" />
								<path d="m188.64 105.41h19.61l16.27-16.1v-14l-35.88.18-8.73 8.56v12.71zm-6.16 11-16.48-16.57v-18.84l16.44-16.62h42v-10.26l-8.44-8.65h-39.26v-11.73h45.26l16.44 16.61v66.11h-13.92v-12.76l-12.84 12.76h-29.2" />
								<path d="m256 116.46v-82.64h13.87v14.9l14.38-14.9h21.15v14h-20.6l-15 15.5v53.26h-13.8" />
								<path d="m332.84 116.46-16.61-16.62v-49.49l16.61-16.61h37.76l14.56 14.38v13.11h-13.87v-8.57l-7.88-7.88h-24.49l-8.73 8.65v42.57l8.73 8.82h45.56v11.56h-51.64" />
								<path d="m400 116.46v-116.46h13.87v46.92l12.67-13.1h30.46l16.45 16.62v66.1h-13.88v-62.54l-8.39-9h-21.06l-16.27 16.57v55h-13.85" />
								<path d="m567.72 104.47-21.92-21.92-21.92 21.92-8.22-8.22 21.92-21.92-21.92-21.93 8.22-8.22 21.92 21.93 21.92-21.93 8.22 8.22-21.94 21.93 21.92 21.92zm-63.79-72.1v83.83h83.83v-83.83z" />
							</g>
						</svg>
					</a>
					<a href="/" class="navigation__lower-logo d-lg-none d-block">
						<svg viewBox="0 0 587.84 116.74" xmlns="http://www.w3.org/2000/svg">
							<path d="M3.87 116.56V105h43.78l7.41-7.58v-9.98l-7.92-7.92H14.48L0 65.38V48.71l14.48-14.65h46.64v11.62H21.21L14 52.75v8.08l7.58 7.58h33L69 82.72v19.36l-14.28 14.48zm93.45-47.31h42.26V53.59l-8.76-8.75H105.9l-8.75 8.75v15.66zm2.68 47.31L83.34 99.89v-49.5L100 33.73h36.87l16.67 16.66V80.2H97.32v16l8.75 8.76h46v11.61H100m88.74-11.12h19.53l16.34-16.16v-14l-35.87.17-8.74 8.61V96.7zm-6.23 11.11L166 99.89V81l16.5-16.67h42.1V54.1l-8.6-8.76h-39.21V33.73h45.29l16.5 16.66v66.17h-14v-12.79l-12.8 12.79h-29.3m73.44 0V33.89h14v14.82l14.31-14.82h21.21v14h-20.56l-15 15.49v53.2h-14m76.99-.02L316.2 99.89v-49.5l16.67-16.66h37.71L385.06 48v13.17h-14v-8.59l-7.92-7.91h-24.55l-8.75 8.75V96l8.75 8.93h45.46v11.61h-51.18m67.13.03V0h13.93v46.9l12.58-13.08h30.59l16.49 16.65v66.1h-13.94V54l-8.33-9h-21.07l-16.31 16.68v55.06zm167.8-11.99l-21.9-21.9-21.9 21.9-8.25-8.25 21.9-21.9-21.9-21.9 8.25-8.25 21.9 21.9 21.9-21.9 8.25 8.25-21.9 21.9 21.9 21.9zM504 32.49v83.88h83.88V32.49z" fill="#173751" />
						</svg>
					</a>
				</div>
				<div class="col">
					<div class="row align-items-center justify-content-end">
						<div class="col-lg-auto col-md-6 pr-0">
							<?php if (have_rows($menu_items, 'option')) : ?>
								<ul class="navigation__lower-menu">
									<?php while (have_rows($menu_items, 'option')) : the_row(); ?>
										<?php if (get_sub_field('item_type') === 'link') : ?>
											<li>
												<a href="<?php echo get_sub_field('menu_link')['url']; ?>"><?php echo get_sub_field('menu_link')['title']; ?></a>
											<?php else : ?>
											<li class="mega-menu-parent">
												<a href="javascript:void(0)"><?php echo get_sub_field('submenu')[0]['link_title']; ?></a>
												<section class="mega-menu-container">
													<div class="mega-menu d-flex">
														<div class="container d-flex flex-column justify-content-between">
															<div class="row justify-content-center">
																<div class="col-12">
																	<hr>
																</div>
																<div class="col-lg-10 pt-4 pb-5">
																	<h2 class="text400 font-primary">
																		<?php echo get_sub_field('submenu')[0]['big_title']; ?>
																	</h2>
																	<?php if (get_sub_field('submenu')[0]) : $layout = get_sub_field('submenu')[0]['acf_fc_layout']; ?>
																		<?php if ($layout == 'standard_submenu') : ?>
																			<div class="row justify-content-between">
																				<div class="col-12">
																					<?php if (get_sub_field('submenu')[0]['second_level_submenu']) : ?>
																						<ul class="mega-menu__big-submenu">
																							<?php foreach (get_sub_field('submenu')[0]['second_level_submenu'] as $item) : ?>
																								<?php if ($item['item_type'] === 'link') : ?>
																									<li>
																										<a class="h2" href="<?php echo $item['menu_item']['url']; ?>">
																											<?php echo $item['menu_item']['title']; ?>
																										</a>
																									<?php else : ?>
																									<li class="mega-menu__side-submenu-parent">
																										<a class="h2" href="javascript:void(0)"><?php echo $item['submenu_item']; ?></a>
																										<?php if (!empty($item['submenu_links'])) : ?>
																											<ul class="mega-menu__side-submenu">
																												<?php foreach ($item['submenu_links'] as $sub) : ?>
																													<li>
																														<a class="h3 font-primary text500" href="<?php echo $sub['third_level_menu_item']['url']; ?>">
																															<?php echo $sub['third_level_menu_item']['title']; ?>
																															<svg height="18" width="34" xmlns="http://www.w3.org/2000/svg">
																																<path d="M25.885.278l7.844 8.051a.947.947 0 01.078.091l-.078-.09a.95.95 0 01.236.412l.006.023A.895.895 0 0134 9l-.006.11-.002.011a.974.974 0 01-.02.114c-.003.007-.004.014-.006.022a.91.91 0 01-.159.323l-.01.013-.068.078-7.844 8.051a.91.91 0 01-1.307 0 .966.966 0 010-1.342l6.265-6.432H.924C.414 9.949 0 9.525 0 9s.414-.949.924-.949h29.92L24.578 1.62a.966.966 0 010-1.342.908.908 0 011.307 0z" fill="#183153" />
																															</svg>
																														</a>
																													</li>
																												<?php endforeach; ?>
																											</ul>
																										<?php endif; ?>
																									<?php endif; ?>
																									</li>
																								<?php endforeach; ?>
																						</ul>
																					<?php endif; ?>
																				</div>
																			</div>
																		<?php elseif ($layout == 'search_submenu') : ?>
																			<div class="row">
																				<div class="col-12">
																					<form action="" class="pb-3">
																						<input class="mb-3 job-search-nice" type="search" name="" id="" placeholder="<?php echo get_sub_field('submenu')[0]['search_placeholder_text']; ?>">
																						<?php if (!empty(get_sub_field('submenu')[0]['hashtags'])) : ?>
																							<div class="mega-menu__hashtags">
																								<?php foreach (get_sub_field('submenu')[0]['hashtags'] as $item) : ?>
																									<a href="<?php echo $item['hashtag']['url']; ?>" class="font-primary pr-2 pb-2 d-inline-block text-italic text500">
																										<?php echo $item['hashtag']['title']; ?>
																									</a>
																								<?php endforeach; ?>
																							</div>
																						<?php endif; ?>
																					</form>
																					<?php if (get_sub_field('submenu')[0]['button']) : ?>
																						<a href="<?php echo get_sub_field('submenu')[0]['button']['url']; ?>" class="btn btn__default yellow">
																							<?php echo get_sub_field('submenu')[0]['button']['title']; ?>
																						</a>
																					<?php endif; ?>
																					<h2 class="text400 font-primary pt-5 mt-5 mb-4">
																						<?php echo get_sub_field('submenu')[0]['other_links_title']; ?>
																					</h2>
																					<?php if (get_sub_field('submenu')[0]['other_links']) : ?>
																						<ul class="mega-menu__lower-submenu">
																							<?php foreach (get_sub_field('submenu')[0]['other_links'] as $item) : ?>
																								<li>
																									<a class="h3 font-primary text500" href="<?php echo $item['link']['url']; ?>">
																										<?php echo $item['link']['title']; ?>
																										<svg height="18" width="34" xmlns="http://www.w3.org/2000/svg">
																											<path d="M25.885.278l7.844 8.051a.947.947 0 01.078.091l-.078-.09a.95.95 0 01.236.412l.006.023A.895.895 0 0134 9l-.006.11-.002.011a.974.974 0 01-.02.114c-.003.007-.004.014-.006.022a.91.91 0 01-.159.323l-.01.013-.068.078-7.844 8.051a.91.91 0 01-1.307 0 .966.966 0 010-1.342l6.265-6.432H.924C.414 9.949 0 9.525 0 9s.414-.949.924-.949h29.92L24.578 1.62a.966.966 0 010-1.342.908.908 0 011.307 0z" fill="#183153" />
																										</svg>
																									</a>
																								</li>
																							<?php endforeach; ?>
																						</ul>
																					<?php endif; ?>
																				</div>
																			</div>
																		<?php elseif ($layout == 'text_submenu') : ?>
																			<?php echo get_sub_field('submenu')[0]['submenu_text']; ?>
																			<?php if (get_sub_field('submenu')[0]['button']) : ?>
																				<a href="<?php echo get_sub_field('submenu')[0]['button']['url']; ?>" class="btn btn__default yellow">
																					<?php echo get_sub_field('submenu')[0]['button']['title']; ?>
																				</a>
																			<?php endif; ?>
																			<div class="row justify-content-between">
																				<div class="col-12 pt-5">
																					<h2 class="text400 font-primary mt-5 mb-4">
																						<?php echo get_sub_field('submenu')[0]['submenu_links_title']; ?>
																					</h2>
																					<?php if (get_sub_field('submenu')[0]['second_level_submenu']) : ?>
																						<ul class="mega-menu__lower-submenu">
																							<?php foreach (get_sub_field('submenu')[0]['second_level_submenu'] as $item) : ?>
																								<li>
																									<a class="h3 font-primary text500" href="<?php echo $item['link']['url']; ?>">
																										<?php echo $item['link']['title']; ?>
																										<svg height="18" width="34" xmlns="http://www.w3.org/2000/svg">
																											<path d="M25.885.278l7.844 8.051a.947.947 0 01.078.091l-.078-.09a.95.95 0 01.236.412l.006.023A.895.895 0 0134 9l-.006.11-.002.011a.974.974 0 01-.02.114c-.003.007-.004.014-.006.022a.91.91 0 01-.159.323l-.01.013-.068.078-7.844 8.051a.91.91 0 01-1.307 0 .966.966 0 010-1.342l6.265-6.432H.924C.414 9.949 0 9.525 0 9s.414-.949.924-.949h29.92L24.578 1.62a.966.966 0 010-1.342.908.908 0 011.307 0z" fill="#183153" />
																										</svg>
																									</a>
																								</li>
																							<?php endforeach; ?>
																						</ul>
																					<?php endif; ?>
																				</div>
																			</div>
																		<?php endif; ?>
																	<?php endif; ?>
																</div>
															</div>
															<?php if (get_sub_field('submenu')[0]) : $layout = get_sub_field('submenu')[0]['acf_fc_layout']; ?>
																<?php if ($layout == 'standard_submenu' || $layout == 'text_submenu') : ?>
																	<?php if (get_sub_field('submenu')[0]['other_links']) : ?>
																		<div class="row justify-content-center pb-5">
																			<div class="col-lg-10 mt-auto mb-0">
																				<ul class="d-flex align-items-end">
																					<?php foreach (get_sub_field('submenu')[0]['other_links'] as $sub) : ?>
																						<li class="mr-5">
																							<a class="h3 text500 font-primary" href="<?php echo $sub['link']['url']; ?>">
																								<?php echo $sub['link']['title']; ?>
																							</a>
																						</li>
																					<?php endforeach; ?>
																				</ul>
																			</div>
																		</div>
																	<?php endif; ?>
																<?php endif; ?>
															<?php endif; ?>
														</div>
													</div>
												</section>
											<?php endif; ?>
											</li>
										<?php endwhile; ?>
								</ul>
							<?php endif; ?>
						</div>
						<div class="col-md-auto pl-1 navigation__lower-utils">
							<a href="javascript:void(0)" data-toggle="modal" data-target="#searchPopupModal"><i class="far fa-search"></i></a>
							<a href="javascript:void(0)" class="btn btn__small navy d-none d-lg-inline-block" data-toggle="modal" data-target="#uploadCVModal">
								<?php pll_e('Upload CV'); ?>
							</a>
							<button type="button" class="navigation__lower-btn mobileMenu d-lg-none d-inline-block">
								<i class="far fa-bars"></i>
								<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M30.3884 34.2353L20.1176 23.9745L9.84745 34.2353L6 30.3939L16.2713 20.1321L16.2568 20.1171L16.2713 20.1027L6.00107 9.84138L9.84638 6L20.1176 16.2597L30.3889 6L34.2348 9.84138L23.964 20.1027L23.979 20.1171L23.964 20.1321L34.2353 30.3939L30.3884 34.2353ZM0 40H40V0H0V40Z" fill="#EC6278" />
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</nav>