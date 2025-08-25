function tenTimes(number) {
  const Result = number * 10;
  return Result;
}
const tenTime = tenTimes(9); //variable declare kore
// tenTimes(6);
// console.log('total is ',tenTime);

function cutHalf(number) {
  const half = number / 2;
  return half;
}

// console.log(cutHalf(89)); //direct

function add(price1, price2) {
  const total = price1 + price2;
  console.log(price1, price2, "total is");
  return total;
}
// console.log(add(56,67));

function add2(price3, price4) {
  const bill2 = price3 + price4;
  console.log(price3, price4, "bill is");
  return bill2;
}

const Result = add2(20, 30);
console.log(Result);
console.log(add2(77, 40));

// function add2 (price3,price4){
//     const bill2=price3+price4;
//     return bill2;
// }

// console.log(add2(99,3));

function doMath(num1, num2) {
  const sum = num1 + num2;
  const diff = num1 - num2;
  const multiply = num1 * diff;
  const Result = multiply / 2;
  return Result;
}

console.log("the result is: ", doMath(99, 45));

//!even number conditional number if & else diye
function isEven(numbers) {
  if (numbers % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
// console.log(isEven(23));
// console.log(isEven(20));




//!odd number conditional number if & else diye
function isOdd(numbers){
    if(numbers%2===1){
        return true;
    }

    // else{
    //     return false;
    // }

    return false;   //eivabeo o kaj koore
}

console.log(isOdd(59));
console.log(isOdd(60));