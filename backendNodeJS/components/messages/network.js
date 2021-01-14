const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controler');

router.get('/', (req, res) => {
      controller.list()
      .then((messageList) => {
            response.success(req, res, messageList, 200);
      })
      .catch(e => {
            response.error(req,res, 'Unexpected Error', 500, e);
      })
});

router.post('/', (req, res) => {
      controller.add(req.body.user, req.body.message)
            .then((fullMessage) => {
                  response.success(req, res, fullMessage, 201);
            })
            .catch(e => {
                  response.error(req, res, 'Informacion invalida',400,e);
            });      
});

module.exports = router;