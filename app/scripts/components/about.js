'use strict';

$(document).ready(function () {
  var EXPAND_CLASS = 'expand';
  var section = $('#about');
  var elements = {
    content: section.find('.content'),
    expand: section.find('a[data-action="open"]'),
    collapse: section.find('a[data-action="close"]')
  };

  function expand() {
    elements.content.addClass(EXPAND_CLASS);
    elements.expand.hide();
  }

  function collapse() {
    elements.content.removeClass(EXPAND_CLASS);
    elements.expand.show();
  }

  elements.expand.bind('click', expand);
  elements.collapse.bind('click', collapse);

});