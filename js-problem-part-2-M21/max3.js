const jim = 77;
const kim = 760;
const tim = 660;

if (jim > kim && jim > tim) {
  console.log("tomar jonno suvo kamon");
} else if (kim > jim && kim > tim) {
  console.log("samne valo korar try kor");
} else {
  console.log("tore r ki bolbo");
}

function getMax(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return "khubi valo korso", num1;
  } else if (num2 > num1 && num2 > num3) {
    return "tumi ja korla valo korla", num2;
  } else {
    return "tumi j fatay felba kolponaw korte parini",num3;
  }


}

console.log(getMax(344, 49,34));

const maxMath=Math.max(233,3345,366,743,767);
console.log('max is :',maxMath);