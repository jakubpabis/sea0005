<aside class="jobs__list-filters card bg-sea">
    <form action="" method="GET" id="filter">
        <div class="title">
            <i class="fas fa-filter"></i>
            <h3><?php pll_e('Filter jobs'); ?></h3>
        </div>
        <?php if(get_categories(array('taxonomy' => 'job-category'))): 
            if( isset($_GET['job-category']) && !empty($_GET['job-category']) ){ 
                $activeJobCats = $_GET['job-category']; 
                $active = 'active';
            } else {
                $activeJobCats = null;
                $active = null;
            } 
        ?>
        <div class="filter-group <?= $active ?>">
            <span class="filter-title <?= $active ?>">
                <?php pll_e('Categories'); ?>
                <i class="fas fa-plus"></i>
                <i class="fas fa-minus"></i>
            </span>
            <div class="filters">
                <?php hierarchical_tax_tree_filter( 0, 'job-category', $activeJobCats); ?>
            </div>
        </div>
        <?php endif; ?>
        <?php  
            if( isset( $_GET['salary_min'] ) && $_GET['salary_min'] ){ 
                $salaryMin = $_GET['salary_min']; 
            } else {
                $salaryMin = null; 
            }
            if( isset( $_GET['salary_max'] ) && $_GET['salary_max'] ) {
                $salaryMax = $_GET['salary_max']; 
            } else {
                $salaryMax = null; 
            }
            if( isset( $salaryMin ) || isset( $salaryMax ) ) {
                $active = 'active';
            } else {
                $active = null;
            }
        ?>
        <div class="filter-group <?= $active; ?>">
            <span class="filter-title <?= $active; ?>">
                <?php pll_e('Salary range'); ?>
                <i class="fas fa-plus"></i>
                <i class="fas fa-minus"></i>
            </span>
            <div class="filters">
                <div class="inputs">
                    <input type="text" name="salary_min" placeholder="From" value="<?= $salaryMin; ?>">
                    <input type="text" name="salary_max" placeholder="To" value="<?= $salaryMax; ?>">
                </div>
            </div>
        </div>
        <?php if(get_categories(array('taxonomy' => 'job-location'))): 
            if( isset($_GET['job-location']) && !empty($_GET['job-location']) ){ 
                $activeJobLocs = $_GET['job-location']; 
                $active = 'active';
            } else {
                $activeJobLocs = null;
                $active = null;
            }    
        ?>
        <div class="filter-group <?= $active ?>">
            <span class="filter-title <?= $active ?>">
                <?php pll_e('Location'); ?>
                <i class="fas fa-plus"></i>
                <i class="fas fa-minus"></i>
            </span>
            <div class="filters">
                <?php hierarchical_tax_tree_filter( 0, 'job-location', $activeJobLocs); ?>
            </div>
        </div>
        <?php endif; ?>
        <div class="filter-group">
            <span class="filter-title">
                <?php pll_e('Industry type'); ?>
                <i class="fas fa-plus"></i>
                <i class="fas fa-minus"></i>
            </span>
        </div>
        <?php if(get_categories(array('taxonomy' => 'job-type'))): ?>
        <div class="filter-group">
            <span class="filter-title">
                <?php pll_e('Job type'); ?>
                <i class="fas fa-plus"></i>
                <i class="fas fa-minus"></i>
            </span>
            <div class="filters">
                <?php hierarchical_tax_tree( 0, 'job-type' ); ?>
            </div>
        </div>
        <?php endif; ?>
        <div class="filter-group">
            <span class="filter-title">
                <?php pll_e('Hot skills'); ?>
                <i class="fas fa-plus"></i>
                <i class="fas fa-minus"></i>
            </span>
        </div>
        <button type="submit" class="btn btn__default yellow"><?php pll_e('Filter'); ?></button>
        <!-- <input type="hidden" name="action" value="myfilter"> -->
    </form>
</aside>