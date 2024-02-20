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
    // Dividindo a entrada pelo caractere vírgula para lidar com frações
    const partes = numero.split(",");
    let parteInteira = partes[0];
    let parteDecimal = partes[1] || ""; // Se não houver parte decimal, assume uma string vazia

    // Convertendo a parte inteira
    parteInteira = parseInt(parteInteira, 16).toString(10);

    // Convertendo a parte decimal
    let decimal = 0;
    for (let i = 0; i < parteDecimal.length; i++) {
        const digito = parseInt(parteDecimal[i], 16);
        decimal += digito * Math.pow(16, -(i + 1));
    }
    parteDecimal = decimal.toFixed(8).toString().slice(2); // Fixando em 8 casas decimais e removendo a parte "0."

    return parteInteira + (parteDecimal === "" ? "" : "." + parteDecimal);
}
