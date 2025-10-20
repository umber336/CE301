const board = document.querySelector(".chessboard");
const squares = board.querySelectorAll(".square");

const pieceOrder = ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"]

const boardSetup = () => {
    // black pieces
    pieceOrder.forEach((piece, index) => {
        boardAppendPiece(squares[index], piece, "black")
    })
    // black pawns
    for (let i = 8; i <= 15; i++) {
        boardAppendPiece(squares[i], "pawn", "black");
    }
    // white pawns
    for (let i = 48; i <= 55; i++) {
        boardAppendPiece(squares[i], "pawn", "white");
    }
    // white pieces
    pieceOrder.forEach((piece, index) => {
        boardAppendPiece(squares[index + 56], piece, "white")
    })

    // add drag and drop

    pieces = document.querySelectorAll(".piece")

    pieces.forEach((piece) => {
        piece.addEventListener("dragstart", () => {
            console.log("drag")
        })

        piece.addEventListener("dragover", (e) => {
            e.preventDefault();
            console.log("drag")
        })

        piece.addEventListener("drop", (e) => {
            e.preventDefault();
            console.log("drop")
        })
    })
}

const boardAppendPiece = (square, piece, colour) => {
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

