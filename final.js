/*function signature/sample */
function newPrice(currentPrice, discount) {
  // You have to write your code here

  if (
    typeof currentPrice !== 'number' ||
    typeof discount !== 'number' ||
    discount < 0 ||
    discount > 100
  ) {
    return 'Invalid';
  }
  const discountAmmount = (currentPrice * discount) / 100;
  const finalPrice = currentPrice - discountAmmount;
  return finalPrice.toFixed(3);
}

/*function signature/sample */
function validOtp(otp) {
  // You have to write your code here
  if (typeof otp !== 'string') {
    return 'Invalid';
  }
  let isValid = false;
  let length = otp.length;
  if (length === 8 && otp.startsWith('ph-')) {
    isValid = true;
  }
  return isValid;
}

function finalScore(omr) {
  //write your code here
  const total = omr.right + omr.wrong + omr.skip;
  if (total !== 100) {
    return 'Invalid';
  }
  const result = omr.right * 1 - omr.wrong * 0.5 + omr.skip * 0;
  return Math.round(result);
}

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
  } else if (Yes < No) {
    valid = false;
  } else {
    valid = 'equal';
  }
  return valid;
}

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
