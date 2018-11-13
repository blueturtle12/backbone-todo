define([
  'underscore',
  'backbone',
  'models/todo'
], function(_, Backbone, Todo, Store) {
  var List = Backbone.Collection.extend({
    model: Todo,
    //url: 'todos',
    initialize: function() {},

    fetchEntries: function() {
      var self = this;
      var entries = JSON.parse(window.localStorage.getItem('Backbone-Todo'));
      if(entries !== null) {
        entries.forEach(function(entry) {
          var todoEntry = new Todo(entry);
          self.add(todoEntry);
        });
      }
    },
    saveEntry: function() {
      localStorage.setItem('Backbone-Todo', JSON.stringify(this.models));
    }
  });

  return List;
});
