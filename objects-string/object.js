


const departments = {
   subjects:'Zoology',
   class: 14,
   sesson:15/16,
   roll:4563,
   Events:{
    annualPicnic:'Bandarbon',
    college: 'samgskiritik progrram',
   },

     teacher:'Sd rubel Khan',
     classRoom:5,
}

console.log(departments)



//!change the object ----proerty & value-----

let person={
  names: 'Akash Uddin',
  age:45,
  district:'Rajshahi',
  proffesion:'Privet job',
  salary: '45000tk',
'fav-place':['shylhet','bisana kandi','bandoeban'],

}

console.log(person)

console.log(person.salary)///select korar jonno
console.log(person['age'])//select korar jonno

///!----------change kora--------
const homeDist=  'age' ;
person [homeDist]= 89;
console.log(homeDist)




const computer={
    barand:'Dell',
    price: 50000,
    processor: 'intel',
    ram: '12gb',
    hdd:'456gb'
}

const keys=Object.keys(computer)
console.log(keys)

const values= Object.values(computer)
console.log(values)