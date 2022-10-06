//diferenças entre arrow function x função nominal ou expressão de função.

const resultado = document.querySelector("#resultado");
let myFunc1 = {
    showArguments(){
        resultado.innerHTML = arguments;
        console.log(arguments);
    },
};
//chamando a função
myFunc1.showArguments(
    "Vai Corinthians",
    "Full-Stack Developer",
    "React",
    "NodeJS",
    "TypeScript"
);

let myFunc2 = {
    showArguments: () => {
        //resultado.innerHTML = arguments;
        //console.log(...arguments); //spread operator ...
    },
};
//arrow function não acessa os arguments
myFunc2.showArguments(
    "Vai Corinthians",
    "Full-Stack Developer",
    "React",
    "NodeJS",
    "TypeScript"
);
//arrow function não existe o this, ele não pega a variável declarada
let user = {
    name: "Flávia Sorati",
    usandoArrow: () => {
        console.log("Meu nome é", this.name, "Arrow Function");
    },
    usandoNominal: () => {
        console.log("Meu nome é", this.name, "Nominal Function");
    },
};

user.usandoArrow();
user.usandoNominal();


