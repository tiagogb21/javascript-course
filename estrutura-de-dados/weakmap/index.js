// WeakMap ==> coleção de pares chave-valor em JavaScript onde as chaves devem ser objetos e os valores podem ser de qualquer tipo

const { randomUUID } = require("crypto");

// As chaves em um WeakMap são referenciadas "fracamente" ==> permitem que o garbage collector (coletor de lixo) remova esses pares se não houver outras referências às chaves.

/*
 - Características Principais:
 -
 - Chaves: Apenas objetos.
 - Valores: Qualquer tipo.
 -
 - Referências fracas: Permite a coleta de lixo das chaves se não forem mais referenciadas em outros lugares.
*/

let obj = { id: new randomUUID()};

const wMap = new WeakMap;

const obj2 = {};

wMap.set(obj, 'valor 1');
wMap.set(obj2, 'valor 2')

console.log(wMap)

console.log(wMap.get(obj))
console.log(wMap.get(obj2));
