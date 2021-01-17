const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.post('/', (req,res) => {
      controller.add(req.body.users)
            .then(data => {
                  response.success(req, res, data, 201);
            })
            .catch(err => response.error(req, res, 'Internal error', 500, err));
});

router.get('/:userId', (req, res) => {
      controller.list(req.params.userId)
      .then((users) => {
            response.success(req, res, users, 200);
      })
      .catch(e => {
            response.error(req,res, 'Unexpected Error', 500, e);
      })
});

module.exports = router;