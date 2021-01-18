const express = require('express');
const app = express();

const server = require('http').Server(app);

const io = require('socket.io')(server);

app.use(express.static('public'));

io.on('connection',(socket)=>{
      console.log('Nuevo mensaje conectado');
      socket.emit('mensaje','Bienvenio');
})

setInterval(()=>{
      io.emit('mensaje','escribo a todos');
},3000);

server.listen(8080, () => {
      console.log('servidor inicializado en 8080');
})