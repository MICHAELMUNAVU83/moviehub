/* eslint-disable */
export const commentCounter = async (gotComment) => {
  let commentcounter = 0;
  gotComment.forEach(() => {
    commentcounter += 1;
  });
  return commentcounter;
};
/* eslint-enable */