require.config({
	deps: ['main'],

	shim: {
		Ember: {
			deps: ['Handlebars', 'Jquery'],
			exports: 'Ember'
		},

		DS: {
			deps: ['Ember'],
			exports: 'DS'
		},

		HoverDir: {
			deps: ['Jquery']
		}

	},

	paths: {
		App: 'app',

		// libraries
		Jquery: 'libs/jquery-1.10.2',
		Handlebars: 'libs/handlebars-1.1.2',
		Ember: 'libs/ember-1.4.0',
		DS: 'lib/ember-data',

		// plugins
		HoverDir: 'plugins/hoverdir'
	}
});
