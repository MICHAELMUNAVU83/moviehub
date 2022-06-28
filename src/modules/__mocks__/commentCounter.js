export const commentCounter = async  (gotComment) => {
  let commentcounter = 0;
  gotComment.forEach((eachcomment) => {
    commentcounter += 1;
  });
  return commentcounter;
}