'use strict';

$(document).ready(function () {
  $('#about .content').on('click', function (ev) {
    $(ev.currentTarget).toggleClass('expand');
  });
});