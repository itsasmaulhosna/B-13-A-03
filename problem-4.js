/*function signature/sample */
function gonoVote(array) {
  //write your code here
  if (!Array.isArray(array)) {
    return 'Invalid';
  }
  let valid = false;
  let Yes = 0;
  let No = 0;
  for (let item of array) {
    if (item === 'ha') {
      Yes++;
    } else if (item === 'na') {
      No++;
    }
  }
  if (Yes > No) {
    valid = true;
  } else if (Yes == No) {
    valid = 'equal';
  } else {
    valid = false;
  }
  return valid;
}
const vote = gonoVote(['ha', 'na', 'ha', 'na', 'ha']);
console.log(vote);
