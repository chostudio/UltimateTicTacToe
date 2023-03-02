import './style.css';

console.log("Hello world")

const tds: NodeListOf<Element> = document.querySelectorAll("table.innerBoard td");
const cells: HTMLElement[][] = []

let node = tds[0].parentElement?.parentElement;
let cellNum = 0;
let boardNum = 0;
let board: HTMLElement[] = [];

for (let cell of tds) {
    if (cell.parentElement?.parentElement != node) {
        node = cell.parentElement?.parentElement
        cellNum = 0;
        cells.push(board);
        board = [];
        boardNum++
    }

    const button = document.createElement('button');
    button.innerText = `${boardNum} - ${cellNum}`;
    button.classList.add("cell");
    button.setAttribute("cellNum", cellNum.toString())
    button.setAttribute("boardNum", boardNum.toString())
    cell.appendChild(button);
    board.push(button);
    
    button.addEventListener("click", (event: Event) => {
        let target = event.target as HTMLElement;
        console.log()
    });
    
    
    cellNum++
}

console.log(cells);