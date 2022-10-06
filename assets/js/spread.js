const aereasNacionais = ['Azul', 'Gol', 'Latam']

const airCompanies = [
    ...aereasNacionais, //pega tudo que tá na const aereasNacionais e junta c/airCompanies
    'Delta', 
    'United Airlines',
    'Emirates',
    'Qatar',
    'Tap',
];

console.log(airCompanies);

const [azul, voeGol, latam, delta, ...internacionais] = airCompanies;//aqui criou variáveis para guardar cada valor dos index requisitados do array(voegol=Gol)
console.log(delta, "verificando a variavel delta");
console.log(internacionais, "verificando a variavel internacionais");
console.log(voeGol)
console.log(airCompanies.length)

//exemplo de desestruturação 
const user = {
    name: 'Flávia Sorati',
    email: 'flasorati@gmail.com',
    password: '123456'
}

const { password, ...data }  = user;
console.log(data, "retornando dados da API");
console.log(password);

const body = document.querySelector("body");
body.style.width = "100%";
body.style.height = "100vh";

body.addEventListener("mouseover", (event) => {
    body.style.backgroundColor = "#d4d4d4";
    console.log('executou o evento', event);
});