// escribe la función maxIndex acá

function maxIndex(arr){
    if(arr.length !== 0){
        let max = Math.max(...arr)
        let index = arr.indexOf(max)
        return index
    } else {
        return -1
    }
}

console.log(maxIndex([1, 3, 2])) // => index 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // => index 0
console.log(maxIndex([])) // => -1 