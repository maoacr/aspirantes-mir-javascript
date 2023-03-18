// Funcion que recibe un array y retorna un string con los elementos separados por espacio sin usar el metodo Join
function join(arr) {
    let totalCount = ''
    arr.forEach(element => {
        totalCount += `${element} `
    });
    let stringResult = totalCount.toString()
    return stringResult
}


console.log(join([1, 3, 2])) // => index 1
console.log(join([10, 9, 8, 7, 6, 5, 4]))