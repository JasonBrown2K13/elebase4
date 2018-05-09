/*Elebase 4.8.70, Build 4870
May 9th 2018, 02:50am
For evaluation purposes only*/

$(document).ready(function () {

    /*Google Analytics function*/
    function sendTrackingEvent(action, label) {
        ga('send', 'event', 'Button Press/Tap', action, label);
    }

    var logoVibrate = $('#Logo').vibrate("long"); //Vibrate is only available on Android devices - vibration is added to every button
    $('#logo').click(function (logoVibrate) { //navigate to index.html page when user clicks on logo
        sendTrackingEvent('Pressed', 'Logo button');
        location.href = 'index.html';
    })

    $('#home').click(function (e) { //navigate to index.html when user clicks on home button (desktop only)
        sendTrackingEvent('Pressed', 'Home desktop button');
        location.href = 'index.html'; 
    })

    var homeMobileVibrate = $('#home-mobile').vibrate("long"); 
    $('#home-mobile').click(function (homeMobileVibrate) { //navigate to index.html when user clicks on home button in the hamburger menu (mobile only)
        sendTrackingEvent('Pressed', 'Menu mobile button');
        location.href = 'index.html';
    })

    $('#daytoday').click(function (e) { 
        sendTrackingEvent('Pressed', 'Day-to-day desktop button');
        location.href = 'daytoday.html'; //navigate to day-to-day page    
    })

    var dayToDayVibrate = $('#daytoday-mobile').vibrate("long"); 
    $('#daytoday-mobile').click(function (dayToDayVibrate) { //navigate to day-to-day page (mobile only)
        sendTrackingEvent('Pressed', 'Day-to-day mobile button');
        location.href = 'daytoday.html';
    })

    $('#groups').click(function (e) { //navigate to groups page
        sendTrackingEvent('Pressed', 'Groups desktop button');
        location.href = 'groups.html'; 
    })

    var groupsMobileVibrate = $('#groups-mobile').vibrate("long"); 
    $('#groups-mobile').click(function (groupsMobileVibrate) { //navigate to groups page (mobile only)
        sendTrackingEvent('Pressed', 'Groups mobile button');
        location.href = 'groups.html';
    })

    $('#team').click(function (e) { //meet the team button
        sendTrackingEvent('Pressed', 'Team desktop button');
        featureUnavailable();
    })

    var teamMobileVibrate = $('#team-mobile').vibrate("long"); 
    $('#team-mobile').click(function (teamMobileVibrate) { //meet the team button (mobile only)
        sendTrackingEvent('Pressed', 'Team mobile button');
        featureUnavailable();
    })

    $('#parents').click(function (e) { //parents area button
        sendTrackingEvent('Pressed', 'Parents desktop button');
        featureUnavailable();
    })

    var parentsMobileVibrate = $('#parents-mobile').vibrate("long"); 
    $('#parents-mobile').click(function (parentsMobileVibrate) { //parents area button (mobile only)
        sendTrackingEvent('Pressed', 'Parents mobile button');
        featureUnavailable();
    })

    $('#contact').click(function (e) { //contact us button
        sendTrackingEvent('Pressed', 'Contact desktop button');
        featureUnavailable();
    })

    var contactMobileVibrate = $('#contact-mobile').vibrate("long"); 
    $('#contact-mobile').click(function (contactMobileVibrate) { //contact us button (mobile only)
        sendTrackingEvent('Pressed', 'Contact mobile button');
        featureUnavailable();
    })

    function featureUnavailable() { //activated when the user clicks/taps on a page button for a page that does not yet exist
        window.alert('This feature is not available in this prototype');
    }

    //Group icon navigation (applicable only to 'groups' page)

    $('#minimonkeys-icon').click(function (e) { //Mini Monkeys
        sendTrackingEvent('Pressed', 'Mini Monkeys button');
        location.href = '#minimonkeys'; //navigate to a CSS ID called 'minimonkeys'
    })

    $('#littlelions-icon').click(function (e) { //Little Lions
        sendTrackingEvent('Pressed', 'Little Lions button');
        location.href = '#littlelions'; //navigate to a CSS ID called 'littlelions'
    })

    $('#jollygiraffes-icon').click(function (e) { //Jolly Giraffes
        sendTrackingEvent('Pressed', 'Jolly Giraffes button');
        location.href = '#jollygiraffes'; //navigate to a CSS ID called 'jollygiraffes'
    })

});
