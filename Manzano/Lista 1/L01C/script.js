function volume(){
    const PI = 3.14159;
    let raio = parseInt(prompt("Informe o raio da lata"));
    let altura = parseInt(prompt("Informe a altura da lata"));
    let volume = PI * raio**2 * altura;
    alert("O volume da lata de óleo é " + volume.toFixed(2))
    return volume 
}