<?php
/**
 * myconstruction functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package myconstruction
 */

if ( ! function_exists( 'myconstruction_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function myconstruction_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on myconstruction, use a find and replace
		 * to change 'myconstruction' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'myconstruction', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'header_menu' => esc_html__( 'Header Menu', 'myconstruction' ),
			'footer_menu' => esc_html__( 'Footer Menu', 'myconstruction' ),
		) );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		// Set up the WordPress core custom background feature.
		add_theme_support( 'custom-background', apply_filters( 'myconstruction_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' =>  get_template_directory_uri() .'/dist/images/background.png',
		) ) );

		add_theme_support( 'custom-header', array(
			'default-image' =>  get_template_directory_uri() .'/dist/images/Background_full.png',
			'width'       => 2000,
			'height'      => 1400,
		));


		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support( 'custom-logo', array(
			'width'       => 73,
			'height'      => 73,
			'flex-width'  => true,
			'flex-height' => true,
		) );
	}
endif;
add_action( 'after_setup_theme', 'myconstruction_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function myconstruction_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'myconstruction_content_width', 640 );
}
add_action( 'after_setup_theme', 'myconstruction_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function myconstruction_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Footer sidebar', 'myconstruction' ),
		'id'            => 'footer_sidebar',
		'description'   => esc_html__( 'Add widgets here.', 'myconstruction' ),
		'before_widget' => '<div id="%1$s" class="widget %2$s col-md-6 col-lg-3">',
		'after_widget'  => '</div>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );

	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar widgets', 'myconstruction' ),
		'id'            => 'sidebar_widgets',
		'description'   => esc_html__( 'Add widgets here.', 'myconstruction' ),
		'before_widget' => '<div id="%1$s" class="widget %2$s sidebar-widget widget-categories">',
		'after_widget'  => '</div>',
		'before_title'  => '<h5 class="widget-title">',
		'after_title'   => '</h5>',
	) );

}
add_action( 'widgets_init', 'myconstruction_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function myconstruction_scripts() {
	wp_enqueue_style( 'myconstruction-style', get_stylesheet_uri() );
	
	wp_enqueue_style( 'myconstruction-bootstrap-style', 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css',  array(), '4.4.1' );
	wp_enqueue_style( 'myconstruction-fontawesome-css', 'https://use.fontawesome.com/releases/v5.6.3/css/all.css' );
	wp_enqueue_style( 'myconstruction-bundle-css', get_template_directory_uri() .'/dist/css/bundle.css' );

    wp_deregister_script( 'jquery' );
    wp_register_script( 'jquery', 'https://code.jquery.com/jquery-3.4.1.min.js');
	wp_enqueue_script( 'jquery' );
	wp_enqueue_script( 'myconstruction-fontawesome-js','https://kit.fontawesome.com/71d3603472.js' ,'');
	wp_enqueue_script( 'myconstruction-poppers-js','https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js' ,'2020', true );
	wp_enqueue_script( 'myconstruction-bootstrap-js','https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js' ,'2020', true );
	wp_enqueue_script( 'myconstruction-main-js', get_template_directory_uri() .'/dist/js/main.js' ,'2020', true );
	

	// wp_enqueue_script( 'myconstruction-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true );

	// wp_enqueue_script( 'myconstruction-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );



	// if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
	// 	wp_enqueue_script( 'comment-reply' );
	// }
}
add_action( 'wp_enqueue_scripts', 'myconstruction_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

// Custom code

function myconstruction_debug($data){
	echo '<pre>' . print_r($data, 1) . '</pre>';
}

function myconstruction_get_background($field,$cat = null,$cover = true){
	if( get_field($field, $cat) ){
        $add_style = $cover ? 'background-size: cover;' : '';
        return ' style="background: url(' . get_field($field, $cat) . ') center no-repeat; ' . $add_style . '"';
    }
    return null;
}

require_once get_template_directory(  ).'/inc/tgm/tgm.php';

add_action('init', 'myconstruction_reviews');
function myconstruction_reviews(){
    register_post_type('reviews', array(
        'labels'             => array(
            'name'               => 'Отзывы',
            'singular_name'      => 'Отзыв',
            'add_new'            => __('Добавить новый отзыв', 'myconstruction'),
            'add_new_item'       => __('Новый отзыв', 'myconstruction'),
            'edit_item'          => __('Редактировать', 'myconstruction'),
            'new_item'           => __('Новый отзыв', 'myconstruction'),
            'view_item'          => __('Посмотреть', 'myconstruction'),
            'menu_name'          => 'Отзывы клиентов',
            'all_items'          => 'Все отзывы',
        ),
        'public'             => true,
        'supports'           => array('title','editor','thumbnail'),
        'menu_icon'          => 'dashicons-universal-access',
        // 'show_in_rest' => true,
    ) );
}

//     Customizer

function myconstruction_customize_register( $wp_customize ) {
	//All our sections, settings, and controls will be added here

	$wp_customize->add_section( 'footer_options', array(
		'title'    => __('Настройки Футера', 'myconstruction'),
		'priority' => 150,
	));

	 $setting = 'footer_bg';

	 $wp_customize->add_setting( $setting, array(
		'default'      => '',
		'transport'    => 'refresh',
	 ) );

	 $wp_customize->add_control(
		 new WP_Customize_Image_Control( $wp_customize, $setting, array(
			'width'       => 2000,
			'height'      => 1400,
			'flex-width'  => true,
			'flex-height' => true,
			 'label'    => 'Фон футера',
			 'section'  => 'footer_options',
			 'settings' => 'footer_bg',
			 
			 
			 ) )
	 );

 }
 add_action( 'customize_register', 'myconstruction_customize_register' );

 function myconstruction_customize_css()
{
    ?>
         <style type="text/css">
              .section-footer {
				  background: url(<?php echo get_theme_mod('footer_bg')?>)center no-repeat; background-size: cover;
			  }
         </style>
    <?php
}
add_action( 'wp_head', 'myconstruction_customize_css');

// удаляет H2 из шаблона пагинации
add_filter('navigation_markup_template', 'myconstruction_navigation_template', 10, 2 );
function myconstruction_navigation_template( $template, $class ){
	
	return '
	<nav class="navigation %1$s" role="navigation">
		<div class="nav-links">%3$s</div>
	</nav>    
	';
}

function exclude_category($query) {
	if ($query->is_home){
	$query->set('category_not_in','-8');
	} 
	return $query;
}
add_filter('pre_get_posts','exclude_category');

