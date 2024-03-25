<section class="flex-section">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-lg-10 col-md-11">
				<div class="row">
					<?php foreach (get_sub_field('logos') as $item) : ?>
						<div class="col-lg-3 col-sm-6 col-12 d-flex mb-4">
							<div class="card notched h-100 d-flex align-items-center justify-content-center p-2">
								<div class="card-body d-flex align-items-center justify-content-center">
									<img src="<?php echo $item['image']['url']; ?>" alt="" loading="lazy">
								</div>
							</div>
						</div>
					<?php endforeach; ?>
				</div>
			</div>
		</div>
	</div>
</section>