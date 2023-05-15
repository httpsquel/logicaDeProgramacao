function litrosGastos () {
    const kmLitro = 12;
    let tempo = parseInt(prompt("Informe o tempo gasto na viagem, em horas:"));
    let velocidade = parseInt(prompt("Informe a velocidade média durante a viagem:"));
    let distancia = tempo * velocidade;
    let litrosUsados = distancia / kmLitro;

    alert("O tempo de viagem foi de " + tempo + " horas, com velocidade média de " + velocidade + "Km/h, e a distância percorrida de " + distancia + "Km, com " + litrosUsados.toFixed(2) + " litros de combustível gastos")

    return litrosUsados
}