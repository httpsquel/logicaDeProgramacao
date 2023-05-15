function L05A() {
    for (let i = 15; i <= 200; i++) {
        let quadrado = i * i;
        console.log(`O quadrado de ${i} é ${quadrado}`);
    }

}

//Apresentar os quadrados dos números inteiros de 15 a 200.

function L05B() {
    let numero = prompt("Digite um número:");

    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}

//Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.

function L05C() {
    let total = 0;

    for (let i = 1; i <= 100; i++) {
        total += i;
    }

    console.log("Total da soma:" + total);

}

//Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100).

function L05D() {
    let soma = 0;

    for (let i = 1; i <= 500; i++) {
        if (i % 2 === 0) {
            soma += i;
        }
    }

    console.log("Somatório dos valores pares:" + soma);

}

//Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500.

function L05E() {
    console.log("0 é neutro")
    for (let i = 0; i <= 20; i++) {

        if (i % 2 !== 0) {
            console.log(`${i} é um número ímpar`);
        }
    }

}

//Apresentar todos os valores numéricos inteiros ímpares situados na faixa de 0 a 20. Para verificar se o número é ímpar, efetuar dentro da malha a verificação lógica desta condição com a instrução se, perguntando se o número é ímpar; sendo, mostre-o; não sendo, passe para o próximo passo. 

function L05F() {

    for (let i = 1; i < 200; i++) {

        if (i % 4 === 0) {
            console.log(`${i} é um número divisível por 4.`);
        }
    }

}

//Apresentar todos os números divisíveis por 4 que sejam menores que 200. Para verificar se o número é divisível por 4, efetuar dentro da malha a verificação lógica desta condição com a instrução se, perguntando se o número é divisível; sendo, mostre-o; não sendo, passe para o próximo passo. A variável que controlará o contador deve ser iniciada com o valor 1.

function L05G() {
    for (let expoente = 0; expoente <= 15; expoente++) {
        let resultado = Math.pow(3, expoente);
        console.log(`3 elevado a ${expoente} é igual a ${resultado}`);
    }

}

//Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio.

function L05H() {
    let base = parseInt(prompt("Digite o valor da base: "));
    let expoente = parseInt(prompt("Digite o valor do expoente: "));
    let resultado = 1;

    for (let i = 1; i <= expoente; i++) {
        resultado *= base;
    }

    console.log(`O resultado de ${base} elevado a ${expoente} é igual a ${resultado}`);

}

//Elaborar um programa que apresente como resultado o valor de uma potência de uma base qualquer elevada a um expoente qualquer, ou seja, de BE, em que B é o valor da base e E o valor do expoente.

function L05I() {
    console.log("Série de Fibonacci:");

    let termoAtual = 1;
    let termoAnterior = 0;

    for (let i = 1; i <= 15; i++) {
        console.log(termoAtual);

        let proximoTermo = termoAtual + termoAnterior;
        termoAnterior = termoAtual;
        termoAtual = proximoTermo;
    }

}

//Escreva um programa que apresente a série de Fibonacci até o décimo quinto termo. A série de Fibonacci é formada pela seqüência: 1, 1, 2, 3, 5, 8, 13, 21, 34, ..., etc. Esta série se caracteriza pela soma de um termo atual com o seu anterior subseqüente, para que seja formado o próximo valor da seqüência. Portanto começando com os números 1, 1 o próximo termo é 1+1=2, o próximo é 1+2=3, o próximo é 2+3=5, o próximo 3+5=8, etc.

function L05J() {
    console.log("Conversão de Graus Celsius para Fahrenheit:");

    for (let celsius = 10; celsius <= 100; celsius += 10) {
        let fahrenheit = (9 * celsius + 160) / 5;
        console.log(celsius + "°C = " + fahrenheit + "°F");
    }

}

//Elaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de 10 em 10 graus, iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. O programa deve apresentar os valores das duas temperaturas.

function L05K() {

    console.log("Fatorial dos valores ímpares de 1 a 10:");

    for (let i = 1; i <= 10; i += 2) {
        let fatorial = 1;
        for (let j = 1; j <= i; j++) {
            fatorial *= j;
        }
        console.log(`Fatorial de ${i} é: ${fatorial}`);
    }


}

//Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares situados na faixa numérica de 1 a 10.