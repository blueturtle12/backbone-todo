define([
	'jquery',
	'underscore',
    'backbone',
    'views/entry',
    'collections/list',
    'models/todo'
], function ($, _, Backbone,EntryView,List,Todo) {
    var newList = new List();
    var ListView = Backbone.View.extend({
        collection: newList,
        el: $('.main__display'),
        initialize: function() {
            this.listenTo(this.collection, 'add', this.render);
        },
        render: function() {
            var self = this;
           _.each(this.collection.toArray(), function(Todo){
               self.$el.append(new EntryView({model:Todo}).render().$el);
           })
        }
    });
    return ListView;
});