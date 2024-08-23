 let nombre = "mati"
 let num1 =10, num2=20

let num3 = num1 + num2

 console.log(nombre)

 console.log(num3)

 const PI = Math.PI

 saludar()

 console.log(esPar(num1))

 let arreglo =[1,2,3,4,5]

 console.log(sumarArray(arreglo))


 function saludar()
 {
   console.log("hola, buenas noches!")
 }

 function esPar(num)
 {
   return !(num % 2);
 }

 function sumarArray(array)
 {
   return array.reduce((acumulado, valorActual) => acumulado + valorActual, 0)
 }

 //Objetos literales y constructores

 const persona ={
   nombre: "pedro",
   edad: 30,
   porfesion: "contador"
 }

 function Pelicula(nombre,precio,stock=0){
  this.nombre = nombre
   this.precio = precio
   this.stock = stock
 }
 const P1 = new Pelicula("harry pottet",100,10)

 //10
 const frutas = ["pera","manzana","banana","frutilla"]
 console.log(frutas[2])
//11
 frutas.push("kiwi")
 console.log(frutas)
//12

 let arrayNumeros = [1,2,3,4,5,6,7,8,9,10]
 //uso la funcion filter para poder filtrar el array con solo numeros pares
 let arrayNuevo = arrayNumeros.filter(numero => numero % 2 == 0)

 console.log(arrayNuevo)
//13

 class Personas {
   constructor(nombre, edad){
     this.nombre = nombre
   this.edad = edad
   }
 }
function crearPersona(nombre,edad){
  return new Personas(nombre,edad)
}
let p1 = crearPersona("el nano",33)
 console.log(p1)

 //14
function obtenerInfo(Personas){
  return "la persona se llama "+ Personas.nombre+ " su edad es "+ Personas.edad
}
console.log(obtenerInfo(p1))
//15
 function duplicarArray(array)
 {
   return array.flatMap(numero => [numero,numero])
 }
 let numerosDuplicados = duplicarArray(arrayNumeros)

 console.log(numerosDuplicados)



