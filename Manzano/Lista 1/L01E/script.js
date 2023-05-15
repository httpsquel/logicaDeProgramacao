function prestacaoAtraso() {
    let valor = parseFloat(prompt("Informe o valor da prestação:"))
    let taxa = parseFloat(prompt("Informe o valor da taxa de juros:"))
    let tempo = parseInt(prompt("Informe há quantos meses a prestação está atrasada:"))
    let prestacao = valor + (valor * taxa/100) * tempo

    alert("O valor da prestação em atraso é de R$" + prestacao)
    return (prestacao)
}