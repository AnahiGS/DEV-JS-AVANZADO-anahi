const fs = require('fs');

const path= './';
// Para regresar encarpetas: ../
// Hacer un archivo ahí mismo en la carpeta actual: ./
const nameFile='my-file.txt';
const contentForFile='Esto lo escribí desde node';

//path absoluto: D:\programacion\Devf_modulo4\devf-js-avanzado-anahi\my-js-avanzado\1-node\1.2-crear-archivo 
//path relativo:  devf-js-avanzado-anahi\my-js-avanzado\1-node\1.2-crear-archivo  

const filePath=path + '/' + nameFile;
//o se puede poner así: const filePath=`${path}/${nameFile}`;

fs.writeFile(filePath, contentForFile, (err) =>{
    if(err){
        throw err;
    }else{
        console.log('archivo creado con éxito...!!');
    }
});