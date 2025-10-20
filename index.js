const board = document.querySelector(".chessboard");
const squares = board.querySelectorAll(".square");

const pieceOrder = ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"]

const boardSetup = () => {
    // black pieces
    pieceOrder.forEach((piece, index) => {
        boardCreatePiece(squares[index], piece, "black")
    })
    // black pawns
    for (let i = 8; i <= 15; i++) {
        boardCreatePiece(squares[i], "pawn", "black");
    }
    // white pawns
    for (let i = 48; i <= 55; i++) {
        boardCreatePiece(squares[i], "pawn", "white");
    }
    // white pieces
    pieceOrder.forEach((piece, index) => {
        boardCreatePiece(squares[index + 56], piece, "white")
    })

    // add drag and drop

    pieces = document.querySelectorAll(".piece")

    pieces.forEach((piece) => {
        piece.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", piece.outerHTML);
            e.dataTransfer.effectAllowed = "move";
        })
    })
}

squares.forEach((square) => {
    square.addEventListener("dragover", (e) => {
        e.preventDefault();
    })

    square.addEventListener("drop", (e) => {
        e.preventDefault();
        boardRemovePiece(square)
        square.innerHTML = e.dataTransfer.getData("text/plain");
    })
})

const boardRemovePiece = (square) => {
    square.innerHTML = "";
}

const boardCreatePiece = (square, piece, colour) => {
    img = document.createElement("img");
    img.src = `assets/${piece}-${colour}.svg`;
    const newPiece = document.createElement("div");
    newPiece.classList.add("piece");
    newPiece.setAttribute('draggable', 'true');
    newPiece.append(img);
    square.append(newPiece);
}

(() => {
    boardSetup()
})();

