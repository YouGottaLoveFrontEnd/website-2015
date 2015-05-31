'use strict';

$(document).ready(function () {
    var stickyNavigationController = new ScrollMagic.Controller();

    var navigationItems = $('.nav a');
    $(navigationItems).each(function(index, element) {
        var $element = $(element),
            hash = $element.attr('href'),
            $target = $(hash);

        new ScrollMagic.Scene({
            triggerElement: $element.attr('href'),
            duration: $target.outerHeight(),
            offset: 400,
            triggerHook: 'onEnter'
        })
            .setClassToggle(element, 'active')
            .addTo(stickyNavigationController);
    });

    stickyNavigationController.scrollTo(function (newpos) {
        TweenMax.to(window, 0.5, {scrollTo: {y: newpos-50}});
    });

    $(document).on('click', 'a[href^=#]', function (e) {
        var id = $(this).attr('href');
        if ($(id).length > 0) {
            e.preventDefault();

            stickyNavigationController.scrollTo(id);

            if (window.history && window.history.pushState) {
                history.pushState('', document.title, id);
            }
        }
    });
});