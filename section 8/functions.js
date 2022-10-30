'use strict';
// const  bookedflights = []

// const booking = function (flight = 'AIR INDIA' , numberofpassenger = 4 , place = 'KISHANGARH' ) {
//    const bookflight = 
//    {
//     flight ,
//     numberofpassenger , 
//     place  
//    }
//    console.log(bookflight);
//    bookedflights.push(bookflight);
// };

// booking("EMIRATES");

//---------------------------------Higherorder function 

const FirstletterUpper = function (str) {
   const [first , ...other] = str.split(' ');
   return [first.toUpperCase(), ...other].join(' ');
};


// higher function that calls another function in it

const transformer = function (str,fn) {
   console.log(`Original string: ${str}`);
   console.log(`This is transformed : ${fn(str)}`);


}

transformer('rahul choudhary' , FirstletterUpper);

//-----------------------------------------------------function return function

const greeting = function (greetings) {
    return function (name) {
      console.log(`${greetings} ${name}`)
    }
}

const greetme = greeting('Greetings mr.');
greetme('Rahul');
greetme('Rameshwar');

//-------------------------------------------------arrow function return arrow function

const greet = greetingss => names => console.log(`${greetingss} ${names}`);
greet('rahul' )( 'greet');

//
const luftansa = {
   airline : 'luftansa',
   iataCode : 'lH',
   booking : [],

   book(flightNum , name) {
      console.log(
         `${name} booked a seat on ${this.airline}
         flight ${this.iataCode} ${flightNum}`
      );
   }
}

luftansa.book(909 , 'Rahul Choudhary');

const eruuowing = { 
   name: 'euro',
   
}