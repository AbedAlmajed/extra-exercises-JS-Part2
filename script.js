//create function to calculate the year and month and day left from year=90
// function lifeInWeeks(age) {

//   var Year = 90 - age;
//   var month = Year * 12;
//   var week = Year * 52;
//   var day = Year * 365;
//   console.log(
//     "You have " +
//       day +
//       " days, " +
//       week +
//       "weeks, " +
//       "and " +
//       month +
//       " months left."
//   );

// }

// lifeInWeeks(56);

//==========================================================
//Challenge: Create a BMI Calculator
//Your challenge is to create a function that takes weight and height as inputs and gives the calculated BMI value as an output. The output should be rounded to the nearest whole number.
// function bmiCalculator(weight, height) {
//   let result = Math.round(weight / Math.pow(height, 2));
//   if (result < 18.5) {
//     return "Your BMI is " + result + " , so you are underweight";
//   } else if (result >= 18.5 && result < 24.9) {
//     return "Your BMI is " + result + ", so you have a normal weight";
//   } else if (result > 24.9) {
//     return "Your BMI is " + result + ",so you are overweight";
//   }
// }

// var bmi = bmiCalculator(65, 1.8);
// console.log(bmi);

//===============================================
//Building a Love Calculator
// var personOne=prompt("Name Of Person One : ");
// var personTwo=prompt("Name Of Person Two : ");
// var rand=Math.floor((Math.random()*100)+1);
// if (rand >=50) {
//     alert(personOne +" ❤️ " +personTwo +  " with the accuracy equal " + rand + "%" + " so very well");

// }
// else{
//     alert(personOne +" ❤️ " +personTwo +  " with the accuracy equal " + rand + "%" + " so bad" );

// }

//===============================================================================
//Leap Year Challenge Exercise
//This is how to work out whether if a particular year is a leap year:

// A year is a leap year if it is evenly divisible by 4 ;

// except if that year is also evenly divisible by 100;

// unless that year is also evenly divisible by 400.

// e.g. Is the year 2000 a leap year?:

// 2000 ÷ 4 = 500 (Leap)

// 2000 ÷ 100 = 20 (Not Leap)

// 2000 ÷ 400 = 5 (Leap!)

// So the year 2000 is a leap year.

// But the year 2100 is not a leap year because:

// 2100 ÷ 4 = 525 (Leap)

// 2100 ÷ 100 = 21 (Not Leap)

// 2100 ÷ 400 = 5.25 (Not Leap)

//solution:
// function isLeap(year){
// if(year % 4 ===0)
//     {
// if(year%100===0){
// if(year%400===0)
//     {
//         return "the year " +year + " leap";
//     }
//     else{return "the year " +year + " Not Leap"}
// }
// else
// {
//     return "the year " +year + " Not Leap"
// }
//     }
//     else{return "the year " + year + "Not Leap"}

// }

// console.log(isLeap(2000));
// console.log(isLeap(2100));
//============================================================================
//write code th check if the user input inside the array or not

// let arr=["ahmad","mohammed","rami","abedalmajeed"];
// let userInput=prompt("Enter Your Name : ").toLowerCase();
// if(arr.includes(userInput))
//     {
//         alert("Welcome " + userInput + " ❤️");
//     }
//     else{
//         alert("sorry " + userInput + " !");
//     }

//=================================================================================
//way1 :
// let output=[];
// function fizzBuzz(){
// for(let count=1;count<=100;count++)
//     {
//         if(count%3===0 || count%5===0 )
//             {
//                 if(count%3===0 && count%5===0 )
//                     {
//                         output.push("FizzBuzz");
//                         continue;
//                     }
//                 if(count %3 ===0)
//                     {
//                         output.push("Fizz");

//                     }
//                 if(count%5===0)
//                     {
//                         output.push("Buzz");

//                     }

//             }
//             else{
//                 output.push(count);
//             }
//     }
// }
// fizzBuzz();
// console.log(output);

//way 2 :
// let output=[];
// let count=1;
// function fuzzBuzz(){
// if(count%3===0 && count%5 ===0)
//     {
//         output.push("FizzBuzz");
//     }
//     else if(count%3===0)
//         {
//             output.push("Fizz")
//         }
//         else if(count % 5 ===0)
//             {
//                 output.push("Buzz")
//             }
//             else{
//                 output.push(count);
//             }
//             count++;
// }
// fuzzBuzz();//[1]
// fuzzBuzz();//[1,2]
// fuzzBuzz();//[1,2,"Fuzz"]
// fuzzBuzz();//[1,2,"Fuzz",4]
// fuzzBuzz();//[1,2,"Fuzz",4,"Buzz"]
// fuzzBuzz();//[1,2,"Fuzz",4,"Buzz","Fuzz"]

// console.log(output);

//=================================================================================================
//Who's Buying Lunch? Code Challenge
//way 1 : without using function
// let names=["Angela", "Ben", "Jenny", "Michael", "Chloe"];
// let rand=Math.floor((Math.random()*names.length)); //0-4
// alert(names[rand] + " is going to buy lunch today!");

//way 2 using function
// let names=["Angela", "Ben", "Jenny", "Michael", "Chloe"];
// function whoName(names){
// let namesLenght=names.length;
// let rand=Math.floor(Math.random()*namesLenght);
// alert(names[rand] + " is going to buy lunch today!");
// }
// whoName(names);

//=================================================================================================
//print the number between 1-100 exept number 50 using while
// let  i=1;
// while(i<=100)
//     {
//         if(i===50)
//             {
//                 i++;
//                 continue;
//             }
//         console.log(i);
//         i++;
//   }

//=================================================================================================
//print the number [1,2,4,6,8,10]

// let i=1;
// do{
//     if(i===1){
//         console.log(i);
//      }

//      if(i%2===0){
//         console.log(i);
//      }
//      i++;
// }while(i<=10);

//=================================================================
//Fibonacci Code Challenge
//0,1,1,2,3,5,8,13,21,....
//Create a function where you can call it by writing the code:

// fibonacciGenerator (n)

// Where n is the number of items in the sequence.

// So I should be able to call:

// fibonacciGenerator(3) and get

// [0,1,1]

//solution:

let output = [];
function fibonacciGenerator(n) {
  if (n === 1) {
    output.push(0);
  } else if (n === 2) {
    output.push([0, 1]);
  } else {
    output = [0, 1];
    for (let i = 2; i < n; i++) {
      output.push(output[output.length - 2] + output[output.length - 1]);
    }
  }
  return output;
}
output = fibonacciGenerator(5);
console.log(output);
