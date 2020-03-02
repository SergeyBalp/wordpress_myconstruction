
<?php get_header(); ?>
<section class="error-404 not-found">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <header class="page-header">
                        <h1 class="page-title"><?php esc_html_e( 'Oops! That page can&rsquo;t be found.', 'myconstruction' ); ?></h1>
                    </header><!-- .page-header -->
                   
                    <p><?php esc_html_e( 'It looks like nothing was found at this location. Maybe try one of the links below or a search?', 'construction' ); ?></p>

                        <?php
                        get_search_form();

                        the_widget( 'WP_Widget_Recent_Posts' );
                        ?>

                </div>

                <?php get_sidebar( ); ?>

            </div>
        </div>
    </section>

<?php get_footer( ); ?>