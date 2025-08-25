

const products=[
    {name:'Shampoo',price: 300, quantity:1},
    {name:'Parachute oil',price: 400, quantity:14},
    {name:'Olive oil',price: 330, quantity:1},
    {name:'Toothpaste',price: 200, quantity:3},
]

function cartTotal(products){
let total=0;

for(const product of products){
    const productCost=product.price*product.quantity;
    total=total+productCost;
}
return total
}

const totalCost=cartTotal(products);
console.log('Your total bill is :',totalCost);