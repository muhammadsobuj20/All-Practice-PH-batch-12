//!-------------Task--01--------------
// Take four parameters. Multiply the four numbers and then return the result

function multiply(a, b, c, d) {
  const multi = a * b * c * d;
  return multi;
}
// console.log(multiply(3,4,4,5));

//!-------------Task--02--------------
//Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function evenNumber(numbers) {
  if (numbers % 2 === 0 && numbers % 2 === 1) {
    //   const multi= numbers *2
    const multi = numbers / 2;
    console.log(multi);
    return multi;
  } else {
    //   const odd=numbers/2
    const odd = numbers * 2;
    console.log(odd);
    return odd;
  }
}

// console.log('Even number',evenNumber(32));
// console.log('Odd number',evenNumber(9));

//!-------------Task--03--------------
//Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function getAvg(average) {
  let sum = 0;
  for (let i = 0; i < average.length; i++) {
    sum += average[i];
  }
  return sum / average.length;
}

const average = [23, 56, 77, 88, 44, 90];
const result = getAvg(average);
// console.log(result);

//!-------------Task--04--------------
//Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero (binaryStr){
    let count=0;
    for(let i = 0; i < binaryStr.length; i++){
        if(binaryStr[i]==='0'){
           count++;
           console.log('Count of (0) ' ,count);
        }
    }
    return count;
}

const binaryStr= '110001000010'; //string likhte hobe
// console.log('total: ',count_zero(binaryStr));



//!-------------Task--05--------------
//Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
function odd_even(numbers){
    if(numbers%2===0){
    return 'even'
 }
 
  return 'odd';

}

// console.log(odd_even(46));
console.log(odd_even(45));