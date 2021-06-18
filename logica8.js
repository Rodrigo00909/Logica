/*
Dado un número entero, invertirlo y devolver de nuevo el entero

Ejemplo:
InvertirNumero(67) // Devuelve 76

Como hacerlo?
- Funcion que reciba un numero
- Convertir numero en string
- Crear un array por cada letra
- Darle la vuelta
- Unir el array en un string
- Convertir string en un entero

usar toString() para convertir a string
chequear si es string con typeof
split() convierte string en un array x un criterio de separacion: ''
reverse() para invertirlo
unirlo con join() con ''
encerrarlo en un parseInt
multipliocar todo por el signo del numero: *Math.sign(numero)
*/

const invertir = (numero) => {

    let invertido = parseInt(numero.toString().split('').reverse().join('')) * Math.sign(numero);

    return invertido;

}

console.log(invertir(78));