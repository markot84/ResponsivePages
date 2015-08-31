$(document).ready(function(){
	$('#list_link').on('click',function(){
		show_list_pages();
	});
	$('#create_link').on('click',function(){
		show_create_page();
	});
});

function show_list_pages() {
	var source = $("#list_pages_template").html();
	var template = Handlebars.compile(source);
	
	$.ajax({
      type: "GET",
      contentType: "application/json",
      url: 'http://pagesmanagement.azurewebsites.net/api/ResponsivePages',
      dataType: "json",
      success: function(){
		  alert('yo');
	  }
	});
	
	var context = {title: "My New Post", description: "This is my first post!"};
	var html    = template(context);
	$('#content').html(html);
}

function show_create_page() {
	var source   = $("#create_page_template").html();
	var template = Handlebars.compile(source);
	$('#content').html(template);
	$('#create_page').on('click',function(){
		create_new_page();
	});
}

function create_new_page() {
	var data = {
		id: 1,
		title: $('#title').val(),
		description: $('#description').val(),
		type: $('#type').val(),
		isActive: $('#is_active').prop('checked'),
		publishedOn: "2015-08-31T09:25:02.1272442+00:00"
	};
	
	data = JSON.stringify(data);
	
	$.ajax({
      type: "POST",
      contentType: "application/json",
      url: 'http://pagesmanagement.azurewebsites.net/api/ResponsivePages',
      data: data,
      dataType: "json",
      success: function(){
		  alert('yo');
	  }
	});
	
	alert(data);
}
