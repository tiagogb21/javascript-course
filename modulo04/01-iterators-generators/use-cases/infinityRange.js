// Contador infinito

function* infiniteSequence() {
    var i = 0;
    while (true) {
        yield i++;
    }
}

// ferramenta poderosa de monitoramento global, por exemplo, se quisermos contar a quantidade de promises que uma aplicação criou durante o tempo de vida, podemos fazer algo assim:
