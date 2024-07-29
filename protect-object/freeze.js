// Object.freeze() faz com que um objeto não possa ser alterado de nenhuma maneira.

// Transforma o objeto em imutável.

    // Importante! A imutabilidade é superficial, ou seja, as propriedades do objeto que são objetos ou arrays ainda podem ser modificadas, a menos que essas propriedades também sejam congeladas.


// Objetos com freeze são somente leitura


// Object.freeze() impede:

    // 1 - Adição de novas propriedades: Não é possível adicionar novas propriedades ao objeto.

    // 2 - Exclusão de propriedades existentes: Não é possível deletar propriedades do objeto.

    // 3 - Modificação de valores de propriedades existentes: Não é possível alterar os valores das propriedades existentes.

    // 4 - Alteração de propriedades de configuração: Não é possível alterar os atributos de configuração de propriedades (como writable, enumerable, configurable).

const car = {
    type: 'BMW',
    model: 734,
    color: 'black',
    features: {
        sunroof: true,
        navigation: false
    }
};

// Congelando o objeto car
Object.freeze(car);

car.color = 'blue'; // Tentativa de mudar o valor da propriedade (não terá efeito)
delete car.model; // Tentativa de deletar a propriedade (não terá efeito)
car.newFeature = 'heated seats'; // Tentativa de adicionar uma nova propriedade (não terá efeito)

console.log(car); // { type: 'BMW', model: 734, color: 'black', features: { sunroof: true, navigation: false } }

// Propriedades aninhadas podem ser modificadas a menos que também sejam congeladas
car.features.sunroof = false;
console.log(car.features); // { sunroof: false, navigation: false }

Object.freeze(car.features)
car.features.navigation = true;
console.log(car);


// A imutabilidade proporcionada por Object.freeze() é superficial.

// Para aplicar object.freeze em todas as propriedades que são objetos:

function deepFreeze(obj) {
    Object.freeze(obj);

    Object.keys(obj).forEach((key) => {
        if (obj[key] !== null && typeof obj[key] === 'object' && !Object.isFrozen(obj[key])) {
            deepFreeze(obj[key]);
        }
    });

    return obj;
}

// Congelando o objeto car profundamente
deepFreeze(car);
