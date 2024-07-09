alert("Boas vindas ao jogo do número secreto");
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo) + 1;
console.log(numeroSecreto);
let chute;
let tentativas = 1;
while (chute != numeroSecreto) {
  chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
  if (chute == numeroSecreto) {
    break;
  } else if (chute > numeroSecreto) {
    alert(`O numero secreto é menor que ${chute}`);
  } else {
    alert(`numero secreto é maior que ${chute}`);
  }
  tentativas++;
}

alert(
  `Isso ai! Você descobriu o número secreto(${numeroSecreto}) em ${tentativas} ${
    tentativas > 1 ? "tentativas" : "tentativa"
  }.`,
);
