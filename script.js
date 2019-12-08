$(function(){

	const disableScroll = function(disableScroll){
		$('body').css({
				'position': 'fixed',
				'width': '100%',
 				'height': '100%',
 				'overflow': 'hidden'

			})
	};

	const enableScroll = function(enableScroll){
		$('body').css({
			'position': 'relative',
 			'overflow': 'auto'
		});
	};


	// 	const disableScroll = function(){
	// 	$('html','body').on('mousewheel',function(){
	// 		return false;
	// 	})
	// };


	// const enableScroll = function(){
	// 	$('html','body').off('mousewheel');
	// };

	$('#changeButton')
	.css({
		'margin-left': '20px',
		'margin-bottom': '40px'
	})
	.click(function(fadeIn){
		$('#popup-container').fadeIn(400, disableScroll);
		$('#popup').animate({
			width: '200px',
			height: '300px'
		}, 400);
	});

	$('#popup-container').click(function(event){
		if(event.target == this) {
			$(this).fadeOut(400, enableScroll);
			$('#popup').animate({
			width: 0,
			height: 0
		}, 400);
		}
	})
});