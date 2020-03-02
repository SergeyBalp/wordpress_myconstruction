<!doctype html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
 
    <?php wp_head() ?>
</head>

<body <?php body_class( );?>>
    <!-- <div class="preloader d-flex justify-content-center align-items-center">
        <div class="spinner-border text-warning" style="width: 7rem; height: 7rem;" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div> -->

    <div class=" scrollToTop" ><span class= "d-flex justify-content-center align-items-center"><i class="fas fa-angle-up"></i></span></div>
    <header class="main-header">
        <div class="col-md-10 offset-md-1">
            <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand" href="<?php home_url('/');?>">
                        <?php $custom_logo = wp_get_attachment_image_src( get_theme_mod('custom_logo') ); if($custom_logo): ?>
                    <div class="header-logo"> <img src="<?php echo $custom_logo[0] ?>" alt="<?php bloginfo('name'); ?>">
                    </div> 
                        <?php endif; ?>
                    <div class="header-text" ><span class="header-name"> <?php bloginfo('name'); ?></span><br>
                       <span class= "header-descr"> <?php bloginfo('description'); ?></span>
                    </div>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span><i class="fas fa-bars"></i></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <?php wp_nav_menu( array(
                        'theme_location'  => 'header_menu',
                        'container'       => false, 
                        'menu_class'      => 'navbar-nav ml-auto', 
                        ) );?>
                </div>
            </nav>
        </div>
    </header>

