// Crie uma função que dado o objeto a seguir:

const assert = require("assert");

let address = {
    street: "Rua dos Pinheiros",
    number: 1293,
    neighborhood: "Centro",
    city: "São Paulo",
    uf: "SP"
};

// Retorne o seguinte conteúdo:

const expect = 'O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com nº 1293.';

function userMessage({ street, number, neighborhood, city, uf }) {
    return `O usuário mora em ${city} / ${uf}, no bairro ${neighborhood}, na rua "${street}" com nº ${number}.`;
}

(() => {
    {
        assert.deepEqual(userMessage(address), expect)
    }
})()
