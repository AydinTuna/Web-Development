var config = {
    timeToShowSlide: 30000,
    timeToWaitBeforeStartingAnimation: 30000,
    timeToWaitBeforeStoppingAnimation: 70000
}

var noise = (function () {
    "use strict";
    var fragment = document.createDocumentFragment();
    var audio = fragment.appendChild(document.createElement('audio'));
    audio.setAttribute("loop", true);
    var source = (document.createElement('source'));
    source.setAttribute("src", "http://www.woudziel.nl/githubdemo/oldMovieEffectSlideDeck/sound/16997__incarnadine__modulated-radio-static-modified" + ".mp3");
    source.setAttribute("type", "audio/mpeg");
    var source2 = (document.createElement('source'));
    //    source2.setAttribute("src", args.path + ".ogg");
    source2.setAttribute("src", "sound/16997__incarnadine__modulated-radio-static-modified" + ".ogg");
    source2.setAttribute("type", "audio/ogg");
    audio.appendChild(source);
    audio.appendChild(source2);
    document.getElementsByTagName('body').item(0).appendChild(fragment);
    audio.volume = 0.5;

    var play = function () {
        audio.play();
    };
    var stop = function () {
        audio.pause();
        if (audio.currentTime !== 0) {
            audio.currentTime = 0;
        }
    };

    return {
        play: play,
        stop: stop
    };

}());


var slideChanger = function (args) {
    "use strict";
    var allSlides = document.querySelectorAll("div");

    var i = 0;

    for (var j = 0; j < allSlides.length; j++) {
        allSlides[j].style.display = 'none';
    }

    function stopAnimation() {
        document.body.className = "";
        noise.stop();
    }

    setTimeout(k, args.timeToWaitBeforeStartingAnimation);
    function k() {
        if (i < allSlides.length) {
            allSlides[i].style.display = "block";
            i++;
            setTimeout(k, args.timeToShowSlide);
        } else {

            setTimeout(stopAnimation, args.timeToWaitBeforeStoppingAnimation); // stop animation
        }
    }
};

noise.play();
slideChanger(config);