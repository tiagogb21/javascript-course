const assert = require("assert");

// Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript" e retorna um booleano true/false caso exista ou não.

function hasSkill(skills) {
    return skills.includes("Javascript")
}

let skillsWithJavascript = ["Javascript", "ReactJS", "React Native"];
let skillsWithoutJavascript = ["ReactJS", "React Native"];

console.log(hasSkill(skillsWithJavascript));
console.log(hasSkill(skillsWithoutJavascript));

(() => {
    {
        // checks if the function returns false when the word "javascript" isn't present
        assert.deepEqual(hasSkill(skillsWithoutJavascript), false)
    }

    {
        // checks if the function returns true when the word "javascript" is present
        assert.deepEqual(hasSkill(skillsWithJavascript), true)
    }
})()
