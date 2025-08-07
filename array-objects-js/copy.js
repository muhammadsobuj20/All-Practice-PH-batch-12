//copy kora

let price=30;
let comp_price=price;

price=12;
comp_price=30
// console.log(price);
// console.log(comp_price);

const products= [29,56,23,56,80];
const comp_products=products;
products[4]=40
products.push(999);//add kora
// console.log(products);


comp_products.pop() //ber kora
comp_products[2]=50
// console.log(comp_products);


for(const product of products){
    // console.log(product);
}




const numbers=[1,2,3,4,5,6];
console.log(numbers);

const new_numbers=Array.from(numbers);    //!copy korar eta ekta system
new_numbers.push(9);
// console.log(new_numbers);

    //!copy korar eta ekta system
const new_numbers1=[].concat(numbers); 
// console.log(new_numbers1.reverse());

    //!copy korar eta ekta system etai easy 
const new_numbers2=[...numbers];
console.log(new_numbers2);