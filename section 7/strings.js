'use strict';

const airline = 'AIR INDIA';
const plane  =  'A320';

console.log(airline.indexOf('I'));
console.log(airline.lastIndexOf('I'));
console.log(airline.slice(4));
console.log(airline.slice(4,7));
console.log(airline.slice(airline.indexOf(' ') + 1 ));


const checkmiddleSeat = function(seat) {
    const s = seat.slice(2) ; 
    if (s === 'B' || s === 'E') console.log("You got middle seat")
    else console.log("You got lucky");
}

checkmiddleSeat('12B');
checkmiddleSeat('11E');
checkmiddleSeat('12O');

console.log(airline.toUpperCase());

// ----------------------------------------------CAPITALIZATION

const passenger = 'rAHUL';
const passenger2 = 'RIYA';

const lowerpass = passenger.toLowerCase();
const properpass = lowerpass[0].toUpperCase() + lowerpass.slice(1).toLowerCase();
console.log(properpass);

//-------------------------------------------------REPLACE

// const priceIND = 10000;
// const priceUS  = priceIND / 80;
// console.log(priceUS

const announcment = 'All passenger come to gate no.2 , repeat gate no.2';
const prop = announcment.replace('gate' , 'Enterance');
console.log(prop);

// regularexpresion  method of replacement 
// g stands for global
const prop2 = announcment.replace(/gate/g , 'Enterance');
console.log(prop2);

//-------------------------------------------Bolleans

const newiphones = 'iphone 14'

if (newiphones.startsWith('iphone') && newiphones.endsWith('14'))
    console.log("new model");
else console.log('old model or not a iphone');

//----------------------------------------Practice

const checkbagage = function (items) {
    const loweritems = items.toLowerCase();
    if (loweritems.includes('drugs') && loweritems.includes('guns')) 
    console.log('your not allowed to board ')
}

checkbagage('I have DRUGS in my bags ');


