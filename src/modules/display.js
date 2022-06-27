const displayMovies = async () => {
  const request = await fetch('https://api.tvmaze.com/shows');
  const requestmovies = await request.json();
  requestmovies.forEach(
    (movieData) => {
      console.log(movieData);
    },
  );
};
export default displayMovies;