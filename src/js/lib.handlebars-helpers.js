Handlebars.registerHelper('equals', function(x, y, options) {
	if(a == b) {
		return options.fn(this);
	} else {
		return options.inverse(this);
	}
});
