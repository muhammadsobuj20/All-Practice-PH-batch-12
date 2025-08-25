function vaatkhabo() {
  console.log("hat duye aso");
  console.log("hat duye aso");
  console.log("hat duye aso");
}
vaatkhabo();

console.log("--------------------");

function square(number) {
  console.log("gunkora", number);
  const borgo = number * number;
  console.log("duiti sonkhkhar gun fall", borgo);
}

square(5);
square(22);
square(12);
square(23);
console.log("----------------------");

function add(num1, num2) {
  console.log("duti sonkhar jogfall", num1, num2);
  const total = num1 + num2;
  console.log(total);
  return num1, num2;
}
add(1, 2);
add(34, 56);
console.log("--------------------------");

function addAll(a, b, c, d, e, f) {
  console.log("sob gulo jog koro = ", a, b, c, d, e, f);
  console.log("--------------------------");

  const sum = a + b + c + d + e + f;
  console.log("jogfall = ", sum);
}
addAll(5, 3, 6, 7, 8, 9, 8);

addAll(44, 3, 6, 7, 8, 9, 8);

addAll(5, 34, 6, 7, 8, 9, 8);

addAll(5, 3, 64, 7, 8, 9, 8);

addAll(5, 3, 6, 74, 8, 9, 8);
