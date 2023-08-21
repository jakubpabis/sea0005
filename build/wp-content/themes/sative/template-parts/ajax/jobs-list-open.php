<aside class="additionals py-lg-4 py-2 d-flex justify-content-between">
	<div class="py-3">
		<p class="text-size-small font-primary m-0">
			<span class="jobsno"><?php echo $post_no; ?></span> <?php pll_e('jobs found'); ?>
		</p>
	</div>
	<?php if (!empty($params)) : ?>
		<div class="params d-flex flex-wrap justify-content-end">
		<?php foreach ($params as $key => $param) : if(strpos($key, "message") === false) :?>
				<a href="<?php echo parse_url($_SERVER['REQUEST_URI'])['path'] . '?' . $key; ?>" class="btn btn__medium bg-grey2 color-onavy btn__small mt-3 ml-3 mr-0 d-flex align-items-center">
					<svg width="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13">
						<path fill="#183153" fill-rule="evenodd" d="M10.975 0L13 2.014 8.524 6.467l.033.033-.033.031L13 10.986 10.975 13 6.5 8.546 2.024 13 0 10.986 4.475 6.53 4.443 6.5l.032-.033L0 2.014 2.024 0 6.5 4.453 10.975 0z" />
					</svg>
					<span class="ml-2"><?php echo $param; ?></span>
				</a>
			<?php endif; endforeach; ?>
		</div>
	<?php endif; ?>
</aside>
<main class="jobs__list-items">