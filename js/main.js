$(document).ready(function(){
	$('#list_link').on('click',function(){
		show_list_pages();
		$('li').removeClass('active');
		$(this).closest('li').addClass('active');
	});
	
	$('#create_link').on('click',function(){
		show_create_page();
		$('li').removeClass('active');
		$(this).closest('li').addClass('active');
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
		success: function(data){
			data = {
				pages : data
			};
			var html    = template(data);
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
	});
}

function show_create_page() {
	var source   = $("#create_page_template").html();
	var template = Handlebars.compile(source);
	$('#content').html(template);
	$('#create_page').on('click',function(e){
		create_new_page();
	});
	$('.hasdatepicker').datetimepicker({
		timeFormat: "'T'HH:mm:ss", 
		dateFormat: 'yy-mm-dd',
		separator: ''
	});
	$(document).foundation();
}

function show_edit_page(page_id) {
	var source   = $("#create_page_template").html();
	var template = Handlebars.compile(source);
	
	$.ajax({
		type: "GET",
		contentType: "application/json",
		url: 'http://pagesmanagement.azurewebsites.net/api/ResponsivePages/'+page_id,
		dataType: "json",
		success: function(data){		
			var html    = template(data);
			$('#content').html(html);
			$('.hasdatepicker').datetimepicker({
				timeFormat: "'T'HH:mm:ss", 
				dateFormat: 'yy-mm-dd',
				separator: ''
			});
			$('#create_page').on('click',function(e){
				e.preventDefault();
				edit_page(page_id)
			});
			$(document).foundation();
		}
	});
}

function edit_page(page_id) {
	
	var data = {
		id: $('#id').val(),
		title: $('#title').val(),
		description: $('#description').val(),
		type: $('#type').val(),
		isActive: $('#is_active').prop('checked'),
		publishedOn: $('#published_on').val(),
	};
	
	data = JSON.stringify(data);
		
	$.ajax({
		type: "PUT",
		contentType: "application/json",
		url: 'http://pagesmanagement.azurewebsites.net/api/ResponsivePages/'+page_id,
		data: data,
		dataType: "json",
	});
	$.ambiance({
		message: "Page edited successufully",
		title: "Success!",
		type: "success"
	})
	show_list_pages();
}

function create_new_page() {
	
	var data = {
		id: $('#id').val(),
		title: $('#title').val(),
		description: $('#description').val(),
		type: $('#type').val(),
		isActive: $('#is_active').prop('checked'),
		publishedOn: $('#published_on').val(),
	};
	
	data = JSON.stringify(data);
		
	$.ajax({
		type: "POST",
		contentType: "application/json",
		url: 'http://pagesmanagement.azurewebsites.net/api/ResponsivePages',
		data: data,
		dataType: "json",
		success: function(data){
			if(data.id){
				$.ambiance({
					message: "Page added successufully",
					title: "Success!",
					type: "success"
				})
			}else{
				$.ambiance({
					message: "An error occured. Please try again",
					type: "error",
					title: "Error!"
				})
			}
			show_list_pages();
		}
	});
}

function delete_page(page_id){
	open_modal({
		message:'<p>Are you sure you want to delete this page?</p>',
		confirm:1,
		callback: function(){
			$.ajax({
				type: "DELETE",
				contentType: "application/json",
				url: 'http://pagesmanagement.azurewebsites.net/api/ResponsivePages/'+page_id,
				dataType: "json",
				success: function(data){
					if(data.id){
						$.ambiance({
							message: "Page deleted successufully",
							title: "Success!",
							type: "success"
						})
					}else{
						$.ambiance({
							message: "An error occured. Please try again",
							type: "error",
							title: "Error!"
						})
					}
					show_list_pages();
				}
			});
		}
	});
}

function open_modal(options){
	$('#myModal').html(options.message);
	if(options.confirm == 1){
		$('#myModal').append('<button class="confirm small">Confirm</button>');
		$('#myModal').append('<button class="cancel small">Cancel</button>');
	}
	$('#myModal').foundation('reveal', 'open');
	
	$('.cancel').on('click',function(){
		$('#myModal').foundation('reveal', 'close');
	});
	
	$('.confirm').on('click',function(){
		$('#myModal').foundation('reveal', 'close');
		options.callback();
	});
	
}

Handlebars.registerHelper('equals', function(a, b, options) {
  if(a == b) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});
