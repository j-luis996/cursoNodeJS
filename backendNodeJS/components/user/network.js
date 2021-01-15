const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

/**para usar la funcion user:
 * http://<IP>/message?user=<ususario_desedo>
 * nos permite filtrar
 * http://<IP>/message
 * lista todos los mensajes
 */
router.get('/', (req, res) => {
      const filterUser = req.query.user || null;
      controller.list(filterUser)
      .then((userList) => {
            response.success(req, res, userList, 200);
      })
      .catch(e => {
            response.error(req,res, 'Unexpected Error', 500, e);
      })
});

router.post('/', (req,res) => {
      controller.add(req.body.name)
            .then(user => {
                  response.success(req, res, user, 201);
            })
            .catch(err => response.error(req, res, 'Internal error', 500, err));
});

module.exports = router;