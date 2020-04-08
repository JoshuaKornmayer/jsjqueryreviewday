
function number(){
	var n = prompt("Choose any number!")

	var total = 0
	
		for (var i = 0; i <= n; i++){
			if ((i % 3 === 0)|| (i % 5 === 0) || ((i % 3 === 0) && (i % 5===0))){
			 total += i;	
			}
		}

	return alert('Your total is ' + total);

}

number();