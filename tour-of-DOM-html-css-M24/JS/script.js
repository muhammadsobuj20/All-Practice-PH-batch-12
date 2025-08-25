// console.log('connected');
// console.log(document);

 console.log('Hello Java World');
   const student ={
    name:'abul mia',
    id:232,
    study:function(subject){
   console.log('studing subject', subject);
    }
   }
//documents
const liCollection=document.getElementsByTagName('li')
console.log(liCollection);
for(const li of liCollection){
    console.log(li.innerText);
}

const heading=document.getElementsByTagName('h1');
console.log(heading);
for(const head of heading){
    console.log(head.innerText);
}

const paraItem=document.getElementsByTagName('p')
console.log(paraItem);
for(const element of paraItem){
    console.log(element);
    console.log(element.innerText);
}

//!getElementByID 
const idSelector=document.getElementById('brand')
console.log(idSelector)


//!getElementByClassName
const alf=document.getElementById('alfa')
console.log(alf);

const paraCollections=document.getElementsByClassName('para')
console.log(paraCollections);
for(const para of paraCollections){
    console.log(para);
para.innerText='lorem a khali unkhno nbr'
console.log(para);
}

//!akadik select korar jonno
const paraCollection2=document.querySelectorAll('section p')
console.log(paraCollection2);
for(const para2 of paraCollection2){
    console.log(para2.innerText);
}

const sobjiAll=document.querySelectorAll('.vegetable #sobji li')
console.log(sobjiAll);
for(const all of sobjiAll){
    console.log(all.innerText);

}


const firstElementSelect=document.querySelector('#sobji li')
console.log(firstElementSelect);
// for(const firstEle of firstElementSelect){ //for of kaj kore
//     console.log(firstEle.innerText);
// }


// const sections=document.getElementsByTagName('section')
// console.log(sections);
// for(const section of sections){
//     console.log(section);
// }


//!style korar system
const sections2=document.querySelectorAll('section')
// console.log(sections2);
// for(const section of sections2){
//     console.log(section);

    // section.style.backgroundColor= 'lightgreen'
    // section.style.padding='20px'
    // section.style.fontSize='50px'
    // section.style.marginTop='60px'
    // section.style.borderRadius='5%'

// }

//!classList.add() diye style kora (dynamic style)

for(const section of sections2){
    section.classList.add('section-card')

}

const sob=document.getElementById('sobji')

    console.log(sob);

