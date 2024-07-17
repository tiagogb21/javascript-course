const fetch = require('node-fetch');

const USER_BASE_URL = 'https://api.github.com';

const getUserData = (user) => `${USER_BASE_URL}/users/${user}`;

class GithubUserInfo {
    #user;

    constructor(user) {
        this.#user = user;
    }

    async getData() {
        try {
            const response = await fetch(getUserData(this.#user)); // Faz a requisição e aguarda a resposta
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json(); // Converte o corpo da resposta para JSON
            console.log(data); // Exibe os dados JSON no console
            return data; // Retorna os dados JSON obtidos
        } catch (error) {
            console.error('Fetch error:', error);
            throw error; // Lança o erro para ser tratado fora da função getData(), se necessário
        }
    }
}

const user = new GithubUserInfo('tiagogb21');

user.getData()
    .then(data => {
        // Aqui você pode continuar a manipulação dos dados, se necessário
    })
    .catch(error => {
        // Trata erros que possam ocorrer durante a requisição ou conversão para JSON
        console.error('Error in getData:', error);
    });
