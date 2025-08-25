


//!  no duplicate name and numbers

function noDuplicateStr(array){
const newArray=[];
for(const item of array){
    if(newArray.includes(item)===false){
        newArray.push(item);
        // console.log(item);
    }
}
return newArray;

}

const noDuplicate=['Rahim', 'Karim','Arif','Rahim','Arif','zabbar','Karim','abul','abul'];
// console.log(noDuplicateStr(noDuplicate));


//!-----------Numeric---------
function noDuplicateNum(number){
    const numbers=[];
    for(const number2 of number){
        if(numbers.includes(number2)===false){
            numbers.push(number2);
            console.log(number2);
        }
        
    }

    return numbers;

}

const noDuplicateNumbs=[12,3,3,11,12,44,5,6,5,5];
console.log(noDuplicateNum(noDuplicateNumbs));