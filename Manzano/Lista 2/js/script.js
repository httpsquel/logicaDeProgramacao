function L02A() {
    let valor1 = parseInt(prompt("Digite o primeiro valor:"));
    let valor2 = parseInt(prompt("Digite o segundo valor:"));

    let diferenca;

    if (valor1 > valor2) {
        diferenca = valor1 - valor2;
    } else {
        diferenca = valor2 - valor1;
    }
    alert("A diferença entre os valores é: " + diferenca)
}

//Ler dois valores numéricos inteiros e apresentar o resultado da diferença do maior pelo menor valor.

function L02B() {
    let num = prompt("Digite um número inteiro positivo ou negativo:");
    if (num < 0) {
        num = num * -1; //também é possível usar o método Math.abs(), uma função nativa do JS, que retorna o número com seu valor absoluto, ou seja, sem nenhum sinal. Porém, não é uma estrutura condicional, então foge da proposta do exercício.
    }
    alert(`O valor absoluto do número é ${num}.`); //o cifrão chama a variável
}

//Efetuar a leitura de um valor inteiro positivo ou negativo e apresentar o número lido como sendo um valor positivo, ou seja, o programa deverá apresentar o módulo de um número fornecido. Lembre-se de verificar se o número fornecido é menor que zero; sendo, multiplique-o por -1.

function L02C(){
        let nota1 = parseFloat(prompt("Informe a primeira nota:"))
        let nota2 = parseFloat(prompt("Informe a segunda nota:"))
        let nota3 = parseFloat(prompt("Informe a terceira nota:"))
        let nota4 = parseFloat(prompt("Informe a quarta nota:"))
      
        let media = (nota1 + nota2 + nota3 + nota4) / 4
      
        if (media >= 5) {
          alert("Parabéns! Você foi aprovado(a) com média " + media.toFixed(2))
        } else {
          alert("Infelizmente, você não foi aprovado(a), com média " + media.toFixed(2))
        }
      
        return media
      }

//Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 5. Se o aluno não foi aprovado, indicar uma mensagem informando esta condição. Apresentar junto das mensagens o valor da média do aluno para qualquer condição.

function L02D() {
    let nota1 = parseFloat(prompt("Informe a primeira nota:"));
    let nota2 = parseFloat(prompt("Informe a segunda nota:"));
    let nota3 = parseFloat(prompt("Informe a terceira nota:"));
    let nota4 = parseFloat(prompt("Informe a quarta nota:"));
  
    let media = (nota1 + nota2 + nota3 + nota4) / 4;
  
    if (media >= 7) {
      alert("Parabéns, você foi aprovado(a)! Sua média é " + media.toFixed(2));
    } else {
      let notaExame = parseFloat(prompt("Informe a nota do exame:"));
      let novaMedia = (media + notaExame) / 2;
  
      if (novaMedia >= 5) {
        alert("Parabéns, você foi aprovado(a) no exame! Sua nova média é " + novaMedia.toFixed(2));
      } else {
        alert("Infelizmente você não foi aprovado. Sua média é " + media.toFixed(2) + " e sua nova média é " + novaMedia.toFixed(2));
      }
    }
  }

//Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 7. Se o valor da média for menor que 7, solicitar a nota de exame, somar com o valor da média e obter nova média. Se a nova média for maior ou igual a 5, apresentar uma mensagem dizendo que o aluno foi aprovado em exame. Se o aluno não foi aprovado, indicar uma mensagem informando esta condição. Apresentar com as mensagens o valor da média do aluno, para qualquer condição.

function L02E() {
    let a = parseFloat(prompt("Digite o primeiro valor:"));
    let b = parseFloat(prompt("Digite o segundo valor:"));
    let c = parseFloat(prompt("Digite o terceiro valor:"));
  
    let delta = Math.pow(b, 2) - 4 * a * c; //Math.pow é uma função nativa do JS usado para calcular potência
  
    if (a === 0) {
      alert("O valor de A deve ser diferente de zero.");
    } else if (delta < 0) {
      alert("A equação não possui raízes reais.");
    } else {
      let x1 = (-b + Math.sqrt(delta)) / (2 * a); //Math.sqrt é uma função nativa do JS que devolve a raiz quadrada de um valor, no caso, delta.
      let x2 = (-b - Math.sqrt(delta)) / (2 * a);
  
      alert("As raízes da equação são x1 = " + x1.toFixed(2) + " e x2 = " + x2.toFixed(2));
    }
  }

//Efetuar a leitura de três valores (variáveis A, B e C) e efetuar o cálculo da equação completa de segundo grau, apresentando as duas raízes, se para os valores informados for possível efetuar o referido cálculo. Lembre-se de que a variável A deve ser diferente de zero.

function L02F() {
    let a = parseFloat(prompt("Informe o primeiro valor:"))
    let b = parseFloat(prompt("Informe o segundo valor:"))
    let c = parseFloat(prompt("Informe o terceiro valor:"))
  
    if (a > b) {
      let temp = a
      a = b
      b = temp
    }
    
    if (a > c) {
      let temp = a
      a = c
      c = temp
    }
    
    if (b > c) {
      let temp = b
      b = c
      c = temp
    }
  
    alert("Os valores em ordem crescente são: " + a + ", " + b + " e " + c)
  }

//Efetuar a leitura de três valores (variáveis A, B e C) e apresentá-los dispostos em ordem crescente.

function L02G() {
    let num1 = parseInt(prompt("Digite o primeiro número: "));
    let num2 = parseInt(prompt("Digite o segundo número: "));
    let num3 = parseInt(prompt("Digite o terceiro número: "));
    let num4 = parseInt(prompt("Digite o quarto número: "));
    let divisivel = "";
  
    if (num1 % 2 === 0 && num1 % 3 === 0) {
      divisivel += num1 + " ";
    }
    if (num2 % 2 === 0 && num2 % 3 === 0) {
      divisivel += num2 + " ";
    }
    if (num3 % 2 === 0 && num3 % 3 === 0) {
      divisivel += num3 + " ";
    }
    if (num4 % 2 === 0 && num4 % 3 === 0) {
      divisivel += num4 + " ";
    }
  
    if (divisivel === "") {
      alert("Não há números divisíveis por 2 e 3.");
    } else {
      alert("Os números divisíveis por 2 e 3 são: " + divisivel);
    }
  }

//Efetuar a leitura de quatro números inteiros e apresentar os números que são divisíveis por 2 e 3.

function L02H() {
    let num1 = parseInt(prompt("Informe o primeiro número:"))
    let num2 = parseInt(prompt("Informe o segundo número:"))
    let num3 = parseInt(prompt("Informe o terceiro número:"))
    let num4 = parseInt(prompt("Informe o quarto número:"))
    let num5 = parseInt(prompt("Informe o quinto número:"))
  
    let maior = num1
    let menor = num1
  
    if (num2 > maior) {
      maior = num2
    } else if (num2 < menor) {
      menor = num2
    }
  
    if (num3 > maior) {
      maior = num3
    } else if (num3 < menor) {
      menor = num3
    }
  
    if (num4 > maior) {
      maior = num4
    } else if (num4 < menor) {
      menor = num4
    }
  
    if (num5 > maior) {
      maior = num5
    } else if (num5 < menor) {
      menor = num5
    }
  
    alert("O maior número é " + maior + " e o menor número é " + menor)
    return {maior, menor}
  }

//Efetuar a leitura de cinco números inteiros e identificar o maior e o menor valores.

function L02I() {
    let num = parseInt(prompt("Digite um número inteiro:"));
  
    if (num % 2 == 0) {
      alert(num + " é par.");
    } else {
      alert(num + " é ímpar.");
    }
  }
  

//Elaborar um programa que efetue a leitura de um número inteiro e apresentar uma mensagem informando se o número é par ou ímpar
  

function L02J() {
    let valor = parseInt(prompt("Informe um valor entre 1 e 9:"));
  
    if (valor >= 1 && valor <= 9) {
      alert("O valor está na faixa permitida.");
    } else {
      alert("O valor está fora da faixa permitida.");
    }
  }

//Elaborar um programa que efetue a leitura de um valor que esteja entre a faixa de 1 a 9. Após a leitura do valor fornecido pelo usuário, o programa deverá indicar uma de duas mensagens: "O valor está na faixa permitida", caso o usuário forneça o valor nesta faixa, ou a mensagem "O valor está fora da faixa permitida", caso o usuário forneça valores menores que 1 ou maiores que 9.

function L02K() {
    let valor = parseInt(prompt("Digite um valor inteiro:"));
    if (valor <= 3) {
      alert("O valor digitado é: " + valor);
    }
  }

//Elaborar um programa que efetue a leitura de um determinado valor inteiro, e efetue a sua apresentação, caso o valor não seja maior que três.

function L02L() {
let nome = prompt("Digite o seu nome:");
let sexo = prompt("Digite o seu sexo, M para masculino e F para feminino:");

if (sexo.toUpperCase() === "M") { // toUpperCase foi usada para transformar o gênero fornecido pelo usuário em maiúsculo, para que possa ser comparado com as strings "M" e "F" também em maiúsculo, garantindo que a comparação seja feita corretamente independente da forma como o gênero foi digitado pelo usuário.
  alert("Ilmo Sr. " + nome + ", obrigado por chegar até aqui!"); //Ilmo significa ilustre
} else if (sexo.toUpperCase() === "F") {
  alert("Ilma Sra. " + nome + ", obrigado por chegar até aqui!");
} else {
  alert("Sexo inválido!");
}
}

//Elaborar um programa que efetue a leitura do nome e do sexo de uma pessoa, apresentando com saída uma das seguintes mensagens: "Ilmo Sr.", se o sexo informado como masculino, ou a mensagem "Ilma Sra.", para o sexo informado como feminino. Apresente também junto da mensagem de saudação o nome previamente informado.

  
  
  
  
  
  
      