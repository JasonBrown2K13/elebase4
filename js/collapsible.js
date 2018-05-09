/*Elebase 4.8.70, Build 4870
May 9th 2018, 02:50am
For evaluation purposes only*/

$(document).ready(function () {

    /*Google Analytics function*/
    function sendTrackingEvent(action, label) {
        ga('send', 'event', 'Groups Section Collapsed', action, label);
    }

    //Groups page
    //Mini Monkeys
    $(".minimonkeys-collapsible").hide(); //ensure that section is hidden on page load
    $("#minimonkeys-button").click(function () { //listen for click event on button
        console.log("Mini Monkeys section opened"); //log section opened
        $(".littlions-collapsible").hide();
        $(".jollygiraffes-collapsible").hide();
        sendTrackingEvent('Collapsed', 'Mini Monkeys section');
        $(".minimonkeys-collapsible").slideToggle("fast", function () { //open the hamburger menu when button pressed once, then close when pressed again
        });
    });

    //Little Lions
    $(".littlelions-collapsible").hide(); //ensure that section is hidden on page load
    $("#littlelions-button").click(function () { //listen for click event on button
        console.log("Little Lions section opened"); //log section opened
        $(".minimonkeys-collapsible").hide();
        $(".jollygiraffes-collapsible").hide();
        sendTrackingEvent('Collapsed', 'Little Lions section');
        $(".littlelions-collapsible").slideToggle("fast", function () { //open the hamburger menu when button pressed once, then close when pressed again
        });
    });

    //Jolly Giraffes
    $(".jollygiraffes-collapsible").hide(); //ensure that section is hidden on page load
    $("#jollygiraffes-button").click(function () { //listen for click event on button
        console.log("Jolly Giraffes section opened"); //log section opened
        $(".minimonkeys-collapsible").hide();
        $(".littlelions-collapsible").hide();
        sendTrackingEvent('Collapsed', 'Jolly Giraffes section');
        $(".jollygiraffes-collapsible").slideToggle("fast", function () { //open the hamburger menu when button pressed once, then close when pressed again
        });
    });

});


