// require confing
require.config({
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
        },
	},
	paths: {
		jquery: '../dependencies/jquery-3.3.1',
		underscore: '../dependencies/underscore',
		backbone: '../dependencies/backbone',
	},

});

require([
	'jquery',
	'underscore',
	'backbone',
	'views/app',
	'views/entry',
    'collections/list',
    'models/todo'
], function ($, _,Backbone, AppView,List,Todo) {
	var mainView = new AppView();
	//AppView.render();
	
});