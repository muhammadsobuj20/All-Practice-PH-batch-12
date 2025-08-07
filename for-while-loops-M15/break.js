for (let i = 0; i < 40; i++) {
  console.log(i);
  if (i >= 20) {
    break;
  }
}
console.log("jubon theme gese", i);

let n = 56;
while (n > 30) {
  console.log(n);
  n--;
  if (n < 30) {
    break;
  }
}
console.log("jibon ulta dike cole", n);

for (let i = 0; i < 20; i++) {
//   console.log(i);
  if (i % 4 !== 3) {
    continue;
  }
  console.log('kichuna', i)
}
