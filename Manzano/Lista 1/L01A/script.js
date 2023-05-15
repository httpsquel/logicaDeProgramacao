function celsiusParaF() {

    let c = parseInt(prompt("Informe a temperatura em graus Celsius a ser convertida: "));
    let f = (9 * c + 160) / 5;
    alert("A temperatura em ºC convertida para ºF é " + f)
    return f

}