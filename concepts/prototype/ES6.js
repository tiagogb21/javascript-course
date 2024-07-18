class Vehicle {
    constructor() {
        this.wheels = 4;
        this.motorized = true;
    }

    ready() {
        return 'Ready to go!';
    }
}

class Motorcycle extends Vehicle {
    constructor() {
        // Quando herdamos de uma classe, se quisermos utilizar o this, precisamos utilizar o super()
        super();
        this.wheels = 2;
    }

    wheelie() {
        return 'On one wheel now!'
    }
}

const myBike = new Motorcycle();
console.log(myBike);
console.log(myBike.wheels);
console.log(myBike.ready());
console.log(myBike.wheelie());
