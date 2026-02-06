/*function signature/sample */
function newPrice(currentPrice, discount) {
  // You have to write your code here

  if (typeof currentPrice !== 'number' || typeof discount !== 'number') {
    return 'invalid';
  }
  const discountAmmount = (currentPrice * discount) / 100;
  const finalPrice = currentPrice - discountAmmount;
  return finalPrice.toFixed(3);
}

const currentPrice = 500;
const discount = 5;
const result = newPrice(currentPrice, discount);
console.log(result);
