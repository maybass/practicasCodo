let recomendacion = (prompt("Ingresa: serie , pelicula, libro"))


switch(recomendacion.toLowerCase()) {
    case "serie" : 
        document.write('te recomendamos manifiesto')
        break;
    case "pelicula" :
         document.write('Te recomendamos el gran pez')
        break;
    case "libro" :
         document.write('te recomendamos Lord of the rings')
        break;
    default :
         document.write('ingresaste opcion incorrecta')
        break;
}


let semaforo = Number(prompt("Ingresa 1 para ROJO, 2 para AMARILLO, 3 para VERDE"))


switch(semaforo) {
    case 1 : 
        document.write('No puedes pasar')
        break;
    case 2 :
         document.write('Advertencia')
        break;
    case 3 :
         document.write('Puedes pasar')
        break;
    default :
         document.write('ingresaste opcion incorrecta')
        break;
}
