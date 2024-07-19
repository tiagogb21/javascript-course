const car = {
    doors: 2,
    _seats: "John Doe",
    get seatMaterial() {
        return this._seats;
    },
    set seatMaterial(material) {
        this._seats = material;
    },
};

console.log(car);
console.log(car.seats);
console.log(car.seatMaterial);

console.log('------------------')

const luxuryCar = {};

Object.setPrototypeOf(luxuryCar, car);

luxuryCar.seatMaterial = "leather";

console.log(luxuryCar);

console.log(luxuryCar.doors);
console.log(luxuryCar.seatMaterial);

console.log('------------------')

// Caminhando pela cadeia - props e métodos NÃO são copiados
console.log(luxuryCar.valueOf());

console.log(Object.keys(luxuryCar));

console.log('------------------')

// iterando por array através de Object.keys
Object.keys(luxuryCar).forEach(key => {
    console.log(key);
})

console.log('------------------')

// Mas quando usamos o for ... in, ele inclui as propriedades herdadas
for(key in luxuryCar) {
    console.log(`${key} => ${luxuryCar[key]}`);
}
