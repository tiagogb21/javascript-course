const http = require("http");
const { once } = require("events");
const { DEFAULT_USER } = require("./utils/constants/general");

const PORT = 3001;

const routes = {
    "/contact:get": (request, response) => {
        response.write("contact us page");
        return response.end();
    },
    /* 
    curl -i -X POST --data '{"username": "JohnDoe", "password": "123"}' localhost:3001/login
    */
    "/login:post": async (request, response) => {
        // toda vez que a informação retornou um dado, eu pego a informação
        const user = JSON.parse(await once(request, "data"));
        const toLower = (text) => text.toLowerCase();

        if (
            toLower(user.username) !== toLower(DEFAULT_USER.username) ||
            user.password !== DEFAULT_USER.password
        ) {
            response.writeHead(401);
            // write --> escrever várias vezes
            // end --> escrever uma única vez
            response.end("Log in failed!");
            return;
        }

        return response.end("Log in succeded!");
    },
    default(request, response) {
        response.writeHead(404);
        return response.end("not found!");
    },
};

function handler(request, response) {
    const { url, method } = request;

    const routeKey = `${url.toLowerCase()}:${method.toLowerCase()}`;

    const chosen = routes[routeKey] || routes.default;

    return chosen(request, response);
}

const app = http
    .createServer(handler)
    .listen(PORT, () => console.log(`API running at ${PORT}`));

module.exports = app;
