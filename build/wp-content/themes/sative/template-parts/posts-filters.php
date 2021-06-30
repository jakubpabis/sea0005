<aside class="jobs__list-filters not-opened">
	<div class="closethis">
		<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M30.3884 34.2353L20.1176 23.9745L9.84745 34.2353L6 30.3939L16.2713 20.1321L16.2568 20.1171L16.2713 20.1027L6.00107 9.84138L9.84638 6L20.1176 16.2597L30.3889 6L34.2348 9.84138L23.964 20.1027L23.979 20.1171L23.964 20.1321L34.2353 30.3939L30.3884 34.2353ZM0 40H40V0H0V40Z" fill="#EC6278" />
		</svg>
	</div>
	<div class="card bg-navy text-white">
		<div class="title text-left">
			<h2 class="m-0"><?php pll_e('Filter articles'); ?></h2>
		</div>
		<div id="filter">
			<?php if (get_categories(array('taxonomy' => 'category'))) :
				if (isset($_GET['category']) && !empty($_GET['category'])) {
					$activeJobCats = $_GET['category'];
					$active = 'active';
				} else {
					$activeJobCats = null;
					$active = null;
				}
			?>
				<div class="filter-group active mb-4">
					<span class="filter-title d-none align-items-center justify-content-between text-uppercase">
						<?php pll_e('Categories'); ?>
						<i class="fas fa-plus"></i>
						<i class="fas fa-minus"></i>
					</span>
					<div class="filters job-category-filters">
						<?php hierarchical_tax_tree_filter(0, 'category', $activeJobCats); ?>
					</div>
				</div>
			<?php endif; ?>
			<button type="submit" class="btn btn__default yellow d-none"><?php pll_e('Filter'); ?></button>
		</div>
	</div>
</aside>