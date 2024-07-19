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

// setPrototypeOf(objetoQueHerda, objetoPrototipo) --> utilizamos no lugar de __proto__ para setar o valor de objetos
Object.setPrototypeOf(musician, person);

// getPrototypeOf --> o código abaixo pode ser utilizado para ver as propriedades herdadas através de prototype
console.log(Object.getPrototypeOf(musician));

// Podemos verificar a igualdade da seguinte forma
console.log(Object.getPrototypeOf(musician) === musician.__proto__);

const guitarist = {
    strings: 6,
    __proto__: musician,
};

// guitarist vai herdar todos os métodos e propriedades através da herança prototipica
console.log(guitarist.alive);
console.log(guitarist.playes);
console.log(guitarist.strings);
