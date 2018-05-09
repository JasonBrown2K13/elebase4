/*Elebase 4.8.70, Build 4870
May 9th 2018, 02:50am
For evaluation purposes only*/

//Hide the header part-way down the page

$(window).scroll(function () {
    if ($(this).scrollTop() > 1200) {
        $('#header').addClass("header-hide");
    }
    else {
        $('#header').removeClass("header-hide");
    }
});
