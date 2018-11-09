define([
	'jquery',
	'underscore',
    'backbone',
    'views/entry',
    'collections/list',
    'models/todo',
], function ($, _, Backbone,EntryView,List,Todo) {
    var AppView = Backbone.View.extend({
        collection: new List(),
        el: $('.main__container'),
        initialize: function () {
           this.listenTo(this.collection, 'add', this.render);
           this.collection.fetch();
           this.collection.models.forEach(function(model){
            console.log("Model in collection: " + model.get("title"));
            this.$(".main__display").append(new EntryView({model:model}).render().el);
            });
        },
        events: {
            "click .main__submit": "onSubmit"
        },
        onSubmit: function() {
            var toDo = $('.main__input').val();
            var toDoDisc = $('.main__description').val();
            var toDoTime = $('.main__time').val();
            var item = new Todo({
                title: toDo,
                description: toDoDisc,
                time: toDoTime
            });
            this.collection.add(item);
            item.save();
            this.$(".main__display").append(new EntryView({model:item}).render().el);
            console.log(this.collection.toArray());
            $('.main__input').val('');
            $('.main__description').val('');
            $('.main__time').val('');
            var i = 0;
        },
        render: function() {
        }
    });
    return AppView;
});