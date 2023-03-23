
export class Board {
    constructor(tds) {
        let node = tds[0].parentElement.parentElement;
        let cellNum = 0;
        let boardNum = 0;
        let board = [];


        for (let cell of tds) {
            if (cell.parentElement.parentElement != node) {
                node = cell.parentElement.parentElement;
                cellNum = 0;
                this.cells.push(board);
                board = [];
                boardNum++
            }

            const button = document.createElement('button');
            // button.innerText = `${boardNum} - ${cellNum}`;
            button.classList.add("cell");
            button.setAttribute("cellNum", cellNum.toString())
            button.setAttribute("boardNum", boardNum.toString())
            cell.appendChild(button);
            board.push(button);

            button.addEventListener("click", (event) => {
                this.onClickButton(event)
            });

            cellNum++
        }
    }
    static combos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [1, 4, 8],
        [2, 4, 6]
    ]

    static symbols = [
        "xegs",
        "o",
        "+"
    ]

    turnNumber = 0
    cells = []

    onClickButton(event) {
        let target = event.target;

        if (target.getAttribute("takenBy") != null) return;
        this.turnNumber++

        let symbol = Board.symbols[this.turnNumber % Board.symbols.length]
        document.getElementById("currentTurn").innerText = symbol

        target.innerText = symbol;

        target.setAttribute("takenBy", this.turnNumber % Board.symbols.length)
        this.update()

    }
    startGame() {
        turnNumber = 0
    }
    checkBoard(board) {

        /*
    
         0 | 1 | 2
        ---+---+---
         3 | 4 | 5
        ---+---+---
         6 | 7 | 8
        */

        for (let combo of combos) {
            if (!board.allSame(combo))
                break
        }
    }
    update() {

    }
}
