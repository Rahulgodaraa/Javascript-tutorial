/* CODE CHALLENGE 2 */

// function bills 

// let bill = prompt(`Enter bill amount`);

// const tipcal = bill => {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : 
//     bill * 0.2;
    
// }
// console.log(tipcal(bill));

// array for bills 


//my method => 0bviously lengthy 
bills = [125 , 555 , 44];
const caltips = function(bills) {
    return bills >= 50 && bills <= 300 ? bills * 0.15 : 
    bills * 0.2;
}
// console.log(caltips(bills));

// optimist method 

tips = [caltips(bills[0]),caltips(bills[1]),caltips(bills[2])];

console.log(bills , tips);
