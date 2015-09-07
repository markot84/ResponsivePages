function open_modal(options){
	$('#myModal').html(options.message);
	if(options.confirm == 1){
		$('#myModal').append('<button class="confirm small"><i class="fa fa-check"></i> Confirm</button>');
		$('#myModal').append('<button class="cancel small"><i class="fa fa-times"></i> Cancel</button>');
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

function show_overlay(){
	$('.loading-overlay').show();
	$('.loading-info').css("position","absolute");
    $('.loading-info').css("top", '30%');
    $('.loading-info').css("left", Math.max(0, (($(window).width() - $('.loading-info').outerWidth()) / 2) + $(window).scrollLeft()) + "px");
	$('.loading-info').show();
}

function hide_overlay(){
	$('.loading-overlay').hide();
	$('.loading-info').hide();
}
