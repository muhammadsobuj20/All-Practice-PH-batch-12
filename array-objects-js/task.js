//----------TASk 01

const reversed = [];
const colors = ["red", "blue", "green", "yellow", "orange"];
// colors.reverse()
// console.log();

for (let i = 0; i < colors.length; i++) {
  reversed.unshift(colors[i]);
  //   console.log(colors[i])
}
// console.log(reversed);

for (const color of colors) {
  reversed.unshift();
  // console.log(color);
}
// console.log(reversed);



// !---------------TASK---2------------
const numbers = [12, 98, 5, 41, 23, 78, 46];
// const even_numbers=[]
for (let i = 0; i < numbers.length; i++) {
  // console.log(numbers);
  if (i % 2 === 0) {
    // even_numbers.push(numbers)
    // console.log(numbers[i]);
  }
}



// !---------------TASK---3------------

var numbers2 = ["Tom", "Tim", "Tin", "Tik"];
var results = "";
for (var num of numbers2) {
  // console.log(num);
  // numbers2.concat()
  results += num; //sob gulo jog kora hoise
}

// console.log(results);



// !---------------TASK---4------------
const statement = "I am a hard working person";
const reversed2 = "";

// console.log(statement);



// !---------------TASK---5------------

const numbers3 = [1, 2, 3, 4, 5];
// console.log(numbers3);
const comp_numbers = [...numbers3];
// comp_numbers=[...numbers3]
comp_numbers[0] = 99;
// console.log(comp_numbers);



// !---------------TASK---6------------
const students = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 },
];

console.log(students);

for (const sdt of students) {
  console.log(sdt.name, "scored", sdt.marks);
  // sdt.name,sdt.marks=students;
} 


//!-----------TASK---------7
const exam_marks = [
  [1, 2],
  [3, 4],
  [5, 6],
];

exam_marks[1][0] = 99;
console.log(exam_marks);
