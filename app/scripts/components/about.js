'use strict';

$(document).ready(function () {
  var EXPAND_CLASS = 'expand';
  var section = $('#about');
  var elements = {
    content: section.find('.content'),
    expand: section.find('a[data-action="open"]'),
    collapse: section.find('a[data-action="close"]'),
    moreInfo: section.find('.should-collapse')
  };

  function expand() {
    elements.expand.hide();
    elements.moreInfo.addClass(EXPAND_CLASS);
  }

  function collapse() {
    elements.moreInfo.removeClass(EXPAND_CLASS);
    elements.expand.show();
  }

  elements.expand.on('click', expand);
  elements.collapse.on('click', collapse);

});