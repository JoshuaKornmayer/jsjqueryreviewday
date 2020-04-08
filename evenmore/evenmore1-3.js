//step 1: Print Hello World to the screen
// alert('Hello World');

// function print(){
// 	return 'Hello World';
// }

// console.log(print());
//step 1


// step 2
// let name = prompt("What is your name?")
// alert('Hello ' + name + '!');
// step 2


//step 3

(function welcome(){
	let name = prompt("What is your name?")
	

	if(name == 'Alice' || name == 'Bob'){
	return alert('Hello ' + name + '!');
	} else {
	return alert("Hello stranger!")
	}
})();
//step 3

//example solution from Branson... want to keep as a reference as it's a good way to name my function and then call it
// print "Hello World" to the screen as an h1
// $('body').prepend("<div class='header'><h1>Hello World!</h1></div>");
// // ask user for their name and greet them with their name
// function greeting() {
//     var person = prompt("What is your name?", "Enter Your Name Here")
//     if (person != 'Alice' || 'Bob') {
//         alert("We only accept Alices and Bobs here. Get lost.");
//     } else {
//         alert("Hello " + person + ". Nice to meet you!");
//         $('.header').append(person);
//     }
// };
// greeting();


