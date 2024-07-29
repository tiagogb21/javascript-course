// Métodos de Proteção de Objetos

const car = {
    type: 'BMW',
    model: 734,
    color: 'black',
};

console.log('Initial car object:', car); // { type: 'BMW', model: 734, color: 'black' }

// Alterar o valor da propriedade 'color'
car.color = 'blue';
console.log('After changing color:', car); // { type: 'BMW', model: 734, color: 'blue' }

// Incluir uma nova propriedade 'doors'
car.doors = 4;
console.log('After adding doors:', car); // { type: 'BMW', model: 734, color: 'blue', doors: 4 }

// Impede a adição de propriedades em objetos (mas NÃO a exclusão)
Object.preventExtensions(car);

// Tentar adicionar uma nova propriedade (não terá efeito)
car.fuelConsumption = 3000;
console.log('After attempting to add fuelConsumption:', car); // { type: 'BMW', model: 734, color: 'blue', doors: 4 }

// Excluir a propriedade 'doors'
delete car.doors;
console.log('After deleting doors:', car); // { type: 'BMW', model: 734, color: 'blue' }

// Verifica se um objeto é extensível
const isExtensible = Object.isExtensible(car);
console.log('Is car extensible?', isExtensible); // false

// Impede a adição e exclusão de propriedades em objetos
Object.seal(car);

// Tentar excluir a propriedade 'color' (não terá efeito)
delete car.color;
console.log('After attempting to delete color:', car); // { type: 'BMW', model: 734, color: 'blue' }

// Verifica se o objeto está selado
const isSealed = Object.isSealed(car);
console.log('Is car sealed?', isSealed); // true

// Impede quaisquer alterações em um objeto
Object.freeze(car);

// Tentar alterar a propriedade 'doors' (não terá efeito)
car.doors = 4;
console.log('After attempting to change doors:', car); // { type: 'BMW', model: 734, color: 'blue' }

// Tentar excluir a propriedade 'color' (não terá efeito)
delete car.color;
console.log('After attempting to delete color:', car); // { type: 'BMW', model: 734, color: 'blue' }


// Object.freeze() faz com que um objeto não possa ser alterado de nenhuma maneira. Ele impede:

    // 1 - Adição de novas propriedades: Não é possível adicionar novas propriedades ao objeto.

    // 2 - Exclusão de propriedades existentes: Não é possível deletar propriedades do objeto.

    // 3 - Modificação de valores de propriedades existentes: Não é possível alterar os valores das propriedades existentes.

    // 4 - Alteração de propriedades de configuração: Não é possível alterar os atributos de configuração de propriedades (como writable, enumerable, configurable).
