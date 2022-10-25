/* CODE CHALLENGE 4 */

const bill = 300;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : 
bill * 0.2;
console.log (` Your Bill is ${bill} and The tip you pay is ${tip} your Total value is ${bill + tip}  Thankyou visit again!`)