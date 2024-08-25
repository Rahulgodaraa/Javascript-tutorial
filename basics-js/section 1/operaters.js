/// OPERATERS IN JAVA SCRIPT 

/* MINUS OPERATOR (-) */ 

const nowyear = 2022;
const sonsage = nowyear - 2001;
const duaghtersage = nowyear - 2003;
const Fathersage = nowyear - 1980;
const Mothersage = nowyear - 1984;

console.log(sonsage , duaghtersage , Fathersage , Mothersage);

/* ADDITION OPERATER (+) */

const Name = "Rahul";
const Surname = " Jaat";

console.log(Name + Surname);

/* MULTIPLICATION OR POWER OPERATER */

console.log(50*50);

console.log(5**5);

/* ASSIGNMENT OPERATER */ 

let x = 20;
x += 20;
x--;
x++;
x*= 20;
console.log(x);   

/* COMPARISON OPERATOR */

let rahulage = 20;
let adultage = 18;

console.log(rahulage > adultage); 

/* OPERATERS PRECEDANCE 
   Every operater has its own weight to be executed
   to execute some operater before other operater
   having more weight use ()*/

let marks = (100 + 100 + 80) / 3;
console.log(marks)