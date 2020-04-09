// function askNumber(){
// var n = prompt("Choose a number")

// var sumProduct = prompt("Do you want to compute the SUM or PRODUCT of 1 through your number 'n'? Type either SUM or PRODUCT in all CAPS.");
// var total = 0
// var prodTotal = 1	
// 	for (var i = 0; i <= n; i++){
// 		if (sumProduct == 'SUM'){
// 			total += i;
// 			// return alert('Your total is ' + sumTotal);
// 		} else {
// 			return 
// 			// return alert('Your total is ' + total);
// 		}
// 	}
// 	return alert('Your total is ' + total);

	
// }

// askNumber();

function addMultiply(){
	var n = prompt("Choose a number")

	var sumProduct = prompt("Do you want to compute the SUM or PRODUCT of 1 through your number 'n'? Type either SUM or PRODUCT in all CAPS.");
	
	var total = 0
	var prodTotal = 1

	if(sumProduct=='SUM'){
		for (var i = 0; i < n; i++){
			total += i;
		// return alert(total);
		}
	}else {
		for (var i = 1; i < n; i++){
			prodTotal *= i;
		return alert(prodTotal);
		}
	}
	return alert(total);
	return alert(prodTotal);
	
}
addMultiply()