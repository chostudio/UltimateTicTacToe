/*
 There is one board
 board has 9 grids
 grid has 9 cells
*/
export class Board {

    turnNumber = 0
    grids: Grid[] = []

    constructor(grids: NodeListOf<HTMLTableElement>) {
        for (let i = 0; i < grids.length; i++) {
            this.grids.push(
                new Grid(this, grids[i])
            )
        }
    }

    update() {
        for (let grid of this.grids) {
            grid.update()
        }
    }
}

export class Grid {

    cells: Cell[] = []
    board: Board

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

    constructor(board: Board, gridElements: HTMLTableElement) {

        this.board = board

        let tds = gridElements.querySelectorAll("td");
        for (let i = 0; i < 9; i++) {
            this.cells.push(new Cell(this, tds[i], undefined))
        }
    }

    update() {

        this.checkGrid()
        for (let cell of this.cells) {
            cell.update()
        }
    }

    checkGrid() {

        /*
    
         0 | 1 | 2
        ---+---+---
         3 | 4 | 5
        ---+---+---
         6 | 7 | 8
        */

        for (let combo of Grid.combos) {
            if (this.findMatches(combo)) {
                console.log("WIN")
            }

        }
    }

    findMatches(indexes: number[]): boolean {
        let target;

        if (indexes.length === 0) {
            target = this.cells[0];
            indexes = [...Array(this.cells.length).keys()]; // create an array of all indices
        } else {
            target = this.cells[indexes[0]];
        }
        for (let i = 1; i < indexes.length; i++) {
            if (this.cells[indexes[i]] !== target) {
                return false;
            }
        }
        return true;
    }

}

export class Cell {

    occupiedBy: number | undefined
    element: HTMLElement
    grid: Grid

    static symbols = [
        'x',
        'o'
    ]

    constructor(grid: Grid, element: HTMLElement, value: number | undefined) {
        this.grid = grid
        this.element = element
        this.occupiedBy = value;

        const button = document.createElement('button');
        button.classList.add("cell");
        this.element.appendChild(button)
        console.log("MAKE")
        button.addEventListener("click", () => {
            this.onClickButton()
        });


    }

    update() {
    }

    onClickButton() {
        let target = this.element;

        let symbol = Cell.symbols[this.grid.board.turnNumber % Cell.symbols.length]
        const currentTurn = document.getElementById("currentTurn")!!
        currentTurn.innerText = symbol

        target.innerText = symbol;

        this.update()
        this.grid.checkGrid()
        this.grid.board.turnNumber++

    }
}