/* Dado un número, devolver su tabla de multiplicar completa */
/* Como hacerlo?
Ejecutar una funcion:
multiplicar(5)

Devuelve el resultado siguiente:
1x5 = 5
2x5 = 10
etc

- Funcion como parametro 'numero'
- Vatiable con texto encabezado
- Bucle del 1 al 10
- Concatenar a la variable string con multiplicacion y su resultado

- tener una variable que contenga la tabla y concatenarle todas las multiplicaciones

*/

const Multiplicar = (num) => {
    let resultado = `# Tabla del: ${num} #`;

    for (let i = 1; i <= 10; i++) { // Inicio en 1 xq 0 es 0 - igualado a 10 porque es el ultimo multiplo - Sumo 1 a i para que multipliqe x el numero siguiente
        let multiplicacion = (i * num);

        resultado += `${i} x ${num} = ${multiplicacion} \n`
    }

    return resultado;
}

console.log(Multiplicar(8));