define([
	'Ember',
	'App'
], function(Ember, App) {
	return function() {
		App.Router.map(function() {
			this.resource('projects');

			this.resource('project', {
				path: '/project/:project_id'
			});
		});

		App.ProjectsRoute = Ember.Route.extend({
			model: function(params) {
				return [{
					title: 'VICE News',
					url: 'http://news.vice.com',
				}, {
					title: 'Brisk Bodega',
					url: 'http://briskbodega.com'
				}];
			}
		});
	}
});
