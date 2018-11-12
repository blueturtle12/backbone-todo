define([
	'underscore',
    'backbone',
	'models/todo',
	'backboneLocalstorage'
], function (_, Backbone,Todo,Store) {
	var List = Backbone.Collection.extend({
		model: Todo,
		localStorage: new Store('Backbone-Todo')
	});

	return List;
});
