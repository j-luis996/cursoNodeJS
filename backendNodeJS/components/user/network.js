const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.post('/', (req,res) => {
      controller.add(req.body.name)
            .then(user => {
                  response.success(req, res, user, 201);
            })
            .catch(err => response.error(req, res, 'Internal error', 500, err));
});

module.exports = router;