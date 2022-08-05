//Program 1- Write a program to calculate the average of 5 numbers.
//Program 2- Write a program to calculate the sum of 5 numbers.
let a=10,b=20,c=30,d=40,e=50;
let sum=a+b+c+d+e;
console.log("The sum is:"+sum);
let average=((sum)/5);
console.log("The average is:"+average);

//Program 3- Write a program that accepts two strings
// (firstName and lastName) and print final
//string on the console.
function name(FN, LN){
    return FN+LN;
}
console.log(name("Deepak","Prabhu"));





//Program 4- Write a function that accepts interest, principle, and tenure 
//and calculates EMI.
function si(interest,principle,tenure){
    let Emi=(principle*tenure*interest)/100;
    return Emi;
}
console.log(si(5,10000,3));


//Program 5- Print even numbers from 0-100
for(let i=1;i<=100;i++){
    if(i%2==0){
        console.log("Even Numbers between 0-100 are: "+i);
    }
}

//Program 6- Print odd numbers from 0-100
for(let j=1;j<=100;j++){
    if (j%2!=-0) {
        console.log("Odd Numbers between 0-100 are: "+j);
    }
}

//Program 7- Create an array of length 5 and store below numbers
//1,11,111,222,555 . Write a program to calculate the average of numbers.

let arr=[1,11,111,222,555];
let x=0;
for(let i=0;i<arr.length;i++){
        x=x+arr[i];
}
console.log("Added values are: "+x);
console.log("Average of numbers are: "+x/arr.length);

//Program 8- Write a program that creates the below Object.
// Object name - Student
// Property
// Name
// College Name
// Location
// PinCode
// Teachers details should be teacherName, teacherPhone, teacherSubjects
// Print Student name, teacherName on console.

let Student={
    Name:"Deepak Prabhu",
    College_Name:"Thiagarajar School Of Management",
    Location: "Madurai",
    Pincode: "600023",
    TeacherDetails:{
        Teachername:"Sudhakar",
        TeacherPhone:"9448652365",
        TeacherSubjects:"Java"
    }
}
console.log("Student_Name");
console.log(Student.Name);
console.log("Teacher_Name");
console.log(Student.TeacherDetails.Teachername);
