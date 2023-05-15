function trocados() {
    let a = prompt("Entre o primeiro valor:");
    let b = prompt("Entre o segundo valor:");
    let troca = a;
    a = b;
    b = troca;

    alert("Os valores trocados ficam " + a + " e " + b)

    return a, b
}