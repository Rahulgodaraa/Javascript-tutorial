/*objects data type */ 
'use strict';

// Creating object 

const object = {
    firstname: 'Rahul',
    secondname: 'Choudhary',
    age : 21,
    field: 'web developer',
    friends: ["riya",'ankit','nikit']
}

console.log(object);

// dotnotation access 
console.log(object.firstname);

//bracket notation access
console.log(object['firstname' ]);

const keyword = 'name';
console.log(object['first' + keyword])
console.log(object['second' + keyword])

// Add new value to object 

object.twitter = '@rahuljaat1501';
console.log(object);

// internal challenge 1

console.log(`${object.firstname} has 3 firends and his best friend is ${object.friends[0]}`) 

// object method 

const information = {
    firstname: 'Rahul',
    secondname: 'Choudhary',
    birthyear : 2001,
    field: 'web developer',
    friends: ["riya",'ankit','nikit'],
    hasadrivinglicense: true,

    // calage : function () {
    //     console.log(this);
    //     return 2022 - this.birthyear;
    // }

    calage : function() {
        this.age = 2022 - this.birthyear 
        return this.age;
    }
}

console.log(information.calage(information.birthyear));
console.log(information.calage());
// console.log(information.calage(this.birthyear));

console.log(information.age);
console.log(information);

// internal challenge 2

console.log(`${information.firstname} is ${information.age} years old ${information.field} and he has a driving license`)