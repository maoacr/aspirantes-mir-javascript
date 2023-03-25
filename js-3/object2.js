//En un archivo llamado object2.js Crea un objeto literal llamado "persona" con las siguientes propiedades: nombre, edad, ciudad y profesión.
let persona = {
    'nombre': 'Pedro Perez',
    'edad': 30,
    'ciudad': 'Bogota',
    'profesion': 'Desarrollador web'
}

//Imprime en la consola el objeto "persona" completo.
console.log(persona)


//Crea una función llamada "presentacion" que tome el objeto "persona" como argumento y devuelva una cadena de texto que incluya el nombre, la edad y la ciudad de la persona.
function presentacion(person){
    return `Hola! mi nombre es ${person.nombre}, tengo ${person.edad} años y vivo en ${person.ciudad}.`
}
//Llama a la función "presentacion" y almacena el resultado en una variable llamada "mensaje".
let mensaje = presentacion(persona)


//Imprime en la consola el valor de la variable "mensaje".
console.log(mensaje)


//Agrega una nueva propiedad al objeto "persona" llamada "hobbies" que sea un arreglo con algunos pasatiempos.
persona.hobbies = ['leer', 'correr', 'cocinar', 'nadar' , 'programar']

//Imprime en la consola la propiedad "hobbies" del objeto "persona".
console.log(persona.hobbies)

//Utiliza un ciclo for para imprimir en la consola cada uno de los elementos del arreglo de hobbies.
for(let elem in persona.hobbies){
    console.log(persona.hobbies[elem])
}