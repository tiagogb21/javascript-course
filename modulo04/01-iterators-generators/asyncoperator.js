const { readFile, stat, readdir } = require("fs/promises");

async function* systemInfo() {
    const file = await readFile(__filename);
    yield { file: file.toString() };

    const { size } = await stat(__filename);
    yield { size };

    const dir = await readdir(__dirname);
    yield { dir };
}

(async () => {
    for await (const item of systemInfo()) {
        console.log("system info", item);
    }
})();
