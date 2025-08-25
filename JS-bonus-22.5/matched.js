const numbers = [12, 45, 12, 78, 90, 14];
let num = [];
for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  // console.log(num);
}

const products = [
  { name: "walton mobile ", price: 12500, made: "bangladesh" },
  { name: "walton mobile phone laptop", price: 12500, made: "bangladesh" },
  {
    name: "walton mobile phOne sob kisu mile",
    price: 12500,
    made: "bangladesh",
  },
  { name: "walton kie  mobile phone Lapatop", price: 12500, made: "bangladesh" },
  { name: "walton mobile pHone", price: 12500, made: "bangladesh" },
  {
    name: "walton mobile phone na mille kisu korar nai",
    price: 12500,
    made: "bangladesh",
  },
];

function matchedProduct(products, search) {
  const matched = [];
  for (const product of products) {
    // console.log(product.name);
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      matched.push(product);
    }
  }
  return matched;
}

const result = matchedProduct(products, "phone");
// console.log(result);




