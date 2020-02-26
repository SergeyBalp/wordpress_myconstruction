window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // import './components/slider';



    // let info = document.querySelector('.tab-content'),
    //     tabs = document.querySelectorAll('.info-tab'),
    //     imgs = document.querySelectorAll('.img-fluid'),
    //     bigImg = document.querySelector('.img-tabcontent');

    // function bigImage(a) {
    //     for (let i = a; i < imgs.length; i++) {
    //         if (imgs[i] == imgs[a]) {
    //             let picture = imgs[i].getAttribute('src');
    //             bigImg.classList.remove('hide');
    //             bigImg.innerHTML = `<img src = "${picture}">`;
    //         }
    //     }
    // }

    // function nonActiveTab() {
    //     for (let i = 0; i < tabs.length; i++) {
    //         if (tabs[i].classList.contains('active')) {
    //             tabs[i].classList.remove('active');
    //         }
    //     }
    // }

    // function activeTab(b) {
    //     for (let i = 0; i < tabs.length; i++) {

    //         if (tabs[i] == tabs[b]) {
    //             tabs[i].classList.add('active');
    //         }
    //     }
    // }

    // if (info) {
    //     info.addEventListener('click', function (event) {
    //         let target = event.target;
    //         if (target && target.classList.contains('info-tab')) {

    //             for (let i = 0; i < tabs.length; i++) {

    //                 if (target == tabs[i]) {
    //                     if (tabs[i].classList.contains('show-all')) {
    //                         bigImg.classList.add('hide');
    //                         bigImg.innerHTML = '';
    //                         nonActiveTab();
    //                         activeTab(i);
    //                         break;
    //                     }
    //                     nonActiveTab();
    //                     activeTab(i);
    //                     bigImage(i);
    //                     break;
    //                 }
    //             }
    //         }
    //     });
    // }


    let reviewBlock = document.querySelector('.reviews-block');
    let review = document.querySelectorAll('.review-text');

    if (reviewBlock) {
        reviewBlock.addEventListener('click', function (ev) {
            let target = ev.target;
            if (target && target.classList.contains('review-text')) {
                for (let i = 0; i < review.length; i++) {
                    if (target == review[i]) {
                        // nonFirsterActive();
                        firsterActive(i);
                        break;
                    }
                }
            }
        });
    }

    function nonFirsterActive() {
        for (let i = 0; i < review.length; i++) {
            if (review[i].classList.contains('firster')) {
                review[i].classList.remove('firster');
            }
        }
    }

    function firsterActive(c) {
        for (let i = 0; i < review.length; i++) {
            if (review[i] == review[c]) {
                nonFirsterActive();
                review[i].classList.add('firster');
            }
        }
    }


    $(function () {

        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $('.scrollToTop').fadeIn('slow', function () {
                    $(this).attr('style', 'display: block !important;');
                });
            } else {
                $('.scrollToTop').fadeOut();
            }
        });

        $('.scrollToTop').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        $(window).on('load', function () {
            $('.preloader').delay(500).fadeOut('slow', function () {
                $(this).attr('style', 'display: none !important;');
            });
        });


    });






});