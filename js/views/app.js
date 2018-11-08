define([
	'jquery',
	'underscore',
    'backbone',
    'views/entry',
    'collections/list',
    'models/todo',
    'views/list'
], function ($, _, Backbone,EntryView,List,Todo,ListView) {
    var AppView = Backbone.View.extend({
        collection: List,
        el: $('.main__container'),
        events: {
            "click .main__submit": "onSubmit"
        },
        onSubmit: function() {
            var toDo = $('.main__input').val();
            var toDoDate = $('.main__date').val();
            console.log(toDoDate);
            var item = new Todo({
                title: toDo,
                time: toDoDate
            });
            //List.add(item);
            var view = new ListView({collection: new List()});
            view.collection.add(item);
            $('.main__input').val('');
        },
        render: function() {
           return this
        }
    });
    return AppView;
});