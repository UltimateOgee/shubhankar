$(document).ready(function () {
    'use strict';

    $(".history-body").hide();
    $(".contact-body").hide();
    $("footer").css("z-index", "0");
    $("masthead").css("z-index", "0");

    $(".history").click(function () {
        $(".true-body-nomast").fadeOut();
        $(".social").fadeOut();
        $(".footer").fadeOut();
        $(".masthead-intro").fadeOut();
        $(".masthead-heading").fadeOut();
        $(".masthead").animate({
            height: $(".fullpage").height()*2.75 //change this factor to make the page larger or smaller!
        });
        const newh = $(".timeline").height();
        $('masthead')
            .delay(50)
            .queue(function (next) {
                $(this).css('height', '215%');
                $(this).css("z-index", "-1");
                next();
            });
        $(".history-body").delay(500).fadeIn();
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
                $(this).css("z-index", "-1");
                next();
            });
    });
    $(".goback-connect").click(function () {
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
    $(".goback-history").click(function () {
        $(".history-body").fadeOut();

        $(".true-body-nomast").fadeIn();
        $(".social").fadeIn();
        $(".footer").fadeIn();
        $(".masthead-intro").delay(500).fadeIn();
        $(".masthead-heading").delay(500).fadeIn();
        $(".masthead").animate({
            height: 144.102
        });
        //const newh = $(".fullpage").height() - $(".topnav").height();
        $('masthead')
            .delay(50)
            .queue(function (next) {
                $(this).css('height', '144.102px');
                $(this).css("z-index", "0");
                next();
            });
    });
});