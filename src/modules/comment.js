class Movie {
    constructor(comment, username, item_id) {
      (this.comment = comment),
      (this.username = username),
      (this.item_id = item_id);
    }
  }

  const addComment = async  ()=> {
    const requestmovies = await fetch('https://api.tvmaze.com/shows');
    const requestedMovies = await requestmovies.json();
  
    requestedMovies.forEach((movieData) => {
      const showModalBtn = document.querySelectorAll(`[id=btn-${movieData.id}]`);
      showModalBtn.forEach((eachmodalbtn) => {
        eachmodalbtn.addEventListener('click', () => {
          const commentBtn = document.querySelectorAll(
            `[id=comment-${movieData.id}]`,
          );
  
          commentBtn.forEach((commentButton) => {
            commentButton.addEventListener('click', async () => {
              document.querySelector('.comment-sections').innerHTML = ' ';
  
              const userinput = document.querySelector('.user').value;
              const commentinput = document.querySelector('.comment').value;
              const newmovie = new Movie(
                commentinput,
                userinput,
                `${movieData.id}`,
              );
  
              const fetchcomment = await fetch(
                'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iIKXmVSeWGwWL3aRmXsK/comments',
                {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(newmovie),
                },
              );
              const fetchedComment = await fetchcomment.text();
  
              const getcomment = await fetch(
                `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iIKXmVSeWGwWL3aRmXsK/comments/?item_id=${newmovie.item_id}`,
              );
              const gotComment = await getcomment.json();
              addCommentCounter(gotComment);
  
              console.log(commentcounter);
              document.querySelector('.user').value = ' ';
              document.querySelector('.comment').value = ' ';
            });
          });
        });
      });
    });
  };
  
  const addCommentCounter = async  (gotComment) => {
    let commentcounter = 0;
    gotComment.forEach((eachcomment) => {
      commentcounter += 1;
      const commentdiv = document.createElement('div');
      commentdiv.innerHTML += `
      <div class ="comment-section">
      <span>Comment :${eachcomment.comment}</span><span class= "user-span"> BY ${eachcomment.username}</span>
  
       </div>
  
               `;
  
      document.querySelector('.comment-sections').appendChild(commentdiv);
    });
    document.querySelector('.comment-counter').innerHTML = `
    ${commentcounter}
    
    `;
  };
  
  export default addComment;