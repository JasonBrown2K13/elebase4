/*Elebase 4.8.70, Build 4870
May 9th 2018, 02:50am
For evaluation purposes only*/

$(document).ready(function () {

    /*Google Analytics function*/
    function sendTrackingEvent(action, label) {
        ga('send', 'event', 'Animation Played', action, label);
    }

    //-----ANIMATION DEFAULTS (1080p and above)-----//

    //Calls-to-action (change from the animals text to the speaker text)
    $('#hero-cta').fadeOut(14000, function () {
        $(this).text('Click or tap on the speaker').fadeIn(14000);
        $(this).addClass("text-styling");
    });


    //Play clouds animation
    $('#clouds').addClass("clouds-play");

    //Play trees animation
    $('#trees').addClass("trees-zoom");

    //Menu button animations (characters jumping)
    //Home enter
    $("#home").mouseenter(function () {
        $('#home').addClass("rollover");
        $('#monkey').addClass("jump");
        $('#lion').addClass("jump");
        $('#giraffe').addClass("jump");
    });

    //Home exit
    $("#home").mouseleave(function () {
        $('#home').removeClass("rollover");
        $('#monkey').removeClass("jump");
        $('#lion').removeClass("jump");
        $('#giraffe').removeClass("jump");
    });

    //Day-to-day enter
    $("#daytoday").mouseenter(function () {
        $('#daytoday').addClass("rollover");
        $('#monkey').addClass("jump");
        $('#lion').addClass("jump");
        $('#giraffe').addClass("jump");
    });

    //Day-to-day exit
    $("#daytoday").mouseleave(function () {
        $('#daytoday').removeClass("rollover");
        $('#monkey').removeClass("jump");
        $('#lion').removeClass("jump");
        $('#giraffe').removeClass("jump");
    });

    //Groups enter
    $("#groups").mouseenter(function () {
        $('#groups').addClass("rollover");
        $('#monkey').addClass("jump");
        $('#lion').addClass("jump");
        $('#giraffe').addClass("jump");
    });

    //Groups exit
    $("#groups").mouseleave(function () {
        $('#groups').removeClass("rollover");
        $('#monkey').removeClass("jump");
        $('#lion').removeClass("jump");
        $('#giraffe').removeClass("jump");
    });

    //Team enter
    $("#team").mouseenter(function () {
        $('#team').addClass("rollover");
        $('#monkey').addClass("jump");
        $('#lion').addClass("jump");
        $('#giraffe').addClass("jump");
    });

    //Team exit
    $("#team").mouseleave(function () {
        $('#team').removeClass("rollover");
        $('#monkey').removeClass("jump");
        $('#lion').removeClass("jump");
        $('#giraffe').removeClass("jump");
    });

    //Parents enter
    $("#parents").mouseenter(function () {
        $('#parents').addClass("rollover");
        $('#monkey').addClass("jump");
        $('#lion').addClass("jump");
        $('#giraffe').addClass("jump");
    });

    //Parents exit
    $("#parents").mouseleave(function () {
        $('#parents').removeClass("rollover");
        $('#monkey').removeClass("jump");
        $('#lion').removeClass("jump");
        $('#giraffe').removeClass("jump");
    });

    //Contact enter
    $("#contact").mouseenter(function () {
        $('#contact').addClass("rollover");
        $('#monkey').addClass("jump");
        $('#lion').addClass("jump");
        $('#giraffe').addClass("jump");
    });

    //Contact exit
    $("#contact").mouseleave(function () {
        $('#contact').removeClass("rollover");
        $('#monkey').removeClass("jump");
        $('#lion').removeClass("jump");
        $('#giraffe').removeClass("jump");
    });


    //Play monkey animation (add CSS class 'monkey-play' to start the animation)
    $("#monkey").click(function () {
        sendTrackingEvent('Played', 'Monkey animation');
        $('#monkey').removeClass("monkey-run");
        $('#monkey').addClass("monkey-play");
    });

    //Play lion animation (add CSS class 'lion-play' to start the animation)
    $("#lion").click(function () {
        sendTrackingEvent('Played', 'Lion animation');
        $('#lion').addClass("lion-play");     
        $('#monkey').addClass("monkey-run");
        $('#giraffe').addClass("giraffe-run");
    });

    //Sound control 
    //NOTE: This code should be identical to the code in 'sound.js' to control the sounda
    //Mute audio by default
    var muted = 1;

    //Speaker button (enable sound)
    $("#speaker-cross").click(function () {
        if (muted == 1) {
            muted = 0;
            $('#speaker-cross').addClass("active");
        }
        else {
            muted = 1;
            $('#speaker-cross').removeClass("active");
        }
        console.log("Value of 'muted' is: ", muted);
    });

    //Giraffe sound effect ONLY
    //NOTE: This is not in 'sound.js' because there needs to be a delay before the sound is played, so this function is executed in the
    //function below with a jQuery 'delay' method to play the sound at the correct time
    function giraffeSound() {
        var giraffeSoundEffect = new Howl({
            src: ['../assets/chew.mp3'],
            volume: 8, //this sound effect is too quiet by default
        });
        if (muted !== 1) {
            giraffeSoundEffect.play();
            console.log("play");
        }
        else {
            giraffeSoundEffect.pause();
            console.log("mute");
        }
    }

    //Play giraffe animation (add CSS class 'giraffe-play' to start the animation)
    $("#giraffe").click(function () {
        sendTrackingEvent('Played', 'Giraffe animation');
        $('#giraffe').removeClass("giraffe-run");
        $('#giraffe').addClass("giraffe-play");
        setTimeout(giraffeSound, 5000) //play sound effect after 5 seconds (after giraffe has scaled up)
    });

});