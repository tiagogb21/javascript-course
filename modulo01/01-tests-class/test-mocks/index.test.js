const File = require("./src/file");
const { error } = require("./src/constants");
const assert = require("assert"); // versões mais recentes - sufixo "assert:node" o ":node" indica que é algo interno do node

// IIFE --> SOMENTE é válido dentro da bloco, terminou a execução, saem da memória

// A forma de pensar deve ser Input --> Transform --> Output
    // Primeiro: input - temos que pensar nas variáveis de entrada
    // Segundo: transform - temos que pensar no processo
    // Terceiro: output - temos que pensar em qual resultado queremos

(async () => {
        // variáveis criadas nesse bloco, SOMENTE são válidas durante a execução
        {
            const filePath = "./mocks/emptyFile-invalid.csv";
            const result = File.csvToJson(filePath); // NÃO precisamos passar o await, por que já está presente no método interno
            const EXPECT_MESSAGE = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
            await assert.rejects(result, EXPECT_MESSAGE);
        }

        {
            const filePath = "./mocks/invalid-header.csv";
            const result = File.csvToJson(filePath);
            const EXPECT_MESSAGE = new Error(error.FILE_FIELDS_ERROR_MESSAGE);
            await assert.rejects(result, EXPECT_MESSAGE);
        }

        {
            const filePath = "./mocks/items-invalidQuantity.csv";
            const result = File.csvToJson(filePath);
            const EXPECT_MESSAGE = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
            await assert.rejects(result, EXPECT_MESSAGE);
        }

        {
            const filePath = "./mocks/items-valid.csv";
            const result = await File.csvToJson(filePath);
            const expected = [
                { id: 1, name: 'john doe', profession: 'developer back end', age: 43 },
                { id: 2, name: 'jane doe', profession: 'developer front end', age: 35 },
                { id: 3, name: 'jasmin doe', profession: 'developer UX/UI', age: 27 },
            ];
            assert.deepEqual(result, expected)
        }
    }
)();
