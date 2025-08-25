function multiply(num1, num2){
// if(typeof num1 !=='number'){
//     return 'please provide a number'
// }
// if(typeof num2 !== 'number'){
//     return 'please provide a number'
// }

if(typeof num1 !=='number' || typeof num2!=='number'){
    return 'please provide a number'
}

const mult=num1*num2
return mult
}
console.log(multiply(3,8));

function fullName(first,second){

    if(typeof first !== 'string' || typeof second !== 'string'){
        return 'please provide string'
    }
return first+ ' '+second
}

const result=fullName('abul',9)
console.log(result);



function getPrice(product){              //!bujhte pari nai
    if(typeof product!== 'object'){
        return 'please provide a objects'
    }
const price=product.name
return price
}

const products=getPrice({name:'alu' , price:40})
console.log(products);
const price=getPrice(products)
// console.log(price);


function getPrice2(number){
    if(Array.isArray(number)===false){
        return 'plz provide a array'
    }

    const second=number[1]
    return second
}
 
const second=getPrice2([1,34,66])
console.log(second);