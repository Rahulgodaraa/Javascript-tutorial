// variable 
 
/*
        reassign |  scope      |    hoisting    |   access
const |   no       block         yes not init               ref err
let   |   yes      block         yes not init               ref err
var   |   yes      functional    yes but undef      outside scope yes 
         (within
          scope)
*/


//functions :-
// resuable code
// return help us get value out of function
// argument is passed while calling
// parameter while function declaration
// function declaration - fun name after fun key word , can be called before it defined 
//function expression - fun name before key word with variable declaration eg.. let fun = function(){}

//call back fun
// function greetings(user){
//     console.log(user("riya") + " welcome!");
// }
// function name(value){
//     return value
// }
// greetings(name);

//loops :-
// in while we increment inside block body and its mandatory ,or else it will infinite loop

// let num = 1;
// let count = 0;;
// let res = [];
// while(num <= 10){
//    count += num;
//    res.push(count);
//    num++;
// }

// console.log(res);

// do-while loop if want to execute body atleast ones use do while 


// let age = prompt("what is your age" , 18);

//objects 
// key must be string 
// value can be of any data type 
// object constructor syntax user = new object();
// to access value of "like bird" key we have to use [] instead of "."
