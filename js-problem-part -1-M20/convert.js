//*12 inch=1feet

function inchToFeet(feet){
const inch= feet/ 12;
return inch;
}
const sobujHeight=inchToFeet(63)
// console.log(sobujHeight);

function inchToFeet2 (inch){
    const feetFraction= inch/12;
    const feetNumber=parseInt(feetFraction);
    const inRemaining=inch%12;
    const result=feetNumber+ ' feet '+ inRemaining + ' inch only';
    return result
}

const sobujHeight2=inchToFeet2(63)
// console.log(sobujHeight2);


function kiloOfMile(kilo){
    const mile= kilo * 0.6213711922;
    // mile.toFixed(2)
    return mile;
}
console.log(kiloOfMile(4));

function mileOfKilo(mile){
    const kilo=mile*1.609344;
   const result= kilo + ' mile'
    return result;
}

console.log(mileOfKilo(6));

function kgToGram(kg){
    const gram =kg * 1000;
    return gram;
}
console.log(kgToGram(5.5),'Grams');

function gramToKg(gram){
    const kg=gram / 1000
    return kg;
}

console.log(gramToKg(2004),'kg');

function dollarToPound(dollar){
    const pound=dollar*0.74;
    return pound;
}
console.log(dollarToPound(56),'Pound');//pound ber korlam