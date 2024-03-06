<section class="flex-section speech-bubbles">
	<div class="container-lg">
		<div class="row">
			<?php $i = 1;
			foreach (get_sub_field('bubbles') as $item) : ?>
				<div class="mb-4 col-md-4 col-sm-7 col-11 <?php echo $i % 2 === 0 ? 'offset-md-0 offset-sm-5 offset-1' : null ?>">
					<div class="card bg-white d-block">
						<div class="row flex-nowrap">
							<div class="col-lg-4 col-md-3 col-auto card-icon">
								<img src="<?php echo $item['icon']['url']; ?>" alt="<?php echo $item['icon']['title']; ?>">
							</div>
							<div class="col-lg-8 col-md-9 col pr-md-0">
								<span class="display-2 bubble text700 m-0">
									<?php echo $item['title']; ?>
								</span>
								<p class="text-size-xlarge text700 font-primary mt-3">
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