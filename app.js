let title = document.querySelector("h1");
title.innerHTML= "Calcular IMC";

function calcularIMC() {
    let peso = parseFloat(document.getElementById("valorPeso").value);
    let metro = 100;
    let altura = parseFloat(document.getElementById("valorAltura").value) / metro;
// to fixed (devuelve una cadena que representa el número redondeado a n dígitos después del punto decimal)
    const imc = (peso / (altura * altura)).toFixed(1);
    console.log(imc);
    alert("Tu imc es " + imc);
}
function consultarIMC() {
    calcularIMC();
}