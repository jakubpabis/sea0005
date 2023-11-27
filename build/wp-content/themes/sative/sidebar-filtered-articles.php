<div class="card bg-sea">
	<h3>
		<?php pll_e('Topics'); ?>
	</h3>
	<ul>
		<?php if ($query->have_posts()) : while ($query->have_posts()) : $query->the_post(); ?>
				<li>
					<a href=""><?php echo get_the_title(); ?></a>
				</li>
		<?php endwhile;
		endif; ?>
	</ul>
</div>

<?php if (is_active_sidebar('sidebar-1')) : ?>
	<div class="card bg-yellow mt-5">
		<?php dynamic_sidebar('sidebar-1'); ?>
	</div>
<?php endif; ?>

<div class="card bg-sea">
	<h3>
		<?php pll_e('Contact'); ?>
	</h3>
	<div class="btns mt-4">
		<a class="mt-1 text-size-medium" href="tel:+31207782393"><i class="fas fa-mobile-android-alt mr-3"></i><?php pll_e('Call us'); ?></a><br />
		<a class="mt-2 text-size-medium" href="mailto:contact@searchxrecruitment.com"><i class="far fa-envelope mr-2"></i><?php pll_e('E-mail us'); ?></a><br />
		<a href="/contact" class="btn btn__default yellow mt-4"><?php pll_e('Get in touch'); ?></a>
	</div>
</div>

<div class="share">
	<h5 class="text500"><?php pll_e('Share this content'); ?></h5>
	<div class="btns">
		<?php
		global $wp;
		$current_url = home_url(add_query_arg(array(), $wp->request));
		?>
		<a class="btn btn__social notched navy" href="https://www.facebook.com/sharer/sharer.php?u=<?php echo $current_url; ?>&t=<?php echo get_the_title(); ?>" target="_blank">
			<i class="fab fa-facebook-f"></i>
		</a>
		<a class="btn btn__social notched navy" href="https://twitter.com/intent/tweet?source=<?php echo $current_url; ?>&text=<?php echo $current_url; ?> - <?php echo get_the_title(); ?>" target="_blank">
			<i class="fab fa-twitter"></i>
		</a>
		<a class="btn btn__social notched navy" href="http://www.linkedin.com/shareArticle?mini=true&url=<?php echo $current_url; ?>&title=<?php echo get_the_title(); ?>&summary=Checkout%20this%20job%20offer!&source=<?php echo $current_url; ?>" target="_blank">
			<i class="fab fa-linkedin-in"></i>
		</a>
		<a class="btn btn__social notched navy" href="https://getpocket.com/save?url=<?php echo $current_url; ?>&title=<?php echo get_the_title(); ?>" target="_blank">
			<i class="fab fa-get-pocket"></i>
		</a>
		<a class="btn btn__social notched navy" href="whatsapp://send?text=<?php echo get_the_title(); ?>&nbsp;&nbsp;<?php echo $current_url; ?>" target="_blank">
			<i class="fab fa-whatsapp"></i>
		</a>
		<a class="btn btn__social notched navy" href="mailto:?subject=<?php echo get_the_title(); ?>&body=Checkout%20this%20job%20offer: <?php echo $current_url; ?>" target="_blank">
			<i class="far fa-envelope"></i>
		</a>
	</div>
</div>