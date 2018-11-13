define(['underscore', 'backbone'], function(_, Backbone) {
  var Todo = Backbone.Model.extend({
    defaults: {
      title: '',
      description: '',
      completed: false,
      time: '',
      minutes: '',
      seconds: '',
      buttonStatus: 'start'
    }
  });

  return Todo;
});
