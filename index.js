let arr = [
    [1, 0, 2],
    [1, 2, 0],
    [1, 0, 0]
]

/*
0 = None
1 = X
2 = O
*/

arr[1][1]++

console.log(arr[1][1])

let darr = [0, 0, 0]



function allSame(toFind, array){
    for(let i = 0; i < array.length; i++){
        if(array[i] != toFind){
            return false;
        }

    }
    return true;
}

let arr1 = [1, 1, 1]
let arr2 = [1, 2, 1]
let arr3 = ["baller", "not baller", "baller", "baller"]

console.log(allSame(1, arr1))
console.log(allSame(1, arr2))
console.log(allSame("baller", arr3)) // faslse