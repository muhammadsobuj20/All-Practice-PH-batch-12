const price = 7000;
const age = 20;

if (age <= 12) {
  console.log("you are free for food");

}

else if (age >= 62) {
  // discount 62%
  const discount = (price * 62) / 100;
  const payAmount = price - discount;
  console.log(payAmount);

} 

else if (age >= 50) {
  // discount 45%
  const discount = (price * 45) / 100;
  const payAmount = price - discount;
  console.log(payAmount);

} 

else if (age >= 38) {
  // discount 32%
  const discount = (price * 32) / 100;
  const payAmount = price - discount;
  console.log(payAmount); 

}


else if (age <= 22 ){
    // discount 80%
    const discount = price * 80 /100;
    const payAmount = price - discount ;
    console.log(payAmount);
}
 
else{
  console.log(price);
}
