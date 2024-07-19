const getAlphabet = () => {
    return Array.from({length: 26}, (_, i) => String.fromCharCode(65 + i).toLowerCase()).join('');
};

console.log(getAlphabet());

// Sort strings by Alphabetical Order
const text = 'Hello, world!';

let orderedText = text.split('').sort().join('');

console.log(orderedText)
