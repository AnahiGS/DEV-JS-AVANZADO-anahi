const http = require('http');
const url = require('url');
const fs = require('fs'); //nos deja leer archivos y el estatus del archivo

const server = http.createServer((request, response) =>{
    const urlObject = url.parse(request.url);
    const path= urlObject.path;
    let fileSystemPath='';

    if(path==='/'){ //si es localhost:8000/, entonces es vacio, si hay algo despu+es del / hay algo
        fileSystemPath= 'static/index.html';
    }else{
        fileSystemPath=`static${path}`;
    }


    fs.stat(fileSystemPath, error =>{ //si solo es un parametro se le puede quitar el ()
        if(!error){
            fs.readFile(fileSystemPath, (error, file) =>{
                if(!error){
                    const status=200; //nos dice que todo está bien
                    const mimeType=  { 'Content-type' : 'text/html'}
                    response.writeHead(status, mimeType);
                    response.write(file);
                    response.end();
                }else{
                    // 500 Internal server error}
                    const status=500; 
                    const mimeType=  { 'Content-type' : 'text/plain'}
                    response.writeHead(status, mimeType);
                    response.write('Error en el servidor');
                    response.end();
                }
            })
        }else{
            const status=404; 
                    const mimeType=  { 'Content-type' : 'text/html'}
                    response.writeHead(status, mimeType);
                    response.write('<html><body>Not found </body></html>');
                    response.end();
        }
    });
});

server.listen(8000);
console.log('servidor de paginas...');