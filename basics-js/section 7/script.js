'use strict';

 const resturant  = {
name: 'Classico Italiano',
location: 'Via Angelo Tavanti 23, Firenze, Italy',
categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
mainMenu: [ 'pizza', 'Pasta', 'Risotto'],
otheringedrient : ['onion' , 'panner'],


openingHours: {
  thu : {
    open: 12,
    close: 22,
  },
   fri: {
    open: 11,
    close: 23,
  },
  sat : {
    open: 0, // Open 24 hours
    close: 24,
  },
},
};

// const menu = resturant.mainMenu[0] ??= 'mango';
// console.log(menu);


// const class1 = {
//   Roomno : 611,
//   strength : 100,
//   branch : 'it',
// }

// const class2 = { 
//   Roomno : 612,
//   strength : 0,
//   branch : 'cse',
// }

// let strength = class2.strength ||= 200;
// console.log(strength);
// let strength1 = class2.strength ??= 200;
// console.log(strength1);

// -------------------for of loop---------------------- 

// const menus = [...resturant.mainMenu, ...resturant.starterMenu];
// for (const item of menus ) console.log(item);

// for (const items of menus.entries()) console.log(`${items[0] + 1 }: ${items[1]}`)

//  for (const [i , dish] of menus.entries()) console.log(`${i} : ${dish}`)


// --------------optional chaining-----------------

// console.log(resturant.openingHours.sat?.close);

// const weekends = [ thu , fri , sat];
// for (const days of weekends){
// console.log(resturant.openingHours[weekends]);
// }

// ------------looping over object-------------------
// let weekend  = ['thu' , 'fri' , 'sat' , 'sun']
// for (const days of weekend ) console.log(days)

// -----------------sets------------------------------

// const orderset = new Set ([
//   'rice',
//   'dal',
//   'panner',
//   'rayta',
//   'naan',
//   'roti',
//   'panner',
//   'panner'
// ]);

// console.log(orderset.size);
// console.log(orderset.has('rice')); 
// orderset.add('Dhokla')
// console.log(orderset);
// for (const order of orderset) console.log(order);

// // use case for sets 
 

// ------------------Maps-------------------------------------

// const rest = new Map();
// // setting values------------
// rest.set('Name' , 'Rj21resturant');
// rest.set('location' , 'Nagaur');
// console.log(rest.set('speciality' , 'Rajasthani food'));
// rest.set('open' , 'we are open on weekends');
// // Getting values--------------
// console.log(rest.get('open')); 
// console.log(rest.get('location'));

// Maps iteration-----------------------

