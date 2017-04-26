var counter = 1;

$(".add-flex").click( function(){
	counter++;
	var lastItem = $(".flex-item.last");
	lastItem.after('<li class="flex-item last">' + counter + "</li>" );
	lastItem.removeClass("last");	
});


$(".buttons-flex button").click( function(e){
	var clickedid = e.target.id;
	$(".flex-container-dyno-align").css("justify-content", clickedid);
	$(".active").removeClass("active");
	$(e.target).addClass("active");
});
