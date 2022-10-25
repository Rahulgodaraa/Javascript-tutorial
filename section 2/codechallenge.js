/* CODE CHALLENGE NO 1 */
'use strict';

// 1. ARROW FUNXTION TO CALCULATE AVERAGE

const CalAverage = (a , b , c) => ((a + b + c) / 3);
console.log(CalAverage(5,5,5));

// test 1 

const AvgDolphins = CalAverage(44 , 23 , 71);
const AvgKoalas   = CalAverage(65 , 54 , 49);

console.log(AvgDolphins , AvgKoalas);

const checkwinner = function(AvgDolphins , AvgKoalas){
    if (AvgDolphins >= 2* AvgKoalas){
        console.log("Dolphins win")
    } else if  (AvgKoalas >= 2* AvgDolphins){
        console.log("Koalas win")
    }else {
        console.log("No one wins")
    }
}

console.log(checkwinner(AvgDolphins,AvgKoalas));