Handlebars.registerHelper('equals', function(a, b, options) {
	if(a == b) {
		return options.fn(this);
	} else {
		return options.inverse(this);
	}
});