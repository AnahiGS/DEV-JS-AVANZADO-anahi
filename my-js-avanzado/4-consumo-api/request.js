var request = require('request');

var options = {
    method :'get',
    url: 'https://rickandmortyapi.com/api/location',
    headers: {},
}

request(options, function(error, response){
    if(error) throw new Error(error);
    console.log(response.body)
})