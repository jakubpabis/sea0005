<?php if (get_sub_field('title') || get_sub_field('sub_title') || get_sub_field('button_first') || get_sub_field('button_second')) : ?>
	<?php $negative = ''; ?>
<?php else : ?>
	<?php $negative = 'negative-margin'; ?>
<?php endif; ?>

<header class="header__video <?php echo $negative; ?>">
	<?php if (isset($_COOKIE['is-mobile']) || $_COOKIE['is-mobile'] === false) : ?>
		<div class="container-fluid px-0 justify-content-center d-flex vidvid">
			<video playsinline muted autoplay preload="true" loop>
				<source src="<?php echo get_sub_field('video_file'); ?>" type="video/mp4">
				Your browser does not support the video tag.
			</video>
			<div class="play-button position-absolute">
				<svg height="40" viewBox="0 0 60 60" width="40" xmlns="http://www.w3.org/2000/svg">
					<path d="m51.627907 0 8.372093 8.37209302v43.25581398l-8.372093 8.372093h-43.25581398l-8.37209302-8.372093v-43.25581398l8.37209302-8.37209302zm-30.358907 16.0977621c-.3974167.2253406-.644.6534367-.644 1.1181804v25.56815c0 .4647437.2465833.8928398.644 1.1181804.1888333.1070453.3975.1602271.606.1602271.23025 0 .4601667-.0650283.6625-.1943179l20-12.7839898c.3655-.2336077.5875-.6432947.5875-1.0840896s-.222-.8504819-.5875-1.0840895l-20-12.7841602c-.3854167-.2463918-.8710833-.2593463-1.2685-.0340909z" fill="#183153" fill-rule="evenodd" />
				</svg>
			</div>
		</div>
	<?php endif; ?>
	<?php if (get_sub_field('title') && get_sub_field('sub_title') && get_sub_field('button_first') && (!get_sub_field('button_second') || empty(get_sub_field('button_second')))) : ?>
		<?php
		$title = get_sub_field('title');
		$title_tag = get_sub_field('title_tag') && !empty(get_sub_field('title_tag')) ? get_sub_field('title_tag') : 'h1';
		$title_appearance = get_sub_field('title_appearance') && !empty(get_sub_field('title_appearance')) ? get_sub_field('title_appearance') : '';
		$title_class = get_sub_field('title_class') && !empty(get_sub_field('title_class')) ? get_sub_field('title_class') : 'd-block mb-0';
		$sub_title = get_sub_field('sub_title');
		$sub_title_tag = get_sub_field('sub_title_tag') && !empty(get_sub_field('sub_title_tag')) ? get_sub_field('sub_title_tag') : 'span';
		$sub_title_appearance = get_sub_field('sub_title_appearance') && !empty(get_sub_field('sub_title_appearance')) ? get_sub_field('sub_title_appearance') : '';
		$sub_title_class = get_sub_field('sub_title_class') && !empty(get_sub_field('sub_title_class')) ? get_sub_field('sub_title_class') : '';
		$the_title = $title ? '<' . $title_tag . ' class="' . $title_appearance . ' ' . $title_class . '">' . $title . '<br/>' . '<' . $sub_title_tag . ' class="' . $sub_title_appearance . ' ' . $sub_title_class . '">' . $sub_title . '</' . $sub_title_tag . '>' . '</' . $title_tag . '>' : '';
		?>
		<div class="container">
			<div class="content">
				<?php echo $the_title; ?>
				<?php if (get_sub_field('button_first')) : ?>
					<?php if (get_sub_field('button_first')) : ?>
						<a href="<?php echo get_sub_field('button_first')['url']; ?>" class="btn btn__default navy mx-2 mb-3 mb-sm-0 d-flex align-items-center justify-content-center">
							<?php echo get_sub_field('button_first')['title']; ?>
						</a>
					<?php endif; ?>
				<?php endif; ?>
			</div>
		</div>
	<?php else : ?>
		<?php
		$title = get_sub_field('title');
		$title_tag = get_sub_field('title_tag') && !empty(get_sub_field('title_tag')) ? get_sub_field('title_tag') : 'span';
		$title_appearance = get_sub_field('title_appearance') && !empty(get_sub_field('title_appearance')) ? get_sub_field('title_appearance') : '';
		$title_class = get_sub_field('title_class') && !empty(get_sub_field('title_class')) ? get_sub_field('title_class') : 'text-size-xxlarge d-block mb-0';
		$the_title = $title ? '<' . $title_tag . ' class="' . $title_appearance . ' ' . $title_class . '">' . $title . '</' . $title_tag . '>' : '';
		$sub_title = get_sub_field('sub_title');
		$sub_title_tag = get_sub_field('sub_title_tag') && !empty(get_sub_field('sub_title_tag')) ? get_sub_field('sub_title_tag') : 'span';
		$sub_title_appearance = get_sub_field('sub_title_appearance') && !empty(get_sub_field('sub_title_appearance')) ? get_sub_field('sub_title_appearance') : '';
		$sub_title_class = get_sub_field('sub_title_class') && !empty(get_sub_field('sub_title_class')) ? get_sub_field('sub_title_class') : 'mt-0 text-size-large d-block text400 font-secondary';
		$the_sub_title = $sub_title ? '<' . $sub_title_tag . ' class="' . $sub_title_appearance . ' ' . $sub_title_class . '">' . $sub_title . '</' . $sub_title_tag . '>' : '';
		?>
		<div class="container-md">
			<div class="row position-absolute header__video-bottom justify-content-center w-100 <?php echo is_mobile() ? 'mt-0' : '' ?>">
				<div class="col-xl-8 col-lg-9 px-md-0 text-center <?php echo is_mobile() ? 'pt-4' : '' ?>">
					<?php echo $the_title; ?>
					<?php echo $the_sub_title; ?>
					<?php if (get_sub_field('button_first') || get_sub_field('button_second')) : ?>
						<div class="card notched bg-white d-flex align-items-stretch mt-4 py-4 px-3 flex-row flex-wrap flex-sm-nowrap">
							<?php if (get_sub_field('button_first')) : ?>
								<a href="<?php echo get_sub_field('button_first')['url']; ?>" class="btn btn__default yellow mx-2 w-50 mb-3 mb-sm-0 d-flex align-items-center justify-content-center">
									<?php echo get_sub_field('button_first')['title']; ?>
								</a>
							<?php endif; ?>
							<?php if (get_sub_field('button_second')) : ?>
								<a href="<?php echo get_sub_field('button_second')['url']; ?>" class="btn btn__default navy mx-2 w-50 d-flex align-items-center justify-content-center">
									<?php echo get_sub_field('button_second')['title']; ?>
								</a>
							<?php endif; ?>
						</div>
					<?php endif; ?>
				</div>
			</div>
		</div>

	<?php endif; ?>
</header>