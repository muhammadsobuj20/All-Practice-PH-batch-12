//!----------problem solving------------- 01

let totalRow = 0;
for (let i = 1; i <= 30; i++) {
  //   console.log(i);
  if (i % 3 === 0 || i % 5 === 0) {
    // let price = 800 + i;
    //  console.log(totalPrice);
    console.log("Row " + i + " - " + "Premium Row" + " => " + "price: 800tk");

    // else if (i % 5 === 0) {
    // console.log("Row " + i + " - " + "Premium Row");} //!short cut koray
  } else {
    console.log("Row " + i + " - " + "Normal Row" + " => " + "price: 500tk");
  }
}

const totalSum = 1;
const seat = [
  { category: "A", value: 800 },
  { category: "B", value: 500 },
 
];

for (const item in seat) {
  if (seat.category === "A") {
    totalSum += seat.value *14;
  } else if (seat.category === "B") {
    totalSum += seat.value *2;
  }

  console.log(totalSum);
}


//!----------problem solving------------- 02

let productDescription =
  "This is our company products Cotton sales new arrival limited edition";
if (productDescription.toLowerCase().includes("cotton")) {
  console.log("Material: Cotton.");
} else if (productDescription.toLowerCase().includes("sales")) {
  console.log("Category: Sale Item.");
} else if (productDescription.toLowerCase().includes("new arrival")) {
  console.log("Status: New Arrival.");
} else if (productDescription.toLowerCase().includes("limited edition")) {
  console.log("Availability: Limited.");
} else {
  console.log("Tag: General");
}

//!----------problem solving------------- 03

const person1 = {
  firstName: "John",
  lastName: "Doe",
  employeeId: 101,
  departmentCode: "HR",
  companyName: "AlphaCorp",
};
// const keys=Object.keys(alphaCorp)
// console.log(keys)

// let lastThreeCha = "";

const lastThreeCh = person1.lastName.slice(0, 3).toLowerCase();
const result =
  lastThreeCh +
  person1.employeeId +
  "@" +
  person1.companyName.toLowerCase() +
  ".com";
console.log(result);

if (person1.firstName.length >= 3) {
  let temPass =
    person1.firstName.slice(1, 4).toLowerCase() + "#" + person1.departmentCode;
  console.log(temPass);
} else {
  //  const lastThreeCha=person1.lastName.slice(0,3).toLowerCase()
  console.log("wrong password");
}

