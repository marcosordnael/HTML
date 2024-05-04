// Representação do tabuleiro
let board = ["", "", "", "", "", "", "", "", ""];

// Jogador atual (X ou O)
let currentPlayer = "X";

// Verifica se o jogo acabou
let gameEnded = false;

// Mapeamento dos índices dos quadrados do tabuleiro
const squareIndices = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

// Inicializa o tabuleiro
function initializeBoard() {
    const boardElement = document.getElementById("board");

    for (let i = 0; i < 9; i++) {
        const square = document.createElement("div");
        square.className = "square";
        square.setAttribute("data-index", i);
        square.addEventListener("click", () => makeMove(i));
        square.addEventListener("mouseover", () => showIndex(square)); // Adiciona evento de mouseover
        square.addEventListener("mouseout", () => hideIndex(square)); // Adiciona evento de mouseout
        boardElement.appendChild(square);
    }
}

// Faz uma jogada
function makeMove(index) {
    if (!gameEnded && board[index] === "") {
        board[index] = currentPlayer;
        renderBoard();
        checkWinner();
        if (!gameEnded) {
            setTimeout(() => {
                makeComputerMove();
                renderBoard();
                checkWinner();
            }, 3000); // Atraso de 3 segundos
        }
    }
}

// Faz uma jogada do computador
function makeComputerMove() {
    if (!gameEnded) {
        // Simplesmente escolha o primeiro quadrado vazio (pode ser melhorado)
        const emptySquares = board.reduce((acc, val, index) => (val === "" ? acc.concat(index) : acc), []);
        if (emptySquares.length > 0) {
            const randomIndex = emptySquares[Math.floor(Math.random() * emptySquares.length)];
            board[randomIndex] = currentPlayer === "X" ? "O" : "X";
        }
    }
}

// Verifica se há um vencedor
function checkWinner() {
    for (const indices of squareIndices) {
        const [a, b, c] = indices;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameEnded = true;
            document.getElementById("result").innerText = `Jogador ${board[a]} venceu!`;
        }
    }

    if (!board.includes("") && !gameEnded) {
        gameEnded = true;
        document.getElementById("result").innerText = "Empate!";
    }
}

// Reinicia o jogo
function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameEnded = false;
    document.getElementById("result").innerText = "";
    renderBoard();
}

// Atualiza a exibição do tabuleiro
function renderBoard() {
    const squares = document.querySelectorAll(".square");

    squares.forEach((square, index) => {
        square.innerText = board[index];
    });
}

// Inicializa o jogo quando a página é carregada
window.onload = function () {
    initializeBoard();
    renderBoard();
};
