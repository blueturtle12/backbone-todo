define([
	'jquery',
	'underscore',
    'backbone',
    'views/entry',
    'collections/list',
    'models/todo'
], function ($, _, Backbone,EntryView,List,Todo) {
    var newList = new List();
    var AppView = Backbone.View.extend({
        collection: newList,
        el: $('.main__container'),
        initialize: function() {
            this.listenTo(this.collection, 'add', this.render);
        },
        
        events: {
            "click .main__submit": "onSubmit"
        },
        onSubmit: function() {
		    var toDo = $('.main__input').val();
            var item = new Todo({
                title: toDo
            });
            this.collection.add(item);
            console.log(this.collection.toArray());
            $('.main__input').val('');
        },
        render: function() {
            var self = this;
           _.each(this.collection.toArray(), function(Todo){
               self.$el.append(new EntryView({model:Todo}).render().$el);
           })
        }
    });
    return AppView;
});