/*1) Exibir no console o resultado das seguintes validações, dado os valores x = 5 e y = 7:
a) Se x for menor que y, mostrar a mensagem: Olá mundo!
b) Se x for maior que y, mostrar: Mundo, olá!
c) Se x for igual a y, mostrar: Adeus!
 */

function calcular(x,y){
    if(x<y){
        return "Olá mundo!"
    }if(x>y){
        return "Mundo, olá!"
    }if(x==y){
        return "Adeus!"
    }
}

console.log(calcular(2,2))