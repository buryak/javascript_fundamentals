// Exercises: Objects

// EXERCISE: The Recipe Card

// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa
var favoriteRecipie = {
	title: "Baked Chicken Breast",
	servings: 2,
	ingredients: ["2 Chicken Breasts", "Roasted Garlic Seasoning", "Olive Oil"]
}
console.log(favoriteRecipie.title)
console.log("Serves: " + favoriteRecipie.servings)
console.log("Ingredients: ")
console.log(favoriteRecipie.ingredients[0])
console.log(favoriteRecipie.ingredients[1])
console.log(favoriteRecipie.ingredients[2])

// EXERCISE: The Reading List

// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
var readingList = [
	{title: "Ulysses",
	author: "James Joyce",
	alreadyRead: false},

	{title: "The Great Gatsby",
	author: "F. Scott Fitzgerald",
	alreadyRead: true},

	{title: "Brave New World",
	author: "Aldous Huxley",
	alreadyRead: true}
];

for (var i = 0; i < readingList.length; i++) {
	if (readingList[i].alreadyRead == true) {
		var readingStatus = 'You already read "';
	}else{ 
		var readingStatus = 'You still need to read "';
}
	console.log(readingStatus + readingList[i].title + '" by ' +readingList[i].author)
};


// EXERCISE: The Movie Database

// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

function movie(title, duration, stars) {
	this.title = title;
	this.duration = duration;
	this.stars = stars;
}

var myMovie = new movie('The Godfather', 175, ['Marlon Brando', 'Al Pacino', 'James Caan']);

console.log(myMovie.title + ' lasts for ' + myMovie.duration + ' minutes. Stars: ' + myMovie.stars.join(', ') + ".");
