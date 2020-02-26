    <footer class="section-footer">
        <div class="container">
            <?php if (is_active_sidebar('footer_sidebar'  )): ?>
            <div class="row">
             <?php  dynamic_sidebar('footer_sidebar' ); ?>
            </div>

            <?php endif; ?>
        </div>

    </footer>
    <section class="section-copyright">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 text-center">
                    <p>
                    <ul class="nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <img src="<?php bloginfo('template_url'); ?>/dist/images/Facebook.png" alt="">
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <img class="social-link" src="<?php bloginfo('template_url'); ?>/dist/images/Twitter.png" alt="">
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <img class="social-link" src="<?php bloginfo('template_url'); ?>/dist/images/Youtube.png" alt="">
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <img class="social-link" src="<?php bloginfo('template_url'); ?>/dist/images/Google.png" alt="">
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <img class="social-link" src="<?php bloginfo('template_url'); ?>/dist/images/in.png" alt="">
                            </a>
                        </li>
                    </ul>
                    </p>

                    <p class="copyright">Copyright &copy; <?php the_time( 'Y'); ?> | Designed by <span>PSDFreebies.com</span> </p>
                </div>
            </div>
        </div>
    </section>
    <?php wp_footer() ?>
</body>

</html>
