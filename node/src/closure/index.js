'strict mode'

// Escopo Léxico: reconhecimento feito por uma função, primeiro de forma interna e depois buscando nos pais

// Escopo Léxico: define como os nomes de variáveis serão tratados nas funções aninhadas

// Filhos aninhados tem acesso ao escopo de seus pais
// Os pais não possuem acesso ao escopo de seus filhos

const globalScope = "escopo global";
const father = "John Doe";

function myFunction() {
    // 1 - busca no escopo interno
    // 2 - se não encontrar, busca no escopo externo
    console.log(globalScope)

    // não vai retornar um erro
    // apesar de existir uma variável com o mesmo nome no escopo pai
    // a função reconhece e guarda o escopo onde foi criada
    // primeiro procura no filho, se encontrar, não vai procurar no pai
    const father = "Johnny Doe";
    console.log(father)

    const mother = "Jane Doe";
    console.log(mother)

    myNestedFunction()

    function myNestedFunction() {
        const child = "Jasmin Doe";
        console.log(child)
    }
}

myFunction()

let x = 1;

function parentFunction() {
    let y = 2;
    function childFunction() {
        console.log(x + y)
    }
}

// Variáveis podem ser tornadas locais (privadas) com o uso de closure

// Variáveis ​​globais permanecem ativas até o seu encerramento (ex.: a página foi descartada)


