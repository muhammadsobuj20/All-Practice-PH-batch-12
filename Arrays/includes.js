//!----------INCLUDES---------EITA VARY IMPORTANS--------

let names = ["apple", "orange", "banana", "coconuts", "pinapple", "watermelon"];
console.log(names);
console.log(names.includes("watermelon")); //!kono kisu khuje ber korar jonno includes use kora hoye thake
console.log(names);

if (names.includes("pinapple")) {
  console.log("eta 1ta valo fruites khaile ges hou na", names);
} else {
  console.log("amara ajke fruits khabona ok");
}

const nums = [333, 444, 555, 666, 777, 888, 999, 999.99];
console.log(nums);
if (nums.includes(999.9)) {
  console.log("ei sonkhkha ta onek spaciel", nums);
} else {
  console.log("eita kono sonkhkha holo faltu");
}
