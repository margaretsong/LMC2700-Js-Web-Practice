let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie);
    displayOnWebpage("A new movie is added");
}

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
    displayOnWebpage("Printing all movies....")
    allMovies.forEach((movie) => {
        displayOnWebpage(`${movie.title}, rating of ${movie.rating}, havewatched: ${movie.haveWatched}`);
    });
    displayOnWebpage(`<br>You have ${allMovies.length} movies in total`);
};


//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating) => {
    const highRatedMovies = allMovies.filter((movie) => movie.rating > rating);
    displayOnWebpage(`printing movie that has a higher rating than ${rating}`);
    highRatedMovies.forEach((movie) => {
        displayOnWebpage(`${movie.title} has a rating of ${movie.rating}`);
    });

    displayOnWebpage(`<br>In total, there are ${highRatedMovies.length} matches`);
};


//Toggle the 'haveWatched' property of the specified movie
let changeWatched = (title) => {
    const movie = allMovies.find((movie) => movie.title === title);
    if (movie) {
        movie.haveWatched = !movie.haveWatched;
    }
    displayOnWebpage("changing the status of the movie...");
};

const displayOnWebpage = (text) => {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML += `${text}<br>`;
};



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace console.log with display on web page*/
displayOnWebpage("----------------");
displayOnWebpage("running program......");
displayOnWebpage("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);

/*replace console.log with display on web page*/
displayOnWebpage("----------------");
addMovie(movie1);
displayOnWebpage("----------------");



changeWatched("Spiderman");
/*replace console.log with display on web page*/
displayOnWebpage("----------------");

printMovies();

/*replace console.log with display on web page*/
displayOnWebpage("----------------");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
displayOnWebpage("----------------");

printMovies();
/*replace console.log with display on web page*/
displayOnWebpage("----------------");

highRatings(3.5);