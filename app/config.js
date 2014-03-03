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
		Jquery: 'libs/jquery-2.1.0',
		Handlebars: 'libs/handlebars-1.1.2',
		Ember: 'libs/ember-1.4.0',
		DS: 'lib/ember-data',

		// plugins
		MQ: 'plugins/onmediaquery',
		HoverDir: 'plugins/hoverdir'
	}
});
