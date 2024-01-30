function atualizarRelogio() {
    var agora = new Date();
    var horas = agora.getHours();
    var minutos = agora.getMinutes();
    var segundos = agora.getSeconds();

    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    var horaFormatada = horas + ":" + minutos + ":" + segundos;

    document.getElementById("relogio").innerHTML = horaFormatada;

    setTimeout(atualizarRelogio, 1000);
}

function exibirData() {
    var dataAtual = new Date();
    var dia = dataAtual.getDate();
    var mes = dataAtual.getMonth(); // Retorna o índice do mês (de 0 a 11)
    var ano = dataAtual.getFullYear();

    var nomesDosMeses = [
        "Janeiro", "Fevereiro", "Março",
        "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro",
        "Outubro", "Novembro", "Dezembro"
    ];

    var mesPorExtenso = nomesDosMeses[mes];

    var dataFormatada = dia + " de " + mesPorExtenso + " de " + ano;

    document.getElementById("data").innerHTML = dataFormatada;
}

window.onload = function () {
    atualizarRelogio();
    exibirData();
};
function atualizarRelogio() {
    var agora = new Date();
    var horas = agora.getHours();
    var minutos = agora.getMinutes();
    var segundos = agora.getSeconds();

    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    var horaFormatada = horas + ":" + minutos + ":" + segundos;

    document.getElementById("relogio").innerHTML = horaFormatada;

    setTimeout(atualizarRelogio, 1000);
}

function exibirData() {
    var dataAtual = new Date();
    var dia = dataAtual.getDate();
    var mes = dataAtual.getMonth(); // Retorna o índice do mês (de 0 a 11)
    var ano = dataAtual.getFullYear();

    var nomesDosMeses = [
        "Janeiro", "Fevereiro", "Março",
        "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro",
        "Outubro", "Novembro", "Dezembro"
    ];

    var mesPorExtenso = nomesDosMeses[mes];

    var dataFormatada = dia + " de " + mesPorExtenso + " de " + ano;

    document.getElementById("data").innerHTML = dataFormatada;
}

window.onload = function () {
    atualizarRelogio();
    exibirData();
};
