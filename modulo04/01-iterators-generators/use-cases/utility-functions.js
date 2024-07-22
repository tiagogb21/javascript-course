// 1 - take: função que, dado um iterable, pega um número n de elementos desse iterable e retorna:

const take = (n) =>
    function* (iteravel) {
        let i = 0;
        for (let elemento of iteravel) {
            if (i >= n) return;
            yield elemento;
            i++;
        }
    };

const arraySlice = take(4)([1, 2, 3, 4, 5, 6]); // [1, 2, 3, 4]

console.log(arraySlice.next()); // { value: 1, done: false }
console.log(arraySlice.next()); // { value: 2, done: false }
console.log(arraySlice.next()); // { value: 3, done: false }
console.log(arraySlice.next()); // { value: 4, done: false }
console.log(arraySlice.next()); // { value: undefined, done: true }

// 2 - repeat: Uma variação da função de sequencia onde temos o mesmo valor repetido infinitas vezes:

function* repeat(valor) {
    while (true) {
        yield valor;
    }
}

const repeatValue = repeat("Tiago");

console.log(repeatValue.next()); // { value: 'Tiago', done: false }
console.log(repeatValue.next()); // { value: 'Tiago', done: false }
console.log(repeatValue.next()); // { value: 'Tiago', done: false }
console.log(repeatValue.next()); // { value: 'Tiago', done: false }

// 3 - scan: Podemos definir uma função que é parecida com um Array.prototype.reduce porém ao invés de termos um único valor final, podemos ter cada passo dos valores intermediários como um array:

function* scan(reducer, valorInicial, iteravel) {
    let resultado = valorInicial;
    yield resultado;
    for (const atual of iteravel) {
        resultado = reducer(resultado, atual);
        yield resultado;
    }
}
