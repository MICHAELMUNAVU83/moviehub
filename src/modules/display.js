const displayData = async () => {
  const requestmovies = await fetch('https://api.tvmaze.com/shows');
  const requestedMovies = await requestmovies.json();
  requestedMovies.forEach((movieData) => {
    const newdiv = document.createElement('div');
    newdiv.classList.add('each-movie');
    newdiv.innerHTML += `
        

     <img src="${movieData.image.medium}" class ="medium-image">
     <p class = "movie-name">${movieData.name}</p>
     <div class="like-content">
     <i class="fa fa-heart delete" id = "like-${movieData.id}" aria-hidden="true"></i><span class="like-count" id="like-content-${movieData.id}"></span>
     
     <i class="fa fa-comment"   id="btn-${movieData.id}" aria-hidden="true"></i>

     </div>


     `;

    document.getElementById('movie-content').appendChild(newdiv);
  });
};

export default displayData;
