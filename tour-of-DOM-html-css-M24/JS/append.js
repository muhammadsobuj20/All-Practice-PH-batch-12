 // 1. parent node
const mainContainer = document.getElementById("main-container");

//2. create child node
const placesSection = document.createElement("section");

//create h1
const h1 = document.createElement("h1");
h1.innerText = "Place i want visit";
placesSection.appendChild(h1); //section er modde dukano holo

const ul = document.createElement("ul"); 


const li1 = document.createElement("li");
li1.innerText="sundorboor jabo";
 ul.appendChild(li1)                   //ul er modde dukano holo

 const li2 =document.createElement('li')
 li2.innerText='bandar ban jaitam'
 ul.appendChild(li2)

placesSection.appendChild(ul);   /// section er modde dukano holo

//3. append placeSection to the mainContainer
mainContainer.appendChild(placesSection);

// easier to create html
const bookSection=document.createElement('section')
bookSection.innerHTML = `
<h1>Books I need to read</h1>
<ul>
<li>Physics</li>
<li>Chemistry</li>
<li>Math/li>
</ul>

`
h1.style.backgroundColor='green'
h1.style.padding='33px'
mainContainer.appendChild(bookSection)