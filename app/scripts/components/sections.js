/* global isMobile */

'use strict';

$(document).ready(function () {
    var speakersBlocksHeight = $('.speakers').height();

    if (isMobile) {
        speakersBlocksHeight += 50;
    }

    $('#speakers').css('padding-bottom', speakersBlocksHeight);

    var scheduleHeight = $('.schedule-timetable').height();

    if (!isMobile) {
        scheduleHeight += 200;
    } else {
        scheduleHeight += 100;
    }

    $('#schedule').css('padding-bottom', scheduleHeight);

    if (isMobile) {
        $('.agenda-article').on('click', function() {
            $(this).toggleClass('expanded');
        });

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
            illustrationWidth,
            tweenTo = '-=300',
            tweenDuration = Math.max(windowHeight, sectionOuterHeight * 1.5);

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
                    top: tweenTo
                },
                ease: Power1.easeInOut
            }));

        var sectionIllustrationScene = new ScrollMagic.Scene({
            triggerElement: element,
            duration: tweenDuration
        })
            .setTween(sectionIllustrationTween);

        scenes.push(sectionIllustrationScene);
    });

    var speakersTween = new TimelineMax()
        .add(TweenMax.to('.speakers', 1.2, {
            css: {
                y: '-=150'
            },
            ease: Power1.easeInOut
        }));

    var $speakersSectionElement = $('section#speakers');

    var speakersScene = new ScrollMagic.Scene({
        triggerElement: $speakersSectionElement.get(0),
        duration: $speakersSectionElement.outerHeight()
    })
        .setTween(speakersTween);

    scenes.push(speakersScene);

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