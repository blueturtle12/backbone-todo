define([
	'jquery',
	'underscore',
    'backbone',
    'models/todo'
], function ($, _, Backbone,Todo) {
    var EntryView = Backbone.View.extend({
        model: Todo,
        initialize: function() {
            this.template = _.template($(".todoTemplate").html());
            this.model.attributes.time = this.model.attributes.time * 60;
            this.model.attributes.minutes = Math.floor(this.model.attributes.time/60);
            this.model.attributes.seconds = this.model.attributes.time%60;
        },

        events: {
            "click .todo__btn": "onStart"
        },

        onStart: function() {
            var time = this.model.attributes.time + 1;
            var self = this;
            var timerLoop = setInterval(function x() {
                    time--
                    self.model.attributes.minutes = Math.floor(time/60);
                    self.model.attributes.seconds = time%60;
                    self.render();
                    if(time === 0){
                        clearInterval(timerLoop);
                    }
                return x;
            }(),1000);
        },
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
    return EntryView;
});