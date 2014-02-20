require.config({
	deps: ["main"],

	shim: {
		'ember': {
			deps: ['handlebars', 'jquery'],
			exports: 'Ember'
		},
	},

	paths: {
		'App': 'app',
		'models': 'models',
		'views': 'views',
		'controllers': 'controllers',
		'routes': 'routes',

		// libraries
		'jquery': 'libs/jquery-1.10.2',
		'handlebars': 'libs/handlebars-1.1.2',
		'ember': 'libs/ember-1.4.0'
	},
});
