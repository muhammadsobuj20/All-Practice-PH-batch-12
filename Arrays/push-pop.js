//!----------PUHS-----add kore last e  -------pop------out kore last thke-----

let numbers = [12, 34, 67, 89, 65, 43, 56, 80, 67, 32, 44];
console.log(numbers);
numbers.push(333);
numbers.push(456);
numbers.push(444, 445, 446, 447);
console.log(numbers);
numbers.pop();
console.log(numbers);

let names = ["sakib", "rakib", "takib", "makib", "khakib", "wakib"];
console.log(names);
names.push("maruf", "daruf");
console.log(names);
names.pop();
console.log(names);
let out1=names.pop();  ///!pop kore ber kore deya seta abr firiye anar jonno|
console.log(out1);


let myFriends =['mahmudul','tamim','akramul','samiul','sohel','hazrat ali'];
console.log(myFriends);
myFriends.shift();
console.log(myFriends);
myFriends.unshift('jamrul islam');
console.log(myFriends);