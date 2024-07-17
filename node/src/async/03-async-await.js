// Async e Await
// Facilita a visualização do fluxo de funções
// NÃO altera a performance da aplicação
// Veio do C#
// SOMENTE será usado quando precisarmos tratar a resposta da chamada

// Obs.: ao colocar o async em uma função, automaticamente estamos fazendo com que ela se torne uma Promise

// Fornece uma maneira síncrona de escrever programas assíncronos.

async function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: "John Doe",
                birthDay: new Date().getFullYear() - 20,
            });
        }, 100);
    });
}

async function getPhone(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                userId,
                phone: "9182345",
                ddd: 35,
            });
        }, 1000);
    });
}

function getAddress(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(async function () {
            resolve({
                userId,
                street: "rua das andorinhas",
                city: "pedrinhas",
                state: "sp",
            });
        }, 1000);
    });
}

console.log(getUser());

module.exports = {
    getUser,
    getPhone,
    getAddress,
};
