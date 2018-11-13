define([
  'underscore',
  'backbone',
  'models/todo'
  //'backboneLocalstorage'
], function(_, Backbone, Todo, Store) {
  var List = Backbone.Collection.extend({
    model: Todo,
    //url: 'todos',
    initialize: function() {
      
    },

    saveEntry: function() {
      localStorage.setItem("Backbone-Todo", JSON.stringify(this.models));
    }
  });

  return List;
});
