// escribe la función max acá

function max(arr){
    if(arr.length != 0){
        let maxNumber = 0;
        for(let num of arr){
            if(num > maxNumber){
                maxNumber = num
            }
        }
        return maxNumber
    }else {
        return undefined
    }
}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined