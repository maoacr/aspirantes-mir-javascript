// escribe la función sum acá

function sum(arr){
    let total = 0;
    for(let num of arr){
        total += num
    }
    return total
}

console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0