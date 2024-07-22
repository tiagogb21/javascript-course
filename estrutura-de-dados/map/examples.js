// Se tentarmos declarar um objeto com duas chaves iguais
// Vai acontecer da chave que está mais embaixo substituir a chave que está mais acima
const objWithSamekey = {
    a: 1,
    a: 2,
};

console.log(objWithSamekey);

// Podemos utilizar o map para:

// 1 - dicionário de configurações
let config = new Map();

config.set("theme", "dark");
config.set("layout", "grid");

// 2 - Para contar a frequência de elementos em uma coleção:
let words = ["apple", "banana", "apple", "orange", "banana", "apple"];

let countMap = new Map();

words.forEach((word) => {
    countMap.set(word, (countMap.get(word) || 0) + 1);
});

console.log(countMap); // Saída: Map { 'apple' => 3, 'banana' => 2, 'orange' => 1 }

console.log("----------------------------");

// 3 - Para contar a frequência de letras em um texto:

function countLettersInText(text) {
    let arrayText = text.split("").sort();
    let countMap = new Map();
    arrayText.forEach((letter) => {
        countMap.set(letter, (countMap.get(letter) || 0) + 1);
    });
    return countMap;
}

let text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

console.log(countLettersInText(text));

console.log("----------------------------");

// 4 - Cache / Associação de Dados

let cache = new Map();

function fetchData(id) {
    if (cache.has(id)) {
        return cache.get(id);
    }
    // Simular uma operação cara
    let result = id * 2;
    cache.set(id, result);
    return result;
}

console.log(fetchData(1234));

console.log('----------------------------');

// 5 - Tabelas de Procura:

let gradeMap = new Map([
    ["A", "Excellent"],
    ["B", "Good"],
    ["C", "Average"],
    ["D", "Poor"],
    ["F", "Fail"],
]);

console.log(gradeMap);

console.log(gradeMap.get("A")); // Saída: Excellent

// 6 - Gestão de Estados
    // Manter estados complexos em aplicações, como em jogos ou sistemas de gerenciamento.

let gameState = new Map();

gameState.set('level', 1);
gameState.set('score', 0);
gameState.set('lives', 3);

// 7 - Traduções e Localizações
    // Armazenar pares de chave de idioma e texto traduzido para internacionalização.

let translations = new Map();
translations.set('hello', 'Olá');
translations.set('world', 'Mundo');
