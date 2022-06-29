const counter = async (requestedMovies) => {
  let count = 0;
  requestedMovies.forEach(() => {
    count += 1;
  });
  return count;
};

export default counter;
