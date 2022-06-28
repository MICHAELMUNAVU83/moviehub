export const commentCounter = async function (gotComment) {
  let commentcounter = 0;
  gotComment.forEach((eachcomment) => {
    commentcounter += 1;
  });
  return commentcounter;
};

