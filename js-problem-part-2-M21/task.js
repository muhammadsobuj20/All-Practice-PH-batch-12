/**
 * 
 *Task -1:
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
 */

function heights(number) {
  let min = number[0];
  for (const num of number) {
    if (num < min) min = num;
  }
  return min;
}

const height = [167, 190, 120, 165, 137];
// console.log(heights(height));

//!Task -2:
//Find the friend with the smallest name.

function findSmallName(finds) {
  let min2 = finds[0];
  for (const find of finds) {
    // console.log(find);
    if (find.length < min2.length) {
      min2 = find;
      // console.log(find);
    }
  }
  return min2;
  // let min2 =finds[0];
  // for (let i = 0; i < finds.length; i++) {

  //   if (finds[i].length < min2.length) {
  //     min2 = finds[i];
  //   }
  // }
  // return min2;
}

const minString = ["rahim", "robin", "rafi", "ron", "rashed"];
const result = findSmallName(minString);
// console.log(result);

/***
 * 
 * Task-3:
Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
*/
function calculateElectronicsBudget(laptop, tablet, mobile) {
  const laptopPrice = 35000;
  const tabletPrice = 15000;
  const mobilePrice = 20000;
  const totalLaptopPrice = laptop * laptopPrice;
  const totalTabletPrice = tablet * tabletPrice;
  const totalMobilePrice = mobile * mobilePrice;
  const total = totalLaptopPrice + totalTabletPrice + totalMobilePrice;
  return total;
}

const totalCost = calculateElectronicsBudget(2, 1, 1);
// console.log(totalCost,'tk only');

/**
 * Task-4:
You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.
Input
    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];
 */

const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(products) {
  if (typeof Array.isArray === phones || phones.length === "0") {
    return 0;
  }
  let totalSum = 0;
  for (let i = 0; i < phones.length; i++) {
    if (typeof phones[i].price === "number") totalSum += phones[i].price;
  }
  return (totalSum / phones.length).toFixed(2);
}
const averagePrice = findAveragePhonePrice(phones);
console.log(averagePrice);

/**
 * 
 * Task -5: (Hard)
For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];
 * 
 */


function employeeCurrentSalary(employee) {
  let total = 0;
  for (const emp of employee) {
    const yearlySalary =
      emp.starting + emp.increment * emp.experience;
    const monthlySalary = yearlySalary / 12;
    total = total + monthlySalary;
  }
  return total.toFixed(2);
}

const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

const employee = employeeCurrentSalary(employees);
console.log(employee);
