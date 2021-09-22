/*1) Cria variável para armazenar a resposta da pergunta: você é maior de 18 anos?
a) Se for maior ou igual a 18 anos, escreva a mensagem no console: Que legal! Você já pode ter a carteira de habilitação.
b) Se for menor de 18 anos, escreva a mensagem no console: Poxa, que pena! Você ainda não pode ter a carteira de habilitação. */

function maiorIdade(num){  
    let resp;
    if(num>=18){
        resp = true;
        return  "Que legal! Você já pode ter a carteira de habilitação";
    } else{
        resp = false;
        return "Poxa, que pena! Você ainda não pode ter a carteira de habilitação";
    }
}

console.log(maiorIdade(17))