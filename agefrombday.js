$(function(){
    var calcNewYear = setInterval(function(){
        date_bday = new Date(1999, 4, 21, 0, 0, 0, 0);
        date_now = new Date();

        seconds = Math.floor((date_now - (date_bday))/1000);
        minutes = Math.floor(seconds/60);
        hours = Math.floor(minutes/60);
        days = Math.floor(hours/24);
        years = Math.floor(days/365);
        
        days = days-(years*365);
        hours = hours-(days*24)-(years*365*24);
        minutes = minutes-(days*24*60)-(hours*60)-(years*365*24*60);
        seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60)-(years*365*24*60*60);

        $("#time").text("Shubh's Age is about " + years + " years, " + days + " days, " + hours + " hours, " + minutes + " minutes, and " + seconds + " seconds.");
    },1000);
});