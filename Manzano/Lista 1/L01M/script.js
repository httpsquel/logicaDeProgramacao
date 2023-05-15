function quadradoSoma () {
    let a = parseInt(prompt("Informe o primeiro valor:"))
    let b = parseInt(prompt("Informe o segundo valor:"))
    let c = parseInt(prompt("Informe o terceiro valor:"))

    let soma = a + b + c
    let quad = soma **2

    alert("O quadrado da soma dos três valores é: " + quad)
    return quad
}

/*Elaborar um programa que efetue a leitura de três valores (A,B e C) e apresente como resultado final o
quadrado da soma dos três valores lidos.*/