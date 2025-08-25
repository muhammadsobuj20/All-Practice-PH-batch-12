
//!Odd average number

    function oddAverage(odd){
    const odds=[];
    for(const number of odd){
        if(number%2===1)
        odds.push(number)
    }

    let sum=0
    for(let number of odds){
        sum+=number
        
    }
    const count = odds.length;
    const avg= sum /count;
return avg;
}

const oddAverageNumbers=[12,45,67,23,90,107];
// console.log(oddAverage(oddAverageNumbers));


//!even average number


function evenAverage(even){
const evens=[];
for(const number of even){
    if(number%2===0){
        evens.push(number)
    }
}

let sum=0;
for(let number of evens){
    sum+=number

// const count=evens.length; //?vitor kaj na kora karon ki
// const avg1 =sum/count;
// return avg1;
}
const count=evens.length;
const avg1 =sum/count;

return avg1;

}

const evenAverageNum=[23,50,66,43,64,77,78,100];
console.log(evenAverage(evenAverageNum));