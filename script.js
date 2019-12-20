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


		$.get(
			'http://data.fixer.io/api/latest',
			{'access_key':'99196eb9a1a4b1d51a39843e7a39ca94',
			'base':'EUR'},
			function(response){
				var euro = response.rates.RUB;
				var eurrub = euro.toFixed(2);
				var eurusd = response.rates.USD;
				var usdrub = (eurrub/eurusd).toFixed(2);
				$('#eur-rub').text(eurrub);
				$('#usd-rub').text(usdrub);
				
				// var gbp = response.rates.GBP;
				// var chf = response.rates.CHF;
				// var jpy = response.rates.JPY;

				// var other = eurrub+eurusd+gbp+chf+jpy;
				// console.log(other);
			});


	$('#changeButton')
	.click(function(fadeIn){
		$('#popup-container').fadeIn(400, disableScroll);
		$('#popup').animate({
			width: '300px',
			height: '500px'
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

	$('#small-menu')
	.click(function(){
		$('#nav-small-menu').fadeIn().css({'display': 'flex'});
		$('#small-menu').css({'display': 'none'});
		$('#close-menu').css({'display': 'block'});
		});
	$('#close-menu')
	.click(function(){
		$('#nav-small-menu').fadeOut();
		$('#close-menu').css({'display': 'none'});
		$('#small-menu').css({'display': 'block'});
		});
});