// Neste caso a variável counter será incrementada toda vez que a função add for chamada

let counter = 0;

// A função tem acesso as variáveis do escopo do seu pai
function add() {
    // Uma das soluções seria declarar uma variável interna
    counter += 1;
    console.log(counter);
}

add(); // 1
add(); // 2
add(); // 3

function add1() {
    // Uma das soluções seria declarar uma variável interna
    let counter = 0;
    // Problema: zeramos o contador toda vez que chamamos a função
    counter += 1;
    console.log(counter);
}

add1(); // 1
add1(); // 1
add1(); // 1

function add2() {
    // Uma das soluções seria declarar uma variável interna
    let counter = 0;
    counter += 1;
    console.log(counter);
}

add2(); // 1
add2(); // 1
add2(); // 1

function add3() {
    let counter = 0;
    // obs.: precisamos acessar a função plus fora da função add3
    // além disso counter não pode ser acessado mais do que uma vez
    function plus() {
        counter += 1;
    }
    plus();
    console.log(counter);
}

// Solução:
const add4 = (function () {
    let counter = 0;
    return function () {
        counter += 1;
        console.log(`Counter: ${counter}`);
    };
})();

add4();
add4();
add4();
