'use strict';

$(document).ready(function () {
  var scenes = [],
      controller = new ScrollMagic.Controller(),
      $sections = $('.section');

  /******************************
   *       Sections Tween
   ******************************/
  $sections.each(function(index, element) {
    var windowHeight = $(window).height();

    var sectionTween = new TimelineMax()
      .add(TweenMax.to(element, 1.2, {
        css: {
          top: '+=100'
        },
        ease: Power1.easeInOut
      }));

    var sectionScene = new ScrollMagic.Scene({triggerElement: element, duration: windowHeight})
      .setTween(sectionTween);

    scenes.push(sectionScene);

    var sectionIllustrationElement = $(element).find('.section-illustration').get(0);

    var sectionIllustrationTween = new TimelineMax()
      .add(TweenMax.to(sectionIllustrationElement, 1.2, {
        css: {
          top: '-=200'
        },
        ease: Power1.easeInOut
      }));

    var sectionIllustrationScene = new ScrollMagic.Scene({triggerElement: element, duration: windowHeight})
      .setTween(sectionIllustrationTween);

    scenes.push(sectionIllustrationScene);
  });

  controller.addScene(scenes);
});