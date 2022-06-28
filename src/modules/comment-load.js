const loadComment = async function () {
    const requestmovies = await fetch('https://api.tvmaze.com/shows');
    const requestedMovies = await requestmovies.json();
  
    requestedMovies.forEach((movieData) => {
      const showModalBtn = document.querySelectorAll(`[id=btn-${movieData.id}]`);
      showModalBtn.forEach((eachmodalbtn) => {
        eachmodalbtn.addEventListener('click', async () => {
          const getcomments = await fetch(
            `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iIKXmVSeWGwWL3aRmXsK/comments/?item_id=${movieData.id}`,
          );
          const gotComments = await getcomments.json();
          let commentcounter = 0;
          gotComments.forEach((got) => {
            commentcounter += 1;
            const commentdiv = document.createElement('div');
  
            commentdiv.innerHTML += `
            <div class ="comment-section">
            <span>Comment :${got.comment}</span><span class ="user-span">BY  ${got.username}</span>
      
             </div>`;
            document.querySelector('.comment-sections').appendChild(commentdiv);
          });
          document.querySelector('.comment-counter').innerHTML = `
          ${commentcounter}
  
          
          `;
        });
      });
    });
  };
  
  export default loadComment;