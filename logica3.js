/* 
Dada una palabra, buscarla en una frase y devolver cuantas veces aparece en ella.
La frase y la palabra deben ser parametros de una funcion

Ejemplo:
Tener una funcion y le pasamos una frase por parametro, y en otro parametro la palabra
coincidencia('hola soy una palabra', 'PALABRA')
En este caso deberá devolver 2, es decir dos veces aparece palabra

coincidencia('soy la frase', 'goku')
en este caso devuelve 0 xq no se repite ninguna palabra

como hacerlo?
- Función con dos parametros 'frase' y 'busqueda'
- Poner string en minusculas y limpiarlo
- Comprobar si la busqueda esta incluida en la frase
- Crear un array de palabras de la frase
- Mapear esas palabras y hacer un contador de cada una
- Devolver el contador de la busqueda
*/

const coincidencia = (frase,busqueda) => {
    let clear_text = frase.toLowerCase().replace(/[!¡.,-]/gi, '');

    let totalVeces = 0;

    if(clear_text.includes(busqueda)) {
        let palabras = clear_text.split(' ');
        let mapear = {};

        for(let palabra of palabras) { // Algo asi funcionaria map()

            if(mapear[palabra]) { // Si dentro de mapear existe la palabra en la que mi indice esta parado
                mapear[palabra]++; // le sumo uno a esa palabra
            } else {
                mapear[palabra] = 1; // y si no, lo dejo con un 1 xq no encontre repiticiones de esa palabra
            }
        }

        totalVeces = mapear[busqueda];
    } else {
        totalVeces = 0;
    }

    return totalVeces;
}

console.log("Numero de coincidencias: ", coincidencia('Hola me llamo rodrigo torres messenzani, torres de españa y messenzani de italia', 'rodrigo'));