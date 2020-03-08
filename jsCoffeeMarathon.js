console.log("Coffee Please!");

let coffeeType = "Medium Roast";
console.log(coffeeType);

var latte = 2;
var mocha = 3;
console.log(latte + mocha);

console.log(latte > mocha);
console.log(latte < mocha);

let sugarFree;
// alert(sugarFree);

let customer1 = "Kamala Khan", drinkChoice = "chai", quantity = 4, foodAllergy = false;
console.log(`${customer1} ${drinkChoice} ${quantity} ${foodAllergy}`);

let chai = 2.50; // changed from const to let
console.log(quantity * chai);

// var chai = 2;
// console.log(quantity * chai);

let total = "$" + quantity * chai;

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log(`+ Your final order is ${quantity} ${drinkChoice}s, for a total of ${total}. +`);

let soda = "Sprite";
console.log(`+ Nice choice of ${drinkChoice}, but we recommend a ${soda}!  +`);
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++");

alert("Your Final Order: " + total);
