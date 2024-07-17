// const callback = require('./01-callback');
const { getUser, getPhone, getAddress } = require("./02-promise");

const messageError = (err) => console.error(`An error has occurred: ${err}`);

// console.log(callback)
getUser()
    .then((user) => {
        // Promise.all espera que todas as promessas dentro do array sejam resolvidas
        return Promise.all([getPhone(user.id), getAddress(user.id)])
            .then(([phone, address]) => {
                // Combinar os resultados em um único objeto
                const userData = {
                    ...user,
                    ...phone,
                    ...address,
                };
                console.log(userData);
                return userData; // Retorna o objeto combinado para o próximo .then() se necessário
            })
            .catch((err) => {
                messageError(err); // Trata erro se uma das promessas falhar
            });
    })
    .catch((err) => {
        messageError(err); // Trata erro na promessa getUser()
    });
