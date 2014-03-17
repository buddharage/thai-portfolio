require([
	'App',
	'Analytics'
],
function(App) {
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

		// Controllers
		App.ApplicationController = ApplicationController;

		// Views
		App.ApplicationView = ApplicationView;
		App.ProjectsView = ProjectsView;

		// We're ready to launch the app!
		App.advanceReadiness();
	});

});

