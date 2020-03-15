    <?php get_header( 'main' );?>

    <?php 
    $cat_welcome = get_category(4);
    ?>
    <section class="section-welcome">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 welcome-left text-left ml-4 pr-5 ">
                        <?php if($cat_welcome -> name): ?>
                    <h2><?php echo $cat_welcome -> name ;?></h2>
                        <?php endif; ?>
                        <?php if(get_field('section_title', $cat_welcome)): ?>
                    <h3><?php the_field('section_title', $cat_welcome);?></h3>
                        <?php endif; ?>
                        <?php if($cat_welcome -> category_description): ?>
                    <p><?php echo $cat_welcome -> category_description;?></p>
                        <?php endif; ?>
                        <?php
                        $cat_link = get_category_link( 4 );
                        ?>
                    <a href="<?php echo $cat_link; ?>" class="btn btn-yellow"><?php _e('know more', 'myconstruction'); ?></a>
                </div>
                <div class="col welcome-right mr-4 d-none d-lg-block" <?php echo myconstruction_get_background('section_bg', $cat_welcome );?>>
                      <?php if(get_field('section_add_img', $cat_welcome)): ?>
                     <img class="welcome-employee" src="<?php the_field('section_add_img', $cat_welcome);?>" alt="Foto employee">
                     <?php endif; ?>
                </div>
            </div>
        </div>
    </section>

    <?php 
    $cat_choose = get_category(6);
    //  myconstruction_debug(  $cat_choose);
    $query = new WP_Query(array(
        'cat'=> 6,
        'order' => 'ASC',
    ));
    ?>
    <section class="section-choose">
        <div class="container">
            <div class="row">
                <div class="col-md-12  text-center">
                    <h2 class="section-title"><?php echo $cat_choose-> name; ?></h2>
                    <p class="pr-5 pl-5"><?php echo $cat_choose -> category_description;?></p>
                    <div class="row">
                        <?php
                        if($query->have_posts(  )):  while($query->have_posts(  )): $query->the_post(  ); ?>
                        <div class="col-lg-3 text-center">
                            <div class="choose-circle-1">
                                <div class="choose-circle-2">
                                    <div class="choose-circle">
                                        <img class="circle-img" src="<?php  echo get_the_post_thumbnail_url( ); ?>" alt="">
                                    </div>
                                </div>
                            </div>
                            <p><?php the_content(); ?></p>
                        </div>
                        <?php endwhile; ?>
                        <?php wp_reset_postdata(); ?>
                        <?php else: ?>
                    </div>
                </div>
            </div>
        </div>
        <?php endif; ?>
    </section>

    <?php 
    $cat_services = get_category(7);
    $query = new WP_Query(array(
        'cat' => 7,
        'order' =>'ASC' ,
    ));
    ?>
    <section class="section-services">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h2 class="section-title"><?php echo $cat_services-> name; ?></h2>
                    <div class="row">
                        <?php
                        if($query->have_posts(  )):  while($query->have_posts(  )): $query->the_post(  ); ?>
                            <div class="col-md-4 card-deck ">
                                    <div class="card">
                                            <img class="card-img-top" src="<?php  echo get_the_post_thumbnail_url( ); ?>" alt="Card image cap">
                                            <div class="card-body">
                                                <h5 class="card-title"><?php the_title(); ?></h5>
                                                <p class="card-text"><?php the_content(); ?></p>
                                            </div>
                                            <div class="card-footer">
                                                <a href="<?php the_permalink( ); ?>" class="btn btn-yellow"><?php _e('know more', 'myconstruction'); ?></a>
                                            </div>
                                    </div>
                            </div>
                        <?php endwhile; ?>
                        <?php wp_reset_postdata(); ?>
                        <?php else: ?>
                    </div>
                </div>
            </div>
        </div>
        <?php endif; ?>
    </section>
    <?php
    $cat_gallery = get_category(8);
    if($cat_gallery):
        $posts = get_posts( array(
            'numberpost' => 5,
            'category' =>  8,
            'order' =>'ASC' ,
        ));
    ?>
    <section class="section-gallery"  <?php echo myconstruction_get_background('section_bg', $cat_gallery );?>>
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h2 class="section-title"><?php echo $cat_gallery-> name; ?></h2>
                    <p class="pr-5 pl-5"><?php echo $cat_gallery -> category_description;?></p>
                    <ul class="nav nav-pills tab-content mb-4" id="myTab" role="tablist">
                        <?php
                            $data=[];
                            $i=0;
                            foreach($posts as $post):
                            setup_postdata( $post );
                            $data[$i]['post_name'] = $post->post_name;
                            $data[$i]['content'] = get_the_content( );
                        ?>
                        <li class="nav-item">
                            <a class="nav-link info-tab <?php if(!$i) echo 'active';?> " id="<?php echo $post->post_name; ?>-tab" data-toggle="tab" href="#<?php echo $post->post_name; ?>" role="tab"
                                aria-controls="<?php echo $post->post_name; ?>" aria-selected="true"><?php the_title(); ?></a>
                        </li>
                        <?php $i++; endforeach; ?>
                    </ul>
                    <div class="row ">
                        <div class="col-md-6 gallery-left">
                                <img class="img-fluid" src="<?php the_field('section_add_img', $cat_gallery);?>" alt="">
                        </div>
                        <div class="col-md-6 gallery-right">
                            <div class="tab-content" id="myTabContent">
                                <?php foreach($data as $k => $item): ?>
                                <div class="tab-pane fade  <?php if(!$k) echo 'show active';?>" id="<?php echo $item['post_name']; ?>" role="tabpanel"
                                    aria-labelledby="<?php echo $item['post_name']; ?>-tab">
                                    <?php echo $item['content']; ?>
                                </div>
                                <?php endforeach; ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php wp_reset_postdata(  ); ?>
        <?php endif; ?>
    </section>
   <?php $cat_review = get_category(9); 
   $posts = get_posts( array(
    'post_type' => 'reviews',
    'order' =>'ASC' ,
   ) );
   if($posts):
   
   ?>
    <section class="section-reviews "  <?php echo myconstruction_get_background('section_bg', $cat_review );?>>
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center reviews-block" >
                    <h2 class="section-title"><?php echo $cat_review-> name; ?></h2>
                    <p class="pr-5 pl-5"><?php echo $cat_review-> category_description; ?></p>
                    <div class="row review-row">
                        <?php $i = 0; foreach($posts as $post): ?>
                        <div class="col-md-4 pl-4 pr-4">
                            <blockquote class="blockquote">
                                <div class="review-text text-left <?php if(!$i) echo 'firster';?>">
                                    <p class="mb-0 text-content"><?php echo $post->post_content; ?></p>
                                </div>
                                <div class="reviews-img text-center ">
                                    <?php if(has_post_thumbnail( $post->ID )):?>
                                    <?php echo get_the_post_thumbnail( $post->ID );  ?>
                                    <?php endif; ?>
                                </div>
                                <footer class="blockquote-footer"><?php the_field('review_author') ?></footer>
                            </blockquote>
                        </div>
                        <?php $i++; endforeach; ?>
                    </div>
                </div>
            </div>
        </div>
        <?php endif; ?>
    </section>

<?php $page_contact = get_page_by_title( 'Contact' );

if($page_contact):
    // myconstruction_debug( $page_contact);
?>

    <section class="section-contact" id="contact">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h2><?php the_field('contact_title', $page_contact);?></h2>
                    <h3><?php the_field('contact_descr', $page_contact);?></h3>
                </div>
                <div class="col-md-6">
                     <div class="form">

                        <?php echo do_shortcode('[contact-form-7 id="167" title="Контактная форма"]'); ?>
                     </div>
                </div>
            </div>
        </div>    
    </section>
<?php endif;?>

<?php  get_footer(  ); ?>
