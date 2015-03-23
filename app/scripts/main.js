'use strict';

var isMobile = (function () {
  return typeof(window.orientation) !== 'undefined';
})();

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

  $('.preloader').fadeOut(function() {
    $('body').addClass('loaded');
  });
});