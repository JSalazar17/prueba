function convertir() {
    var valore = parseInt(document.getElementById("valor").value);
    var resultado = 0;
    var dolar = 0.00020;
    var euro = 0.00019;
    if (document.getElementById("uno").checked){
        resultado = valore * dolar;
        alert("El cambio de pesos a Dolares es: $" + resultado.toFixed(2));
    }
    else if (document.getElementById("dos").checked){
        resultado = valore * euro;
        alert("El cambio de pesos a Euros es: $" + resultado.toFixed(2));
    }
    else{
        alert("Tienes que completar todos los requerimientos");
    }
}