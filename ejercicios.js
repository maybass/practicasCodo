//funcion
//pedimos los datos a la persona.(nombre - edad)
// indicar si la pérsona es mayor de 18 puede pasar
// si la persona llego antes de las 2 no paga entrada
// si la persona llego despues de las 2 paga en pesos la suma de las letras de su nombre + su edad


const pedirDatos = () => {
    let nombre = prompt('Cual es su nombre?')
    let edad = Number(prompt('Cual es su edad?'))
    let horaLlegada = Number(prompt('A que hora llego?'))
    if(edad<18){
        console.log(`${nombre} usted no puede entrar porque es menor de edad`)
   }else if(edad>=18 && horaLlegada<=2) {
        console.log(`${nombre}, usted puede pasar xq es mayor de 18 y no paga entrada porque llego a las ${horaLlegada}`)
    } else if (edad>=18 && horaLlegada>2) {
        let plata = edad + nombre.length
        console.log(`${nombre}, usted puede pasar xq es mayor de 18 pero tiene q pagar entrada porque llego a las ${horaLlegada} y tiene que pagar ${plata}`)
    }

}

pedirDatos()




// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'Hola';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 5;

// Crea una variable booleana:
const nuevoBool = false;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;



function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return str;

}
console.log(devolverString('Hola'))


function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  
  return x + y;

}

console.log(suma(1,2))

function resta(x, y) {
  // Resta "x" de "y" y devuelve el valor
  // Tu código:
  
  return x - y

}

console.log(resta(5,4))

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  return x*y

}
console.log(multiplica(2, 3))

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  if(y===0) {
	  alert('No se puede dividir por 0')
  }
  return x / y

}

console.log(divide(4,5))

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:utilizar if y else
if(x===y) {
	
	console.log('true')
}else {
	console.log('false')
}

}

sonIguales(2,3)

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if(str1.length===str2.length) {
	  console.log(true)
  }else {
	  
	  console.log(false)
  }

}

tienenMismaLongitud('hola', 'chau')

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num<=90) {
	  return true;
  }else {
	  return false;
	  
  }

}
console.log(menosQueNoventa(8))

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num>=50) {
	  return true;
  }else {
	  return false;
  }

}

console.log(mayorQueCincuenta(56))

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  return x%y

}

console.log(obtenerResto(10, 5))

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num%2===0) {
	 console.log('Es par') 
  }else {
	  console.log('Es impar')
  }

  
}

esPar(2)

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
	if(num%2!==0) {
		console.log(true)
	}else {
		console.log(false)
	}
}
esImpar(5)


function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
 return Math.pow(num, 2);


}
 elevarAlCuadrado(7)

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
 return Math.pow(num, 3);
}

elevarAlCubo(7)

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
	return Math.pow(num, exponent)
}

elevar(7, 3)

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
return Math.round(num)
}

console.log(redondearNumero(5.6))

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  return Math.ceil(num)

}
console.log(redondearHaciaArriba(4.2))

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  return Math.random()*1

}
console.log(numeroRandom())


let numero = Number(prompt('Ingrese un numero') //asi 
function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if(numero>0) {
	  console.log("Es positivo")
  }else if(numero<0) {
	  console.log("Es negativo")
	  
  }else {
	 console.log(false) 
	  
  }
  

}

esPositivo(numero)// o pasarlos como argumento

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
	return str + "!"

}
 console.log(agregarSimboloExclamacion('hello world'))


let nombre = prompt('introduce tu nombre')
let apellido = prompt ('introduce tu apellido')

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
  // Tu código:
  return nombre + " " + apellido

}
combinarNombres(nombre, apellido)// o pasarlos como argumento

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
return 'Hola ' + nombre 
}
obtenerSaludo(nombre)

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código: //base por altura
  return alto * ancho

}
console.log(obtenerAreaRectangulo(10, 20))



function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  return lado * 4

}
retornarPerimetro(5)


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí


return  (base * altura) / 2

}
areaDelTriangulo(2, 1)


let euro = Number(prompt('Escriba la cifra en euros'))
function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. 
  //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  return euro * 1.20
  

}
deEuroAdolar(euro)


let letra  = prompt('Escriba una letra').toLowerCase()
function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    //si ingresa una consonante muestre en pantalla dato incorrecto
  //Escribe tu código aquí
  if(letra.length >1) {
	  alert('Dato incorrecto')
  }
  if(letra==="a" || letra==="e" || letra ==="i" || letra ==="o" || letra ==="u") {
	  console.log('es vocal')
	  
	  
  }else {
	  console.log('dato incorrecto, consonante')
	  
  }
  


}
esVocal(letra)
