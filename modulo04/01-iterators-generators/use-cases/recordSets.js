// recordSets: são estruturas que buscam dados, por exemplo, de um banco de dados e, ao invés de retornar todos os valores de uma única vez, retornam um a um de forma a não encher a memória.

const linha = [
    {
        nome: "Alan Turing",
        id: 1,
        idade: 42,
        titulo: "Pai da computação",
    },
    {
        nome: "Ada Lovelace",
        id: 2,
        idade: 36,
        titulo: "Primeira programadora",
    },
    {
        nome: "Grace Hopper",
        id: 3,
        idade: 85,
        titulo: "Inventora do compilador",
    },
];

const findInDatabase = (skip, limit) => {
    return linha.slice(skip, skip + limit);
};

function* recordSet() {
    let skip = 0;
    // quantidade de registros que a gente quer pular do array
    const limit = 1;
    // fazemos a primeira iteração e salvamos o registro atual no currentRecord
    let currentRecord = findInDatabase(skip, limit);

    // podemos criar um loop validando se o resultado recebido é válido, ou seja, se ele ainda tem registros no banco, se sim, vamos somar o skip com o limite de dados que queremos, no caso é apenas 1 por vez, e retornar o resultado atual e então pausar a execução.
    while (currentRecord.length > 0) {
        skip += limit;
        yield currentRecord[0];
        currentRecord = findInDatabase(skip, limit);
    }
}

const records = recordSet()

console.log(records.next())
console.log(records.next())

// variação do generator para não ter o estado interno e definir a condição de parada dentro do loop dessa forma:

// function* recordSet() {
//   let skip = 0
//   const limit = 1

//   while (record.length > 0) {
//     const record = findInDatabase(skip, limit)
//     if (record.length === 0) return
//     skip += limit
//     yield record[0]
//   }
// }
