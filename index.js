const numbers1 = Array.from({ length: 10 }, (_, i) =>
    Math.round(Math.random() * 10)
);

console.log("-------------");

console.log(numbers1);

console.log("-------------");

console.log(`min: ${Math.min(...numbers1)}`);
console.log(`max: ${Math.max(...numbers1)}`);

console.log("-------------");

console.log(`push: ${numbers1.push(10)}`); // retorna o tamanho do array
console.log(`push: ${numbers1}`); // retorna o array original modificado
console.log(`pop: ${numbers1.pop()}`); // retorna o tamanho do array
console.log(`pop: ${numbers1}`); // retorna o array original modificado

console.log("-------------");

console.log(`unshift: ${numbers1.unshift(10)}`); // retorna o tamanho do array
console.log(`unshift: ${numbers1}`); // retorna o array original modificado
console.log(`shift: ${numbers1.shift()}`); // retorna o tamanho do array
console.log(`shift: ${numbers1}`); // retorna o array original modificado

console.log("-------------");

const numbers2 = Array.from({ length: 20 }, (_, i) =>
    Math.round(Math.random() * 10 + i)
);

console.log(numbers2);
console.log(numbers2.sort());

console.log(numbers2.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0)));

console.log("-------------");

const array1 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]
console.log(array1);

// Fill with 5 from position 1
console.log(array1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]
console.log(array1);

console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]
console.log(array1);

console.log("-------------");

const array2 = ['a', 'b', 'c', 'd', 'e'];

// Copy to index 0 the element at index 3
console.log(array2.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]
console.log(array2)

// Copy to index 1 all elements from index 3 to the end
console.log(array2.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]
console.log(array2)
