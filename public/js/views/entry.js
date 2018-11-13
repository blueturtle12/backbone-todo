define(['jquery', 'underscore', 'backbone', 'models/todo'], function(
  $,
  _,
  Backbone,
  Todo
) {
  var EntryView = Backbone.View.extend({
    model: Todo,
    initialize: function() {
      this.template = _.template($('.todoTemplate').html());
      var timeToSeconds = this.model.get('time') * 60;
      this.model.set({ time: timeToSeconds });
      this.model.set({ minutes: Math.floor(timeToSeconds / 60) });
      this.model.set({ seconds: timeToSeconds % 60 });
    },

    timerLoop: '',

    events: {
      'click .todo__btn': 'onClick'
    },

    onClick: function() {
      var time = this.model.get('time') + 1;
      var buttonStatus = this.model.get('buttonStatus');
      var self = this;

      function x() {
        time--;
        self.model.set({ minutes: Math.floor(time / 60) });
        self.model.set({ seconds: time % 60 });
        self.model.set({ time: time });
        self.render();
        if (time === 0) {
          clearInterval(self.timerLoop);
          self.$('.todo__btn').attr('disabled', 'disabled');
        }
        return time;
      }

      if (buttonStatus === 'start' || buttonStatus === 'resume') {
        this.model.set({ buttonStatus: 'pause' });
        x();
        this.timerLoop = setInterval(x, 1000);
      } else if (buttonStatus === 'pause') {
        clearInterval(this.timerLoop);
        this.model.set({ buttonStatus: 'resume' });
        this.render();
      }
    },
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });
  return EntryView;
});
