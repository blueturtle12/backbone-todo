define([
	'jquery',
	'underscore',
    'backbone',
    'views/entry',
    'collections/list',
    'models/todo',
], function ($, _, Backbone,EntryView,List,Todo) {
    //var newList = new List();
    var AppView = Backbone.View.extend({
        collection: new List(),
        el: $('.main__container'),
        initialize: function () {
           this.listenTo(this.collection, 'add', this.render);
        },
        events: {
            "click .main__submit": "onSubmit"
        },
        onSubmit: function() {
            var toDo = $('.main__input').val();
            var toDoDate = $('.main__date').val();
            var item = new Todo({
                title: toDo,
                time: toDoDate
            });
            this.collection.add(item);
            this.$(".main__display").append(new EntryView({model:item}).render().el);
            console.log(this.collection.toArray());
            $('.main__input').val('');
        },
        render: function() {
        }
    });
    return AppView;
});