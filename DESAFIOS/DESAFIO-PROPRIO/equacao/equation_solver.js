// Função para resolver equações do segundo grau
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
  
    // Extrair os coeficientes 'a', 'b' e 'c' da equação
    const coeficientes = extrairCoeficientes(equacao);
  
    // Verificar se os coeficientes foram extraídos com sucesso
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
  
  // Função para extrair os coeficientes da equação
  function extrairCoeficientes(equacao) {
    // Simplificar a lógica para extrair os coeficientes usando uma expressão regular
    const coeficientes = /(-?\d+)x\^2\s*(\+|\-)?\s*(\d+)x\s*(\+|\-)?\s*(\d+)/.exec(equacao);
  
    // Verificar se os coeficientes foram extraídos com sucesso
    if (!coeficientes) {
      return null;
    }
  
    const a = parseInt(coeficientes[1]);
    const b = parseInt(coeficientes[3]);
    const c = parseInt(coeficientes[5]);
  
    return { a, b, c };
  }
  
  // Função para calcular o discriminante
  function calcularDiscriminante(a, b, c) {
    return Math.pow(b, 2) - 4 * a * c;
  }
  
  // Função para calcular as raízes da equação
  function calcularRaizes(a, b, discriminante) {
    if (discriminante > 0) {
      // Equação com duas raízes reais
      const raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
      const raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
      return [raiz1, raiz2];
    } else if (discriminante === 0) {
      // Equação com uma única raiz real
      const raiz = -b / (2 * a);
      return [raiz];
    } else {
      // Equação sem raízes reais
      return [];
    }
  }
  
  // Função para exibir o resultado
  function exibirResultado(raizes) {
    if (raizes.length === 0) {
      document.getElementById("resultado").innerText = "A equação não possui raízes reais.";
    } else if (raizes.length === 1) {
      document.getElementById("resultado").innerText = "A raiz da equação é: " + raizes[0];
    } else {
      document.getElementById("resultado").innerText = "As raízes da equação são: " + raizes[0] + " e " + raizes[1];
    }
  }
  
  // Chamar a função resolverEquacao quando o botão for clicado
  document.getElementById("botao").addEventListener("click", resolverEquacao);
  