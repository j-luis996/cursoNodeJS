const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const port = 8080;

let app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

router.get('/message', function (req,res){
      console.log(req.headers);
      res.header({
            "custom-herder": "valor personalizado"
      });
      res.send('Hola desde get');
});

router.post('/message', function (req,res){
      res.send('Hola desde post');
});

router.delete('/message', function (req,res){
      console.log(req.query);
      console.log(req.body);
      res.send('mensaje '+ req.body.text+' correctamente...');

});

//app.use('/', function (req,res){
//       res.send('Hola');
// });

app.listen(port)
console.log('la aplicacion esta escuchando en el puerto: '+ port)