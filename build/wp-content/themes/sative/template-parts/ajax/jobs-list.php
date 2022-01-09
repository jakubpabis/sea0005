<?php $helper = jobDisplayHelper(); ?>
<article class="card jobs__list-item">
	<div class="job-title">
		<?php if (strlen($helper['supCatName']) > 0) : ?>
			<span class="icon" data-type="<?php echo $helper['supCatName']; ?>"></span>
		<?php endif; ?>
		<h3 class="title m-0"><a href="<?php echo get_the_permalink(); ?>"><?php echo get_the_title(); ?></a></h3>
	</div>
	<div class="info">
		<?php if (get_field('location')) : ?>
			<div class="info__item">
				<i class="place"></i>
				<span class="location"><?php echo get_field('location'); ?></span>
			</div>
		<?php endif; ?>
		<?php if ($helper['type']) : ?>
			<div class="info__item">
				<i class="clock"></i>
				<span class="type"><?php echo $helper['type']; ?></span>
			</div>
		<?php endif; ?>
		<?php if (get_field('salary_min') || get_field('salary_max')) : ?>
			<div class="info__item">
				<i class="coins"></i>
				<span>
					<number class="salarymin">
						€ <?php echo number_format((int)get_field('salary_min'), 0, ".", "."); ?>
					</number>
					<?php echo get_field('salary_min') && get_field('salary_max') ? '&nbsp;-&nbsp;' : null ?>
					<number class="salarymax">
						€ <?php echo number_format((int)get_field('salary_max'), 0, ".", "."); ?>
					</number>
				</span>
			</div>
		<?php endif; ?>
		<?php if ($helper['industry']) : ?>
			<div class="info__item">
				<i class="briefcase"></i>
				<span class="industry"><?php echo $helper['industry']; ?></span>
			</div>
		<?php endif; ?>
	</div>
	<p class="text-size-small excerpt">
		<?php echo wp_specialchars_decode(get_the_excerpt()); ?>
	</p>
	<a href="<?php echo get_the_permalink(); ?>" class="btn btn__small navy"><?php pll_e('More info'); ?></a>
</article>