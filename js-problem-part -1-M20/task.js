//!----Task-1:---Write a function to convert temperature from Celsius to Fahrenheit.

function temperature(Celsius) {
  const cels = Celsius * 33.8;
  return cels;
}

// console.log(temperature(4), 'fahrenheit.');

/**
 *
Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.
sample-input: numbers = [5,6,11,12,98, 5]
find: 5
output: 2
sample-input:
numbers = [5,6,11,12,98, 5]
find: 25
output: 
 * 
 * 
*/

function getMinNum(numbers, targetNum) {
  let min = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === targetNum) {
      min++;
    }
  }
  return min;
}

const numbers = [5, 6, 11, 12, 98, 5];
const find = 5;
const minNumber = getMinNum(numbers, find);
// console.log(minNumber);

function getMaxNum(numbers, targetNum) {
  let max = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === targetNum) {
      max++;
    }
  }
  return max;
}

const maxNumber = [5, 6, 11, 12, 98, 5];
const findMax = 25;
const output = getMaxNum(maxNumber, findMax);
// console.log(output);

/**
 * Task-3:
Write a function to count the number of vowels in a string.
 * 
 */

function countVowels(number) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < number.length; i++) {
    if (vowels.includes(number[i])) {
      count++;
    }
  }
  return count;
}

const sentence = "rehabu hydryhoiy7yfdsrebgiuopoou";
const result = countVowels(sentence);
// console.log(result);

/**
 * Task-4:
 * Write a function to find the longest word in a given string.
sample-input: I am learning Programming to become a programmer
sample-output: Programming
 */

function maxStr(string) {
  const splitStr = string.split(" ");
  let word = " ";
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i].length > word.length) {
      word = splitStr[i];
    }
  }
  return word;
}

const maxSentence = " I am learning Programming to become a programmerHero";
const result2 = maxStr(maxSentence);
// console.log(result2);



/**
 * Task-5:
 * Generate a random number between 10 to 20.
 */

function randomNumber(randMin,randMax){
return Math.floor(Math.random() * (randMin-randMax+1))+randMin;
}

const rand=randomNumber(10,20);
console.log(rand);


//!eta normal system
const randMin=10;
const randMax=20;
let randomNumber2=Math.floor(Math.random()*(randMin-randMax+1))+randMin;
console.log(randomNumber2);