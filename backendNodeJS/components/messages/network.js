const express = require('express');
const router = express.Router();
const response = require('../../network/response');

router.get('/', function (req,res){
      console.log(req.headers);
      res.header({
            "custom-herder": "valor personalizado"
      });
      // res.send('Hola desde get');
      response.success(req,res,'Lista de mensajes');
});

router.post('/', function (req,res){
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

// app.use('/', function (req,res){
//       res.send('Hola');
// });

module.exports = router;