const assert = require("assert");

function* calculation(arg1, arg2) {
    yield arg1 * arg2;
}

function *main() {
    yield 'Hello!';
}

const generator = main()
console.log(generator.next())
console.log(generator.next())
