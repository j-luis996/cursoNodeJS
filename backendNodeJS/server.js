const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const response = require('./network/response');

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
      // res.send('Hola desde get');
      response.success(req,res,'Lista de mensajes');
});

router.post('/message', function (req,res){
      console.log(req.query);
      if(req.query.error == 'ok'){
            response.error(req,res,'error simulado',401);
      }else{
            response.success(req,res,'lista de mensajes',201);
      }
      // res.status(201).send({error: "",body: 'Creado correctamente'});
      
});

// router.delete('/message', function (req,res){//esto sera mas de post pero equisde
//       console.log(req.query);
//       console.log(req.body);
//       res.send('mensaje '+ req.body.text+' correctamente...');
//       res.status(201).send({error: "",body: 'Creado correctamente'});
// });

app.use('/', function (req,res){
      res.send('Hola');
});

app.listen(port)
console.log('la aplicacion esta escuchando en el puerto: '+ port)