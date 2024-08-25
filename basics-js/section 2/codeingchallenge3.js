/* Coding challenge 3 */ 

// object mark miller 

const markmiller = {
    fullname: "mark miller",
    mass: 78,
    height: 1.69,

    calcBMI: function() {
        this.bmi =  this.mass / this.height ** 2
        return this.bmi;
    }
}

const johnsmith = {
    fullname: "john smith",
    mass: 92,
    height: 1.95,

    calcBMI: function() {
        this.bmi =  this.mass / this.height ** 2
        return this.bmi;
    }
}

markmiller.calcBMI();
console.log(markmiller.bmi);

johnsmith.calcBMI();
console.log(johnsmith.bmi);

if (markmiller.bmi > johnsmith.bmi) {
    console.log(`${markmiller.fullname}'s BMI ${markmiller.bmi} is greater then ${johnsmith.fullname}`)
}

