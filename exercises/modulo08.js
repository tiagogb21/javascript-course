const randomArray = ['text', 3, 7, 'github', 13, 'dev'];

function numbersOnly(randomArray) {
    return randomArray.filter((element) => !isNaN(element))
}

console.log(numbersOnly(randomArray))
