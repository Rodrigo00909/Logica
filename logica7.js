/*
Dados dos numeros devolver cuantos IMPARES hay entre ellos

Ejemplo:
impares(1, 100) // Cuantos impares del 1 al 100? 49

Como hacerlo?
- Funcion que reciba dos parametros (los dos numeros)
- Bucle del numero 1 al numero 2
- Condición, si el resto es distinto de 0, es impar
- Aumentar en 1 el contador
- Devolver contador
*/

const esImpar = (numero1,numero2) => {

    let contador=0;

    while(numero1 < numero2) {

        if(numero1 % 2 !== 0){
            contador++;
        }

        numero1++;
    }

    return contador;
}

console.log(`Total de números impares: ${esImpar(1,100)}`);

const esPar = (numero1, numero2) => {

    let contador = 0;
    
    while(numero1 < numero2){
        
        if(numero1 % 2 === 0) {
            contador++;
        }
        
        numero1++;
    }

    return contador;
}

console.log(`Total de números pares: ${esPar(1,100)}`);
