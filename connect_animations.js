$(document).ready(function () {
    'use strict';

    $(".history-body").fadeOut();
    $(".contact-body").fadeOut();
    $("footer").css("z-index", "0");
    $("masthead").css("z-index", "0");

    $(".history").click(function () {
        $(".true-body-nomast").fadeOut();
        $(".social").fadeOut();
        $(".footer").fadeOut();
        $(".masthead-intro").fadeOut();
        $(".masthead-heading").fadeOut();
        $(".masthead").animate({
            height: $(".fullpage").height()
        });
        //const newh = $(".fullpage").height() - $(".topnav").height();
        $('masthead')
            .delay(50)
            .queue(function (next) {
                $(this).css('height', '100%');
                $(this).css("z-index", "-1");
                next();
            });
        //hmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm...........
        //$(".history-body").delay(100).fadeIn();
    });

    $(".connect").click(function () {
        $(".true-body").fadeOut();
        $(".social").fadeOut();
        $(".contact-body").fadeIn();
        //const newh = $(".fullpage").height() - ($(".contact-body").height() + $(".topnav").height());
        $("footer").animate({
            height: $(".fullpage").height()
        });
        //$("footer").delay(1000).css("height", "100%");
        $('footer')
            .delay(50)
            .queue(function (next) {
                $(this).css('height', '100%');
                $("footer").css("z-index", "-1");
                next();
            });
    });
    $(".goback").click(function () {
        $(".contact-body").fadeOut();
        $(".social").fadeIn();
        $(".true-body").delay(500).fadeIn();
        $("footer").animate({
            height: '50.5px'
        });
        $('footer')
            .delay(50)
            .queue(function (next) {
                $(this).css('height', '50.5px');
                $("footer").css("z-index", "0");
                next();
            });
    });
});