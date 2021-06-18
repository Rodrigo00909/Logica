/* 
Dibujar un cuadrado hueco con asteriscos

****
*  *
*  *
****

Como hacerlo?
- Función para crear el lado de arriba y abajo del cuadrado
- Función que haga los lados y el hueco del cuadrado - funcion principal
- Bucle de 0 al tamaño del lado menos 2 para equilibrar con el lado de arriba y abajo - menos 2 xq la idea es restarle 2 al numero total de elementos a pintar xq ya tengo 1 arriba y otro abajo
- Bucle para pintar los espacios, menos 2 para equilibrar con el asterisco de izq. y derc. - este bucle iria dentro del otro
- Ir concatenando en una variable cada linea del cuadrado
- Mostrar el cuadrado en la funcion principal
*/

const lado = (numero) => {
    let lado = "";

    // for que rellenara la variable, concatenara asteriscos
    for(let i = 0; i < numero; i++ ) {
        lado += "*";
    }

    return lado;
}

// funcion que cree el cuadrado en si, su contenido
const cuadrado = (numero) => {

    let dibujo = lado(numero) + "\n";

    
    let contenido = "";// para q limpie por cada iteracion
    //bucle de 0 hasta el num de elementos para pintar cada linea
    for(let i=0; i < (numero - 2); i++) {
        contenido = "*"; 

        for(let x=0; x < (numero-2); x++) {
            contenido += " "; // tengo espacios hasta rellenar el hueco
        }

        contenido += "*";

        dibujo += contenido + "\n";
    }

    dibujo += lado(numero);

    return dibujo;
}


console.log(cuadrado(4));