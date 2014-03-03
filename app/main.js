require([
	'App'
],
function(App) {

	console.time('Ember');
	App.deferReadiness();

	require([
		'router',
		'controllers/applicationController',
		'views/applicationView',
		'views/projectsView',
	],
	function (Router, ApplicationController, ApplicationView, ProjectsView) {
		// Configure router.
		Router();

		App.ApplicationController = ApplicationController;
		App.ApplicationView = ApplicationView;
		App.ProjectsView = ProjectsView;

		// We're ready to launch the app!
		App.advanceReadiness();
	});

});

