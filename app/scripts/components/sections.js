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

    // TODO:  Remove if not re-used before launch
    //var sectionLetterElement = $(element).find('.section-letter').get(0);
    //var sectionIllustrationElement = $(element).find('.section-illustration').get(0);
    //var sectionLetterTween = new TimelineMax()
    //  .add(TweenMax.to(sectionLetterElement, 1.2, {
    //    css: {
    //      top: '-=200'
    //    },
    //    ease: Power1.easeInOut
    //  }));
    //
    //var sectionLetterScene = new ScrollMagic.Scene({triggerElement: element, duration: windowHeight})
    //  .setTween(sectionLetterTween);
    //
    //scenes.push(sectionLetterScene);
    //
    //var sectionIllustrationTween = new TimelineMax()
    //  .add(TweenMax.to(sectionIllustrationElement, 1.2, {
    //    css: {
    //      top: '-=300'
    //    },
    //    ease: Power1.easeInOut
    //  }));
    //
    //var sectionIllustrationScene = new ScrollMagic.Scene({triggerElement: element, duration: windowHeight})
    //  .setTween(sectionIllustrationTween);
    //
    //scenes.push(sectionIllustrationScene);
  });

  controller.addScene(scenes);
});