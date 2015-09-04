$(document).ready(function(){
	
	// initialize the application
	var app = Sammy('body', function() {
		
		// define 'routes'
		this.get('#landing_page/', function() {
			show_landing_page();
		});
		
		this.get('#list_pages/', function() {
			show_list_pages();
		});
		
		this.get('#create_page/', function() {
			show_create_page();
		});
		
		this.get('#edit_page/:page_id/', function() {
			show_edit_page(this.params['page_id']);
		});
		
		this.notFound = function(){
			// do something
		}
		
	});

	// start the application
	app.run('#landing_page/');
	
});
