// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
var jobTitle = "Web Developer";
var place = "Toronto";
var partner = "your Job";
var numKids = 1337;
var future = "You will be a " + jobTitle + " in " + place + ", and married to " + partner + " with " + numKids + " kids.";
document.write(future);

// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.
var currentYear = new Date().getFullYear();
var birthYear = 1987;
var age1 = currentYear - birthYear;
var age2 = age1--;
var outputAge = "They are either " + age1 + " or " + age2 + " years old.";
document.write(outputAge);


// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
var age = 26;
var maxAge = 90;
var dayAmount = 4;
var totalAmount = (maxAge-age)*365*dayAmount;
var outputSnack = "You will need " + totalAmount + "beers to last you until the ripe old age of " + maxAge;
document.write(outputSnack);


// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".
var cirRadius = 10;
var cirCircumference = 2*Math.PI*cirRadius;
var cirOutput1 = "The circumference is " + cirCircumference;
document.write(cirOutput1);
var cirArea = Math.PI * Math.pow(cirRadius, 2);
var cirOutput2 = "The area is " + cirArea;
document.write(cirOutput2);

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
var celsiusTemp = 20;
var fahrenheitTemp = 70;
var cToF = celsiusTemp*1.8+32;
var fToC = (fahrenheitTemp-32)/1.8;
console.log(celsiusTemp+"°C is "+cToF+"°F")
console.log(fahrenheitTemp+"°F is "+fToC+"°C")

