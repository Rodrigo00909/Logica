/* Dados dos arrays, devolver un array con solo los elementos comunes entre ambos 
Ejemplo: elementosComunes([4,5,6,7], [7,8,9,7,5]) // Devuelve [5, 7]

Como hacerlo:
- Función que reciba dos arrays
- Filtrar array evaluando una condición
- Devolver array nuevo
*/

// includes: Devuelve true si encuentra una coincidencia dentro de una palabra-array etc o false
// filter() crea un nuevo array con todos los elementos q cumplan  la condicion ejemplo const result = words.filter(word => word.length > 6); aca le digo que
// recorre cada una de las palabras (words) y si esa palabra(word) tiene mas de 6 caracteres dentro entonces genero un nuevo array con esa paalabra y con todas las q cumplan esa condicion

const arrays = (array1,array2) => {
    const filtrado = array1.filter(elemento => { // tendremos el parametro elemento
       return array2.includes(elemento) // y dentro de la funcion callback, con includes se evaluara si el elemento que estoy recorriendo ahora existe dentro de array2
    });

    /*RESUMIDO: const filtrado = array1.filter(elemento => array2.includes(elemento)); */

    return filtrado;
}

console.log(arrays([4,5,6,7], [7,8,9,7,5]));
console.log(arrays(['hulk', 'ironman', 'thor', 'batman', 'superman'], ['hulk','superman']));