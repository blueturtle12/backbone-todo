define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	var Todo = Backbone.Model.extend({
		defaults: {
			title: '',
            completed: false,
            time: Date.now()
		},

		toggle: function () {
			this.save({
				completed: !this.get('completed')
			});
		}
	});

	return Todo;
});