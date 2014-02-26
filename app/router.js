define([
	'Ember',
	'App',
	'fixtures/projects'
], function(Ember, App, ProjectFixtures) {
	return function() {
		App.Router.map(function() {
			this.resource('projects', { path: '/' }, function() {
				this.resource('project', {
					path: ':project_id'
				});
			});
		});

		App.ProjectsRoute = Ember.Route.extend({
			model: function(params) {
				return ProjectFixtures;
			}
		});

	};
});
