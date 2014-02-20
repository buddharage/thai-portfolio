require([
	"App",
	"ember",
],
function(App, Ember) {
	var app_name = "ThaiPortfolio";
	window[app_name] = App = Ember.Application.create(App);
});

