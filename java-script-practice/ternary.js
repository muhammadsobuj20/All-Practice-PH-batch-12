/** 
 * 
 * TERNARY----------------> three parts
 * 
*/


// const age =60;
// if (age >=18){
//     console.log("you can voter");
// }
// else {
//     console.log("tumi vote dite parbena");
// }

// !normal ternary
// age >= 18 ? console.log('vote dio') : console.log('gumiye thako')


let price = 500;
// const isLeader = true;
const isLeader = false;

// if(isLeader === true){
//     price = 0;
// }

// else{
//     price = price + 100;
// }
// console.log(price)


// !price = isLeader === true ? 0 : price + 100;
// console.log(price)

// if(isLeader === true){
//     if(price > 1000){
//         price = price /2;
//     }
//     else{
//         price=0;
//     }
// }
// else{
//     price = price + 100;
// }

// console.log(price)


price = isLeader === true ? price > 100 ? price /2 : 0 : price + 1000; 
 console.log(price)