'use strict';
const footballgame = {
    team1 : 'barca' , 
    team2 : 'realmadrid',
    players : [ 
    [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
    ], 
    [
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
    ],
],
    scores : '4:0',
    scorers : ['messi' , 'messi' , 'neymar' , ' suraze'],
    date : '28 nov' , 
    odds : {
        team1 : 1.05,
        team2 : 3.05,
    }
}

// 1 

let scorers = footballgame.scorers;

for (const [ i , names] of scorers.entries()) console.log(`Goal ${i} : ${names}`) 

// 2 
const odd  = object.values(footballgame.odds);
let average  = 0;
average /= odd.length;
console.log(average);

// 3 
for (const [team , odd] of object.entries(footballgame.odds)) console.log(team , odd);