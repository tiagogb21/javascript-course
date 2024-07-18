// Função construtora
function Pokemon(name) {
    this.name = name;
}

const pokemon1 = new Pokemon("Pikachu");

console.log(pokemon1);

// adicionamos um método ao objeto pokemon
Pokemon.prototype.speak = function () {
    console.log(`${this.name} Chuuuu!!!`);
};

const pokemon2 = new Pokemon("Pikachu");

pokemon2.speak();

// resumindo:

    // Função Construtora --> Instância (objeto) --> Prototype
        // .prototype (objeto que contém métodos/propriedades)
        // .__proto__ (referência para o protótipo)

    // prototype --> É uma propriedade das funções construtoras.
        // Define métodos e propriedades que serão herdados por instâncias da função construtora.

    // __proto__ --> É uma propriedade dos objetos.
        // Aponta para o protótipo do objeto (ou seja, o objeto de onde ele herdou métodos e propriedades).
