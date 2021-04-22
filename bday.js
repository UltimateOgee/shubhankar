$(function () {
    'use strict';
    const calcNewYear = setInterval(function () {
        const date_bday = new Date(1999, 3, 28, 0, 0, 0, 0);
        const date_now = new Date();

        const seconds = Math.floor((date_now - (date_bday)) / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const years = Math.floor(days / 365);

        const days = days - (years * 365);
        const hours = hours - (days * 24) - (years * 365 * 24);
        const minutes = minutes - (days * 24 * 60) - (hours * 60) - (years * 365 * 24 * 60);
        const seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60) - (years * 365 * 24 * 60 * 60);

        $("#time").text("Shubh's age is  " + years + " years, " + days + " days, " + hours + " hours, " + minutes + " minutes, and " + seconds + " seconds");
    }, 1000);
});