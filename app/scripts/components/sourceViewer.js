'use strict';

$(document).ready(function () {
  $.ajax('/')
    .then(function (html) {
      var $sourceElement = $('.source-viewer > code');
      $sourceElement.text(html);
      Prism.highlightElement($sourceElement.get(0), true);
    });

  var scenes = [],
      controller = new ScrollMagic.Controller();

  var sourceViewerTween = new TimelineMax()
    .add(TweenMax.to('.source-viewer', 1.2, {
      css: {
        top: '-=1500'
      },
      ease: Power1.easeInOut
    }));

  var sourceViewerScene = new ScrollMagic.Scene({duration: document.body.scrollHeight, offset: 900})
    .setTween(sourceViewerTween);

  scenes.push(sourceViewerScene);

  controller.addScene(scenes);
});