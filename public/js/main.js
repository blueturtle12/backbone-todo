// require confing
require.config({
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    backboneLocalstorage: {
      deps: ['backbone'],
      exports: 'Store'
    }
  },
  paths: {
    jquery: '../dependencies/jquery-3.3.1',
    underscore: '../dependencies/underscore',
    backbone: '../dependencies/backbone',
    backboneLocalstorage: '../dependencies/backbone.localStorage'
  }
});

require(['jquery', 'underscore', 'backbone', 'views/app'], function(
  $,
  _,
  Backbone,
  AppView
) {
  new AppView();
  //AppView.render();
});
