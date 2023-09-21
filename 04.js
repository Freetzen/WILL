/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(1711) devuelve true

  // Tu código:


  let numToString = num.toString() // String del número ingresado
    let stringToArray1 = numToString.split('')
    let stringToArray2 = numToString.split('') // Convirtiendo a Array ['9', '8', '7', '9']
    let arrayToReverse = stringToArray2.reverse() 
    let arrayToString1 = stringToArray1.join('')
    let arrayToString2 = arrayToReverse.join('')

    if(arrayToString1 === arrayToString2){
        return true
    }else{
        return false
    }


}

// No modifiques nada debajo de esta linea  //

module.exports = numeroSimetrico