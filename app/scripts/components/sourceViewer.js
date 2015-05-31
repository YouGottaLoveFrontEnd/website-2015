'use strict';

$(document).ready(function () {
    $.ajax(document.location.pathname)
        .then(function (html) {
            var $sourceElement = $('.source-viewer > code');
            $sourceElement.attr('content', html);
        });

    var scenes = [],
        controller = new ScrollMagic.Controller();

    var sourceViewerTween = new TimelineMax()
        .add(TweenMax.to('.source-viewer', 1.2, {
            css: {
                y: '-=3000'
            },
            ease: Power1.easeInOut
        }));

    var sourceViewerScene = new ScrollMagic.Scene({duration: document.body.scrollHeight, offset: 900})
        .setTween(sourceViewerTween);

    scenes.push(sourceViewerScene);

    controller.addScene(scenes);
});