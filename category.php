<?php get_header(); ?>

<section class="section-content">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
               
                    <?php if(have_posts(  )): while(have_posts(  )) : the_post(  );  ?>
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

                    <?php endwhile; ?>

                    <?php the_posts_pagination( array(
                        'end-size' => 1,
                        'mid-size' => 1,
                        'type' => 'list',
                    ) ); ?>

                    <?php else: ?>

                    <?php endif; ?>
                 
                </div>

                <?php get_sidebar( ); ?>

            </div>
        </div>
    </section>

<?php get_footer( ); ?>

