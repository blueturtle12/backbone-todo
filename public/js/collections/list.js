define([
	'underscore',
    'backbone',
    'models/todo'
], function (_, Backbone,Todo) {
	var List = Backbone.Collection.extend({
		model: Todo,
	});

	return List;
});