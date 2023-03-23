"use strict";

import './prototype.js'
import { Board } from './board.js'

const tds = document.querySelectorAll("table.innerBoard td");
let board = new Board(tds)


