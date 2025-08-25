//!----array modde kisu object thakbe-----

const phones = [
  {
    BrandName: "samsung",
    price: 34000,
    camera: "12mp",
    color: "white",
    rama: "8gb",
  },
  {
    BrandName: "xiaomi",
    price: 30000,
    camera: "12mp",
    color: "white",
    rama: "8gb",
  },
  {
    BrandName: "apple",
    price: 90000,
    camera: "12mp",
    color: "white",
    rama: "8gb",
  },
  {
    BrandName: "symphony",
    price: 10000,
    camera: "12mp",
    color: "white",
    rama: "8gb",
  },
  {
    BrandName: "vivo",
    price: 20000,
    camera: "12mp",
    color: "white",
    rama: "8gb",
  },
];

function getCheapest(phones) {
  let cheap = phones["0"];
  for (const phone of phones) {
    if (phone.price < cheap.price) {
      cheap = phone;
    }
  }
  return cheap;
}

console.log(getCheapest(phones));

const products = [
  { name: "Shampoo", price: 300 },
  { name: "Shaban", price: 100 },
  { name: "glesarin", price: 150 },
];
function getShopingTotal(products) {
  let total = 0;
  for (const product of products) {
    total += product.price;
  }
  return total;
}

console.log(getShopingTotal(products));

function cashOut(money) {
  let charge = money * (1.75 / 100);
  let fixedCharge = charge.toFixed(4); //1.7500
  let finalCharge = parseFloat(fixedC harge); //1.75
  return finalCharge;
}

console.log(cashOut(999));
