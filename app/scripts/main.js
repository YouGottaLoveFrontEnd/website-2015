'use strict';

var generatePath = function (element) {
  var points = [],
    lastPoint = {x: element.offsetLeft, y: element.offsetTop},
    random = function (min, max) {
      return Math.random() * (max - min) + min;
    };

  for (var i = 0; i < 1; i++) {
    points.push({
      x: random(-(lastPoint.x + 100), window.outerWidth - lastPoint.x + 100),
      y: random(-(lastPoint.y + 400), -(lastPoint.y + 300))
    });
  }

  return {
    curviness: 1.25,
    autoRotate: false,
    values: points
  };
};

$(document).ready(function () {
  // handle logo letters
  var logo_letters = $('.letter'),
      scenes = [],
      controller = new ScrollMagic.Controller();

  for (var i = 0; i < logo_letters.length; i++) {
    var letterTween = new TimelineMax()
      .add(TweenMax.from(logo_letters[i], 1.2, {
        css: {
          bezier: generatePath(logo_letters[i])
        },
        ease: Power1.easeInOut
      }));

    var letterScene = new ScrollMagic.Scene({duration: 600, offset: 0})
      .setPin('.intro', {pushFollowers: false})
      .setTween(letterTween);

    scenes.push(letterScene);
  }

  var fadeInTween = new TimelineMax()
    .add(TweenMax.to('.subtitle, .datetime', 1.2, {
      css: {
        opacity: 1
      },
      ease: Power1.easeInOut
    }));

  var afterLettersScene = new ScrollMagic.Scene({duration: 100, offset: 500})
    .setTween(fadeInTween);

  scenes.push(afterLettersScene);

  //var document.querySelectorAll();
  var censorTween = new TimelineMax()
    .add(TweenMax.to('.will-be-censored', 1.2, {
      className: '+=hide-letter'
    }))
    .add(TweenMax.to('.will-be-censored', 1.2, {
      className: '+=is-censored'
    }));

  var censorScene = new ScrollMagic.Scene({duration: 100, offset: 600})
    .setTween(censorTween);

  scenes.push(censorScene);

  controller.addScene(scenes);

  // handle code viewer
  $.ajax('/')
    .then(function (html) {
      $('.source-viewer > code').text(html);

      //var i,
      //    formatted = '', $formatted = null,
      //    htmlNewLineSplit = html.split('\n');
      //
      //for (i = 0; i < htmlNewLineSplit.length; i++) {
      //  formatted += '<div class="source-viewer-line"></div>';
      //}
      //
      //$formatted = $(formatted);
      //$formatted.each(function(index, element) {
      //  $(element).text(htmlNewLineSplit[index]);
      //});
      //
      //$('.source-viewer').append($formatted);
    });

  $('body').addClass('ready');
});