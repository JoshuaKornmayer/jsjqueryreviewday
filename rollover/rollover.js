// $('div').hover(function () {
// 	$(this).append('over');

// })


//works for all intensive purposes
// $('div').on("mouseenter", function(){
// 		$(this).append('over');
// 	}).on("mouseleave", function(){
// 		$(this).append('out');
// 	})

$('div').on("mouseenter", function(){

		//$(this).find( "span" ).last().remove(); also works
		$(this).find( "span" ).remove();
		$(this).append( $("<span> over </span>"));
	
	}).on("mouseleave", function(){
	
		$(this).find( "span" ).remove();
		$(this).append("<span> out </span>");
	
	}
	)