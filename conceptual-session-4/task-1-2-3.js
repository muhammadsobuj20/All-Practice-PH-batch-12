/*
 Task 1 :
Create a Function sum which take 2 value and return the sum of 2 number
Create a Function multiply which take 2 value and return the sum of 2 number
Suppose you have 2 numbers a , b print the sum of ( a + b) and ( a x b ) using sum and
multiply function.
 */
function add(a, b) {
  let sum = a + b;
  let multiply = a * b;
  const total = sum + multiply;
  return total;
}

const total = add(4, 5);
// console.log(total);

/*Task 2:
Create a function sumOfArray which takes an array and returns the sum of that array.If the
input is not an array and if any data not a number found in the array , it will return ‘Invalid’
*/

function sumOfArray(array) {
    let sum = 0;
  if (Array.isArray(array) === false) {
    return "Invalid";
  }

  for (const number of array) {
      if (typeof number !== 'number') {
    return "Invalid";
  }
    sum = sum + number;
  }
  return sum;
}

const result = sumOfArray(5);
// console.log(result);

/**
 * Task 3: Develop a way to think about solving problems
Create a function countVowels which take a string as input and returns the total number of
vowels in that string
If the input is not a string return "Invalid"
 */

function countVowels(str){

let count=0;
  if(typeof str !=='string'){
    return 'Invalid'
  }
  //str=str.toLowerCase;
for(let i=0; i<str.length;i++){
if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'){
  count++
}
}
return count
}

const totalVowels =countVowels(["Jhankar miA"] );
// console.log(totalVowels);



function countVowels2(str){
  if(typeof str !=='string'){
    return 'Invalid'
  }
const vowelsStr='aeiouAEIOU'
  let count2=0;
  //str=str.toLowerCase;
for(let i=0; i<str.length;i++){
  if(vowelsStr.includes(str[i])){
    count2++
  }
}
return count2
}

const totalVowels2 =countVowels2("Jhankar miA" );
console.log(totalVowels2);

