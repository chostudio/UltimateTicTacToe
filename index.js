
/*

Reference:

0 = Empty
1 = X
2 = O

*/

let board = [
    [1, 0, 2],
    [1, 1, 0],
    [1, 2, 2]
]

let choords = [
    [
        [0, 0], // [y, x]
        [0, 1],
        [0, 2]
    ],

]

console.log(
    board
    [
        choords[i][j][l]
    ]
)

console.log(choords[0][0])

let obj = [
    [ // L. Col. Fill
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0]
    ],

    [ // M. Col. Fill
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0]
    ],

    [ // R. Col. Fill
        [0, 0, 1],
        [0, 0, 1],
        [0, 0, 1]
    ],

    [ // T. Row Fill
        [1, 1, 1],
        [0, 0, 0],
        [0, 0, 0]
    ],

    [// M. Row Fill
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 0]
    ],

    [ // B. Row Fill
        [0, 0, 0],
        [0, 0, 0],
        [1, 1, 1]
    ],

    [ // LR Diag. Fill
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
    ],

    [ // RL Diag. Fill
        [0, 0, 1],
        [0, 1, 0],
        [1, 0, 0]
    ]
]

function allSam(toFind, array){
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i].length; j++){
            if(array[0][i][j] != toFind && array[1][i][j] != toFind && array[2][i][j] != toFind){
                return false;
            }
        }
    }
    return true;
}


let arr1 = [
    [
        [1, 1, 1],
        [0, 0, 0],
        [0, 0, 0]
    ],

    [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 0]
    ],

    [
        [0, 0, 0],
        [0, 0, 0],
        [1, 1, 1]
    ]
]


function sameAll(toFind, array){
    if(array[choords[0]] != toFind){
        return false;
    }
    return true;
}



let arr2 = [
    [
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0]
    ],

    [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0]
    ],

    [
        [0, 0, 1],
        [0, 0, 1],
        [0, 0, 1]
    ]
]

console.log(sameAll(1, board))