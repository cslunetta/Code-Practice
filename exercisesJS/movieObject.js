/* 
movie object that takes in 5 arguements

Title
Director
Genre
Release year
Rating

getoverview
    "<movie>, a <genre> film directed by <director> was released in <releaseYear>. It received a rating of <rating>."
*/

// function Movie(title, director, genre, releaseYear, rating) {
//     this.title = title;
//     this.director = director;
//     this.genre = genre;
//     this.releaseYear = releaseYear;
//     this.rating = rating;

//     Movie.prototype.getOverview = () => {
//         return `${title}, a ${genre} film directed by ${director} was released in ${releaseYear}. It received a rating of ${rating}.`;
//     };
// }

class Movie {
    constructor(title, director, genre, releaseYear, rating) {
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.rating = rating;
    }

    get overview() {
        return movieObjectResults.getOverview();
    }

    getOverview = () => {
        return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`;
    };
}

export const movieObjectResults = () => {
    const newMovie = new Movie(
        "untitled movie",
        "me myself and I",
        "questionable",
        2021,
        4.5
    );
    console.log(newMovie.getOverview());

    const anotherMovie = new Movie(
        "movie123",
        "Who knows?",
        "also questionable",
        2021,
        2
    );
    console.log(anotherMovie.getOverview());
};
