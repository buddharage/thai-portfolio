define([
	'Ember',
	'HoverDir'
], function(Ember) {
	return Ember.View.extend({
		templateName: 'projects',

		didInsertElement: function() {
			$('.projects-section .project').each(function() {
				$(this).hoverdir();
			});
		},
	});
});
