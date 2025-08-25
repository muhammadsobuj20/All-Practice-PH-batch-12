//  <!-- option 2 events  handler -->
function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}

function makeRed() {
  document.body.style.backgroundColor = "red";
}

//  !option 3 events  handle
const btnMakeBlue = document.getElementById("btn-make-blue");
btnMakeBlue.onclick = function makeBlue() {
  //function er name  diye
  document.body.style.backgroundColor = "blue";
};

const btnPurple = document.getElementById("btn-purple");
btnPurple.onclick = function () {
  //function er name chaaara
  document.body.style.backgroundColor = "purple";
};

// !option 4: addEventListener
//!structure
//!document.getElementById().addEventListener('event type' ,handler )
document.getElementById('btn-make-green').addEventListener('click',function makeGreen(){
    console.log(6666666666);
document.body.style.backgroundColor='green'
})
document.getElementById('btn-make-dark').addEventListener('click',function(){
document.body.style.backgroundColor='gray'
document.body.style.color='white'
document.body.style.fontSize='20px'
// document.body.style.border='3px solid black'

})
// document.getElementById('btn-make-dark').addEventListener('mouseout',function(){
// document.body.style.backgroundColor='gray'
// })