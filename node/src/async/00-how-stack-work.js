function operacaoDemorada() {
    setTimeout(() => {
        console.log("Operação demorada concluída");
    }, 2000); // Simula uma operação que demora 2 segundos
}

// Função principal que chama outras funções
function principal() {
    console.log("Início da função principal");
    operacaoDemorada(); // Chamada de função assíncrona

    console.log("Fim da função principal");
}

// Chamada da função principal
principal();

console.log("Script concluído");
