/* Loops in js */
// 'use strict';

// for (let nums = 1; nums <= 20 ; nums++) {
//     console.log(nums);
// }

// loops in array 

const object = [
   'rahul' ,
   'choudhary',
   21,
   'btech student',
   'marwadi'
]
// creating array from an array 
const types = [];

for (let i = 0; i<=5 ; i++) {
    console.log(object[i]);

    types[i] =typeof object[i];
}

console.log(types);

// filling an array using data from another array 


const years = [2001 , 2005 , 2006 , 2007 ,1980];
const ages  = [];

for( i= 0 ; i<years.length ; i++) {
    ages.push(2022 - years[i])
}

console.log(ages);


// loop backward

for (i = 5 ; i >=0 ; i--) {
    console.log(object[i])
}



/* While loop in js */

console.log('-------------While loop in js--------------');


let rep = 1
while (rep <= 10) {
    console.log(`While : ${rep}`)
    rep ++ ;
}

