define([
	"ember"
], function(Ember) {
	var ProjectModel = Ember.Object.extend({
		title: null
	});

	ProjectModel.FIXTURES = [
		{
			title: 'VICE News'
		}
	];
});
