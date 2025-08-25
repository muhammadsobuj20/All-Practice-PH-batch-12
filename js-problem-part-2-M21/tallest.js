const heights = [45, 67, 86, 43, 56, 76, 78];
function getMax(number) {
  let max = number[0];
  for (const num of number) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

const max = getMax(heights);
console.log(max);



const heights2 = [45, 67, 86, 4, 43, 56, 76, 78];

function getMin(number){
    let min =number[0];
    for(const num of number){
        if(num<min){
            min=num;
        }
    }
    return min
}

console.log(getMin(heights2));