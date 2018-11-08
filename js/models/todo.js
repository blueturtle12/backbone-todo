define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	var newDate = new Date();
	var Todo = Backbone.Model.extend({
		defaults: {
			title: '',
            completed: false,
            time: newDate.toLocaleDateString("en-US")
		},
	});

	return Todo;
});