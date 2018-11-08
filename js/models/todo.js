define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	var newDate = new Date();
	var Todo = Backbone.Model.extend({
		defaults: {
			title: '',
            completed: false,
            time: ''
		},
	});

	return Todo;
});