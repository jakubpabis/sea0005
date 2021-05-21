<section class="flex_content-video_section">
	<div class="container position-absolute h-100 left-0">
		<div class="row">
			<div class="col-lg-12 position-absolute h-100 p-0 left-0">
				<div class="flex_content-video_section-dog left bg-navy w-100 h-100">
				</div>
			</div>
		</div>
	</div>
	<div class="container">
		<div class="row color-white justify-content-around">
			<div class="col-12 pb-5 pt-5">
				<h2>
					<?php echo get_sub_field('sub_title'); ?>
				</h2>
				<span class="display-2 text700 color-white d-block">
					<?php echo get_sub_field('title'); ?>
				</span>
			</div>
			<?php if (!empty(get_sub_field('first_column'))) : $column = get_sub_field('first_column');  ?>
				<div class="col-lg-4">
					<?php if ($column['title']) : ?>
						<h2 class="text700">
							<?php echo $column['title']; ?>
						</h2>
					<?php endif; ?>
					<?php if (!empty($column['links'])) : ?>
						<ul>
							<?php foreach ($column['links'] as $link) : ?>
								<li>
									<a href="<?php echo $link['link']['url']; ?>" class="h3 font-primary text500">
										<?php echo $link['link']['title']; ?>
										<svg height="18" width="34" xmlns="http://www.w3.org/2000/svg">
											<path d="M25.885.278l7.844 8.051a.947.947 0 01.078.091l-.078-.09a.95.95 0 01.236.412l.006.023A.895.895 0 0134 9l-.006.11-.002.011a.974.974 0 01-.02.114c-.003.007-.004.014-.006.022a.91.91 0 01-.159.323l-.01.013-.068.078-7.844 8.051a.91.91 0 01-1.307 0 .966.966 0 010-1.342l6.265-6.432H.924C.414 9.949 0 9.525 0 9s.414-.949.924-.949h29.92L24.578 1.62a.966.966 0 010-1.342.908.908 0 011.307 0z" fill="#FFFFFF" />
										</svg>
									</a>
								</li>
							<?php endforeach; ?>
						</ul>
					<?php endif ?>
				</div>
			<?php endif; ?>
			<?php if (!empty(get_sub_field('second_column'))) : $column = get_sub_field('second_column'); ?>
				<div class="col-lg-4">
					<?php if ($column['title']) : ?>
						<h2 class="text700">
							<?php echo $column['title']; ?>
						</h2>
					<?php endif; ?>
					<?php if (!empty($column['links'])) : ?>
						<ul>
							<?php foreach ($column['links'] as $link) : ?>
								<li>
									<a href="<?php echo $link['link']['url']; ?>" class="h3 font-primary text500">
										<?php echo $link['link']['title']; ?>
										<svg height="18" width="34" xmlns="http://www.w3.org/2000/svg">
											<path d="M25.885.278l7.844 8.051a.947.947 0 01.078.091l-.078-.09a.95.95 0 01.236.412l.006.023A.895.895 0 0134 9l-.006.11-.002.011a.974.974 0 01-.02.114c-.003.007-.004.014-.006.022a.91.91 0 01-.159.323l-.01.013-.068.078-7.844 8.051a.91.91 0 01-1.307 0 .966.966 0 010-1.342l6.265-6.432H.924C.414 9.949 0 9.525 0 9s.414-.949.924-.949h29.92L24.578 1.62a.966.966 0 010-1.342.908.908 0 011.307 0z" fill="#FFFFFF" />
										</svg>
									</a>
								</li>
							<?php endforeach; ?>
						</ul>
					<?php endif ?>
				</div>
			<?php endif; ?>
		</div>
	</div>
</section>