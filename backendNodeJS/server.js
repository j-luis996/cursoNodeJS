const express = require('express');
const port = 8080;
let app = express();

app.use('/', function (req,res){
      res.send('Hola');
});

app.listen(port)
console.log('la aplicacion esta escuchando en el puerto: '+ port)