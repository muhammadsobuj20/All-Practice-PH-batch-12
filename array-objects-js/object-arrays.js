//objects+Arrays
const numbers=[34,45,65,32,55,6,2]; //ei vabe objects declier kora hoy
const players=[{},{},{}];

const employees=[
    {name:'Tamim',designation: 'Content Writer',salary:30000, joienig_date:'12-3-2014' },
    {name: 'Sakin',designation:'Digital marketer',salary:32000, joiening_date: '14-4-2011'},
    {name:'Naeem Khan',designation:'Social marketer',salary:28000, joiening_date:'23-10-2020'},
]
// console.log(employees);
// console.log(employees[0]); // 0index diye 1st ta select kora holo

// console.log(employees[1]);

// console.log(employees[2].joiening_date);
// console.log(employees[1].designation);
// console.log(employees[0].salary);

employees[1].salary=35000; //change korar rule
// console.log(employees[1]);


//for of loop 
for (const emp of employees){
    console.log(emp.name, ':', emp.salary, ':', emp.designation);
}