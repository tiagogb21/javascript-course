// prototype --> É uma propriedade das funções construtoras em JavaScript. Cada função construtora tem uma propriedade prototype que aponta para um objeto.

// __proto__ --> É uma propriedade interna de todos os objetos em JavaScript (exceto Object.prototype) que aponta para o protótipo do objeto. Ele refere-se ao objeto a partir do qual o objeto foi herdado.

    // É usado para acessar o protótipo de um objeto diretamente. No entanto, é considerado uma propriedade não padrão e sua utilização não é recomendada em código de produção. Em vez disso, o método padrão Object.getPrototypeOf deve ser usado.

// Se tentarmos acessar uma propriedade ou método em um objeto e ele não for encontrado, o mecanismo de herança procura na cadeia de protótipos até encontrar o que estamos procurando ou até chegar ao final da cadeia.

// Herança prototípica em cadeia:

function Mammal(name) {
    this.name = name;
}

Mammal.prototype.walk = function () {
    console.log(this.name + ' is walking!')
}

function Dog(name, breed) {
    Mammal.call(this, name);
    this.breed = breed
}

Dog.prototype = Object.create(Mammal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    console.log(this.name + ' is barking!');
}

let myDog = new Dog('Rex', 'labrador')

myDog.walk()
myDog.bark()
