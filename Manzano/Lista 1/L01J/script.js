function conversorMoeda() {
    let dolar = parseFloat(prompt("Informe a cotação atual do dólar"));
    let quantidade = parseFloat(prompt("Informe qual o valor em dólar que você tem:"));
    let real = dolar * quantidade

    alert(quantidade + " dólares equivalem a " + real.toFixed(2) + " reais.")

    return real
}

/* Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em
dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares
disponível com o usuário, para que seja apresentado o valor em moeda brasileira*/