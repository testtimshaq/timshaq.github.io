$(function(){

	// Burst tags — start
	$(document).ready(function(){
 	$('.burst').removeClass('burst');
	});
	// Burst tags — end

	// Slider — start
	
	// Slider — end

	// Call-me button — start
	$(".button_call").click(function(){
		$(".call-container").fadeIn(600)

	});

	$('.call-container').click(function(event){
		if(event.target == this) {
			$(this).fadeOut(400);
		}
	})
	// Call-me button — end

	// Order-project button — start
	$("#order-project").click(function(){
		$(".order-container").fadeIn(600)

	});

	$('.order-container').click(function(event){
		if(event.target == this) {
			$(this).fadeOut(400);
		}
	})
	// Order-project button — end
})