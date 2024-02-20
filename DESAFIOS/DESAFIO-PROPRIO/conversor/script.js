function limparCampos() {
    document.getElementById("numero").value = "";
    document.getElementById("resultado").innerHTML = "";
}

function converterNumero() {
    const modoSelecionado = document.querySelector('input[name="tiponum"]:checked').id;
    const numero = document.getElementById("numero").value;

    let resultado;

    switch (modoSelecionado) {
        case "decbin":
            resultado = decimalParaBinario(numero);
            break;
        case "bindec":
            resultado = binarioParaDecimal(numero);
            break;
        case "decoct":
            resultado = decimalParaOctal(numero);
            break;
        case "octdec":
            resultado = octalParaDecimal(numero);
            break;
        case "dechex":
            resultado = decimalParaHexadecimal(numero);
            break;
        case "hexdec":
            resultado = hexadecimalParaDecimal(numero);
            break;
        default:
            resultado = "Por favor, escolha um modo de conversão.";
    }

    document.getElementById("resultado").innerHTML = resultado;
}

// Funções de conversão
function decimalParaBinario(numero) {
    return parseInt(numero, 10).toString(2);
}

function binarioParaDecimal(numero) {
    return parseInt(numero, 2).toString(10);
}

function decimalParaOctal(numero) {
    return parseInt(numero, 10).toString(8);
}

function octalParaDecimal(numero) {
    return parseInt(numero, 8).toString(10);
}

function decimalParaHexadecimal(numero) {
    return parseInt(numero, 10).toString(16).toUpperCase();
}

function hexadecimalParaDecimal(numero) {
    // Splitting the input by comma to handle fractions
    const partes = numero.split(",");
    let parteInteira = partes[0];
    let parteDecimal = partes[1] || ""; // If no decimal part, it defaults to empty string

    // Converting integer part
    parteInteira = parseInt(parteInteira, 16).toString(10);

    // Converting decimal part
    let decimal = 0;
    for (let i = 0; i < parteDecimal.length; i++) {
        const digit = parseInt(parteDecimal[i], 16);
        decimal += digit * Math.pow(16, -(i + 1));
    }
    parteDecimal = decimal.toFixed(8).toString().slice(2); // Fixing to 8 decimal places and removing "0." part

    return parteInteira + (parteDecimal === "" ? "" : "." + parteDecimal);
}