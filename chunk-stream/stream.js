import { createWriteStream, createReadStream } from 'fs';
import { createInterface } from 'readline';
import http from 'http';

const file = createWriteStream("./big.txt");

for (let i = 0; i <= 1e4; i++) {
    file.write(
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n"
    );
}

file.end();

const server = http.createServer((req, res) => {
    const readStream = createReadStream('./big.txt');
    const rl = createInterface({
        input: readStream,
        crlfDelay: Infinity
    });

    let delay = 0;

    rl.on('line', (line) => {
        setTimeout(() => {
            res.write(line + '\n');
        }, delay);
        delay += 1000;
    });

    rl.on('close', () => {
        setTimeout(() => {
            res.end();
        }, delay);
    });
});

server.listen(8000, () => {
    console.log('Server is listening on port 8000');
});