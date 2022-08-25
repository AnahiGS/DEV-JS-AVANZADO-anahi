var unirest = require('unirest')

var response = unirest('GET','https://rickandmortyapi.com/api/character')
    .end(function(response){
        if(response.error) throw new Error(response.error);
        //console.log(response.raw_body) //se pone así también para decir "de otra forma se hará esto"
        console.log(response.body) //así nos lo envía en forma de json
    });