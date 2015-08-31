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
	
	/*$.ajax({
      type: "GET",
      contentType: "application/json",
      url: 'http://pagesmanagement.azurewebsites.net/api/ResponsivePages',
      dataType: "json",
      success: function(){
		  alert('yo');
	  }
	});*/
	
	var context = {
			data : [{
		id:	 "1",
		title: "My New Post", 
		description: "This is my first post!",
		type: 1,
		isActive: true,
		publishedOn: "2015"
	},{
		id:	 "2",
		title: "My New Post 2", 
		description: "This is my second post!",
		type: 0,
		isActive: false,
		publishedOn: "2018"
	}]
		};
	var html    = template(context);
	$('#content').html(html);
	
	$('.delete').on('click',function(){
		var page_id = $(this).closest('tr').find('.page_id').html()
		delete_page(page_id);
	});
	
	$('.edit').on('click',function(){
		var page_id = $(this).closest('tr').find('.page_id').html()
		show_edit_page(page_id);	
	});
}

function show_create_page() {
	var source   = $("#create_page_template").html();
	var template = Handlebars.compile(source);
	$('#content').html(template);
    $(document).foundation();
	$('#create_page').on('click',function(){
		create_new_page();
	});
	$( "#published_on" ).datepicker();
}

function show_edit_page(page_id) {
	$.ajax({
      type: "GET",
      contentType: "application/json",
      url: 'http://pagesmanagement.azurewebsites.net/api/ResponsivePages/'+page_id,
      dataType: "json",
      success: function(){
		  alert('yo');
	  }
	});
	
	var source   = $("#create_page_template").html();
	var template = Handlebars.compile(source);
	$('#content').html(template);
    $(document).foundation();
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
	
	$.ambiance({message: "Page added successufully",
            title: "Success!",
            type: "success"});
}

function delete_page(page_id){
	open_modal({
		message:'<p>Are you sure you want to delete this page?</p>',
		confirm:1
	});
	
	var data = {
		id	:	page_id
	};
	
	$.ajax({
      type: "DELETE",
      contentType: "application/json",
      url: 'http://pagesmanagement.azurewebsites.net/api/ResponsivePages/'+page_id,
      data: JSON.stringify(data),
      dataType: "json",
      success: function(){
		  alert('yo');
	  }
	});
}

function open_modal(options){
	$('#myModal').html(options.message);
	if(options.confirm == 1){
		$('#myModal').append('<button class="confirm">Confirm</button>');
		$('#myModal').append('<button class="cancel">Cancel</button>');
	}
	$('#myModal').foundation('reveal', 'open');
	
	$('.cancel').on('click',function(){
		$('#myModal').foundation('reveal', 'close');
	});
	
}

Handlebars.registerHelper('equals', function(a, b, options) {
  if(a == b) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});
