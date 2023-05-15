function somaQuadrados() {
  let a = parseFloat(prompt("Digite o primeiro valor:"));
  let b = parseFloat(prompt("Digite o segundo valor:"));
  let c = parseFloat(prompt("Digite o terceiro valor:"));
  
  let soma = Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2);
  
  alert("A soma dos quadrados dos três valores é: " + soma);
  
  return soma;
}

/*Elaborar um programa que efetue a leitura de três valores (A, B e C) e apresente como resultado final à
soma dos quadrados dos três valores lidos.*/