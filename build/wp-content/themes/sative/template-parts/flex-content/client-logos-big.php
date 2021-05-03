<section>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="row">
                    <?php foreach( get_sub_field('logos') as $item ): ?>
                        <div class="col-lg-3 d-flex mb-4">
                            <div class="card notched h-100 d-flex align-items-center justify-content-center p-2">
                                <div class="card-body d-flex align-items-center justify-content-center">
                                    <img class="lazy" data-src="<?php echo $item['image']['url']; ?>" alt="">
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </div>
</section>