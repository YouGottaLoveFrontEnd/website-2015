'use strict';

$(document).ready(function () {
    var dom = {
        body: $('body'),
        handler: $('#navToggle'),
        links: $('.nav-link')
    };

    var toggle = function(showOrHide) {
        dom.body.toggleClass('nav-active', showOrHide);
    };

    dom.handler.click(toggle);

    dom.links.click(function () {
        toggle(false);
    });
});