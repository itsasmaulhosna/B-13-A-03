/*function signature/sample */
function finalScore(omr) {
  //write your code here
  const total = omr.right + omr.wrong + omr.skip;
  if (total !== 100) {
    return 'Invalid';
  }
  const result = omr.right * 1 - omr.wrong * 0.5 + omr.skip * 0;
  return Math.round(result);
}
let object = {
  right: 50,
  wrong: 10,
  skip: 40,
};
console.log(finalScore(object));
