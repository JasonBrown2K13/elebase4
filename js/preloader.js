/*Elebase 4.8.70, Build 4870
May 9th 2018, 02:50am
For evaluation purposes only*/

$("#status").fadeIn();
$("#preloader").fadeIn();
$.get(url, data, function () {
    $("#status").fadeOut();
    $("#preloader").fadeOut();
});


