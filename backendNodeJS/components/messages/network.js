const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controler');

router.get('/', (req, res) => {
      console.log(req.headers);
      res.header({
            "custom-herder": "valor personalizado"
      });
      // res.send('Hola desde get');
      response.success(req, res, 'Lista de mensajes');
});

router.post('/', (req, res) => {
      controller.addMessages(req.body.user, req.body.message)
            .then((fullMessage) => {
                  response.success(req, res, fullMessage, 201);
            })
            .catch(e => {
                  response.error(req, res, 'Informacion invalida',400,'error en el controlador');
            });
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