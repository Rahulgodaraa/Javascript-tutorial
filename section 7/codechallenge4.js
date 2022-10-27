'use strict';

const casecorrection = function (casetest){
    const newcase = casetest.split('/n')
    // console.log(newcase);

    for (const ca of newcase) {
        const [first , second] = ca.toLowerCase().trim().split('_');
        console.log(newcase);

        const output = `${first} ${second.replace(second[0] , second[0].toUpperCase()) }`
    }
    // console.log(output);
}

casecorrection('underscore_case',' first_name' , 'some_variable');
// console.log(casecorrection);