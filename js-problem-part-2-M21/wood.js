
//!cft ber korar niyom (cft=cube feet)
function woodQuantity(chair,table,bed){
    const perChairWood=3;
    const perTableWood=9;
    const perBedWood=50;

    const totalChairWood=chair*perChairWood;
    const totalTableWood=table*perTableWood;
    const totalBedWood=bed*perBedWood;
    const totalWood=totalChairWood+totalTableWood+totalBedWood;
    return totalWood;
}
console.log(woodQuantity(2,0,0));


//!---------SHIRT-----
function shoping (shirt,tshirt,underware,pent,shoe){
    const perShirtPrice=350;
    const perTshirtPrice=300;
    const perUnderWarePrice=250;
    const perPentPrice=750;
    const perShoePrice=350;

const totalShirtPrice=shirt*perShirtPrice;
const totalTshirtPrice=tshirt*perTshirtPrice;
const totalUnderWarePrice=underware*perUnderWarePrice;
const totalPentPrice=pent*perPentPrice;
const totalShoePrice=shoe*perShoePrice;

const totalAmount=totalShirtPrice+totalTshirtPrice+totalUnderWarePrice+totalPentPrice+totalShoePrice;

return totalAmount;
}
 
console.log(shoping(1,4,3,2,2));