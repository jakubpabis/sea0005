<section class="py-5 my-5">
    <div class="container">
        <div class="row">
            <?php $i = 1; foreach( get_sub_field('bubbles') as $item ): ?>
            <div class="col-lg-4">
                <div class="card bg-white d-block">
                    <div class="row">
                        <div class="col-lg-4">
                            <img src="<?php echo $item['icon']['url']; ?>" alt="<?php echo $item['icon']['title']; ?>">
                        </div>
                        <div class="col-lg-8">
                            <span class="display-2 text700 m-0">
                                <?php echo $item['title']; ?>
                            </span>
                            <p class="text-size-xlarge text700 font-primary mt-3 mb-0">
                                <?php echo $item['text']; ?>
                            </p>
                        </div>
                    </div>
                </div>
                <?php if( $i % 2 === 0 ): ?>
                    <div class="text-bubble text-bubble-right"></div>
                <?php else: ?>
                    <div class="text-bubble text-bubble-left"></div>
                <?php endif; ?>
            </div>
            <?php $i++; endforeach; ?>
        </div>
    </div>
</section>