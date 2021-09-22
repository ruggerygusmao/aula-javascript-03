/*2) Exibir no console o resultado das seguintes validações,vamos dizer o filme que está passando no cinema de acordo com a fruta, dado o valor de fruta = laranja:
a) Se fruta for igual a banana, mostrar: O filme é Os minions.
b) Se fruta for igual a laranja, mostrar: O filme é Laranja Mecânica.
c) Se fruta for igual a maçã, mostrar: O filme é Branca de neve.
d) Se não for nenhum dos valores acima, mostrar: O cinema tá fechado. */

function cinema(fruta){
    switch(fruta){
        case "banana":
            return "O filme é Os minions.";
            break;
        case "laranja":
            return "O filme é Laranja Mecânica";
            break;
        case "maçã":
            return "O filme é Branca de neve.";
            break;
        default : 
            return "O cinema tá fechado.";
            break;
    }
}

console.log(cinema("baana"));