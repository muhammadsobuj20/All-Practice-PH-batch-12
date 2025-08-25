const getMin=[2000,22222,40000,30000,45000];
function getMinNum(numbers){
    let min=numbers[0];
    for(const num of numbers){
        if(num<min){
            min=num;
        }
    }
    return min
}
console.log(getMinNum(getMin));