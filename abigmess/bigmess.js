
$('body *').each(function(){
		var randomTop = Math.floor(Math.random()* 500) + 'px' ;
		var randomLeft = Math.floor(Math.random()*500) + 'px';
		console.log(randomTop)
		console.log(randomLeft)

	
		
		$(this).css(
		{
			"position":"absolute",
			"top": randomTop,
			"left": randomLeft
		})
		console.log($(this));
		
})

