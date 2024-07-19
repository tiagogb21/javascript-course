const assert = require("assert");

// Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:

function showEven(n1, n2) {
    n1 = n1 % 2 === 0 ? n1 : n1 + 1;
    return Array.from({ length: Math.floor((n2 - n1) / 2) + 1 }, (_, i) => n1 + i * 2);
}

(() => {
    assert.deepEqual(showEven(1, 15), [2,4,6,8,10,12,14]);
})()
