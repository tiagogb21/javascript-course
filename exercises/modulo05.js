// Dado o seguinte vetor de objetos:

const users = [
    {
        name: "Diego",
        skills: ["Javascript", "ReactJS", "Redux"]
    },
    {
        name: "Gabriel",
        skills: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

// Escreva uma função que produza o seguinte resultado:

// O Diego possui as habilidades: Javascript, ReactJS, Redux O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir

function writeSkillMessage(users) {
    return users.map((obj) => `O ${obj.name} possui as habilidades: ${obj.skills.join(', ')}`).join('\n');
}

console.log(writeSkillMessage(users));
