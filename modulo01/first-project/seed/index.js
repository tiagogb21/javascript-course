const { faker } = require("@faker-js/faker");
const { join } = require("path");
const fs = require("fs/promises");

const Car = require("../src/entities/Car");
const CarCategory = require("../src/entities/CarCategory");
const Customer = require("../src/entities/Customer");

const seederBaseFolder = join(__dirname, "../", "database");

const ITEMS_AMOUNT = 4;

const carCategory = new CarCategory({
    id: faker.string.uuid(),
    name: faker.vehicle.type(),
    carIds: [],
    price: faker.finance.amount({ min: 10000, max: 40000 }),
});

const cars = [];
const customers = [];

for (let i = 0; i < ITEMS_AMOUNT; i++) {
    const car = new Car({
        id: faker.string.uuid(),
        name: faker.vehicle.model(),
        available: true,
        gasAvailable: true,
        releaseYear: faker.date.past().getFullYear(),
    });

    const customer = new Customer({
        id: faker.string.uuid(),
        name: faker.person.firstName("male"),
        age: faker.number.int({ min: 30, max: 50 }),
    });

    carCategory.carIds.push(car.id);

    cars.push(car);

    customers.push(customer);
}

const write = (filename, data) =>
    fs.writeFile(join(seederBaseFolder, filename), JSON.stringify(data));

(async () => {
    await write("cars.json", cars);
    await write("carCategory.json", carCategory);
    await write("customer.json", customers);

    console.log("cars", cars);
    console.log("carcategory", carCategory);
})();
