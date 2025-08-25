//**Problem - 1(basic math)
//*তোমাকে cubeNumber() নামে একটা function দেওয়া হয়েছে। functionটা একটা positive input নাম্বার নিবে।

function cubeNumber(number) {
  if (typeof number !== "number") {
    return "Error: Invalid this number";
  }

  const cube = number ** 3;
  return cube;
}
// console.log(cubeNumber(5));

/***
 ----------------Problem - 2-----------
          তোমাকে একটা function দেওয়া হবে called “matchFinder()” যা ইনপুট হিসেবে দুইটা string নিবে। 

  */

function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "Invalid Number";
  }
  //     if(string1||string2){
  //         return 'Invalid Number!'
  //     }
  if (string1.includes(string2)) {
    return true;
  } else {
    return false;
  }
}

// console.log(matchFinder("John Doe", "ohn"));
// console.log(matchFinder("JavaScript", 9));

/*Problem - 3
তোমাকে একটা ফাংশন লিখতে হবে যার নাম হবে sortMaker()। এই ফাংশনের parameter হবে একটি array এবং এই array তে সবসময় দুইটি উপাদান থাকবে।
*/
function sortMaker(arr) {
  //   let result=[];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      return "invalid number";
    }
  }

  //  if (typeof arr!== "arr" || typeof arr!== "arr") {
  //   return "Not a Number";
  // }

   if(arr.length===2 && arr[0]===arr[1]){ 
        return 'equal'
    }

     if(arr.length===2 && arr[0] >= 0 && arr[1]>=arr[0]){ 
        return arr.sort((a,b) => b-a)
    }
    return arr
}

const arr = [2, 65];
// console.log(sortMaker(arr));


/**
 * Problem - 4
* তোমাকে একটা function দেওয়া হবে called “findAddress()” যা ইনপুট হিসেবে একটা object  
* নিবে। Object এর তিনটি property থাকবে।
 */

function findAddress(obj) {
  let street,house,society;
  if(obj.street){
    street=obj.street;
  }else{
    street='__';
  }
  if(obj.house){
   house=obj.house;
  }else{
    house='__';
  }
  if(obj.society){
    society=obj.society;
  }else{
   society='__';
  }
  return street + ',' + house + ','+society;
}


// const result={street: 10, house: '15A' ,society: 'Earth Perfect'};
// const result={street: 10,society: 'Earth Perfect'};
const result={street: 10};
// console.log(findAddress(result));



// for (var i = 0; i < 5; i++) {
//  	 setTimeout(function () {
//  	console.log(i);
//   }, 100);
// }

console.log(Math.sqrt(3));