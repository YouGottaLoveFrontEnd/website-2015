/* global isMobile */

'use strict';

var logoMatrix = [
    [0, 1, 0, 1, 0, 1, 0],
    [0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 1, 0],
    [0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 1, 0, 1, 0]
];

function randomizeCellInMatrix(matrix, numOfPossibilities) {
    var random = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };

    var cellIndex = random(1, numOfPossibilities);
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            var bit = matrix[i][j];
            if (bit) {
                cellIndex--;

                if (!cellIndex) {
                    matrix[i][j] = 0;
                    return {x: j, y: i};
                }
            }
        }
    }
}

function getPixelCordsByMatrixCoords(coords, matrix, element, $container) {
    var $element = $(element),
        elementOffset = $element.offset(),
        elementHeight = $element.height(),
        containerOffset = $container.offset(),
        containerWidth = $container.width(),
        containerOuterWidth = $container.outerWidth(),
        containerHorizontalPadding = (containerOuterWidth - containerWidth) / 2,
        windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
        matrixSize = matrix.length,
        colWidth = containerWidth / matrixSize,
        rowHeight = windowHeight / matrixSize;

    // Pixel pos calculated as follows:
    // 1. Reset element pos to (0,0) by subtracting the negative value of its current top/left measure
    // 2. Move the element to its pixel coord by converting (x,y) matrix coords to (left, top) pixel measures
    // 3. Move the element to the container left offset by adding the container's x offset and its horizontal padding
    // 4. Move the element to the vertical center of its row in the by adding half of the row height
    //    and subtracting half of the element height

    return {
        x: (-elementOffset.left) + (coords.x * colWidth) + containerOffset.left + containerHorizontalPadding,
        y: (-elementOffset.top) + (coords.y * rowHeight) + (rowHeight / 2) - (elementHeight / 2)
    };
}

$(document).ready(function () {

    if (isMobile) {
        return;
    }

    var logoLetters = $('.intro .letter'),
        scenes = [],
        controller = new ScrollMagic.Controller(),
        $container = $('h1.logo');

    var pinIntroScene = new ScrollMagic.Scene({duration: 900, offset: 0})
        .setPin('.intro', {pushFollowers: false});

    scenes.push(pinIntroScene);

    for (var i = 0; i < logoLetters.length; i++) {
        var pos = randomizeCellInMatrix(logoMatrix, logoLetters.length - i);
        var pxs = getPixelCordsByMatrixCoords(pos, logoMatrix, logoLetters[i], $container);

        var letterTween = new TimelineMax()
            .add(TweenMax.from(logoLetters[i], 1.2, {
                css: {
                    bezier: {
                        curviness: 1.25,
                        autoRotate: false,
                        values: [pxs]
                    }
                },
                ease: Power1.easeInOut
            }));

        var letterScene = new ScrollMagic.Scene({duration: 600, offset: 0})
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

    var scaleTween = new TimelineMax()
        .add(TweenMax.to('.intro', 1.2, {
            scale: 0.8,
            ease: Power1.easeInOut
        }));

    var scaleScene = new ScrollMagic.Scene({duration: 200, offset: 700})
        .setTween(scaleTween);

    scenes.push(scaleScene);

    var badgeTween = new TimelineMax()
        .add(TweenMax.to('.corner-ribbon', 1.2, {
            opacity: 0.9,
            color: '#00d09d',
            ease: Power1.easeInOut
        }));

    var badgeScene = new ScrollMagic.Scene({duration: 200, offset: 700})
        .setTween(badgeTween);

    scenes.push(badgeScene);

    controller.addScene(scenes);
});
