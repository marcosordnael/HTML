function atualizarPlaceholder() {
            const tipoEquacao = document.querySelector('input[name="tipoequacao"]:checked').value;
            const placeholder = (tipoEquacao === "primeirograu") ? "Exemplo: 3x - 10 = 5" : "Exemplo: 2x² - 5x + 3 = 0";
            document.getElementById("equacao").setAttribute("placeholder", placeholder);
        }

        function resolverEquacao() {
            const tipoEquacao = document.querySelector('input[name="tipoequacao"]:checked').value;
            const equacao = document.getElementById("equacao").value;

            if (tipoEquacao === "primeirograu") {
                const resultado = resolverEquacaoPrimeiroGrau(equacao);
                exibirResultado(resultado);
            } else {
                const raizes = resolverEquacaoSegundoGrau(equacao);
                exibirResultado(raizes);
            }
        }

        function resolverEquacaoPrimeiroGrau(equacao) {
            const partes = equacao.split("=");

            if (partes.length !== 2) {
                return [];
            }

            const ladoEsquerdo = partes[0].trim();
            const ladoDireito = partes[1].trim();

            const sinalOperacao = (ladoEsquerdo.includes("+")) ? "+" : "-";
            const termos = ladoEsquerdo.split(sinalOperacao);

            if (termos.length !== 2) {
                return [];
            }

            const a = parseFloat(termos[0]);
            const b = (sinalOperacao === "+") ? parseFloat(termos[1]) : -parseFloat(termos[1]);
            const c = parseFloat(ladoDireito);

            if (isNaN(a) || isNaN(b) || isNaN(c)) {
                return [];
            }

            const x = (c - b) / a;
            return [x];
        }

        function resolverEquacaoSegundoGrau(equacao) {
            const partes = equacao.split("=");

            if (partes.length !== 2) {
                return [];
            }

            const ladoEsquerdo = partes[0].trim();
            const ladoDireito = partes[1].trim();

            // Extrair os coeficientes 'a', 'b' e 'c' da equação
            const coeficientes = extrairCoeficientes(ladoEsquerdo);

            if (!coeficientes) {
                return [];
            }

            const a = coeficientes.a;
            const b = coeficientes.b;
            const c = coeficientes.c;

            // Calcular o discriminante
            const discriminante = calcularDiscriminante(a, b, c);

            // Calcular as raízes
            const raizes = calcularRaizes(a, b, discriminante);

            return raizes;
        }

        function extrairCoeficientes(equacao) {
            const termos = equacao.replace(/\s/g, "").split(/(?=[+-])/);

            // Inicializar coeficientes
            let a = 0;
            let b = 0;
            let c = 0;

            // Loop sobre os termos para extrair os coeficientes
            for (let termo of termos) {
                if (termo.includes("x^2")) {
                    // Coeficiente do termo quadrático (ax^2)
                    a += parseInt(termo);
                } else if (termo.includes("x")) {
                    // Coeficiente do termo linear (bx)
                    b += parseInt(termo);
                } else {
                    // Termo constante (c)
                    c += parseInt(termo);
                }
            }

            return { a, b, c };
        }

        function calcularDiscriminante(a, b, c) {
            return Math.pow(b, 2) - 4 * a * c;
        }

        function calcularRaizes(a, b, discriminante) {
            const raizes = [];

            if (discriminante > 0) {
                const raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
                const raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
                raizes.push(raiz1, raiz2);
            } else if (discriminante === 0) {
                const raiz = -b / (2 * a);
                raizes.push(raiz);
            }

            return raizes;
        }

        function exibirResultado(resultado) {
            if (resultado.length === 0) {
                document.getElementById("resultado").innerText = "A equação não possui raízes reais.";
            } else if (resultado.length === 1) {
                document.getElementById("resultado").innerText = "O valor de X é: " + resultado[0];
            } else {
                document.getElementById("resultado").innerText = "As raízes da equação são: " + resultado[0] + " e " + resultado[1];
            }
        }