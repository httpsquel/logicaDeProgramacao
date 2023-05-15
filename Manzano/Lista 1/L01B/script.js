function fParaC() {
    let f = parseFloat(prompt("Informe a temperatura em graus Fahrenheit a ser convertida"))
    let c = (f - 32) * (5 / 9)
    alert("A temperatura em ºF convertida para ºC é: " + c.toFixed(1))
    return c 
}