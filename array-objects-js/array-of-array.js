
//Array of Array

const numbers=[1,2,3,4,5,6,7];
const tournament_runs=[[],[],[],[]] //array er vitor array lekhar Rules
const exam_marks = [
    [23,44,56,78,67],
    [34,65,45,98,33],
    [76,83,58,33,55],
    [98,53,67,53,63],
    [34,21,45,64,89],

];
// console.log(exam_marks[2]);
// console.log(exam_marks[1][3]);

const first_class_marks=exam_marks[0];
// console.log(exam_marks[0][1]);

exam_marks[0][4]=167
// console.log(exam_marks); //change kora


// exam_marks[2].push(99)

exam_marks[3].pop()
// console.log(exam_marks);

for(const exam of exam_marks){
    console.log(exam_marks[0][2]);
}