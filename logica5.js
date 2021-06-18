/* 
¿Cuánto es el X por ciento de X numero?

Ejemplos:
tantoPorCiento(20, 100) // El 20 porciento de 100 es: 20
tantoPorCiento(43, 897) // 385.71

Como hacerlo?
- Funcion con parametros porcentaje y numero
- Crear una variable para la operación del porcentaje
- Devolver string que responda a la pregunta del enunciado
*/

const porcentaje = (porcentaje, numero) => {
    let op = (numero * (porcentaje/100));
    let resultado = `El ${porcentaje}% de ${numero} es ${op}`;
    return resultado;
}

console.log(porcentaje(20, 100));