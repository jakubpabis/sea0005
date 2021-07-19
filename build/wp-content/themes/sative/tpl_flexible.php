<?php

/**
 * Template Name: Flex Content
 */

get_header(); ?>

<?php //$gradient = false; 
?>
<?php if (have_rows('sections')) : ?>
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
			<?php elseif (get_row_layout() == 'google_reviews' && get_sub_field('image')) : ?>
				<?php get_template_part('template-parts/flex-content/greviews'); ?>
			<?php elseif (get_row_layout() == 'speech_bubbles_with_icons' && get_sub_field('bubbles')) : ?>
				<?php get_template_part('template-parts/flex-content/speech-bubbles'); ?>
			<?php elseif (get_row_layout() == 'job_categories_menus') : ?>
				<?php get_template_part('template-parts/flex-content/categories-menus'); ?>
			<?php elseif (get_row_layout() == 'dogs_section') : ?>
				<?php get_template_part('template-parts/flex-content/dogs-section'); ?>
			<?php elseif (get_row_layout() == 'call_to_action_section' && get_sub_field('image')) : ?>
				<?php get_template_part('template-parts/flex-content/cta-section'); ?>
			<?php elseif (get_row_layout() == 'articles') : ?>
				<?php get_template_part('template-parts/flex-content/articles'); ?>
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
			<?php elseif (get_row_layout() == 'contact_form_section') : ?>
				<?php get_template_part('template-parts/flex-content/contact-section'); ?>
			<?php elseif (get_row_layout() == 'bottom_bar') : ?>
				<?php get_template_part('template-parts/flex-content/bottom-bar'); ?>
			<?php endif; ?>
		<?php endwhile; ?>
	</div>
<?php endif; ?>

<?php get_footer();
