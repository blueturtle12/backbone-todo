define([
	'jquery',
	'underscore',
    'backbone',
    'views/list'
], function ($, _, Backbone,ListView) {
    var AppView = Backbone.View.extend({
        el: $('.main__container'),
        initialize: function() {
        },
        render: function() {
        }
    });
    return AppView;
});