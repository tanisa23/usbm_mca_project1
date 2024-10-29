/*unction:it is a reusable block of code to perform some certain task.

declaration
function SayName(){
    //code
}
*/

//write a function to print your name.

/*function printName(){
    console.log("tanisa");
}
printName()//invoke or call to print the value*/

// arguments and parameters

 /*function printName(name){  // -----name is parameter
 console.log(`My name is ${name}`);
 }
 printName("tanisa");   //----pramod is argument
 */

 /*return keyword 
 ---stop the execution process
 ---return the value to the caller
 */

 /*function printName(name,age,city){
    return `My name is ${name},${age},${city}`;
 }
//console.log(printName("tanisa",22,"bbsr"))

let output=printName("tanisa",22,"bbsr");
console.log(output);
*/

//arrow function
//syntax:
/*Console.log(printName("tanisa"));  //before
const printName=(name)=>{
    return `my name is ${name}`;
} 
  console.log(printName("tanisa"));  //after */

  //write a function to print greeting to the user
  /*const greeting=(name,currenthour)=>{
    if(currenthour<12) {

        // console.log("good morning");
        
        return `hey ${name} good morning`;
        
      }  else if (currenthour<18){
        
        return `hey ${name} good afternoon`;
        
        } else
        
        return `hey ${name} good evening`;
  }
  const output= greeting ("tanisa",22);
  console.log(output);*/

  //write a function to use operator as switch case.
  /*const calculator = (a, b, operator) => {

    switch (operator) {
    
    case "+":
    
    return a + b;
    
    break;
    
    case "-":
    
    return a - b;
    
    break;

    case "*":
    
    return a * b;
    
    break;
    
    case "/":
    
    return a / b;
    
    break;
    
    default: return "Invalid operator"; break;
    
    }
    
    };
    
    const output = calculator(10, 5, "+"); console.log(output); // Output: 15*/

  //ternary operator(?)

  //let output=true?console.log("true"):console.log("false");

  //const add=(a,b)=>console.log(add(5,6));

  /*const add=(a,b)=>a+b;
  console.log(add(5,8));*/

 // task===to do bmi calculator

//rest parameter
/*const printNumbers=(...numbers)=>{
    return numbers;
}
let output=printNumbers(1,2,3,4,5,6,7,8,9);
console.log(output);*/

//callback function
//when a function is called as an argument in an another function.
//syntax:
/*function say(num,callback){
    console.log`(myname $(name))`;
    return callback;
}*/
/*function hello(){
    return hello;
}*/
//to do:make a user athentication system using callback function.
//to do:password validation
//sunchronous
//line by line
//console.log(1);
//console.log(2);
//console.log(3);
//if error happens it will stop the execution and not switch to next line

//asynchronous
//if error happens in line 1,it will not stop the execution and switch to next line

//setTimeout(()=>{});//callback function
//setInterval(()//=>{});//ananymous function

//ex:
//setTimeout(()=>{console.log("hey USBM STUDENTS");},5000);

setInterval(()=>{console.log("hey USBM STUDENTS");},1000);


