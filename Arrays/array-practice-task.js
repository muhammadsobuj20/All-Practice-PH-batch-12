//!----------TASk-1-------
let fruites = ["apple", "orange", "pinapple", "jackfruits", "watermelon"];
console.log(fruites);
fruites[3];
console.log(fruites);
fruites[2] = "jambura"; //!VALUE CHANGE KORAR JONNO
console.log(fruites);

//!----------TASk-2-------
let destination = ["Rajshahi", "Sylhet", "CoxBazar"];
destination.push("Bandorban");
destination.push("Khagraspri", "Bisanakandi");
console.log(destination);
destination.pop();
console.log(destination);

//!----------TASk-3-------
let books = ["Bangla", "English", "Js-books", "Chamistry", "Mathmetice"];
console.log(books);
if (books.includes("Js-books")) {
  console.log("js er valo ekta book", books);
} else {
  console.log("book pore jodi moja na tk ferot");
}

//!----------TASk-4-------
const nums = [12, 33, 45, 56, 78];
let names = "jakiya sultana samiya";
const numbers = 600;
let friends = [];
const d = 'ikjsk';

console.log(Array.isArray(nums));
console.log(Array.isArray(names));
console.log(Array.isArray(numbers));
console.log(Array.isArray(friends));
console.log(Array.isArray(d));



//!----------TASk-5-------CONCAT METHOD

const nums1=[1,2];
const nums2=[3,4];
const nums3=[5,6];
 const totalNums=nums1.concat(nums2,nums3);
 console.log(totalNums);



//!----------TASk-5-------SLICE & SPLICE
let fruits = ['Banana','Orange','Apple','Watermelon'];
fruits.splice(1, 0, 'Jambura','Lemon'); //SPLICE KORAR JONNO
console.log(fruits);


//slice
const trees = ['Mango tree','jeckfriuts tree','Apple tree','Bambo tree','Gab tree'];
console.log(trees.slice(3));
console.log(trees);

const myObject = {
 a: 1,
 b: 2,
 c: 3
};

for (let prop in myObject) {
 console.log(myObject[prop]);
}

const x = ""
if(!x.length){
console.log("Hey")
}else{
console.log("Hi")
}

const str = "Hello";
str[0] = "h";
console.log(str);