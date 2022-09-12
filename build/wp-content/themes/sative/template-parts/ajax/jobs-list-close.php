<nav class="pagination d-flex align-items-center justify-content-center">
	<?php /* if ($query->max_num_pages > 1) : ?>
			<?php foreach ($pagination as $page) : ?>
				<?php echo $page; ?>
			<?php endforeach; ?>
	<?php endif; */ ?>
	<?php echo $pagination; ?>
</nav>
</main>
<div class="d-lg-none d-block mt-5 pt-sm-3 pt-1">
	<?php get_template_part('template-parts/jobs-sidebar'); ?>
</div>