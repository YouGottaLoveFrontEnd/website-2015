'use strict';

$(document).ready(function () {
  $('body').addClass('ready');
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