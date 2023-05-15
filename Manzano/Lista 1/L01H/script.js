function volumeCaixa () {
    let comprimento = parseFloat(prompt("Entre o comprimento da caixa:"))
    let largura = parseFloat(prompt("Entre a largura da caixa:"))
    let altura = parseFloat(prompt("Entre a altura da caixa:"))
    let volume = comprimento * largura * altura

    alert("O volume da caixa retangular é " + volume)

    return volume
}




/* Elaborar um programa que calcule e apresente o volume de uma caixa retangular, por meio da fórmula
VOLUME = COMPRIMENTO * LARGURA * ALTURA. */