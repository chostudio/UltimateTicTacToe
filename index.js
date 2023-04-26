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
    for(it of array){
        if(it == toFind){
            console.log("Ohian")
        }
    }
}

let arr1 = [1, 1, 1]
let arr2 = [1, 2, 1]

console.log(allSame(1, arr1))
console.log(allSame(1, arr2))