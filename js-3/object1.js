let pedro = {
    'nombre': 'Pedro Perez',
    'edad': 30,
    'activo': true,
    'hobbies': [
        'programar',
        'squash',
        'piano',
    ],
    //Agrégale al objeto una función llamada saluda que retorne la frase “Hola, me llamo ” seguido del nombre de la persona.
    saluda: function(){
        return `Hola, me llamo ${this.nombre}`
    }
}

//imprimir en consla el valor de la  llave edad
console.log(pedro.edad)
console.log(pedro['edad'])

//Agregar una propiedad con llave estatura y valor 1.8
pedro.estatura = 1.8
console.log(pedro)

//Eliminar la propiedad con llave activo
delete pedro.activo
console.log(pedro)

//Recorrer todas las propiedades e imprimirlas en consola
//Una linea por propiedad y separando la llave y el valor con dos puntos
let printProperties = (person) =>{
    for( let prop in person ){
        console.log(`${prop} : ${person[prop]}`)
    }
}
console.log(printProperties(pedro))

//Llama la función saluda y verifica el resultado, debería decir “Hola, me llamo Pedro Perez”.
console.log(pedro.saluda())