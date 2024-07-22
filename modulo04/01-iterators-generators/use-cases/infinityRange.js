// Contador infinito

function* infiniteSequence() {
    var i = 0;
    while (true) {
        yield i++;
    }
}

// ferramenta poderosa de monitoramento global, por exemplo, se quisermos contar a quantidade de promises que uma aplicação criou durante o tempo de vida, podemos fazer algo assim:

function* sequence() {
    var i = 1;
    while (true) {
        yield i++;
    }
}

const promisesCreatedCounter = sequence();
let promisesCreatedTotal = 0;

const proxyPromise = new Proxy(Promise, {
    get(target, prop) {
        if (prop === "prototype") {
            promisesCreatedTotal = promisesCreatedCounter.next().value;
        }
        return target[prop];
    },
});

const p = new proxyPromise((resolve) => {
    resolve("done");
});

p.then(() => {
    console.log("Promise resolved");
});

console.log("Promises created: " + promisesCreatedTotal); // Promises Created: 1

// Além disso, cada instancia de uma sequência dessas é única, o que significa que você pode reutilizar o mesmo contador em diversos lugares que ele sempre vai começar do 1.
