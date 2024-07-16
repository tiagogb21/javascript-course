class Service {
    async makeRequest(url) {
        return (await fetch(url)).json();
    }

    async getPlanets(url) {
        return await this.makeRequest(url);
    }
}

module.exports = Service