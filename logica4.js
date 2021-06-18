/* 

Dada una cadena de texto, darle la vuelta e invertir el orden de sus caracteres, sin usar métodos propios del lenguaje, solo estructuras de control

Ejemplos:
invertir('hola') // aloh
invertir('victor') // rotciv

Como hacerlo

- Funcion con parametro 'texto'
- Crear una variable para guardar la cadena invertida
- Bucle que recorra string y guarde los caracteres en la variable

*/

const invertir = (texto) => {
    let i = "";

    for(let letra of texto) {
        i = letra + i;
    }
    console.log(i);
}

invertir('victorroblesweb.es')