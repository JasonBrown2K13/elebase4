/*Elebase 4.8.70, Build 4870
May 9th 2018, 02:50am
For evaluation purposes only*/

//Display browser incompatible page on IE

if (navigator.appName == 'Microsoft Internet Explorer' || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1)) {
    window.location.replace('ie.html');
}



