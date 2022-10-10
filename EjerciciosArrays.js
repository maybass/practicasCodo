const arrayPalabras = ["hola", "si", "no", "como", "donde"]
const arrayNumeros  = [1,2,3,4,5,6,7]
function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0]
  
}

console.log(devolverPrimerElemento(array))

const devolverUltimoElemento = array => {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1]
}

const devolverUltimoElemento = array => array[array.length - 1]

console.log(devolverUltimoElemento(array))

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}

const obtenerLargoDelArray = array => array.length
  // Devuelve el largo de un array
  // Tu código:

console.log(obtenerLargoDelArray(array))

console.log(obtenerLargoDelArray(array))


const arrayNumeros  = [1,2,3,4,5,6,7]


const  incrementarPorUno = arrayNumeros => {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  
  const nuevoArray = arrayNumeros.map((numero)=> {
    return numero+1
})

console.log(nuevoArray)

}

incrementarPorUno(arrayNumeros)


const arrayPalabras = ["hola", "si", "no", "como", "donde"]

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  return array.push(elemento)
  
}

console.log(agregarItemAlFinalDelArray(arrayPalabras, "jirafa"))
console.log(arrayPalabras)


const arrayPalabras = ["hola", "si", "no", "como", "donde"]

const agregarItemAlComienzoDelArray = (array, elemento) =>  array.unshift(elemento)
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
 


agregarItemAlComienzoDelArray(arrayPalabras, "elefante")
console.log(arrayPalabras)


let palabras = ["hola", "como", "te", "va"]

const  dePalabrasAFrase = palabras => {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(" ")
  
}

console.log(dePalabrasAFrase(palabras))


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
}

let palabras = ["hola", "como", "te", "va"]


const arrayContiene = (array, elemento) => array.includes(elemento)


console.log(incluye(palabras, "como"))



let numeros = [1,2,3]


const agregarNumeros = numeros => {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  const resultado = numeros.reduce((acumulador,actual)=> acumulador + actual)
  return resultado
  
}

console.log(agregarNumeros(numeros))

let resultadosTest = [1,2,3,4,5]

const promedioResultadosTest = resultadosTest => {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  
  let suma= 0;
  for(let numero of resultadosTest) {
      suma +=numero;
  }
  
  const resultado = suma / resultadosTest.length
  return resultado
}



console.log(promedioResultadosTest(resultadosTest))


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
}

let numeros = [100,1,2,3,4, 3800, 5,16,2,300000000, 78,1600, 17000]


const compararNumeros = () => {
      let numeroMayor = 0;
    for(let i of numeros) {
      
        if(i>numeroMayor) {
            numeroMayor= i 
           
        }
         
    }
    
    console.log(numeroMayor)
}

compararNumeros()


let numeros = [1,2,3,4,5]


const multiplicarArgumentos = () => {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  let multiplicacion = 1;
for(let numero of numeros) {
    multiplicacion *= numero;
}
return multiplicacion
}

console.log(multiplicarArgumentos())


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

}

let arreglo = [1,2, 20,50, 32, 1 , 0,130,45,210000]

const cuentoElementos = arreglo => {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let contadora = 0;
  for(let i of arreglo) {
      if(i>18) {
          contadora +=1
      }
      
  }
    return contadora;
    
}

console.log(cuentoElementos(arreglo))


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  
} 
let numeroDeDia = parseInt(prompt('Indique un numero'))
function diaDeLaSemana(numeroDeDia) {
  
  switch(numeroDeDia) {
    case 1 :
        console.log("Domingo , es fin de semana");
        break;
    case 2 :
        console.log("Lunes , es dia laboral");
      
        break;
    case 3 :
        console.log( "Martes , es dia laboral");
        
        break;
    case 4 :
      
         console.log( "Miercoles , es dia laboral");
        break;
    case 5 :
         console.log( "Jueves , es dia laboral");
       
        break;
    case 6 :
         console.log( "Viernes , es dia laboral");
       
        break;
    case 7 :
        console.log("Sabado , es fin de semana");
        break;
    default :
        return "Ingrese un dia valido";
        break;
  }
} 

console.log(diaDeLaSemana(numeroDeDia))
let numeroDeDia = parseInt(prompt('Indique un numero'))

const diaDeLaSemana = numeroDeDia => {
    if(numeroDeDia===2||numeroDeDia===3||numeroDeDia===4||numeroDeDia===5||numeroDeDia===6) {
        console.log("Es dia laboral")
    }else if(numeroDeDia===1||numeroDeDia===7) {
        console.log("Es finde")
    }else {
        console.log("Ingrese un dia correcto")
    }
}
diaDeLaSemana(numeroDeDia)

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  
}

const empiezaConNueve = n => {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  const designar = n.toString()
  
  console.log(typeof(designar))
  const saber = designar.startsWith("9") 
  return saber;
  
}

console.log(empiezaConNueve(90))


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
}

let array =["enero","febrero","marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
 
const mesesDelAno = array => {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  const nuevoArr = array.filter((mes)=>mes==="enero" || mes==="marzo" || mes==="noviembre")
  console.log(typeof(nuevoArr))
  return nuevoArr
}

console.log(mesesDelAno(array))



/* .filter() : Recorre el array y retorna un nuevo array con aquellos elementos que pasen una determinada condición
.filter */
/* const nuevoArray = animales.filter (elementos => elementos === "Perro" || elementos === "Gato" )
console.log(nuevoArray) */


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
}
const mayorACien = array => {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  
  const nuevoArray = array.filter((numero)=> numero>100)
  return nuevoArray;
  
}

console.log(mayorACien([0,100,99,200,130,132,5,180]))



let numero = parseInt(prompt('Ingrese un numero'))
function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let nuevoArr=[]
  for(let i=numero; i<=10; i+=2) {
      nuevoArr.push(i)
  }
  return nuevoArr;
}

 console.log(breakStatement(numero))

let numero = parseInt(prompt('ingrese un numero'))
function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let nuevoArray = []
  for(let i =numero; i<=10; i+=2) {
      nuevoArray.push(i)
      
  }
  return nuevoArray;
}

console.log(continueStatement(numero))


/* Ejercicio  arrays */

/* 1)Declarar un array que vamos a llamar “clasificaciones” con los siguientes valores:
Marcos, Franco, Agostina, Leon, Juan Cruz,Eduardo */

/* (vamos a suponer que esa es la orden de clasificación de un concurso) */

/* 2)recorre el array (clasificaciones) e Imprime la clasificación actual.
 (realizar una funcion "mostrarClasificacion()" esa funcion debe recorrer el array con un bucle for y mostrar la clasificacion) */

//modo Correcto ForEach (pueod usar tambien document.write)
let clasificaciones = ["Marcos", "Franco", "Agostina", "Leon", "Juan Cruz","Eduardo"]

const mostrarClasificacion = () => {
    clasificaciones.forEach((numero, i)=> {
        i++
        console.log(`Puesto numero ${i}  ${numero}`)
    })
}

mostrarClasificacion()


/* 3)El concurso continua, y se van modifican esas posiciones anteriores. Debemos cambiar en el array: */
/* a)Leon adelanta a Agostina */

/* b)Eduardo es descalificado y se elimina del concurso */

let nuevoArray = ["Marcos", "Franco", "Agostina", "Leon", "Juan Cruz","Eduardo"]

nuevoArray.pop()

nuevoArray.splice(2,1,"Leon", "Agostina")
console.log(nuevoArray)

/* c)Detrás de Marcos y antes de Franco se clasifican dos nuevas concursantes: Julieta y Martina, en ese orden */
nuevoArray.splice(1,0, "Julieta", "Martina")

console.log(nuevoArray)

/* d)Hay una nueva participante que pasa a encabezar la clasificación: Alicia */

nuevoArray.unshift("Alicia")

console.log(nuevoArray)

/* e)muestra la clasificación actualizada (mostrarClasificacion())y comprueba que se ha hecho correctamente  */