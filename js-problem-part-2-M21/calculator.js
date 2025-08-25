function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calculators(a, b, operation) {
  if (operation === "add") {
    const result = add(a, b);
    return result;
  }
  if (operation === "subtract") {
    const result = subtract(a, b);
    return result;
  }

  if (operation === "multiply") {
    return multiply(a, b);
  }

  if (operation === "divide") {
    return divide(a, b);
  } else {
    return "only 'add' 'subtract' 'multiply' and 'divide'";
  }
}

const result = calculators(7, 7, "divide");
console.log(result);
