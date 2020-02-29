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
                            <i class="fab fa-facebook-f "></i>
                             </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                           <i class="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                            <i class="fab fa-youtube "></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                            <i class="fab fa-google-plus-g "></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                            <i class="fab fa-linkedin-in"></i>
                            </a>
                        </li>
                    </ul>
                    </p>
                    <p class="copyright">Copyright &copy; <?php the_time( 'Y'); ?> | Designed by <span class= "name" >PSDFreebies.com</span> </p>
                </div>
            </div>
        </div>
    </section>
    <?php wp_footer() ?>
</body>

</html>
