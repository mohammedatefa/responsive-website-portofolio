/*global $, jQuery, console*/
$(document).ready(function () {
    'use strict';
    $('.carousel').carousel({
        interval: 4000
    });
    
    /*start option box*/
    var colorLi = $(".color-option ul li"),
        boxWidth = $(".option-box").innerWidth(),
        scrollButton = $(".scroll-top");
    
    $(".icon").click(function () {
        if ($(".option-box").hasClass("visible")) {
            $(".option-box").animate({
                left : '-' + boxWidth
            });
        } else {
            $(".option-box").animate({
                left : 0
            });
        }
        $('.option-box').toggleClass("visible");
    });
    /*start colors-options*/
    colorLi.eq(0).css('backgroundColor', '#e41b17').end()
        .eq(1).css('backgroundColor', '#007895').end()
        .eq(2).css('backgroundColor', 'rebeccapurple').end()
        .eq(3).css('backgroundColor', 'forestgreen').end();
    colorLi.click(function () {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    });
    $(".navbar-inverse .navbar-toggle").click(function () {
        $(".option-box").css("zIndex", "9");
        
    });
    
    /*start loading page */
    $(window).ready(function () {
        $(".loading .intro p,.loading .intro button, .intro h2").fadeOut(1000, function () {
            $(".loading .intro img").fadeOut(1000, function () {
                $(".loading").fadeOut();
            });
        });
    });
    
    //start scroll-top
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 700) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
    });
    scrollButton.click(function () {
        $("html,body").animate({
            scrollTop : 0
        }, 1000);
    });
});