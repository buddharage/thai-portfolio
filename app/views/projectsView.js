define([
	'Ember',
	'MQ',
	'HoverDir'
], function(Ember, MQ) {
	return Ember.View.extend({
		templateName: 'projects',

		didInsertElement: function() {
			$('.app-loading').remove();

			var projectEls = $('.project'),
				queries = [
					{
						context: 'bp1000',
						match: function() {
							projectEls.each(function() {
								$(this).hoverdir({
									easing: 'linear',
									speed: 200
								});
							});
						},
						unmatch: function() {
							projectEls.each(function() {
								var thisEl = $(this);
								thisEl
									.off('mouseenter.hoverdir, mouseleave.hoverdir')
									.find('.info').show();

							});
						}
					}
				];

			MQ.init(queries);
		},
	});
});
