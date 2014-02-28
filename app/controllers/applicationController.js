define([
	'Ember'
], function(Ember) {

	return Ember.ObjectController.extend({
		goToProjects: function() {
			var mainHeaderHeight = $('.global-header').height();
			console.log(mainHeaderHeight);
			$('body,html').animate({scrollTop: mainHeaderHeight}, '500', 'swing');
		}
	});

});
