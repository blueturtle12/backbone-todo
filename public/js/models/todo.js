define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	var Todo = Backbone.Model.extend({
		defaults: {
			title: '',
			description: '',
            completed: false,
			time: '',
			minutes: '',
			seconds: ''
		},
		// interval: setInterval(function() {
		// 	i++
		// 	console.log(i);
		// 	if(i === parseInt(this.time)){
		// 		clearInterval();
		// 	}
		// 	this.update(i);
		// },1000),
		// update: function(x) {
		// 	this.set({
		// 		time: x
		// 	})
		// }
	});

	return Todo;
});