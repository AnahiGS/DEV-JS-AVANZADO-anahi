const os = require('os');

console.log('version del sistema detallada:', os.version());
console.log('Nombre de la versión del sistema: ', os.platform());
console.log('Numero de la versión del sistema:' + os.release());
// module: Referencia al módulo actual.
// exports: Para exportar modulos (archivos).
// require(): Importa un archivo js como modulo. require('index.js');

console.log('arquitectura: ',os.arch()); //muestra la arquitectura que tiene nuestro sistema (el número de bytes)
console.log('da información acerca de los cpus: ', os.cpus());
console.log('Número de procesadores lógicos:' + os.cpus().length);
console.log('memoria libre en bytes', os.freemem()); 
console.log('carpeta del usuario actual: ', os.homedir()); 
console.log('mi direccion ip o mi hostname (local): ', os.hostname()); 

