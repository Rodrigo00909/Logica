/*

Dado un numero, mostrar una escalera con escalones de "[-]" usando el numero para los niveles de la escalera

Escalera(6) // devuelve:

[-]
[-][-]
[-][-][-]
[-][-][-][-]
[-][-][-][-][-]
[-][-][-][-][-][-]

- Funcion que reciba un número
- Recorrer el número de niveles de la escalera
- En cada iteración pintar los escalones de ese nivel
- Haciendo un bucle desde 1 hasta el nivel en el que estamos
*/

const escalera = (num) => {
    let escalera_completa = "";

    for(let nivel = 1; nivel <= num; nivel++) {

        //console.log("Nivel: " + nivel);

        let escalones = "";

        for(let escalon = 1; escalon <= nivel; escalon++) { // escalon empieza en 1, y mientras el escalon sea menor o igual al nivel en el que estamos, el escalon sumara 1
            escalones += "[-]"; // En cada vuelta añade un escalon nuevo a la variable escalones
        }
        
        // console.log(escalones)
        escalera_completa += escalones + '\n'; // Es para guardar los escalones en la variabvle esta para mostrar todo
    }

    // return escalones; -> MAL ya que escalones esta definido DENTRO del bloque
    return escalera_completa // BIEN
}

console.log(escalera(6));