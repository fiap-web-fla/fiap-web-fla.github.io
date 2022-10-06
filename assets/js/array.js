const carrosDOM = document.querySelector("#carros");

const veiculos = ['Chevrolet', 'Ford', 'Fiat', 'Vw', 'Honda', 'Toyota', 'Hyundai'];
//ADICIONA AO FINAL PUSH
veiculos.push("BMW", "Mercedes");

//adiciona no início unshift
veiculos.unshift("Audi");

//remove do inicio do array
const primeiro = veiculos.shift();
console.log("Removendo o primeiro elemento do array", primeiro);

//remove do final do array
const ultimo = veiculos.pop();
console.log("Removendo o último elemento do array", ultimo);

//remove um elemento do array
const posicao = 2;
const removido = veiculos.splice(posicao, 1);//na posição 2, remove 1 elemento

//removendo mais de um elemento do array
const removidos = veiculos.splice(1, 2);

//removendo e adicionando elementos no lugar
const removidos2 = veiculos.splice(1, 2, "Ferrari", "Lamborguini");

veiculos.forEach((value, key) => {
    carrosDOM.innerHTML += `<option value="${key}">${value}</option>`;
});

//imutabilidade- os dados não mudam, evoluem
//splice - remove e adiciona elementos

const nbaTeams =['Warriors', 'Raptors', 'Lakers', 'Celtics', 'Bucks', '76ers'];
//slice: o primeiro parâmetro é opcional, e começa em zero.
//o último parâmetro determina até onde deve ser filtrado, porém excluindo este último elemento.
const newNba = nbaTeams.slice(3, 5); 
console.log(nbaTeams.slice(3, 5));
console.log(nbaTeams);
console.log(nbaTeams.slice(-1));//pra retornar o último
console.log(nbaTeams.slice(0, 1));//pra retornar o primeiro


//slice - retorna um novo array

//map, filter, reduce, find, findIndex, search, sort, reverse, split, join, substring

const name = "Flávia Sorati de Souza Pereira";
const nameArray = name.split(" ");
const nameComplete = [nameArray[0], nameArray.slice(-1)].join(" ");//join tranforma array em string
console.log(nameComplete);

const procuraCeltic = (nomeTime) => {
    return nomeTime == "Celtics" || nomeTime == "Raptors";
};

const celticsMap = nbaTeams.map(procuraCeltic); //map-percorre o array e retorna novo array, mapeando e buscando no array anterior(true, false)
const celticsFilter = nbaTeams.filter(procuraCeltic);//filter-percorre o array e traz todas as ocorrencias somente onde encontrou os resultados True
const celticsFind = nbaTeams.find(procuraCeltic);//find-percorre o array e traz a primeira ocorrencia apenas encontrada

console.log(celticsMap, "map");
console.log(celticsFilter, "filter");
console.log(celticsFind, "Find");