const displayData = async function () {
  const requestmovies = await fetch('https://api.tvmaze.com/shows');
  const requestedMovies = await requestmovies.json();
  console.log(requestedMovies);
  requestedMovies.forEach((movieData) => {
    const newdiv = document.createElement('div');
    newdiv.classList.add('each-movie');
    newdiv.innerHTML += `
        

     <img id="btn-${movieData.id}" src="${movieData.image.medium}" class ="medium-image">
     <p class = "movie-name">${movieData.name}</p>
     <div class="like-content">
     <i class="fa fa-heart delete" id = "like-${movieData.id}" aria-hidden="true"></i><span id="like-content-${movieData.id}">0</span>
     
     <i class="fa fa-comment"  aria-hidden="true"></i>

     </div>


     `;

    document.getElementById('movie-content').appendChild(newdiv);
  });
};

export default displayData;
