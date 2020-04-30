<div id="searchModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="searchModalTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.3884 34.2353L20.1176 23.9745L9.84745 34.2353L6 30.3939L16.2713 20.1321L16.2568 20.1171L16.2713 20.1027L6.00107 9.84138L9.84638 6L20.1176 16.2597L30.3889 6L34.2348 9.84138L23.964 20.1027L23.979 20.1171L23.964 20.1321L34.2353 30.3939L30.3884 34.2353ZM0 40H40V0H0V40Z" fill="#EC6278"/>
                </svg>
            </button>
            <div class="modal-container">
                <div class="modal-header">
                    <h3 class="modal-title" id="searchModalTitle">Search for a job!</h3>
                </div>
                <div class="modal-body pt-3">
                    <form class="pt-3" action="<?php echo getTplPageURL(); ?>" method="GET">
                        <div class="row">
                            <div class="col-sm-3 dog">
                                <svg viewBox="0 0 306.39 610.05" xmlns="http://www.w3.org/2000/svg"><path d="m140.49 0-28 28.13v138.49h41.39l25.41-25.41v-61.89h-10.29v57.68l-19.24 19.42h-26.88v-124.11l22-22.15h151v42.84l-26.34 27.77h-79.14v90.94l6.35 6.35h-55.17l-28.68 33.94v258.11l-58.45 58.44h-54.45v10.35h58.63l64.43-64.44v-258.65l23.24-27.4h60.26v-.41l10 10v23.8h-54.29v-12h-10.35v22.33h84.22l22.51 22v65.87h-22.33l-19.42-19.42v-30.5h-39.75v10.35h29.41v24.5l10.7 10.71v225.07l-47.91 43.38-8.17-8.35 38.12-35-45.2-46.28-7.26 7.26 37.75 38.66-37.93 34.82 23.59 24.5h-64.25v-84.22h-10.35v94.57h98.74l-17.78-18.52 51.18-46.28v-219.44l4.36 4.35h36.85v-80.41l-28-28.13h-13.75v-28.13l-26.32-26.32v-76h73.33l32.13-33.76v-57.41z" fill="#173751"/><g fill="#ffffff"><path d="m225.42 206.72-23.51-23.51 23.51-23.51 7.31 7.32-16.19 16.19 16.19 16.2z"/><path d="m193.2 206.72-7.32-7.31 16.2-16.2-16.2-16.21 7.32-7.32 23.51 23.51z"/></g></svg>
                            </div>
                            <div class="col-sm-9 searchInput">
                                <div class="triangle-left"></div>
                                <input type="text" name="job-title" value="<?= isset($_GET['job-title']) ? $_GET['job-title'] : null ?>" placeholder="<?php pll_e('Let me help you find the perfect job'); ?>">
                                <button type="submit" class="btn btn__notched"><i class="far fa-search"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>