let board = [
    0, 0, 1,
    0, 2, 1,
    2, 2, 1
]


function amogus(board, indexes) {
    let target; if (indexes.length === 0) {
        target = board[0]; 
        indexes = [...Array(board.length).keys()]
    } else { 
        target = board[indexes[0]]; 
    } 
    for (let i = 1; i < indexes.length; i++) { 
        if (board[indexes[i]] !== target) {
            return null; } 
        } 
    return target;
};



/*
 0 | 1 | 2 
---+---+--- 
 3 | 4 | 5 
---+---+--- 
 6 | 7 | 8 
 */

let combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
]




console.log(amogus(board, combos))