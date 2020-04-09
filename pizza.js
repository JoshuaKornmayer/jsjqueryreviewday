
function pizza(){
let topping = ["Cheese", "Pepperoni", "Garlic", "Peppers"];

var addToppings = topping.join(' and ');

return "A delicious pizza that has " + addToppings;
// return "A delicious pizza with " + topping[0] + " and " + topping[1] + " and " + topping[2] + " and " + topping[3] + "."
};

console.log(pizza());

