const counter = async (requestedMovies) => {
  let movieCounter = 0;
  requestedMovies.forEach((movieData) => {
    movieCounter += 1;
    return movieData;
  });
  document.querySelector('.movie-counter').innerHTML = `
    ${movieCounter}
    
    `;
};
const homeCounter = async () => {
  const requestmovies = await fetch('https://api.tvmaze.com/shows');
  const requestedMovies = await requestmovies.json();
  counter(requestedMovies);
};

export default homeCounter;
