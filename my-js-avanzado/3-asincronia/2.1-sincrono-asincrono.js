/**
 * Bloque 1-Código sincrono
 * Código sincrono: Una linea se jecuta inmediatamente despues de la otra
 * no hay codigo dependiente o bloqueante.
 */

console.log('============== BLOQUE 1 ==============');
console.log('Primero'); 
console.log('Segundo');
console.log('Tercero');


/**
 * Bloque 2- Problema típico de asincronia
 */
 const validatingPayment= () => {
    setTimeout(() =>{
        console.log('2 Validar la tarjeta de credito/debito y mostrar un loader');
    },1000)
 }


console.log('1 Presionar el botón comprar');
validatingPayment();
console.log('3 Ver mensaje de gracias por su compra joven');