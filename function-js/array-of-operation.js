

//!array of operation
  function sumOfNumbers(numbers){
    let sum=0;
    for(const number of numbers){
        console.log(number);
        sum=sum+number;
    }
    return sum;
  }


  const numbs= [23,45,67,78,90];
const sum= sumOfNumbers(numbs);
console.log(sum);
  

function evenNumOnly(numbers){
  const evens=[];
  let evenSum =0;
  for(const number of numbers){
    if(number%2===0){
      console.log('even number is : ',number);
      evenSum=evenSum+evens;
    evens.push(number);
    }
  }
  return evens;
}
const nums=[23,45,66,2,89,90,44];
const even=evenNumOnly(nums)
console.log(even);