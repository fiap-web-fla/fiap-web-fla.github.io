const cep = document.querySelector("#cep");
//essa função abaixo faz uma busca pelo cpf e auto preenche os demais campos requisitados no form html
const showData = (result) => {
    for(const campo in result){
        if(document.querySelector("#" + campo)) {
            document.querySelector("#" + campo).value = result[campo];
        }
    }
}
//blur é o evento de perder o foco //buscar onde está o - e substituir por nada
//pegar o <nome do campo>.value<valor atribuído>, só posso pegar o que foi digitado após um evento
cep.addEventListener("blur", async(e) => { 
    let search = cep.value.replace("-", "");
    if(search.lenght < 8 || Number(search.value) === NaN) { //NaN not a number
        alert("CEP inválido!");
        cep.focus();
        return;
    }
    const options = {
        method: "GET",
        mode: "cors",
        cache: "default",
    };
    
    try {
        const resultado = await fetch(
        `https://viacep.com.br/ws/${search}/json/`,
        options
        );
        const json = await resultado.json();
        showData(json);
    } catch (error) {
        console.log("Temos um problema", error.message);
    }
    //recurso assíncrono, retorna uma promise pq não sei se vai funcionar.
    //Promise é um recurso que não se tem certeza de dar certo ou não, é uma intenção.
    //se der certo ele vai retornar o resolve, se der errado vai retornar o reject.
    //resolver quer dizer, funcionou, aí usa a função then, se der ruim, usamos o catch.
    // fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    //     .then((response) => {
    //         response.json().then((result) => { //p/ trazer o resultado da busca e converter para json
    //             console.log(result);
    //     });
    // })
    //     .catch((e) => {
    //     console.log(e.message);
    //     });


});