'use strict';

var isMobile = (function () {
  return typeof(window.orientation) !== 'undefined';
})();

var pageLoaded = false;
var minimalLoadTimeCounter = 0;

var minimalLoadTimeInterval = setInterval(function() {
  minimalLoadTimeCounter++;

  if (minimalLoadTimeCounter >= 3 && pageLoaded) {
    clearInterval(minimalLoadTimeInterval);

    $('.loader').fadeOut(function() {
      $('.preloader').fadeOut(function () {
        $('body').addClass('loaded');
        $('.preloader').remove();
      });
    });
  }
}, 1000);

$(document).ready(function () {
  $('body')
    .addClass('ready')
    .toggleClass('mobile', isMobile);
});

$(window).load(function() {
  $('iframe[data-src]').each(function(index, element) {
    var $element = $(element);
    $element.attr('src', $element.attr('data-src'));
  });

  pageLoaded = true;
});