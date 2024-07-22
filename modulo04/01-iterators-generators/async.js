const { readFile, stat, readdir } = require("fs/promises");

function* promisified() {
    yield readFile(__filename);
    yield Promise.resolve("Hey Dude!");
}

Promise.all([...promisified()]).then((results) =>
    console.log("promisified", results)
);

(async () => {
    for await (const item of promisified()) {
        console.log("for await", item.toString());
    }
})();
