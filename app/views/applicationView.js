define([
	'Ember',
], function(Ember) {
	return Ember.View.extend({
		didInsertElement: function() {
			$('.app-loading').remove();
		},
	});
});
