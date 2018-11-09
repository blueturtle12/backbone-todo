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
            var time = this.model.attributes.time + 1;
            var self = this;
            var timerLoop = setInterval(function x() {
                    time--
                    var minutes = Math.floor(time/60);
                    var seconds = time%60;
                    self.model.attributes.time = minutes + ':' + seconds;
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