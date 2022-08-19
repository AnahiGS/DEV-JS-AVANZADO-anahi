/**
 * Bloque 3- Solución 1 Uso de callbacks
 * Un callback es una función que se pasa como parametro a otro
 * con el fin de ejecutar en el momento que la necesitemos.
 * NOTA: no es una buena practica por el anidamiento que produce (callback hell)
 */



 const validatingPaymentPromise = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log('2 Validar la tarjeta de credito/debito y mostrar un loader');
            resolve('todo gucci!');
        }, 0);
    });
};

console.log('1 Presionar el boton comprar');
validatingPaymentPromise()
    .then(response =>{
        console.log ('3 Ver el mensaje de gracias por su compra joven', response);
    }).then(() => console.log ('4 Entregaremos en N fecha'))
    .catch (error => console.log ('error:', error))