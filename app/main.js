require([
	'App'
],
function(App) {

	App.deferReadiness();

	require([
		'router',
		'controllers/applicationController',
		'views/projectsView',
	],
	function (Router, ApplicationController, ProjectsView) {
		// Configure router.
		Router();

		App.ApplicationController = ApplicationController;
		App.ProjectsView = ProjectsView;

		// We're ready to launch the app!
		App.advanceReadiness();
	});

});

