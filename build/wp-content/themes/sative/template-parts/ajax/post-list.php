<?php $helper = jobDisplayHelper(); ?>
<article class="card jobs__list-item">
	<div class="job-title">
		<?php if (strlen($helper['supCatName']) > 0) : ?>
			<span class="icon" data-type="<?php echo $helper['supCatName']; ?>"></span>
		<?php endif; ?>
		<h3 class="title m-0"><a href="<?php echo get_the_permalink(); ?>"><?php echo get_the_title(); ?></a></h3>
	</div>
	<p class="text-size-small excerpt">
		<?php if (get_the_excerpt()) : ?>
			<?php echo wp_specialchars_decode(get_the_excerpt()); ?>
		<?php endif; ?>
	</p>
	<a href="<?php echo get_the_permalink(); ?>" class="btn btn__small navy"><?php pll_e('More info'); ?></a>
</article>