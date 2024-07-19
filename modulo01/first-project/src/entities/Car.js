const Base = require("./base/Base");

class Car extends Base {
    constructor({ id, name, available, gasAvailable, releaseYear }) {
        super({ id, name });

        this.releaseYear = releaseYear;
        this.available = available;
        this.gasAvailable = gasAvailable;
        this.releaseYear = releaseYear;
    }
}

module.exports = Car;
