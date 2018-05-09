/*Elebase 4.8.70, Build 4870
May 9th 2018, 02:50am
For evaluation purposes only*/

$(document).ready(function () {

    $(".hamburger").hide(); //ensure that hamburger menu is hidden on page load
    var menuMobileVibrate = $('#menu-mobile').vibrate("long"); //make menu button on the page vibrate
    $("#menu-mobile").click(function (menuMobileVibrate) { //listen for click event on menu button
        console.log("Hamburger opened"); //log hamburger opened
        $(".hamburger").slideToggle("fast", function () { //open the hamburger menu when button pressed once, then close when pressed again
        });
    });
    
});