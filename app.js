let n1 = 7;
let n2 = 3;

/**
 * Restar(num1, num2) toma dos números como argumentos y devuelve el resultado de restar el segundo
 * numero desde el primero
 * @param num1 - El primer número a restar
 * @param num2 - número
 * @returns El resultado de la operación
 */

function restar(num1, num2) {
    let resultado = num1 - num2;
    console.log(`El resultado de la resta es ${resultado}`);
    return resultado;
}

/**
 * Sumar (num1, num2) toma dos números como argumentos y devuelve el resultado de sumar el segundo
 * numero desde el primero
 * @param num1 - El primer número a restar
 * @param num2 - número
 * @returns El resultado de la operación
 */
function sumar(num1, num2) {
    let resultado = num1 + num2;
    console.log(`El resultado de la suma es ${resultado}`);
    return resultado;
}

restar (n1, n2);
sumar (n1, n2);