function show_landing_page() {
	var template = Handlebars.templates['landing_page'];
	$('#content').html(template);
}

function show_list_pages(no_overlay) {
	
	if(no_overlay != 1){
		show_overlay();
	}
	
	var template = Handlebars.templates['list_pages'];
	
	$.ajax({
		type: "GET",
		contentType: "application/json",
		url: 'http://pagesmanagement.azurewebsites.net/api/ResponsivePages',
		dataType: "json",
		success: function(data){
			hide_overlay();
			$('#create_page').removeAttr('disabled');
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
			$(window).trigger('redraw');										//for responsive-tables plugin
		}
	});
}

function show_create_page() {
	var template = Handlebars.templates['create_page'];
	var html    = template({is_edit:0});
	$('#content').html(html);
	$('#create_page').on('click',function(e){
		$('#create_page').attr('disabled','disabled');
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
	var template = Handlebars.templates['create_page'];
		
	$.ajax({
		type: "GET",
		contentType: "application/json",
		url: 'http://pagesmanagement.azurewebsites.net/api/ResponsivePages/'+page_id,
		dataType: "json",
		success: function(data){
			if(data.id){
				data.is_edit = 1;
				var html    = template(data);
				$('#content').html(html);
				$('.hasdatepicker').datetimepicker({
					timeFormat: "'T'HH:mm:ss", 
					dateFormat: 'yy-mm-dd',
					separator: ''
				});
				$('#create_page').on('click',function(e){
					e.preventDefault();
					edit_page(page_id);
				});
				$(document).foundation('abide','events'); 
			}
		},
		error: function(){
			$.ambiance({
				message: "No page was found with id "+page_id,
				type: "error",
				title: "Error"
			})
			window.location.href = "#list_pages/";
		}
		
	});
}

