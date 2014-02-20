define([
	"views/ApplicationView",
	"router",
	"controllers/ApplicationController",
], function(ApplicationView, Router) {

	var App = {
		ApplicationView: ApplicationView,
		Router: Router
	};

	return App;
});
