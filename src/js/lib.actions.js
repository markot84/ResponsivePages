function edit_page(page_id) {
		
	if(!$('#title').val() || !$('#published_on').val()){
		return false;
	}
		
	show_overlay();
	
	var data = {
		id: $('#id').val(),
		title: $('#title').val(),
		description: $('#description').val(),
		type: $('#type').val(),
		isActive: $('#is_active').prop('checked'),
		publishedOn: $('#published_on').val()
	};
	
	data = JSON.stringify(data);
		
	$.ajax({
		type: "PUT",
		contentType: "application/json",
		url: 'http://pagesmanagement.azurewebsites.net/api/ResponsivePages/'+page_id,
		data: data,
		dataType: "json",
		complete: function(){
			$.ambiance({
				message: "Page edited successfully",
				title: "Success!",
				type: "success"
			})
			window.location.href = "#list_pages/";
		}
	});
}

function create_new_page() {
	
	if($('.error').is(":visible") || (!$('#id').val() && !$('#title').val() && !$('#published_on').val())){
		$('#create_page').removeAttr('disabled');
	}
	
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
			window.location.href = "#list_pages/";
		}
	});
}

function delete_page(page_id){
	
	show_overlay();
	
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
