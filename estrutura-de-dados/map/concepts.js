'strict mode';

/*
-  Maps são diferentes de objetos.
- Em objetos chaves podem ser somente string, numero e symbol
- O Map permite qualquer tipo, até mesmo objetos e array
- Assim como array, ele mantém a ordem dos elementos (diferente de objetos)
- Você consegue acesso rápido a um valor (semelhante a objetos)
*/

const map = new Map([["message", "Hello"]]);
map.set(0, "Programador");
map.set(true, "Tem experiência com js");

// Acessando o map

console.log(map);

console.log("----------------------------");

// Acessando valores únicos:

console.log("John Doe"[2]);

console.log(map.get(0));
console.log(map.get(true));

console.log("----------------------------");

// Criando um objeto para ser uma chave do map

const obj = { slug: "message" };

map.set(obj, "bordo");

// Acessando a chave criada

console.log(map.get(obj));

console.log("----------------------------");

// Da mesma forma que conseguimos verificar o tamanho de um array também podemos verificar o tamanho de um map

console.log([1, 2, 3, 4, 5].length);

console.log(`O tamanho do map é ${map.size}`);

console.log("----------------------------");

const arr = [];
// Quando criamos um índice inexistente para um array, o js automaticamente preenche com n undefined items, até aquele indíce
// Lembrando que conta de 0 até N
arr[50] = "oioi";
console.log('arr: ', arr);
console.log(`O valor do elemento no índice 10 do array é: ${arr[10]}`);
// 50 valores undefined e 1 valor preenchido
console.log(`O tamanho do array é: ${arr.length}`);

console.log("----------------------------");

const message = 'Hello, world';

map.set(message, `${message} caracteres`);

console.log(map)

// NÃO podemos serializar diretamente um map
// Os objetos Map possuem uma estrutura mais complexa e não são diretamente compatíveis com o formato JSON padrão.
// Quando tentamos usar JSON.stringify em um objeto Map, ele retorna um objeto vazio {} porque JSON.stringify não sabe como lidar com a estrutura do Map.
// O JSON espera um objeto que consista apenas em pares de chave-valor com chaves sendo strings.
console.log(`O valor de map é: ${JSON.stringify(map)}`)
console.log(map.size);

console.log(Object.fromEntries(map))

const mapToJson1 = (map) => {
    return JSON.stringify(Object.fromEntries(map));
};

// Vantagem: permite que implementos regras de negócio
const mapToJson2 = (map) => {
    const jsonObj = {};
    map.forEach((value, key) => {
      jsonObj[key] = value;
    });
    return JSON.stringify(jsonObj);
};

console.log(`O valor de map é: ${mapToJson1(map)}`)
console.log(`O valor de map é: ${mapToJson2(map)}`)

console.log("----------------------------");

/*
  * - has
  * - delete
  * - clear
  * - forEach
  * - keys
  * - values
  * - entries

  * - size
  */

map.set(51, 'I am the number 51');

console.log(`Map has the key 51: ${map.has(51)}`);

if(map.has(51)) {
    map.delete(51);
}

console.log(`Map has the key 51: ${map.has(51)}`);

console.log("----------------------------");

// Para mostrar o valor das chaves:

console.log(Array.from(map.keys()));

map.forEach(function (value, key) {
    console.log(key);
});

for (let k of map.keys()) {
    console.log("id", k);
}

console.log(`The keys of the map are: ${[...map.keys()]}`)

console.log("----------------------------");

// Para mostrar o valor dos valores:

console.log(Array.from(map.values()));

for (let [key, value] of map) {
    console.log(value);
}

for (let v of map.values()) {
    console.log("value", v);
}

console.log(`The values of the map are ${[...map.values()]}`)

console.log("----------------------------");

// Para mostrar o valor das chaves e dos valores:

console.log(Array.from(map.entries()));

for (let [key, value] of map.entries()) {
    console.log("entry", key, value);
}

console.log("----------------------------");

const usuarios = new Map();
usuarios.set(0, { nome: "Ayrton", pais: "Brasil" });
usuarios.set(1, { nome: "José", pais: "Uruguai" });
usuarios.set(2, { nome: "Maria", pais: "Brasil" });

const usuariosBrasil = Array.from(usuarios.entries()).filter(function (
    usuarioEntrada
) {
    return usuarioEntrada[1].pais === "Brasil";
});

const mapUsuariosBrasil = new Map(usuariosBrasil);

console.log(mapUsuariosBrasil.get(2));
