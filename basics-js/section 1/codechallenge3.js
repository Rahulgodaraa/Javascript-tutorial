/* Codechallenge3 */

//average score

// const Dolphinsscore = (96+108+89)/3;
// const Koalasscore =   (88+91+100)/3;
// console.log(Dolphinsscore , Koalasscore);
// //compare

// if (Dolphinsscore > Koalasscore){
//     console.log("Dolphins win !")
// }else if(Koalasscore > Dolphinsscore){
//     console.log("Koala win !")
// }else if (Dolphinsscore === Koalasscore){
//     console.log("Its a draw")
// }

//bonus 1

const Dolphinsscore = (97+112+101)/3;
const Koalasscore =   (109+95+123)/3;
console.log(Dolphinsscore , Koalasscore);

// compare

if (Dolphinsscore > Koalasscore && Dolphinsscore >= 100){
    console.log("Dolphin Wins!")
}else if(Koalasscore > Dolphinsscore && Koalasscore >= 100){
    console.log("Koalas win !")
}else if (Koalasscore != 100 && Dolphinsscore !=100){
    console.log("NO one Wins")
}