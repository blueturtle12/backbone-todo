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
        },
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
    return EntryView;
});