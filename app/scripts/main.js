'use strict';

$(document).ready(function () {
  $('body').addClass('ready');
});

$(window).load(function() {
  $('.preloader').fadeOut(function() {
    $('body').addClass('loaded');
  });
});