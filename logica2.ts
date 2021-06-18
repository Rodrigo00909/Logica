/* Dada una Cadena de texto, comprobar si es un palindromo o no.
Los palíndromos son palabras que se leen igual aun estando invertidas
Ejemplo: Ana, Bob, Otto, allivessevilla, Luzazul, Yohagoyogahoy 

Como hacerlo?
Ejecutar funcion palindromo('otto') // True
Ejecutar funcion palindromo('goku') // False

- Funcion con parametro 'texto'
- Separar el texto en un array de letras
- Darle la vuelta
- Unir el array de letras en un string y comparar con el parametro 

*/
// split separa un texto por los separadores que elija, en este caso: '' || es decir q no lo separe x nada y lo guarde en un array || 

const PalindromoTs = (texto) => {
    const textoToLower = texto.toLowerCase();
    const textoTrim = textoToLower.trim();
    const textoComparar = textoTrim.split('').reverse().join('');

    return textoTrim === textoComparar;
}

console.log(PalindromoTs('yohagoyogahoy'));