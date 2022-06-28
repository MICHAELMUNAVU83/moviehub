const modal = async  () => {
  const requestmovies = await fetch('https://api.tvmaze.com/shows');
  const requestedMovies = await requestmovies.json();
  requestedMovies.forEach((movieData) => {
    const showModalBtn = document.querySelectorAll(`[id=btn-${movieData.id}]`);
    showModalBtn.forEach((eachmodalbtn) => {
      eachmodalbtn.addEventListener('click', async () => {
        document.getElementById('show-popup').innerHTML = `
  
  <div class="modal">
  <div>
      <img class="original-image" src="${movieData.image.original}">
  
  </div>
  <div>
      <p>Name :${movieData.name}</p>
      <p>Language :${movieData.language}</p>
      <p>Average Rating :${movieData.rating.average}</p>
      <p>Genre :${movieData.genres}</p>
      <p>Summary: ${movieData.summary}</p>
      <p><u>WRITE YOUR COMMENT HERE</u></p>
      <input type="text" class="user" placeholder="Enter your name">
      <input type="text" class="comment" placeholder="Enter your comment">
      <div>
          <button id="comment-${movieData.id}" class="submit">Post Comment</button>
  
      </div>
      <div>
          <button class="close">X</button>
  
      </div>
     
    
      <h3><span class="comment-counter"></span> <span>  </span> <span>COMMENTS</span></h3>
      <div class="comment-sections">
  
      </div>
  
  </div>
  
  </div>
          
          
          `;
      });
    });
  });

  document.getElementById('show-popup').addEventListener('click', (e) => {
    if (e.target.classList.contains('close')) {
      document.getElementById('show-popup').innerHTML = ' ';
    }
  });
};

export default modal;