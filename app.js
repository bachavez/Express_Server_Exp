const express = require('express');
const fs = require('fs');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response)=> {
response.sendFile(__dirname + '/public/index.html');


app.get('/time', function(request,response){
    const now = new Date();
    resonse.send(now.toString());
});

app.get('/randomnumber', function(request, response){
    response.send(Math.random().toString());

});

app.get('/topspots', function(request, response){
    fs.readFile('./topspots.json', 'utf-8', function(err, data){
        response.send(data);
    });

});


app.listen(port, ()=>{
console.log('Server is running on port ' + port);
});

