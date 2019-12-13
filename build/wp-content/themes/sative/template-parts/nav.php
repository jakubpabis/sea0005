<nav class="main-nav">
    <div class="container">
        <div class="row justify-content-between align-items-center">
            <div class="col-auto main-nav__logo">

            </div>
            <div class="col-auto">
            <?php
                wp_nav_menu(array(
                    'theme_location'    => 'primary',
                    'container'       => '',
                    'container_id'    => '',
                    'container_class' => '',
                    'menu_id'         => false,
                    'menu_class'      => 'main-nav__menu',
                    'depth'           => 3,
                    'fallback_cb'     => 'wp_bootstrap_navwalker::fallback',
                    'walker'          => new wp_bootstrap_navwalker()
                ));
            ?>
            </div>
        </div>
    </div>
</nav>