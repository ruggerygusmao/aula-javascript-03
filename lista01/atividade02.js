/*2) Cria variável para armazenar a resposta da pergunta: você já terminou o ensino médio?
a) Se for verdade, escreva a mensagem no console: Poxa, que legal!.
b) Se for mentira, escreva a mensagem no console: Falta pouco! Logo você termina. */

function ensinoMedio(num){  
    let resp = num;
    if(resp == true){
        return  "Poxa, que legal!";
    } else{
        resp = false;
        return "Falta pouco! Logo você termina!";
    }
}

console.log(ensinoMedio(false));
