'use strict';

$(document).ready(function () {
  $.ajax('/')
    .then(function (html) {
      $('.source-viewer > code').text(html);
    });
});