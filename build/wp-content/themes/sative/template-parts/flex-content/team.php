<main class="team flex-section">
	<?php $i = 2; ?>
	<div class="container-lg">
		<?php foreach (get_sub_field('people') as $item) : ?>
			<?php if ($i % 3 == 0) : ?>
				<div class="row justify-content-end">
				<?php elseif ($i % 2 == 0) : ?>
					<div class="row justify-content-center">
					<?php else : ?>
						<div class="row justify-content-start">
						<?php endif; ?>
						<div class="col-lg-10 col-md-12 col-sm-8">
							<div class="team__item">
								<div class="row">
									<div class="col-md-5">
										<?php if (has_post_thumbnail($item->ID)) : ?>
											<div class="team__item-img">
												<img class="lazy bg-cover" data-src="<?php echo get_the_post_thumbnail_url($item->ID); ?>" alt="">
											</div>
										<?php endif; ?>
									</div>
									<div class="col-md-7">
										<div class="team__item-text">
											<div class="row justify-content-between">
												<div class="col-xl-8 col-lg-7 col">
													<h2 class="mb-2"><?php echo get_the_title($item->ID); ?></h2>
													<h5 class="font-secondary text400 my-0"><?php echo get_field('title', $item->ID); ?></h5>
													<a href="mailto:<?php echo get_field('email', $item->ID); ?>" class="text400 font-secondary d-inline-block mt-4">
														<i class="fal fa-envelope mr-4"></i><?php echo get_field('email', $item->ID); ?>
													</a><br />
													<a href="tel:<?php echo get_field('phone', $item->ID); ?>" class="text400 font-secondary d-inline-block mt-2">
														<i class="fal fa-phone-alt mr-4"></i><?php echo get_field('phone', $item->ID); ?>
													</a><br />
												</div>
												<div class="col-lg-auto col team__item-social d-flex flex-lg-column mt-lg-0 mt-4">
													<?php if (get_field('whatsapp', $item->ID)) : ?>
														<a href="<?php echo get_field('whatsapp', $item->ID); ?>" class="btn btn__social notched navy mr-lg-0 mr-3"><i class="fab fa-whatsapp"></i></a>
													<?php endif; ?>
													<?php if (get_field('skype', $item->ID)) : ?>
														<a href="<?php echo get_field('skype', $item->ID); ?>" class="btn btn__social notched navy mr-lg-0 mr-3"><i class="fab fa-skype"></i></a>
													<?php endif; ?>
													<?php if (get_field('linkedin', $item->ID)) : ?>
														<a href="<?php echo get_field('linkedin', $item->ID); ?>" class="btn btn__social notched navy mr-lg-0 mr-3"><i class="fab fa-linkedin-in"></i></a>
													<?php endif; ?>
												</div>
											</div>
											<?php echo get_field('short_bio', $item->ID); ?>
											<div class="btns">
												<?php if (get_the_content()) : ?>
													<a href="javascript:void(0)" class="btn btn__default navy team__item-showmore"><?php pll_e('Read more'); ?></a>
												<?php endif; ?>
												<?php if (get_field('calendly', $item->ID)) : ?>
													<a class="btn btn__default pink" href="<?php echo get_field('calendly', $item->ID) ?>"><u><?php pll_e('Plan een (video)call of meeting'); ?></u></a>
												<?php endif; ?>
											</div>
										</div>
									</div>
									<?php if (get_the_content()) : ?>
										<div class="col-12 team__item-hidden d-none">
											<?php the_content(); ?>
											<?php if (get_field('calendly', $item->ID)) : ?>
												<div class="text-center mt-3 mb-4">
													<a class="btn btn__default pink" href="<?php echo get_field('calendly', $item->ID) ?>"><u><?php pll_e('Plan een (video)call of meeting'); ?></u></a>
												</div>
											<?php endif; ?>
											<div class="text-center mt-4">
												<a href="javascript:void(0)" class="btn btn__default navy team__item-showless"><?php pll_e('Show less'); ?></a>
											</div>
										</div>
									<?php endif; ?>
								</div>
							</div>
							<div class="text-bubble text-bubble-right-right">
							</div>
						</div>
						</div>
					<?php $i++;
				endforeach; ?>
					</div>
</main>