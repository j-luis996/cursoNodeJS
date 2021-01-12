const express = require('express');
const router = express.Router();
const port = 8080;
let app = express();

app.use(router);
router.get('/message', function (req,res){
      res.send('Hola desde get')
});
router.post('/message', function (req,res){
      res.send('Hola desde post')
});
router.delete('/message', function (req,res){
      res.send('Hola desde delete')
});
// app.use('/', function (req,res){
//       res.send('Hola');
// });

app.listen(port)
console.log('la aplicacion esta escuchando en el puerto: '+ port)