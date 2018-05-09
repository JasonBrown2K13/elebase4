/*Elebase 4.8.70, Build 4870
May 9th 2018, 02:50am
For evaluation purposes only*/

$.ajax({
    url: 'css/elebase4.css',
    url: 'css/responsive.css',
    url: 'css/animations.css',
    url: 'css/preloader.css',
    url: 'css/tiles.css',
    url: 'js/animations.js',
    url: 'js/collapsible.js',
    url: 'js/hamburger.js',
    url: 'js/jquery-3.2.1.min.js',
    url: 'js/headerhide.js',
    url: 'js/howler.min.js',
    url: 'js/nav.js',
    url: 'js/ie.js',
    url: 'js/siema.min.js',
    url: 'js/vibrate.min.js',
    url: 'js/menuhide.js',
    url: 'js/siema-pagination.js',
    url: 'js/sound.js',
    type: 'HEAD',
    error: function () {
        window.alert("Error.\n\nThe website is not running on a server. Elebase is best experienced running on a server, some features are unavailable when running Elebase locally. Click OK to continue.\n\nIf Elebase is running from a server, one or more critical files are missing or damaged. Elebase may not run as expected. Please try visiting the site again later.");
    },
    /*success: function () {
        
    }*/
});
