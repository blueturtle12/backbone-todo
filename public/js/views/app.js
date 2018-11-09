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
            var toDoDisc = $('.main__discription').val();
            var toDoTime = $('.main__time').val();
            // var x = setInterval(function() {
            //     i++
            //     if(i === parseInt(toDoTime)){
            //         clearInterval(x);
            //     }
            //     return i;
            // },1000)
            var item = new Todo({
                title: toDo,
                discription: toDoDisc,
                time: toDoTime
            });
            this.collection.add(item);
            this.$(".main__display").append(new EntryView({model:item}).render().el);
            console.log(this.collection.toArray());
            $('.main__input').val('');
            var i = 0;
        },
        render: function() {
        }
    });
    return AppView;
});