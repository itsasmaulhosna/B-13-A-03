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

const otp = 'ph-10985';
const result = validOtp(otp);
console.log(result);
