require.config({
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
	},
	paths: {
		jquery: '../dependecies/jquery-3.3.1',
		underscore: '../dependecies/underscore',
		backbone: '../dependecies/backbone',
	}
});
