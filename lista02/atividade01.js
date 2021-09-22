/*1) Exibir no console o resultado das seguintes validações, dado o valor da variável sistema_operacional é linux:
a) Se o valor for linux, mostrar: O Linux é um sistema operacional de código aberto.
b) Se o valor for windows, mostrar: O Windows é um sistema operacional da empresa Microsoft.
c) Se o valor for macOS, mostrar: O macOS é um sistema operacional da empresa Apple.
d) Se o valor for Chrome OS, mostrar: O Chrome OS é um sistema operacional da empresa Google.
e) Se não for nenhuma das opções acima, mostrar: Há a possibilidade de você estar utilizando um sistema mobile.
 */

function consultaSistema(sistema_operacional){
    switch(sistema_operacional){
        case "linux":
            return "O Linux é um sistema operacional de código aberto";
            break;
        case "windows":
            return "O Windows é um sistema operacional da empresa Microsoft";
            break;
        case "macOS":
            return "O macOS é um sistema operacional da empresa Apple";
            break;
        case "Chrome OS":
            return "O Chrome OS é um sistema operacional da empresa Google";
            break;
        default : 
            return "Há a possibilidade de você estar utilizando um sistema mobile";
            break;
    }
}

console.log(consultaSistema("macOS"))