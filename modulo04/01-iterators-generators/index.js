const assert = require("assert");

function* calculation(arg1, arg2) {
    yield arg1 * arg2;
}

function *main() {
    yield 'Hello';
    yield '-';
    yield 'World';
    // colocamos o * para indicar que queremos que calcule:
    yield* calculation(4, 7)
}

const generator = main()

assert.deepStrictEqual(generator.next(), { value: 'Hello', done: false })
assert.deepStrictEqual(generator.next(), { value: '-', done: false })
assert.deepStrictEqual(generator.next(), { value: 'World', done: false })
assert.deepStrictEqual(generator.next(), { value: 28, done: false })
assert.deepStrictEqual(generator.next(), { value: undefined, done: true })

// Outras formas de iterar pelo valor:
assert.deepStrictEqual(Array.from(main()), ['Hello', '-', 'World', 28])
assert.deepStrictEqual([...main()], ['Hello', '-', 'World', 28])
