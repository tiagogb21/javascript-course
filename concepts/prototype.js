const person = {
    alive: true,
};

const musician = {
    playes: true,
};

// cada função construtora (ou objeto) tem uma propriedade chamada prototype.

console.log(musician.playes);

// se tentarmos acessar a propriedade alive de musician vamos obter undefined, por alive não é uma propriedade de musician, mas sim de person
console.log(musician.alive);

// podemos acessar a propriedade alive de person com musician, utilizando prototype
// prototype é uma forma de fazer com que objetos herdem propriedades de outros objetos
musician.__proto__ = person;

console.log(musician.alive);

console.log(musician.__proto__);

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
