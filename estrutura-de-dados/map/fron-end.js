// 1 - Associação de Eventos a Elementos

let eventMap = new Map();
// Criamos um objeto
let button = document.createElement('button');
// Definimos que todo objeto criado vai ter um evento alert
eventMap.set(button, () => alert('Button clicked!'));
// Associa o evento ao botão
button.addEventListener('click', eventMap.get(button));
document.body.appendChild(button);
