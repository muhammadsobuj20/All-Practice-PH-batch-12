// for(let i = 0; i <=10; i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }

// for (let i = 0; i < 90; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

for (i = 0; i < 100; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    console.log(i);
  }
}

for (i = 0; i < 200; i++) {
  if (i % 3 === 0 && i % 7 === 0) {
    console.log(i);
  }
}
console.log("kivabe ki korbi tui janos", i);

let t = 0;
for (let i = 0; i < 30; i++) {
  if (i % 3 === 0) {
    console.log(i);
    t = t + i;
    console.log("jog kor", i);
  }
}
