$(document).ready(function(){
	$('#list').on('click',function(){
		list_pages();
	});
	$('#create').on('click',function(){
		create_page();
	});
});

function list_pages() {
	var source;
	var template;
	
	$.ajax({
      type: "GET",
      contentType: "application/json",
      url: 'http://pagesmanagement.azurewebsites.net/api/ResponsivePages',
      dataType: "json",
      success: function(){
		  alert('yo');
	  }
	});
	
	
		var source   = $("#list_pages").html();
		var template = Handlebars.compile(source);
		var context = {title: "My New Post", description: "This is my first post!"};
		var html    = template(context);
		$('#content').html(html);
}

function create_page() {
	var source   = $("#create_page").html();
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
