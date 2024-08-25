/* FUNCTIONS */
'use script';

// FUNCTION 

function hello() {
    console.log("Greetings INDIA!");
}
hello();

//  PARAMETERS 
// FUNCTION DECLARATION 
function fruitejuice(apple , orange ) {
    console.log(apple,orange);
    const juice = `This juice is made from ${apple} apples and ${orange} orange`;
    return juice ;
}

fruitejuice (80,20);
// calling , running function 
const whatisthis = fruitejuice(80,20);
console.log(whatisthis);

const applejuice = fruitejuice(50 , 0);
console.log(applejuice);

// FUNCTION EXPRESSION 

const hie = function (time , day){
    console.log(`Greetings rahul , it is now ${time} o'clock and today is ${day} , Have a nice day`)
    return hie;
}
const greetings = hie(10,'wednsuday');
console.log(greetings);


// FUNCTION DECLARATION AND EXPRESSION 
//Declaration 
function calage1(birthyear) {
    return 2022 - birthyear
}
const age1 = calage1(2005);
console.log(age1);

// Expression

const calage2 = function (birthyear) {
    return 2022 - birthyear
}

const age2 = calage2(2001);
console.log(age1 , age2);

//Arrow function 

const calage3 = birthyear => 2022 - birthyear;
const age3 = calage3(2001);
console.log(age3);

// complex arror function 

const retierment = (birthyear , Name ) => {
    const age = 2022 - birthyear;
    const yearleft = 60 - age ;
    return `Mr ${Name} is ${age} years old and he/she will retier in ${yearleft} years.`
}

const retiermentyears = retierment(2001 , 'Rahul choudhary')
console.log(retiermentyears);