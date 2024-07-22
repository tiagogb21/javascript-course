const { describe, it, before, beforeEach, afterEach } = require("mocha");
const { join } = require("path");
const { expect } = require("chai");
const sinon = require("sinon");
const { sandbox } = require("sinon");

const CarService = require("../../src/services/carService");
const carsDatabase = join(__dirname, "../../database", "cars.json");

const mocks = {
    validCar: require("../mocks/valid-car.json"),
    validCarCategory: require("../mocks/valid-carCategory.json"),
    validCustomer: require("../mocks/valid-customer.json"),
};

describe("CarService Suite Tests", function () {
    let carService = {};
    let sandbox = {};

    before(() => {
        carService = new CarService({
            cars: carsDatabase,
        });
    });

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });

    afterEach(() => {
        // garantimos que o it não vai ficar sujo
        // não vai ter um stub perdido entre um teste e outro
        sandbox.restore();
    });

    it("Should retrieve a random position from an array", async function () {
        const data = [0, 1, 2, 3, 4];
        const result = carService.getRandomPositionFromArray(data);

        expect(result).to.be.lte(data.length).and.be.gte(0);
    });

    it("Should choose the first id from carIds in carCategory", () => {
        const carCategory = mocks.validCarCategory;
        const carIdIndex = 0;

        sandbox
            .stub(carService, carService.getRandomPositionFromArray.name)
            .returns(carIdIndex);

        const result = carService.chooseRandomCar(carCategory);
        const expected = carCategory.carIds[carIdIndex];

        expect(carService.getRandomPositionFromArray.calledOnce).to.be.ok;
        expect(result).to.be.equal(expected);
    });

    it("Given a car category it should return an available car", async function () {
        // const id = "2a965358-6ac7-444a-ac3e-bec47ef9775f";
        const car = mocks.validCar;
        // o mock é uma instância, só que precisamos garantir que o id que vai ter na categoria é o id esperado, não podemos substituir a instância dele, porém se ele for substituído, vamos afetar todas as instâncias dos outros testes
        // Object.create(obj) vai criar uma instância imutável
        const carCategory = Object.create(mocks.validCarCategory);
        // agora podemos garantir que o carCategory vai ter o car.id
        carCategory.carIds = [car.id];

        sandbox
            .stub(carService.carRepository, carService.carRepository.find.name)
            .resolves(car);

        sandbox.spy(carService, carService.chooseRandomCar.name);

        const result = await carService.getAvailableCar(carCategory);
        const expected = car;

        expect(carService.chooseRandomCar.calledOnce).to.be.ok;
        expect(carService.carRepository.find.calledWithExactly(car.id)).to.be
            .ok;
        expect(result).to.be.deep.equal(expected);
    });
});
