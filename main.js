const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos voce tem?");
const linguagem = prompt ("Qual linguagem de programacao voce esta estudando?");

alert("Ola " + nome + ", voce tem " + idade + " anos e ja esta aprendendo " + linguagem + "!");

const numero = prompt("Voce gosta de estudar " + linguagem + "? Responda com o numero 1 para SIM ou 2 para NAO.");
if (numero == 1){
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
}
    else{
        alert("Ahh que pena... Já tentou aprender outras linguagens?");
    }

