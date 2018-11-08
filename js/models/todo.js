define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	var newDate = new Date();
	var Todo = Backbone.Model.extend({
		defaults: {
			title: '',
			discription: '',
            completed: false,
            time: ''
		},
	});

	return Todo;
});