// Coleção de pares chave-valor, onde as chaves podem ser de qualquer tipo (incluindo objetos e funções).

// preserva a ordem de inserção das chaves e oferece métodos eficientes para adicionar, remover e acessar valores.

// obs.: uma chave em um map pode ocorrer apenas uma vez

let map = new Map();

const obj = { a: 1 }

// Adicionando valor
    // map.set(key, value)
map.set("chave", "valor");
map.set(obj, "objeto");

// Verificando a estrutura:
console.log(map);

console.log('----------------------------');

// Recuperando o valor do tamanho
console.log(`O map possui o tamanho: ${map.size}`);

console.log('----------------------------');

const mapObj = map.get("chave");

// Recuperando valor
    // map.get(key)
console.log(`O valor da "chave" é: "${mapObj}"`);

const newObj = obj;

obj.a = 2;

console.log('----------------------------');

// Atualizando valor;
map.set(newObj, "objeto");

console.log(map);
