function L03A() {
    let numero = parseInt(prompt("Informe um número para saber a tabuada:"));
    let i = 1;

    while (i <= 10) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
        i++;
    }
}

//Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.

function L03B() {
    let soma = 0;
    let i = 1;

    while (i <= 100) {
        soma += i;
        i++;
    }

    console.log("A soma de todos os números inteiros, de 1 a 100 é:" + soma);
}

//Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100).

function L03C() {
    let num = 1;
    let sum = 0;

    while (num <= 500) {
        if (num % 2 === 0) {
            sum += num;
        }
        num++;
    }

    console.log("A soma dos números pares de 1 a 500 é: " + sum);

}
//Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500.

function L03D() {
    let numero = 0;
    while (numero <= 20) {
        if (numero % 2 !== 0) {
            console.log(numero);
        }
        numero++;
    }
}

//Apresentar todos os valores numéricos inteiros ímpares situados na faixa de 0 a 20. Para verificar se o número é ímpar, efetuar dentro da malha a verificação lógica desta condição com a instrução se, perguntando se o número é ímpar; sendo, mostre-o; não sendo, passe para o próximo passo.

function L03E() {
    let expoente = 0;
    let resultado = 1;

    while (expoente <= 15) {
        console.log(resultado);
        resultado *= 3;
        expoente++;
    }
}

//Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio.

function L03F() {
    let base = parseInt(prompt("Informe um valor de base:"))
    let exp = parseInt(prompt("Informe um valor de expoente:"))

    let resultado = 1;
    let i = 0;

    while (i < exp) {
        resultado *= base;
        i++;
    }
    console.log(resultado)
}

//Elaborar um programa que apresente como resultado o valor de uma potência de uma base qualquer elevada a um expoente qualquer, ou seja, de BE, em que B é o valor da base e E o valor do expoente.

function L03G() {
    let termoAnterior = 0;
    let termoAtual = 1;

    console.log("1º termo: " + termoAtual);

    let contador = 2;
    while (contador <= 15) {
        let proximoTermo = termoAtual + termoAnterior;
        console.log(contador + "º termo: " + proximoTermo);
        termoAnterior = termoAtual;
        termoAtual = proximoTermo;
        contador++;
    }


}
//Escreva um programa que apresente a série de Fibonacci até o décimo quinto termo. A série de Fibonacci é formada pela seqüência: 1, 1, 2, 3, 5, 8, 13, 21, 34, ..., etc. Esta série se caracteriza pela soma de um termo atual com o seu anterior subseqüente, para que seja formado o próximo valor da seqüência. Portanto começando com os números 1, 1 o próximo termo é 1+1=2, o próximo é 1+2=3, o próximo é 2+3=5, o próximo 3+5=8, etc.

function L03H() {
    let celsius = 10;

    while (celsius <= 100) {
        let fahrenheit = (9 * celsius + 160) / 5;
        console.log(`${celsius}ºC = ${fahrenheit}ºF`);
        celsius += 10;
    }

}

//Elaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de 10 em 10 graus, iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. O programa deve apresentar os valores das duas temperaturas.

function L03I() {
    let i = 1;
    let soma = 0;

    while (i <= 10) {
        let valor = parseFloat(prompt(`Informe o ${i}º valor:`));
        soma += valor;
        i++;
    }

    let media = soma / 10;

    alert(`O total do somatório é ${soma} e a média aritmética é ${media}.`);

}

//Elaborar um programa que efetue a leitura de 10 valores numéricos e apresente no final o total do somatório e a média aritmética dos valores lidos.

function L03J() {
    let numero = 50;
    let soma = 0;
    let i = 0;

    while (numero <= 70) {
        if (numero % 2 === 0) {
            soma += numero;
            i++;
        }
        numero++;
    }

    let media = soma / i;

    console.log("A soma dos valores pares entre 50 e 70 é: " + soma);
    console.log("A média aritmética dos valores pares entre 50 e 70 é: " + media);

}

//Elaborar um programa que apresente os resultados da soma e da média aritmética dos valores pares situados na faixa numérica de 50 a 70.

function L03K() {
    let continuar = true;
    let areaTotal = 0;

    while (continuar) {
        let nomeComodo = prompt("Informe o nome do cômodo:");
        let largura = parseFloat(prompt("Informe a largura em metros:"));
        let comprimento = parseFloat(prompt("Informe o comprimento em metros:"));


        let area = largura * comprimento;
        alert(`A área do ${nomeComodo} é: ${area} m²`);

        areaTotal += area;

        let resposta = prompt("Deseja continuar calculando novos cômodos? (SIM/NAO)").toUpperCase();

        if (resposta === "NAO") {
            continuar = false;
        }
    }

    alert("De nada!");
}

// Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha, banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor total acumulado da área residencial.

function L03L() {
    let valor = Number(prompt("Digite um valor:"));

    if (valor < 0) {
        alert("Nenhum valor positivo foi informado.");
    } else {
        let maior = valor;
        let menor = valor;

        while (valor >= 0) {
            if (valor > maior) {
                maior = valor;
            }
            if (valor < menor) {
                menor = valor;
            }

            valor = Number(prompt("Digite um valor positivo inteiro (ou negativo para encerrar):"));
        }

        alert(`Maior valor informado: ${maior}. Menor valor informado: ${menor}`);
    }

}

//Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo usuário.
