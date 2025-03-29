const numberOfFilms = prompt("How many films you are already watched?" ,'');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};
const lastWatched = prompt("Which was the last one film you're watched?", ''),
      rate = prompt("How many points are you give to this film?");

personalMovieDB.movies[lastWatched] = rate;

alert(JSON.stringify(personalMovieDB))