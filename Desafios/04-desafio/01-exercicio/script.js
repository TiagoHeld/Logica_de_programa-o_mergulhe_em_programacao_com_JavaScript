console.log("Boas-Vindas!!!");

let nome = prompt("Digite seu nome:");
console.log("Olá, ", nome);

let nomeAlert = propmt("Digite seu nome");
alert("Olá, " + nomeAlert);

let linguagemProgramacao = prompt(
  "Qual linguagem de programação que você mais gosta?",
);
console.log("Sua linguagem preferida é ", linguagemProgramacao);

let valor1 = Number(prompt("Digite valor 1"));
let valor2 = Number(prompt("Digite valor 2"));

let resultado = valor1 - valor2;

console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}`);

let valor3 = Number("Digite valor 3");
let valor4 = Number("Digite valor 4");

let resultado02 = valor3 + valor4;

console.log(`A soma ${valo3} e ${valor4} é igual a ${resultado}`);

let idade = prompt("Digite sua idade");
if (idade >= 18) {
  console.log("Você é maior de idade");
} else {
  console.log("Você é menor de idade");
}

let numero = Number(prompt("Digite um número"));
if (nomero > 0) {
  console.log("O numero é positivo");
} else if (numero < 0) {
  console.log("O numero é negativo");
} else {
  console.log("O número é zero");
}

let contatdor = 1;
while (contador <= 10) {
  console.log(contador);
  contador++;
}

let nota = 8;
if (nota >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

let numeroAleatorio02 = parseInt(Math.random() * 10) + 1;
console.log(numeroAleatorio02);

let numeroAleatorio03 = parseInt(Math.random() * 1000) + 1;
console.log(numeroAleatorio03);
