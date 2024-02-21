function limparCampos() {
    document.getElementById("numero").value = "";
    document.getElementById("resultado").innerHTML = "";
}

function converterNumero() {
    const modoSelecionado = document.querySelector('input[name="tiponum"]:checked');
    const vazio = document.getElementById("numero").value;

    if (!vazio) {
        alert("Por favor, digite um número antes de converter.");
        return;
    }
    
    if (!modoSelecionado) {
        alert("Por favor, escolha um modo de conversão.");
        return;
    }

    const modoSelecionadoId = modoSelecionado.id;
    const numero = document.getElementById("numero").value;

    let resultado;

    switch (modoSelecionadoId) {
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
        case "hexbin":
            resultado = hexadecimalParaBinario(numero);
            break;
        case "binhex":
            resultado = binarioParaHexadecimal(numero);
            break;
        case "binoct":
            resultado = binarioParaOctal(numero);
            break;
        case "octbin":
            resultado = octalParaBinario(numero);
            break;
        case "hexoct":
            resultado = hexadecimalParaOctal(numero);
            break;
        case "octhex":
            resultado = octalParaHexadecimal(numero);
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
    return parseInt(numero, 16).toString(10);
}

function hexadecimalParaBinario(numero) {
    return parseInt(numero, 16).toString(2);
}

function binarioParaHexadecimal(numero) {
    return parseInt(numero, 2).toString(16).toUpperCase();
}

function binarioParaOctal(numero) {
    return parseInt(numero, 2).toString(8);
}

function octalParaBinario(numero) {
    return parseInt(numero, 8).toString(2);
}

function hexadecimalParaOctal(numero) {
    return parseInt(numero, 16).toString(8);
}

function octalParaHexadecimal(numero) {
    return parseInt(numero, 8).toString(16).toUpperCase();
}
