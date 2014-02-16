// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.
function tellFortune (children, partner, geoLocation, jobTitle) {
	console.log("You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partner + " with " + children + " kids.");
}
tellFortune(2, "James Bond", "Alberta", "Dentist");
tellFortune(32, "Bro", "Amsterdam", "Dude");
tellFortune("many", "a woman", "some interesting place", "guy");

// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
function calculateAge (birthYear) {
	var currentYear = new Date().getFullYear();
	var age1 = currentYear - birthYear;
	var age2 = age1--;
	console.log("You are either " + age1 + " or " + age2);
}
calculateAge(1991);
calculateAge(1987);
calculateAge(1956);

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.
function calculateSupply (age, amountPerDay) {
	var maxAge = 100;
	var amountTotal = ( maxAge - age ) * 365 * Math.round(amountPerDay);
	console.log("You will need " + amountTotal + " to laste you until the ripe old age of " + maxAge);
}
calculateSupply(27, 22.34);
calculateSupply(27, 22);
calculateSupply(27, 22.87);

// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".
function calcCircumfrence (radius) {
	console.log("The circumference is " + 2*Math.PI*radius);
}
calcCircumfrence(10);

function calcArea (radius) {
	console.log("The area is " + Math.PI*Math.pow(radius, 2));
}
calcArea(10);


// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
function celsiusToFahrenheit (celsius) {
	var cToF = celsius*1.8+32;
	console.log(celsius+"°C is "+cToF+"°F")
}
celsiusToFahrenheit(20)

function fahrenheitToCelsius (fahrenheit) {
	var fToC = (fahrenheit-32)/1.8;
	console.log(fahrenheit+"°F is "+fToC+"°C")
}
fahrenheitToCelsius(68)
