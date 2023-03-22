let Game = {
    cells: []
}

const tds = document.querySelectorAll("table.innerBoard td");

let node = tds[0].parentElement.parentElement;
let cellNum = 0;
let boardNum = 0;
let board = [];

function setupGame() {

    for (let cell of tds) {
        if (cell.parentElement.parentElement != node) {
            node = cell.parentElement.parentElement;
            cellNum = 0;
            Game.cells.push(board);
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
            onClickButton(event)
        });

        cellNum++
    }

    console.log(cells);
}

let symbols = [
    "x",
    "o"
]
let turnNumber;

function startGame() {
    turnNumber = 0;


}



function onClickButton(event) {
    let target = event.target;

    if (target.innerText != "") return;
    turnNumber++

    let symbol = symbols[turnNumber % symbols.length]
    document.getElementById("currentTurn").innerText = symbol

    target.innerText = symbol;
    
}

function update() {

}


setupGame()
startGame()