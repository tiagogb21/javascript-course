const { createSandbox } = require("sinon");
const Service = require("./service");
const assert = require("assert");
const mocks = {
    planet1: require("./mocks/planets/planet1.json"),
    planet2: require("./mocks/planets/planet2.json"),
};

const BASE_URL = (id) => `https://swapi.dev/api/planets/${id}/`;

const sinon = createSandbox();

(async () => {
    // O objetivo é fazer com que não vá para a internet, ou seja, não consuma dados:

    // Esse código leva para a internet
    // {
    //     const service = new Service();
    //     const data = await service.makeRequest(BASE_URL(2))
    //     console.log('dados: ', JSON.stringify(data));
    // }

    const service = new Service();

    const stub = sinon.stub(
        service, // onde está a instância
        service.makeRequest.name // Cria um stub para o método makeRequest da instância service
    );

    // Configura o stub para retornar mocks.planet1 quando chamado com BASE_URL(1).
    stub.withArgs(BASE_URL(1)).resolves(mocks.planet1);

    // Configura o stub para retornar mocks.planet2 quando chamado com BASE_URL(2).
    stub.withArgs(BASE_URL(2)).resolves(mocks.planet2);

    {
        const expected = mocks.planet1;

        const results = await service.getPlanets(BASE_URL(1));

        assert.deepEqual(results, expected);
    }

    {
        const expected = mocks.planet2;

        // expect an error, because we are using planet2
        const results = await service.getPlanets(BASE_URL(1));

        assert.notDeepEqual(results, expected);
    }
})();
