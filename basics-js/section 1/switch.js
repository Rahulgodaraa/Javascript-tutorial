/* SWITCH */

const plannum = 1;

switch (plannum) {
    case (1):
        console.log("Go for web dev")
        break;
    case (2):
        console.log("Go for app dev")
        break;
    case (3):
        console.log("Go for data sci")
        break;
    default:
        console.log("NO PLAN!")
}

// same in if else

if (plannum === 1) {
    console.log("Go for web dev")
} else if (plannum === 2) {
    console.log("Go for app dev")
} else if (plannum === 3) {
    console.log("Go for data sci")
} else {
    console.log("NO PLAN!")
}