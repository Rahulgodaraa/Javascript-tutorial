'use strict';
const  bookedflights = []

const booking = function (flight = 'AIR INDIA' , numberofpassenger = 4 , place = 'KISHANGARH' ) {
   const bookflight = 
   {
    flight ,
    numberofpassenger , 
    place  
   }
   console.log(bookflight);
   bookedflights.push(bookflight);
};

booking("EMIRATES");

//---------------------------------Higherorder function 

