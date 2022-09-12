<?php

$taxonomyFilters = array(
	'job-category',
	'job-location',
	'job-industry',
	'job-type',
	'salary_min',
	'salary_max',
	'location_s'
);
$opened = false;
// for taxonomies
foreach ($taxonomyFilters as $taxF) {
	if (isset($_GET[$taxF]) && !empty($_GET[$taxF]) && $_GET[$taxF] !== null) {
		$opened = true;
	}
}

?>

<aside class="jobs__list-filters <?php echo $opened ? null : 'not-opened'; ?>">
	<div class="closethis">
		<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M30.3884 34.2353L20.1176 23.9745L9.84745 34.2353L6 30.3939L16.2713 20.1321L16.2568 20.1171L16.2713 20.1027L6.00107 9.84138L9.84638 6L20.1176 16.2597L30.3889 6L34.2348 9.84138L23.964 20.1027L23.979 20.1171L23.964 20.1321L34.2353 30.3939L30.3884 34.2353ZM0 40H40V0H0V40Z" fill="#EC6278" />
		</svg>
	</div>
	<div class="card bg-navy text-white p-xl-4 p-3">
		<div class="title text-left">
			<h2 class="m-0"><?php pll_e('Filter jobs'); ?></h2>
		</div>
		<div id="filter">
			<?php if (get_categories(array('taxonomy' => 'job-category'))) :
				if (isset($_GET['job-category']) && !empty($_GET['job-category'])) {
					$activeJobCats = $_GET['job-category'];
					$active = 'active';
				} else {
					$activeJobCats = null;
					$active = null;
				}
			?>
				<div class="filter-group <?php echo $active ?> mb-4">
					<span class="filter-title <?php echo $active ?> d-flex align-items-center justify-content-between text-uppercase">
						<?php pll_e('Categories'); ?>
						<i class="fas fa-plus"></i>
						<i class="fas fa-minus"></i>
					</span>
					<div class="filters job job-category-filters">
						<?php hierarchical_tax_tree_filter(0, 'job-category', $activeJobCats); ?>
					</div>
				</div>
			<?php endif; ?>
			<?php
			if (isset($_GET['salary_min']) && $_GET['salary_min'] !== null && $_GET['salary_min'] !== '') {
				$salaryMin = $_GET['salary_min'];
			} else {
				$salaryMin = null;
			}
			if (isset($_GET['salary_max']) && $_GET['salary_max'] !== null && $_GET['salary_max'] !== '') {
				$salaryMax = $_GET['salary_max'];
			} else {
				$salaryMax = null;
			}
			if (isset($salaryMin) && $salaryMin !== null || isset($salaryMax) && $salaryMax !== null) {
				$active = 'active';
			} else {
				$active = null;
			}
			?>
			<div class="filter-group <?php echo $active; ?> mb-4">
				<span class="filter-title <?php echo $active; ?> d-flex align-items-center justify-content-between text-uppercase">
					<?php pll_e('Salary range'); ?>
					<i class="fas fa-plus"></i>
					<i class="fas fa-minus"></i>
				</span>
				<div class="filters job job-salary-filters">
					<div class="inputs">
						<input type="text" name="salary_min" placeholder="<?php pll_e('From'); ?>" value="<?php echo $salaryMin; ?>">
						<input type="text" name="salary_max" placeholder="<?php pll_e('To'); ?>" value="<?php echo $salaryMax; ?>">
					</div>
				</div>
			</div>
			<?php if (get_categories(array('taxonomy' => 'job-location'))) :
				if (isset($_GET['job-location']) && !empty($_GET['job-location'])) {
					$activeJobLocs = $_GET['job-location'];
					$active = 'active';
				} else {
					$activeJobLocs = null;
					$active = null;
				}
			?>
				<div class="filter-group <?php echo $active ?> mb-4">
					<span class="filter-title <?php echo $active ?> d-flex align-items-center justify-content-between text-uppercase">
						<?php pll_e('Location'); ?>
						<i class="fas fa-plus"></i>
						<i class="fas fa-minus"></i>
					</span>
					<div class="filters job">
						<?php hierarchical_tax_tree_filter(0, 'job-location', $activeJobLocs); ?>
					</div>
				</div>
			<?php endif; ?>
			<?php if (get_categories(array('taxonomy' => 'job-industry'))) :
				if (isset($_GET['job-industry']) && !empty($_GET['job-industry'])) {
					$activeJobInds = $_GET['job-industry'];
					$active = 'active';
				} else {
					$activeJobInds = null;
					$active = null;
				}
			?>
				<div class="filter-group <?php echo $active ?> mb-4">
					<span class="filter-title <?php echo $active ?> d-flex align-items-center justify-content-between text-uppercase">
						<?php pll_e('Industry type'); ?>
						<i class="fas fa-plus"></i>
						<i class="fas fa-minus"></i>
					</span>
					<div class="filters job">
						<?php hierarchical_tax_tree_filter(0, 'job-industry', $activeJobInds, 'name', 'ASC'); ?>
					</div>
				</div>
			<?php endif; ?>
			<?php if (get_categories(array('taxonomy' => 'job-type'))) :
				if (isset($_GET['job-type']) && !empty($_GET['job-type'])) {
					$activeJobTyps = $_GET['job-type'];
					$active = 'active';
				} else {
					$activeJobTyps = null;
					$active = null;
				}
			?>
				<div class="filter-group <?php echo $active ?> mb-4">
					<span class="filter-title <?php echo $active ?> d-flex align-items-center justify-content-between text-uppercase">
						<?php pll_e('Job type'); ?>
						<i class="fas fa-plus"></i>
						<i class="fas fa-minus"></i>
					</span>
					<div class="filters job job-type-filters">
						<?php hierarchical_tax_tree_filter(0, 'job-type', $activeJobTyps); ?>
					</div>
				</div>
			<?php endif; ?>
			<button type="submit" class="btn btn__default yellow d-none"><?php pll_e('Filter'); ?></button>
		</div>
	</div>
</aside>