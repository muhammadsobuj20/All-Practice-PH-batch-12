
//!string

function evenSizeStr(str){
    // console.log(str);
    const size=str.length;
    console.log(str,size);
if(size%2===0){
    console.log("even size");
    return true;

}
else{
    console.log("odd size");
    return false;

}

}

evenSizeStr('Dhaka')
evenSizeStr('Chakarw')
// console.log(evenSizeStr());



//!conditional Boolean
function doubleOrTriple(number,doDouble){
    if(doDouble===true){
        const result=number*2;
        return result;
    }
    else{
        const result=number*3
        return result;
    }
}

console.log('Double number',doubleOrTriple(5,true));
console.log('Triple number',doubleOrTriple( 5,false));