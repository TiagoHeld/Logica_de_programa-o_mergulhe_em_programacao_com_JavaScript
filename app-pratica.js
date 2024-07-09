alert("Bem vindo ao jogo do número secreto!!!");
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo) + 1;
console.log(numeroSecreto);
let chute;
let tentativas = 1;
while (chute != numeroSecreto) {
  chute = prompt(`Digite um numero de 1 a ${numeroMaximo}`);

  if (chute == numeroSecreto) {
    break;
  } else if (chute < numeroSecreto) {
    alert(`O numero secreto é maior que ${chute}`);
  } else {
    alert(`O numero secreto é menor que ${chute}`);
  }
  tentativas++;
}

alert(
  `Parabens! Você acertou o numero que é (${numeroSecreto}) em ${tentativas} ${
    tentativas > 1 ? "tentativas" : "tentativa"
  }.`,
);
