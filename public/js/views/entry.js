define(["jquery", "underscore", "backbone", "models/todo"], function(
	$,
	_,
	Backbone,
	Todo
) {
	var EntryView = Backbone.View.extend({
		model: Todo,
		initialize: function() {
			this.template = _.template($(".todoTemplate").html());
			console.log(this.model.get("time"));
			var timeToSeconds = this.model.get("time") * 60;
			this.model.set({ time: timeToSeconds });
			this.model.set({ minutes: Math.floor(timeToSeconds / 60) });
			this.model.set({ seconds: timeToSeconds % 60 });
		},

		events: {
			"click .todo__btn": "onStart"
		},

		onStart: function() {
			var time = this.model.get("time") + 1;
			var self = this;
			var timerLoop = setInterval(
				(function x() {
					time--;
					self.model.set({ minutes: Math.floor(time / 60) });
					self.model.set({ seconds: time % 60 });
					self.render();
					if (time === 0) {
						clearInterval(timerLoop);
					}
					return x;
				})(),
				1000
			);
		},
		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});
	return EntryView;
});
