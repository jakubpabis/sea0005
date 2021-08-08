<section class="flex-section">
	<div class="container-lg">
		<div class="row">
			<?php $i = 1;
			foreach (get_sub_field('bubbles') as $item) : ?>
				<div class="col-md-4">
					<div class="card p-xl-auto p-md-4 bg-white d-block">
						<div class="row">
							<div class="col-lg-4 col-md-5">
								<img src="<?php echo $item['icon']['url']; ?>" alt="<?php echo $item['icon']['title']; ?>">
								<p class="text-size-xlarge text700 font-primary mt-3 mb-0 d-none d-lg-block d-xl-none">
									<?php echo $item['text']; ?>
								</p>
							</div>
							<div class="col-lg-8 col-md-7">
								<span class="display-2 bubble text700 m-0">
									<?php echo $item['title']; ?>
								</span>
								<p class="text-size-xlarge text700 font-primary mt-3 mb-0 d-block d-lg-none d-xl-block">
									<?php echo $item['text']; ?>
								</p>
							</div>
						</div>
					</div>
					<?php if ($i % 2 === 0) : ?>
						<div class="text-bubble text-bubble-right"></div>
					<?php else : ?>
						<div class="text-bubble text-bubble-left"></div>
					<?php endif; ?>
				</div>
			<?php $i++;
			endforeach; ?>
		</div>
	</div>
</section>