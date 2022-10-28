// 'use strict';

// const airline = 'AIR INDIA';
// const plane  =  'A320';

// console.log(airline.indexOf('I'));
// console.log(airline.lastIndexOf('I'));
// console.log(airline.slice(4));
// console.log(airline.slice(4,7));
// console.log(airline.slice(airline.indexOf(' ') + 1 ));


// const checkmiddleSeat = function(seat) {
//     const s = seat.slice(2) ; 
//     if (s === 'B' || s === 'E') console.log("You got middle seat")
//     else console.log("You got lucky");
// }

// checkmiddleSeat('12B');
// checkmiddleSeat('11E');
// checkmiddleSeat('12O');

// console.log(airline.toUpperCase());

// // ----------------------------------------------CAPITALIZATION

// const passenger = 'rAHUL';
// const passenger2 = 'RIYA';

// const lowerpass = passenger.toLowerCase();
// const properpass = lowerpass[0].toUpperCase() + lowerpass.slice(1).toLowerCase();
// console.log(properpass);

// //-------------------------------------------------REPLACE

// // const priceIND = 10000;
// // const priceUS  = priceIND / 80;
// // console.log(priceUS

// const announcment = 'All passenger come to gate no.2 , repeat gate no.2';
// const prop = announcment.replace('gate' , 'Enterance');
// console.log(prop);

// // regularexpresion  method of replacement 
// // g stands for global
// const prop2 = announcment.replace(/gate/g , 'Enterance');
// console.log(prop2);

// //-------------------------------------------Bolleans

// const newiphones = 'iphone 14'

// if (newiphones.startsWith('iphone') && newiphones.endsWith('14'))
//     console.log("new model");
// else console.log('old model or not a iphone');

// //----------------------------------------Practice

// const checkbagage = function (items) {
//     const loweritems = items.toLowerCase();
//     if (loweritems.includes('drugs') && loweritems.includes('guns')) 
//     console.log('your not allowed to board ')
// }

// checkbagage('I have DRUGS in my bags ');


// //------------------------------------------split

// console.log('Rahul Choudahry'.split(' '));

// //--------------------------------------------split and join
// const [firstname , Lastname] = 'Rahul Choudahry'.split(' ');
// const newname = ['Mr.' ,  firstname , Lastname].join(' ')
// console.log(newname);

// const capitaliznames = function(name) {
//     const names = name.split(' ');
//     const namesupper = [];
//     for (const n of names){
//        namesupper.push( n[0].toUpperCase() + n.slice(1));
//     }
//     console.log(namesupper.join(' '));
// }

// capitaliznames('rahul choudhary riya');


//------------------------------------------padding a string 


// const maskcredit = function (number) { 
//       const str = number + '';
//       const laststr = str.slice(-4);
//       return laststr.padStart(str.length, '$');
// };

// console.log(maskcredit(26554689658));
// console.log(maskcredit(200000000010000));


//----------------------------------------------Practice strings 

const flights = 
`_Delayed_Departure;fao015651480478;txl16894651;11:25 
+_Arrival;bru654958415948;fao15454;11:45 
+_Delayed_Arrival;hel165465456;fao46504545;12:05 
+_Departure;fao20656265;lis54065489489;12:30`;

// console.log(flights.split('+'));

for (const flight of flights.split('+')) {
const [type , from , to ,time] = flight.split(';');
const output = `${type.replaceAll("_" , " ")} ${from.slice(0,3).toUpperCase()} ${to.slice(0,3).toUpperCase()} (${time.replace(':' , 'h')})`.padStart(31);
console.log(output);
}