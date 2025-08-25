function ticketParses(quantity){
    if(quantity <=100){
        const totalPrice=quantity*100;
        return totalPrice
    }
    if (quantity <=200){
        const totalPrice=quantity*90;
        return totalPrice
    }
     
    else{
        const totalPrice=quantity*70;
        return totalPrice;
    }
}

const totalCost=ticketParses(200);
// console.log(totalCost);


