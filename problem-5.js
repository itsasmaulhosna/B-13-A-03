/*function signature/sample */
function analyzeText(str) {
  // You have to write your code here
  if (typeof str !== 'string' || str.trim() === '') {
    return 'Invalid';
  }
  const words = str.split(' ');
  let longwords = '';
  let token;
  for (let word of words) {
    if (word.length > longwords.length) {
      longwords = word;
    }
    token = words.join('').length;
  }
  return {
    longwords: longwords,
    token: token,
  };
}
const text = analyzeText('I am a little honest person');
console.log(text);
