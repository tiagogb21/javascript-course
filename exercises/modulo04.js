// Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:

// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master

function experience(studyYears) {
    if (studyYears < 0 || isNaN(studyYears)) return "Wrong value!";

    const levels = ["Iniciante", "Intermediário", "Avançado", "Jedi Master"];

    const limits = [1, 3, 6];

    const index = limits.findIndex((limit) => studyYears <= limit);

    return levels[index === -1 ? levels.length - 1 : index];

    // ---------------------------------

    // if (studyYears <= 1) return "Iniciante";
    // if (studyYears <= 3) return "Intermediário";
    // if (studyYears <= 6) return "Avançado";
    // return "Jedi Master";

    // ---------------------------------

    // switch(true) {
    //     case (studyYears >= 0 && studyYears <= 1):
    //         return 'Iniciante';
    //     case (studyYears > 1 && studyYears <= 3):
    //         return 'Intermediário';
    //     case (studyYears > 3 && studyYears <= 6):
    //         return 'Avançado';
    //     default:
    //         return 'Jedi Master';
    // }
}

console.log(experience("a"));
console.log(experience(-1));
for (let i = 0; i < 8; i++) {
    console.log(`${i} - ${experience(i)}`);
}
