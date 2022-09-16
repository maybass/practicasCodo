// perder cuando el ingresado es distinto al aleatorio
function ganarPerder() {
    let intentos = 3;
    while(intentos!==0) {
        let alea = Math.round(Math.random()*5) //del 0 al 4
        let numero = Number(prompt("Ingresa un numero del 0 al 4"))
        if(numero === alea) {
            alert("Ganaste " + "el numero aleatorio era " + alea + ' y tus intentos son ' + intentos)
        }else if(numero!== alea) {
            intentos --
            alert("Perdiste te quedan " + intentos +' intentos el numero aleatorio era ' + alea)
        }
}
}

ganarPerder()

/* perder cuando el ingresado es mayor o menor que el aleatorio
function ganarPerder() {
    let intentos = 3;
    while(intentos!==0) {
        let alea = Math.round(Math.random()*5) //del 0 al 4
        let numero = Number(prompt("Ingresa un numero del 0 al 4"))
        if(numero === alea) {
            alert("Ganaste " + "el numero aleatorio era " + alea + ' y tus intentos son ' + intentos)
        }else if(numero< alea) {
            intentos --
            alert("Perdiste tu numero es menor te quedan " + intentos +' intentos el numero aleatorio era ' + alea)
        }else if(numero>alea) {
            intentos --
            alert("Perdiste tu numero es mayor te quedan " + intentos +' intentos el numero aleatorio era ' + alea)
            
        }
}
}

ganarPerder() */



