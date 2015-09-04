Handlebars.registerHelper('equals', function(x, y, options) {
	if(x == y) {
		return options.fn(this);
	} else {
		return options.inverse(this);
	}
});
