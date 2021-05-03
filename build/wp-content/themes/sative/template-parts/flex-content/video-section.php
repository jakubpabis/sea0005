<section class="flex_content-video_section">
    <?php if( get_sub_field('video-position') === 'left' ): ?>
        <div class="container position-absolute h-100 right-0 top-80">
            <div class="row">
                <div class="col-lg-11 position-absolute h-100 p-0 right-0">
                    <div class="flex_content-video_section-dog right <?php echo get_sub_field('color'); ?> w-100 h-100">
                        <svg class="flip-vertical" viewBox="0 0 649.89 364.92" xmlns="http://www.w3.org/2000/svg"><path d="m484.2 0-28 28.09v138.59h41.45l25.37-25.37v-62h-10.23v57.79l-19.43 19.42h-27v-124l22-22.15h151.14v42.84l-26.11 26.11h-79.19v99h-363.44l-107.65 107.52h-63.11v10.28h67.44l107.66-107.54h359.1v91.94l-37.87 46.28 26.85 27.72h-56.8v-72.26h-233.25l-46.53 44.42 26.73 27.72h-64.22v-117.4h-10.27v127.79h98.75l-36.39-37.74 36-34.4h218.9v72.27h91.33l-37.25-38.49 34.4-41.95v-194.64h73.13l32.17-32.05v-57.3h-165.68" fill="#FFFFFF"/><g class="bowtie" fill="#EC6278"><path d="m555.61 206.72-23.4-23.39 23.4-23.4 7.22 7.22-16.18 16.18 16.18 16.17z"/><path d="m523.25 206.72-7.25-7.22 16.17-16.17-16.17-16.18 7.21-7.22 23.4 23.4-23.4 23.39"/></g></svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-9">
                    <h4 class="text-uppercase">
                        <?php echo get_sub_field('sub_title'); ?>
                    </h4>
                    <span class="display-2 text700">
                        <?php echo get_sub_field('title'); ?>
                    </span>
                </div>
                <div class="col-lg-9 mt-5 pt-5">
                    <div class="flex_content-video_section-video left position-relative d-flex">
                        <div class="embed-container">
                            <video class="w-100" muted preload="auto" loop id="video_section_item_<?php $vid_id = rand(1000, 200000); echo $vid_id; ?>" onclick="document.getElementById('video_section_item_<?php echo $vid_id; ?>').pause(); document.getElementById('video_play_button_<?php echo $vid_id; ?>').style.setProperty('display', 'flex', 'important');">
                                <source src="<?php echo get_sub_field('video')['url']; ?>" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div
                            id="video_play_button_<?php echo $vid_id; ?>"
                            class="video_play_button position-absolute w-100 h-100 top-0 left-0 d-flex align-items-center justify-content-center" 
                            onclick="document.getElementById('video_section_item_<?php echo $vid_id; ?>').play(); document.getElementById('video_play_button_<?php echo $vid_id; ?>').style.setProperty('display', 'none', 'important');"
                        >
                            <?php if( get_sub_field('color') === 'bg-yellow' ): ?>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="60"><path fill="#FDD963" fill-rule="evenodd" d="M51.6 0L60 8.4v43.2L51.6 60H8.4L0 51.6V8.4L8.4 0h43.2zM21.3 16.1a1.3 1.3 0 00-.7 1.1v25.6c0 .4.3.9.7 1.1a1.2 1.2 0 001.2 0l20-12.8c.4-.2.6-.7.6-1.1 0-.4-.2-.8-.6-1L22.5 16a1.2 1.2 0 00-1.2 0z"/></svg>
                            <?php else: ?>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="60"><path fill="#EC6278" fill-rule="evenodd" d="M51.6 0L60 8.4v43.2L51.6 60H8.4L0 51.6V8.4L8.4 0h43.2zM21.3 16.1a1.3 1.3 0 00-.7 1.1v25.6c0 .4.3.9.7 1.1a1.2 1.2 0 001.2 0l20-12.8c.4-.2.6-.7.6-1.1 0-.4-.2-.8-.6-1L22.5 16a1.2 1.2 0 00-1.2 0z"/></svg>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <?php else: ?>
        <div class="container position-absolute h-100 left-0 top-80">
            <div class="row">
                <div class="col-lg-11 position-absolute h-100 p-0 left-0">
                    <div class="flex_content-video_section-dog left <?php echo get_sub_field('color'); ?> w-100 h-100">
                        <svg viewBox="0 0 649.89 364.92" xmlns="http://www.w3.org/2000/svg"><path d="m484.2 0-28 28.09v138.59h41.45l25.37-25.37v-62h-10.23v57.79l-19.43 19.42h-27v-124l22-22.15h151.14v42.84l-26.11 26.11h-79.19v99h-363.44l-107.65 107.52h-63.11v10.28h67.44l107.66-107.54h359.1v91.94l-37.87 46.28 26.85 27.72h-56.8v-72.26h-233.25l-46.53 44.42 26.73 27.72h-64.22v-117.4h-10.27v127.79h98.75l-36.39-37.74 36-34.4h218.9v72.27h91.33l-37.25-38.49 34.4-41.95v-194.64h73.13l32.17-32.05v-57.3h-165.68" fill="#FFFFFF"/><g class="bowtie" fill="#FDD963"><path d="m555.61 206.72-23.4-23.39 23.4-23.4 7.22 7.22-16.18 16.18 16.18 16.17z"/><path d="m523.25 206.72-7.25-7.22 16.17-16.17-16.17-16.18 7.21-7.22 23.4 23.4-23.4 23.39"/></g></svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-9">
                    <h4 class="text-uppercase">
                        <?php echo get_sub_field('sub_title'); ?>
                    </h4>
                    <span class="display-2 text700">
                        <?php echo get_sub_field('title'); ?>
                    </span>
                </div>
                <div class="offset-lg-3 col-lg-9 mt-5 pt-5">
                    <div class="flex_content-video_section-video right position-relative d-flex">
                        <div class="embed-container">
                            <video class="w-100" muted preload="auto" loop id="video_section_item_<?php $vid_id = rand(1000, 200000); echo $vid_id; ?>" onclick="document.getElementById('video_section_item_<?php echo $vid_id; ?>').pause(); document.getElementById('video_play_button_<?php echo $vid_id; ?>').style.setProperty('display', 'flex', 'important');">
                                <source src="<?php echo get_sub_field('video')['url']; ?>" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div
                            id="video_play_button_<?php echo $vid_id; ?>"
                            class="video_play_button position-absolute w-100 h-100 top-0 left-0 d-flex align-items-center justify-content-center" 
                            onclick="document.getElementById('video_section_item_<?php echo $vid_id; ?>').play(); document.getElementById('video_play_button_<?php echo $vid_id; ?>').style.setProperty('display', 'none', 'important');"
                        >
                            <?php if( get_sub_field('color') === 'bg-yellow' ): ?>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="60"><path fill="#FDD963" fill-rule="evenodd" d="M51.6 0L60 8.4v43.2L51.6 60H8.4L0 51.6V8.4L8.4 0h43.2zM21.3 16.1a1.3 1.3 0 00-.7 1.1v25.6c0 .4.3.9.7 1.1a1.2 1.2 0 001.2 0l20-12.8c.4-.2.6-.7.6-1.1 0-.4-.2-.8-.6-1L22.5 16a1.2 1.2 0 00-1.2 0z"/></svg>
                            <?php else: ?>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="60"><path fill="#EC6278" fill-rule="evenodd" d="M51.6 0L60 8.4v43.2L51.6 60H8.4L0 51.6V8.4L8.4 0h43.2zM21.3 16.1a1.3 1.3 0 00-.7 1.1v25.6c0 .4.3.9.7 1.1a1.2 1.2 0 001.2 0l20-12.8c.4-.2.6-.7.6-1.1 0-.4-.2-.8-.6-1L22.5 16a1.2 1.2 0 00-1.2 0z"/></svg>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <?php endif; ?>
</section>