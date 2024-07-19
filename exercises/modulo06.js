const numbers = Array.from(
    { length: 10 },
    (_, i) => Math.round(Math.random() * 100)
);

console.log(numbers);

// Find the smallest number in an array

// Exercise solution:

const smallest = numbers.reduce((acc, curr) => {
    return curr < acc ? curr : acc;
});

// os Math.min(...arr)

console.log(smallest);

// Find the biggest number in an array

// Exercise solution:

const biggest = numbers.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
});

// os Math.max(...arr)

console.log(biggest);
