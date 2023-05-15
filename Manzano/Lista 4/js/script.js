function L04A() {
    let num = 15;
    do {
        console.log(num * num);
        num++;
    } while (num <= 200);

}

//Apresentar os quadrados dos números inteiros de 15 a 200.

function L04B() {
    let num = 1;
    let soma = 0;

    do {
        if (num % 2 === 0) {
            soma += num;
        }
        num++;
    } while (num <= 500);

    console.log("A soma dos valores pares de 1 a 500 é: " + soma);

}

//Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500.

function L04C() {
    let i = 1;
    do {
        if (i % 4 === 0) {
            console.log(i);
        }
        i++;
    } while (i <= 200);

}

//Apresentar todos os números divisíveis por 4 que sejam menores que 200. Para verificar se o número é divisível por 4, efetuar dentro da malha a verificação lógica desta condição com a instrução se, perguntando se o número é divisível; sendo, mostre-o; não sendo, passe para o próximo passo. A variável que controlará o contador deve ser iniciada com o valor 1.

function L04D() {
    let quadro = 1;
    let graos = 1;
    let somaGraos = 1;

    do {
        graos *= 2;
        somaGraos += graos;
        quadro++;
    } while (quadro <= 64);

    console.log("O número total de grãos de trigo é: " + somaGraos);

}

//Elaborar um programa que efetue o cálculo e no final apresente o somatório do número de grãos de trigo que se pode obter num tabuleiro de xadrez, obedecendo à seguinte regra: colocar um grão de trigo no primeiro quadro e nos quadros seguintes o dobro do quadro anterior. Ou seja, no primeiro quadro coloca-se 1 grão, no segundo quadro colocam-se 2 grãos (neste momento têm-se 3 grãos), no terceiro quadro colocam-se 4 grãos (tendo neste momento 7 grãos), no quarto colocam-se 8 grãos (tendo-se então 15 grãos) até atingir o sexagésimo quarto (64o) quadro. Utilize variáveis do tipo  real como acumuladores.

function L04E() {
    let contador = 1;
    let total = 0;

    do {
        let valor = parseInt(prompt(`Digite o ${contador}º valor:`));
        let fatorial = 1;

        for (let i = valor; i >= 1; i--) {
            fatorial *= i;
        }

        total += fatorial;
        contador++;
    } while (contador <= 15);

    alert(`O total do somatório da fatorial dos valores lidos é ${total}.`);

}

//Elaborar um programa que efetue a leitura de 15 valores numéricos inteiros e no final apresente o total do somatório da fatorial de cada valor lido.

function L04F() {
    let valor, total = 0, media = 0, cont = 0;

    do {
        valor = parseInt(prompt("Digite um número positivo (e um negativo quando quiser parar):"));
        if (valor >= 0) {
            total += valor;
            cont++;
            media = total / cont;
        }
    } while (valor >= 0);

    console.log("Total: " + total);
    console.log("Média: " + media);
    console.log("Total de valores lidos: " + cont);

}

//Elaborar um programa que efetue a leitura sucessiva de valores numéricos e apresente no final o total do somatório, a média aritmética e o total de valores lidos. O programa deve fazer as leituras dos valores enquanto o usuário estiver fornecendo valores positivos. Ou seja, o programa deve parar quando o usuário fornecer um valor negativo. Não se esqueça que o usuário pode entrar como primeiro número um número negativo, portanto, cuidado com a divisão por zero no cálculo da média.

function L04G() {
    let i = 1;
    let fatorial = 1;
    let somaFatorial = 0;

    do {
        if (i % 2 === 1) {
            for (let j = i; j > 0; j--) {
                fatorial *= j;
            }
            somaFatorial += fatorial;
            fatorial = 1;
        }
        i++;
    } while (i <= 10);

    console.log(somaFatorial);
}

//Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares situados na faixa numérica de 1 a 10.

function L04H() {
    let areaTotal = 0;
    let resposta;

    do {
        let nomeComodo = prompt("Digite o nome do cômodo:");
        let largura = parseFloat(prompt("Digite a largura do cômodo em metros:"));
        let comprimento = parseFloat(prompt("Digite o comprimento do cômodo em metros:"));

        let area = largura * comprimento;
        areaTotal += area;

        alert(`A área do ${nomeComodo} é ${area.toFixed(2)} m².`);

        resposta = prompt("Deseja calcular a área de mais algum cômodo? (SIM/NAO)").toUpperCase();

    } while (resposta === "SIM");

    alert("De nada!");

}

//Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha, banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor total acumulado da área residencial.

function L04I() {
    let maior = 0;
    let menor = 0;
    let valor;

    do {
        valor = parseInt(prompt("Digite um número positivo (ou negativo para sair):"));
        if (valor >= 0) {
            if (valor > maior || maior == 0) {
                maior = valor;
            }
            if (valor < menor || menor == 0) {
                menor = valor;
            }
        }
    } while (valor >= 0);

    alert("O maior número digitado foi: " + maior);
    alert("O menor número digitado foi: " + menor);

}

//Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo usuário.

function L04J() {
    let num1, num2, resultado;

    do {
        num1 = parseInt(prompt("Informe o primeiro número: "));
        num2 = parseInt(prompt("Informe o segundo número: "));

        if (num2 == 0) {
            console.log("Não é possível realizar a divisão por zero.");
        } else {
            resultado = parseInt(num1 / num2);
            console.log(`O resultado da divisão é: ${resultado}`);
        }

    } while (num1 > 0 && num2 > 0);


}

// Elaborar um programa que apresente o resultado inteiro da divisão de dois números quaisquer. Para a elaboração do programa, não utilizar em hipótese alguma o conceito do operador aritmético DIV. A solução deve ser alcançada com a utilização de looping. Ou seja, o programa deve apresentar como resultado (quociente) quantas vezes o divisor cabe no dividendo.