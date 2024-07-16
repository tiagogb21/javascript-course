class Fibonacci {
    // usamos essa sintaxe para não acumular nada na memória
        // * --> iterator
        // yield --> generator
    * execute(input, current = 0, next = 1) {
        // Parou! Processou todas as sequências
        if(input === 0) return;

        // retorna o valor!
        yield current;

        // delega a função, mas não retorna valor
        yield * this.execute(input - 1, next, current + next)
    }
}

module.exports = Fibonacci;
