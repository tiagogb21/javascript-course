import http from 'http';

http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';

        // Recebe os dados em partes
        req.on('data', chunk => {
            body += chunk.toString(); // Concatena as partes no body
        });

        // Quando todos os dados forem recebidos
        req.on('end', () => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(`Dados recebidos: ${body}`);
            res.end();
        });
    } else {
        res.writeHead(405, {'Content-Type': 'text/html'});
        res.write('Método não permitido');
        res.end();
    }
}).listen(8080);