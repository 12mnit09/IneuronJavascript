//Program 1- Write a program to add 2 numbers and print the result on the console
let a=25;
let b=25;
let result=a+b;
console.log(result);

//Program 2- Write a program to subtract 2 numbers and print the result on the console
let c=25,d=100;
let subtractresult=d-c;
console.log(subtractresult);

/*Program 3- Write a program to display student results. If the number is below 50 then print fail
and if the number is above 50 then pass*/

let Studentmark=80;
if (Studentmark<50) {
    console.log("Fail");
} else {
    console.log("Pass");
}

// Program 4- Write a program to display student results.
// If number above 90 then grade A
// If number above 70 and below 90 then grade B
// If number above 50 and below 70 then grade C
// If number below 70 then Fail

let studentsMark=65;

if (studentsMark>90) {
    console.log("Grade is A");
} else if((studentsMark>70)&&(studentsMark<90)) {
    console.log("Grade B");
}
else if((studentsMark>50)&&(studentsMark<70)){
    console.log("Grade C");
}
else{
    console.log("Grade Fail");
}


//Program 5- Write a function that takes 3 numbers as arguments and perform multiplication of
//the numbers and returns the output.

function multiply(a,b,c){
    let mulresult=a*b*c;
    return mulresult;
}
multiply(3,4,5);