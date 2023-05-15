function operacoes() {
    let a = parseInt(prompt("Insira o primeiro número: "));
    let b = parseInt(prompt("Insira o segundo número: "));
    let c = parseInt(prompt("Insira o terceiro número: "));
    let d = parseInt(prompt("Insira o quarto número: "));

    console.log("O valor da soma do 1º número com o 2º é de:", parseInt(a) + parseInt(b));
    console.log("O valor da soma do 1º número com o 3º é de:", parseInt(a) + parseInt(c));
    console.log("O valor da soma do 1º número com o 4º é de:", parseInt(a) + parseInt(d));
    console.log("O valor da soma do 2º número com o 3º é de:", parseInt(b) + parseInt(c));
    console.log("O valor da soma do 2º número com o 4º é de:", parseInt(b) + parseInt(d));
    console.log("O valor da soma do 3º número com o 4º é de:", parseInt(c) + parseInt(d));
    console.log("O valor da multiplicação do 1º número com o 2º é de:", parseInt(a) * parseInt(b));
    console.log("O valor da multiplicação do 1º número com o 3º é de:", parseInt(a) * parseInt(c));
    console.log("O valor da multiplicação do 1º número com o 4º é de:", parseInt(a) * parseInt(d));
    console.log("O valor da multiplicação do 2º número com o 3º é de:", parseInt(b) * parseInt(c));
    console.log("O valor da multiplicação do 2º número com o 4º é de:", parseInt(b) * parseInt(d));
    console.log("O valor da multiplicação do 3º número com o 4º é de:", parseInt(c) * parseInt(d));
}

/* Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na
utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D,
devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim
C com D. Perceba que será necessário efetuar seis operações de adição e seis operações de
multiplicação e apresentar doze resultados de saída. */