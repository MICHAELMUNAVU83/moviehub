const displaylikes = async  () => {
  const requestmovies = await fetch('https://api.tvmaze.com/shows');
  const requestedMovies = await requestmovies.json();
  requestedMovies.forEach((movieData) => {
    const likesBtn = document.querySelectorAll(`[id=like-${movieData.id}]`);
    likesBtn.forEach((likeBtn) => {
      likeBtn.addEventListener('click', async () => {
        likeBtn.classList.add('redbtn');
        const requestlikes = await fetch(
          'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Hy9Xvp9M5vmOt13P3eGQ/likes/',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              item_id: `${movieData.id}`,
            }),
          },
        );
        const requestedlikes = await requestlikes.text();
        console.log(requestedlikes);

        // Getting from api

        const gotlikesapi = await fetch(
          `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Hy9Xvp9M5vmOt13P3eGQ/likes/?item_id=${movieData.id}`,
        );
        const gotlikes = await gotlikesapi.json();

        gotlikes.forEach((likess) => {
          if (Number(likess.item_id) === movieData.id) {
            document.querySelector(
              `[id=like-content-${movieData.id}]`,
            ).innerHTML = `
  
                 <span>${likess.likes}</span> 
                 `;
          }
        });
      });
    });
  });
};

export default displaylikes;
