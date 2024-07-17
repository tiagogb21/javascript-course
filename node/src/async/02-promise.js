// Ciclo de vida da Promise

//Estados
// Pending: inicial - ainda não terminou/foi rejeitado.
// Fulfilled: todas as operações foram executadas com sucesso
// Rejected: quando a operação falhou

// Promise()
// .then(resolverQuandoTerminar, tratarErro)
// .catch(tratarErro)
// .finally()

// obs.: .catch = .then(null, tratarErro)

// obs.: o .then e o .catch também retornam uma nova promise

// Podemos passar uma nova Promise para dentro do then/catch

// obs.: Promises resolvem o problema principal do callback hell.

function getUser() {
    // quando sucesso --> resolve
    // quando der um problema --> reject(ERRO)
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function () {
            return resolve({
                id: 1,
                name: "John Doe",
                birthDay: new Date().getFullYear() - 20,
            });
        }, 100);

        // Se caísse no erro:
        // reject(someError);
    });
}

function getPhone(userId) {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function () {
            return resolve({
                userId,
                phone: "9182345",
                ddd: 35,
            });
        }, 1000);
    });
}

function getAddress(userId) {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function () {
            return resolve({
                userId,
                street: "rua das andorinhas",
                city: "pedrinhas",
                state: "sp",
            });
        }, 1000);
    });
}

module.exports = {
    getUser,
    getPhone,
    getAddress,
};
