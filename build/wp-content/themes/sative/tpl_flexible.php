<?php

/**
 * Template Name: Flex Content
 */

get_header(); ?>

<?php //$gradient = false;  
$lang = pll_current_language();
?>
<?php if (have_rows('sections')) : $contact_form_present = false; ?>
	<div class="body-bg-gradient">
		<?php while (have_rows('sections')) : the_row(); ?>
			<?php if (get_row_layout() == 'header' && get_sub_field('image')) : ?>
				<?php get_template_part('template-parts/flex-content/header'); ?>
			<?php elseif (get_row_layout() == 'home_header' && get_sub_field('video_file')) : ?>
				<?php get_template_part('template-parts/flex-content/header-video'); ?>
			<?php elseif (get_row_layout() == 'copy_section' && (get_sub_field('title') || get_sub_field('text') || get_sub_field('first_column'))) : ?>
				<?php get_template_part('template-parts/flex-content/copy-section'); ?>
			<?php elseif (get_row_layout() == 'video_section' && get_sub_field('video')) : ?>
				<?php get_template_part('template-parts/flex-content/video-section'); ?>
			<?php elseif (get_row_layout() == 'tags' && get_sub_field('first_row')) : ?>
				<?php get_template_part('template-parts/flex-content/tags'); ?>
			<?php elseif (get_row_layout() == 'google_reviews') : ?>
				<?php get_template_part('template-parts/flex-content/greviews'); ?>
			<?php elseif (get_row_layout() == 'speech_bubbles_with_icons' && get_sub_field('bubbles')) : ?>
				<?php get_template_part('template-parts/flex-content/speech-bubbles'); ?>
			<?php elseif (get_row_layout() == 'job_categories_menus') : ?>
				<?php get_template_part('template-parts/flex-content/categories-menus'); ?>
			<?php elseif (get_row_layout() == 'dogs_section') : ?>
				<?php get_template_part('template-parts/flex-content/dogs-section'); ?>
			<?php elseif (get_row_layout() == 'call_to_action_section' && get_sub_field('image')) : ?>
				<?php get_template_part('template-parts/flex-content/cta-section'); ?>
			<?php elseif (get_row_layout() == 'articles_slider') : ?>
				<?php get_template_part('template-parts/flex-content/articles'); ?>
			<?php elseif (get_row_layout() == 'internal_vacancies') : ?>
				<?php get_template_part('template-parts/flex-content/internal-vacancies'); ?>
			<?php elseif (get_row_layout() == 'cards_links' && get_sub_field('links')) : ?>
				<?php get_template_part('template-parts/flex-content/card-links'); ?>
			<?php elseif (get_row_layout() == 'client_logos_big' && get_sub_field('logos')) : ?>
				<?php get_template_part('template-parts/flex-content/client-logos-big'); ?>
			<?php elseif (get_row_layout() == 'client_logos_small' && get_sub_field('logos')) : ?>
				<?php get_template_part('template-parts/flex-content/client-logos-small'); ?>
			<?php elseif (get_row_layout() == 'team' && get_sub_field('people')) : ?>
				<?php get_template_part('template-parts/flex-content/team'); ?>
			<?php elseif (get_row_layout() == 'testimonials' && get_sub_field('testimonials')) : ?>
				<?php get_template_part('template-parts/flex-content/testimonials'); ?>
			<?php elseif (get_row_layout() == 'copy_section_with_speech_bubble') : ?>
				<?php get_template_part('template-parts/flex-content/copy-speech-bubble'); ?>
			<?php elseif (get_row_layout() == 'job_search_and_categories') : ?>
				<?php get_template_part('template-parts/flex-content/job-search-categories'); ?>
			<?php elseif (get_row_layout() == 'full_width_image') : ?>
				<?php get_template_part('template-parts/flex-content/full-image'); ?>
			<?php elseif (get_row_layout() == 'contact_form_section') : $contact_form_present = true; ?>
				<?php get_template_part('template-parts/flex-content/contact-section'); ?>
			<?php elseif (get_row_layout() == 'bottom_bar') : ?>
				<?php get_template_part('template-parts/flex-content/bottom-bar'); ?>
			<?php elseif (get_row_layout() == 'recruitment_labels') : ?>
				<?php get_template_part('template-parts/flex-content/labels'); ?>
			<?php elseif (get_row_layout() == 'internal_jobs') : ?>
				<?php get_template_part('template-parts/flex-content/internal-jobs'); ?>
			<?php elseif (get_row_layout() == 'videos') : ?>
				<?php get_template_part('template-parts/flex-content/videos'); ?>
			<?php elseif (get_row_layout() == 'dna_section') : ?>
				<?php get_template_part('template-parts/flex-content/dna-section'); ?>
			<?php elseif (get_row_layout() == 'content_block') : ?>
				<?php get_template_part('template-parts/flex-content/content-block'); ?>
			<?php elseif (get_row_layout() == 'accordion_section') : ?>
				<?php get_template_part('template-parts/flex-content/accordion-section'); ?>
			<?php endif; ?>
		<?php endwhile; ?>
		<?php if (!$contact_form_present && get_field('footer_form_' . $lang, 'option')) : ?>
			<section class="flex_content-contact">
				<div class="container-lg">
					<div class="row justify-content-end align-content-end align-items-end">
						<div class="col-md-10 flex_content-contact-dog order-md-1 order-12">
							<svg viewBox="0 0 650.13 306.3" xmlns="http://www.w3.org/2000/svg">
								<path d="M484.68 0l-28.1 28.1v138.58h41.54l25.3-25.31v-62h-10.29v57.77l-19.38 19.38h-26.88V32.46l22-22.16H640v42.76l-26.18 26h-79.23v99H171.22L63.53 285.54H0v10.29h67.72l107.69-107.51h359.18v69.29h73v19.55L591 295.83h-95.15v-64.92l-21.3-21.3-7.33 7.33 18.33 18.33v47H215l-10.1-10.7 38.22-35.08-35.25-34.21-7.16 7.33 27.4 26.71-37.87 34.73 23.56 24.61h-64.4v-60.22h-10.3V306h98.79L225 292.52h260.55v13.78h110.13l22.17-25.13v-33.68h-73V89.54H618l32.11-32.12V0z" fill="#173751" />
								<g fill="#ffffff">
									<path d="M556 206.6l-23.4-23.41 23.4-23.4 7.2 7.21-16.2 16.19 16.22 16.22z" />
									<path d="M523.74 206.6l-7.18-7.19 16.21-16.22L516.56 167l7.18-7.19 23.41 23.4z" />
								</g>
							</svg>
						</div>
						<div class="col-md-6 col-sm-9 offset-md-0 offset-sm-3 ordre-md-12 order-1 mb-md-0 mb-5" id="bottom-contact-dog-section">
							<div class="card notched bg-white p-3 my-5">
								<div class="card-body color-navy">
									<h2 class="m-0 mb-3">
										<?php echo $lang === 'en' ? 'Would you like us to contact you?' : 'Wil je graag dat wij contact met jou opnemen?'; ?>
									</h2>
									<?php echo get_field('footer_form_' . $lang, 'option'); ?>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		<?php endif; ?>
	</div>
<?php endif; ?>

<?php get_footer();
