'use strict';

$(document).ready(function () {
  var scenes = [],
    controller = new ScrollMagic.Controller(),
    $sections = $('.section');

  var windowHeight = $(window).height();
  var documentHeight = $(document).height();

  $sections.each(function (index, element) {
    var $section = $(element),
      sectionOuterHeight = $section.outerHeight(),
      sectionOuterWidth = $section.outerWidth(),
      sectionOffset = $section.offset().left,
      $illustration = $('<div class="section-illustration"></div>'),
      illustrationWidth;

    $section.after($illustration);
    illustrationWidth = $illustration.width();
    $illustration.css({
      left: (sectionOuterWidth - illustrationWidth + sectionOffset + 100) + 'px',
      top: '-30px'
    });

    var sectionIllustrationElement = $(element).next('.section-illustration').get(0);

    var sectionIllustrationTween = new TimelineMax()
      .add(TweenMax.to(sectionIllustrationElement, 1.2, {
        css: {
          top: '-=300'
        },
        ease: Power1.easeInOut
      }));

    var sectionIllustrationScene = new ScrollMagic.Scene({
      triggerElement: element,
      duration: Math.max(windowHeight, sectionOuterHeight * 1.5)
    })
      .setTween(sectionIllustrationTween);

    scenes.push(sectionIllustrationScene);
  });

  var sectionTween = new TimelineMax()
    .add(TweenMax.to('.section, .section-illustration', 1.2, {
      css: {
        y: '-=5000'
      },
      ease: Power1.easeInOut
    }));

  var sectionScene = new ScrollMagic.Scene({duration: documentHeight})
    .setTween(sectionTween);

  scenes.push(sectionScene);

  var mapTween = new TimelineMax()
    .add(TweenMax.to('.venue-map', 1.2, {
      css: {
        y: '-=40'
      },
      ease: Power1.easeInOut
    }));

  var $venueSectionElement = $('section#venue');

  var mapScene = new ScrollMagic.Scene({
    triggerElement: $venueSectionElement.get(0),
    duration: $venueSectionElement.outerHeight()
  })
    .setTween(mapTween);

  scenes.push(mapScene);

  controller.addScene(scenes);
});