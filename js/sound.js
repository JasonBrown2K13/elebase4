/*Elebase 4.8.70, Build 4870
May 9th 2018, 02:50am
For evaluation purposes only*/

//NOTE: The giraffe sound effect is defined and called in 'animations.js' so that it is played at the correct time

$(document).ready(function () {
    //Home page

    //Mute audio by default
    var muted = 1;
    console.log("PAGE LOAD Value of 'muted' is: ", muted);

    //Speaker button (toggle sound)
    $("#speaker-cross").click(function () {
        if (muted == 1) {
            muted = 0;
            $('#speaker-cross').addClass("active");
        }
        else {
            muted = 1;
            $('#speaker-cross').removeClass("active").css({ transition: '.3s' });
        }
        console.log("Value of 'muted' is: ", muted);
    });

    //Monkey
    $("#monkey").click(function () { //listen for hover event on monkey 
        console.log("MONKEY Value of 'muted' is: ", muted);
        var monkeySoundEffect = new Howl({
            src: ['../assets/monkey.mp3'],
        });
        if (muted !== 1) {
            monkeySoundEffect.play();
            console.log("play");
        }
        else {
            monkeySoundEffect.pause();
            console.log("mute");
        }

    });

    //Lion
    $("#lion").click(function () { //listen for hover event on lion 
        var lionSoundEffect = new Howl({
            src: ['../assets/roar.mp3'],
        });
        if (muted !== 1) {
            lionSoundEffect.play();
        }
        else {
            lionSoundEffect.pause();
        }
    });  

});


