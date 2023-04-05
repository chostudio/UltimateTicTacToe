import './style.css'
import { Board, Grid, Cell} from './board'

const tds = document.querySelectorAll("table.grid") as NodeListOf<HTMLTableElement>;
let board = new Board(tds)

