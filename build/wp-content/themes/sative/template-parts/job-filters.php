<aside class="jobs__list-filters card bg-sea">
    <div class="title">
        <i class="fas fa-filter"></i>
        <h3><?php pll_e('Filter jobs'); ?></h3>
    </div>
    <?php if(get_categories(array('taxonomy' => 'job-category'))): ?>
    <div class="filter-group active">
        <span class="filter-title active">
            <?php pll_e('Categories'); ?>
            <i class="fas fa-plus"></i>
            <i class="fas fa-minus"></i>
        </span>
        <div class="filters">
            <?php hierarchical_tax_tree( 0, 'job-category' ); ?>
        </div>
    </div>
    <?php endif; ?>
    <div class="filter-group">
        <span class="filter-title">
            <?php pll_e('Salary range'); ?>
            <i class="fas fa-plus"></i>
            <i class="fas fa-minus"></i>
        </span>
        <div class="filters">
            <div class="inputs">
                <input type="text" placeholder="From">
                <input type="text" placeholder="To">
            </div>
        </div>
    </div>
    <?php if(get_categories(array('taxonomy' => 'job-location'))): ?>
    <div class="filter-group active">
        <span class="filter-title active">
            <?php pll_e('Location'); ?>
            <i class="fas fa-plus"></i>
            <i class="fas fa-minus"></i>
        </span>
        <div class="filters">
            <?php hierarchical_tax_tree( 0, 'job-location' ); ?>
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
    <div class="filter-group active">
        <span class="filter-title active">
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
    <a href="" class="btn btn__default yellow"><?php pll_e('Filter'); ?></a>
</aside>