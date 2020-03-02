<?php get_header(); ?>

<section id="primary" class="section-content search">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                <main id="main" class="site-main">

                    <?php if ( have_posts() ) : ?>

                        <header class="page-header">
                            <h1 class="page-title">
                                <?php
                                /* translators: %s: search query. */
                                printf( esc_html__( 'Search Results for: %s', 'myconstruction' ), '<span>' . get_search_query() . '</span>' );
                                ?>
                            </h1>
                        </header><!-- .page-header -->
                        <br><br><br><br>
                        <?php
                        /* Start the Loop */
                        while ( have_posts() ) :
                            the_post();

                            /**
                             * Run the loop for the search to output the results.
                             * If you want to overload this in a child theme then include a file
                             * called content-search.php and that will be used instead.
                             */
                            // get_template_part( 'template-parts/content', 'search' );?>
                           <article class="article-preview">
                            <h2><a href="<?php the_permalink( ); ?>"><?php the_title( ); ?></a></h2>
                            <p><span class="article-date"><i class="far fa-calendar-alt"></i> <?php the_time('d.m.Y'); ?></span></p>
                            <div class="article-excerpt">

                                <?php if(has_post_thumbnail( )):?>
                                    <div class="myconstruct-thumb">
                                        <a href="<?php the_permalink( ); ?>">
                                            <?php the_post_thumbnail( 'medium', array('class' => 'thumb') ); ?>
                                        </a>
                                    </div>

                                    <?php endif; ?>
                                    <p><?php the_content( '' ); ?></p>
                                    <p><a class="more" href="<?php the_permalink( ); ?>"><?php _e('Read more', 'myconstruction'); ?></a></p>
                            </div>
                                <div class="clearfix"></div>
                         </article>




                        <?php
                        endwhile;

                        the_posts_navigation();

                    else :

                        get_template_part( 'template-parts/content', 'none' );

                    endif;
                    ?>

                </main>
                 
                </div>

                <?php get_sidebar( ); ?>

            </div>
        </div>
    </section>

<?php get_footer( ); ?>