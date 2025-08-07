// BMI CALCULETOR

let weight = 25.5;
let height = 1.75;
let BMI = (weight / height * height);


if ( BMI < 18.5){
    console.log("Unerweight");

}
else if(BMI  >= 18.5 && BMI <= 24.9){
    console.log("Your Weight Is Normal")
}
else if(BMI  >= 24.9 && BMI <= 29.9){
    console.log("You are Overweight")
}



else{
    console.log("Otherwise, you are obese.")
}