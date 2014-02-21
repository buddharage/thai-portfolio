require([
	'App',
	'Ember',
],
function(App, Ember) {

	App.deferReadiness();

	require([
		'router',
	],
	function (Router) {
		// Configure router.
		Router();

		// We're ready to launch the app!
		App.advanceReadiness();
	});

});

