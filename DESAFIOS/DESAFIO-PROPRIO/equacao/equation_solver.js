function resolverEquacao() {
  // Obter a equação inserida pelo usuário
  const equacao = document.getElementById("equacao").value;

  // Verificar se a equação foi fornecida
  if (!equacao) {
      document.getElementById("resultado").innerText = "Por favor, insira uma equação.";
      return;
  }

  // Separar a equação em partes
  const partes = equacao.split("=");

  // Verificar se a equação foi corretamente dividida em partes
  if (partes.length !== 2) {
      document.getElementById("resultado").innerText = "Formato da equação inválido. Certifique-se de que está no formato 'ax^2 + bx + c = 0'.";
      return;
  }

  const ladoEsquerdo = partes[0].trim();
  const ladoDireito = partes[1].trim();

  // Extrair os coeficientes 'a', 'b' e 'c' da equação
  const coeficientes = extrairCoeficientes(ladoEsquerdo);

  if (!coeficientes) {
      document.getElementById("resultado").innerText = "Formato da equação inválido. Certifique-se de que está no formato 'ax^2 + bx + c = 0'.";
      return;
  }

  const a = coeficientes.a;
  const b = coeficientes.b;
  const c = coeficientes.c;

  // Calcular o discriminante
  const discriminante = calcularDiscriminante(a, b, c);

  // Calcular as raízes
  const raizes = calcularRaizes(a, b, discriminante);

  // Exibir o resultado
  exibirResultado(raizes);
}

function extrairCoeficientes(equacao) {
  // Remover espaços em branco e dividir a equação em termos
  const termos = equacao.replace(/\s/g, "").split(/(?=[+-])/);

  // Inicializar coeficientes
  let a = 0;
  let b = 0;
  let c = 0;

  // Loop sobre os termos para extrair os coeficientes
  for (let termo of termos) {
      if (termo.includes("x^2")) {
          // Coeficiente do termo quadrático (ax^2)
          a += parseInt(termo) || 1; // Se não houver coeficiente, assume 1
      } else if (termo.includes("x")) {
          // Coeficiente do termo linear (bx)
          b += parseInt(termo) || 1; // Se não houver coeficiente, assume 1
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

function exibirResultado(raizes) {
  if (raizes.length === 0) {
      document.getElementById("resultado").innerText = "A equação não possui raízes reais.";
  } else if (raizes.length === 1) {
      document.getElementById("resultado").innerText = "A raiz da equação é: X = " + raizes[0];
  } else {
      document.getElementById("resultado").innerText = "As raízes da equação são: X = " + raizes[0] + " e X = " + raizes[1];
  }
}