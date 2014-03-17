define([
	'Ember'
], function(Ember) {

	return Ember.ObjectController.extend({
		actions: {
			goToProjects: function() {
				var mainHeaderHeight = $('.global-header').height();
				$('body,html').animate({scrollTop: mainHeaderHeight}, '500', 'swing');

				window.ga("send", "event", "cta", "click", "go to projects");
			},

			onSocialClick: function(socialName) {
				window.ga("send", "event", "socials", "click", socialName);

				switch(socialName) {
					case 'facebook':
						window.open('http://facebook.com/thai.viet.le');
						break;
					case 'twitter':
						window.open('http://www.twitter.com/buddharage');
						break;
					case 'linkedin':
						window.open('http://www.linkedin.com/in/thaivietle');
						break;
				}
			},
		}
	});

});
