const counter = async function (requestedMovies) {
  let count = 0;
  requestedMovies.forEach((movieData) => {
    count += 1;
  });
  return count;
};

export default counter;
