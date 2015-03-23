/* global isMobile */

'use strict';

$(document).ready(function () {
  if (isMobile) {
    return;
  }

  var scenes = [],
    controller = new ScrollMagic.Controller(),
    $sections = $('.section');

  var windowHeight = $(window).height();

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

  var mapTween = new TimelineMax()
    .add(TweenMax.to('.venue-map', 1.2, {
      css: {
        y: '-=140'
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

  var footerTween = new TimelineMax()
    .add(TweenMax.to('.footer', 1.2, {
      css: {
        y: '-=1000'
      },
      ease: Power1.easeInOut
    }));

  var $lastSectionElement = $('section:last-of-type');

  var footerScene = new ScrollMagic.Scene({
    triggerElement: $lastSectionElement.get(0),
    duration: 1500
  })
    .setTween(footerTween);

  scenes.push(footerScene);

  controller.addScene(scenes);
});