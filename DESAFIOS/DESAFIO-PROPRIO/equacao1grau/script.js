function resolverEquacao() {
    const equacao = document.getElementById("equacao").value;
    
    // Remover espaços em branco e dividir a equação em termos
    const termos = equacao.replace(/\s/g, "").split("=");

    if (termos.length !== 2) {
        exibirResultado("Formato da equação inválido. Certifique-se de que está no formato 'ax + b = c'.");
        return;
    }

    const ladoEsquerdo = termos[0].trim();
    const ladoDireito = termos[1].trim();

    // Separar os termos do lado esquerdo da equação
    const termosLadoEsquerdo = ladoEsquerdo.split("+");

    if (termosLadoEsquerdo.length !== 2) {
        exibirResultado("Formato da equação inválido. Certifique-se de que está no formato 'ax + b = c'.");
        return;
    }

    const primeiroX = parseInt(termosLadoEsquerdo[0].replace("x", ""));
    const segundoX = parseInt(termosLadoEsquerdo[1].replace("x", ""));
    const constante = parseInt(ladoDireito);

    // Verificar se os termos são válidos
    if (isNaN(primeiroX) || isNaN(segundoX) || isNaN(constante)) {
        exibirResultado("Formato da equação inválido. Certifique-se de que está no formato 'ax + b = c'.");
        return;
    }

    // Calcular o valor de x
    const x = (constante - segundoX) / primeiroX;

    // Exibir o resultado
    exibirResultado("O valor de x é: " + x);
}

function exibirResultado(resultado) {
    document.getElementById("resultado").innerText = resultado;
}
