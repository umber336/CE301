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
}

const boardControl = () => {
    pieces = board.querySelectorAll(".piece")
    let selected;

    pieces.forEach((piece) => {
        piece.addEventListener("dragstart", (e) => {
            selected = e.currentTarget;
        })
    })

    squares.forEach((square) => {
        square.addEventListener("dragover", (e) => {
            e.preventDefault();
        })

        square.addEventListener("drop", (e) => {
            e.preventDefault();
            boardRemovePiece(square)
            square.appendChild(selected)
        })
    })
}



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
    boardControl()
})();

