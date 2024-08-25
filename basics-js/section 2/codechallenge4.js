/* Coding challenge 4 */ 

const bills = [22 , 295 , 176 , 440 , 37 , 105 , 10 , 1100 , 86 , 52]
const tips  = [];
const totals = [];

const caltips = function(bills) {
    return bills >= 50 && bills <= 300 ? bills * 0.15 : 
    bills * 0.2;
}

for (i = 0 ; i <= bills.length ; i++) {
    tips.push((caltips(bills[i])))
    totals.push(tips + bills[i])
}

console.log(bills , tips , totals)

 
