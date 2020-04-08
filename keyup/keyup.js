$('input').keyup(function(event){
	alert($('input').val());
	$('#append').text( function(){
		return $('input').val();
	})
})