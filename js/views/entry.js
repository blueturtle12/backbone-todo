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
            console.log(this.model.attributes.time);
            //this.model.attributes.time = 10;
            //var x = this.model.attributes.time;
            var self = this;
            var x = setInterval(function() {
                    i = self.model.attributes.time;
                	i--
                    self.model.attributes.time = i;
                    self.render();
                    console.log(self.model.attributes.time);
                    if(self.model.attributes.time === 0){
                        clearInterval(x);
                }
                },1000)
        },
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
    return EntryView;
});