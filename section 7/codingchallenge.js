// destructuring 

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
    odds : [
        team1 = 1.05,
        team2 = 3.05
    ]
}
// 1 
const [players1 , players2] = footballgame.players;
console.log(players1 , players2);
// 2 
const [golkeeper , ...restplayers] = players1
console.log(golkeeper , restplayers);
// 3 
// let alltheplayers = [footballgame.players]
// console.log (alltheplayers)

const alltheplayers = [...players1 , ...players2];
console.log(alltheplayers);

// 4 
const playersfinal = ['x' , 'y' , 'z' , ...players1]
console.log(playersfinal);

// 6 
const goals = function (scorers) { 
    scorers = footballgame.scorers
    console.log(scorers);
}
goals(scorers);