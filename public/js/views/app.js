define([
  'jquery',
  'underscore',
  'backbone',
  'views/entry',
  'collections/list',
  'models/todo'
], function($, _, Backbone, EntryView, List, Todo) {
  var AppView = Backbone.View.extend({
    collection: new List(),
    el: $('.main__container'),
    initialize: function() {
      this.listenTo(this.collection, 'add', function() {
        this.render;
        this.collection.saveEntry();
      });
      this.collection.fetchEntries();
      this.collection.models.forEach(function(model) {
        this.$('.main__display').append(
          new EntryView({ model: model }).render().el
        );
      });
    },
    events: {
      'click .main__submit': 'onSubmit'
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
      this.$('.main__display').append(
        new EntryView({ model: item }).render().el
      );
      console.log(this.collection);
      $('.main__input').val('');
      $('.main__description').val('');
      $('.main__time').val('');
    },
    render: function() {}
  });
  return AppView;
});
