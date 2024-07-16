const { createSandbox } = require("sinon");
const assert = require('assert');

const sinon = createSandbox();

const Fibonacci = require("./fibo");

(async () => {
    {
        // como o método não é estático, vamos chamá-lo a cada ciclo que passar
        const fibonacci = new Fibonacci();

        const spy = sinon.spy(
            fibonacci, // instância
            fibonacci.execute.name, // método que será observado
        )

        // Número de sequências: 5
        // [0] input = 5, current = 0, next = 1 --> result 0
        // [1] input = 4, current = 1, next = 1 --> result 1
        // [2] input = 3, current = 1, next = 2 --> result 1
        // [3] input = 2, current = 2, next = 3 --> result 2
        // [4] input = 1, current = 3, next = 5 --> result 3
        // [5] input = 0 --> PARA!
        for (const sequence of fibonacci.execute(5)) {}

        const expectedCallCount = 6;

        assert.strictEqual(spy.callCount, expectedCallCount)

        // permite obter quais foram os parâmetros passados, em cada ciclo
        // execute(input, current, next)
        const { args } = spy.getCall(2)

        // queremos saber se os parâmetros passados ao final do ciclo foram esses
        // como passamos como argumento de getCall o valor 2, vai mostrar os valores para o segundo ciclo
        const expectedParams = [3, 1, 2]

        const errorMessage = "Arrays are different!";

        assert.deepStrictEqual(args, expectedParams, errorMessage)
    }

    {
        const fibonacci = new Fibonacci();

        const spy = sinon.spy(
            fibonacci, // instância
            fibonacci.execute.name, // método que será observado
        )

        // Número de sequências: 5
        // [0] input = 5, current = 0, next = 1 --> result 0
        // [1] input = 4, current = 1, next = 1 --> result 1
        // [2] input = 3, current = 1, next = 2 --> result 1
        // [3] input = 2, current = 2, next = 3 --> result 2
        // [4] input = 1, current = 3, next = 5 --> result 3
        // [5] input = 0 --> PARA!
        const results = [...fibonacci.execute(5)];

        const expectResults = [0, 1, 1, 2, 3]

        const errorMessage = "Arrays are different!";

        assert.deepStrictEqual(results, expectResults, errorMessage)
    }
})();
