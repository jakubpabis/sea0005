<section class="flex-section flex_content-video_section pb-5">
	<div class="container position-absolute h-100 right-0 top-0">
		<div class="row">
			<div class="col-lg-11 position-absolute h-50 p-0 right-0">
				<div class="flex_content-video_section-dog right bg-sea ?> w-100 h-100">
				</div>
			</div>
		</div>
	</div>
	<div class="container">
		<div class="row">
			<div class="col-lg-9 col-md-10">
				<h4 class="text-uppercase">
					<?php echo get_sub_field('sub_title'); ?>
				</h4>
				<span class="display-2 text700">
					<?php echo get_sub_field('title'); ?>
				</span>
			</div>
			<div class="col-lg-10 col-12 offset-lg-1 mt-5">
				<div class="row align-items-stretch client-logos__small">
					<?php foreach (get_sub_field('logos') as $item) : ?>
						<div class="card notched d-flex align-items-center justify-content-center p-2">
							<div class="card-body d-flex align-items-center justify-content-center">
								<img class="lazy" data-src="<?php echo $item['image']['url']; ?>" alt="" loading="lazy">
							</div>
						</div>
					<?php endforeach; ?>
				</div>
			</div>
		</div>
	</div>
</section>