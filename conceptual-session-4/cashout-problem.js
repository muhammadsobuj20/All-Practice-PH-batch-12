//!cash out kora

function cashOut(money) {
  // You have to writ
  if(money < 0 || typeof money !='number'){
    return 'Invalid'
  }
  let charge = money * (1.75 / 100);
  let fixedCharge = charge.toFixed(4);
  let finalCharge = parseFloat(fixedCharge);
  return finalCharge;
}
const total = cashOut(100);
// console.log(total);





